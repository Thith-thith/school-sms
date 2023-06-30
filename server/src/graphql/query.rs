use async_graphql::{ Object, Context, FieldResult };
use futures_util::TryStreamExt;
use mongodb::bson::{doc, oid::ObjectId};

use crate::{ models::users::User, schema::AppContext};


pub struct QueryRoot;


#[Object]
impl QueryRoot {

    async fn all_users(&self, ctx: &Context<'_>) -> FieldResult<Vec<User>> {        
        let db = ctx.data_opt::<AppContext>().to_owned().unwrap();
        let collection = db.db.collection::<User>("users");
        let mut users = collection.find(None, None).await?;
        let mut users_vec = Vec::new();
        
        while let Some(user) = users.try_next().await? {
            users_vec.push(user)
        }

        Ok(users_vec)
    }

    async fn user_by_id (&self, ctx: &Context<'_>, id: String) -> FieldResult<User>  {
        let db = ctx.data_opt::<AppContext>().to_owned().unwrap();
        let collection = db.db.collection::<User>("users");

        // converte id string to object id as mongodb
        let obj_id = ObjectId::parse_str(&id).unwrap();

        let user_founded = collection.find_one(doc! {"_id": obj_id}, None).await?;

        if let Some(user_founded) = user_founded {
            Ok(user_founded.clone())
        } else {
            Err("No such a user".into())
        }

    }
}
