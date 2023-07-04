
use async_graphql::{FieldResult,  Context, Object};
use mongodb::bson::{doc};
use bcrypt::{verify}; 
use crate::{types::{user::{Signup,Login}, org::CreateOrg},  models::{users::{User}, org::Organization}, schema::AppContext};
use jsonwebtoken::{decode, encode, DecodingKey, EncodingKey, Header, Validation};

pub struct MutationRoot;    


#[Object]
impl MutationRoot {
    async fn signup(&self, ctx: &Context<'_>, input_user: Signup) -> FieldResult<String> {
        let db = ctx.data_opt::<AppContext>().to_owned().unwrap();
        let collection = db.db.collection("users");

        let email = input_user.email.to_owned();
        let doc = User::register(input_user);
        
        // checking user before allow them to signup
        let user = collection.find_one(doc! {"email": email}, None).await?;
        if user.is_some(){
            return Err("User already exist.".into());
        }

        collection.insert_one(doc, None).await?;
        Ok("Register success!".to_string())

    }   

    async fn login(&self, ctx: &Context<'_>, user_login: Login) -> FieldResult<serde_json::Value> {
        let db = ctx.data_opt::<AppContext>().to_owned().unwrap();
        let collection = db.db.collection::<User>("users");
        let email = user_login.email.to_owned();
        let password = user_login.password.to_owned();
        let find_user = collection.find_one(doc! {"email": email}, None).await?;

       let user = match find_user {
        Some(user) => user,       
        None => {
            return Ok(serde_json::json!({   
             "status": "Failed",
             "message": "Invalid email or password"
            }));
        }
       };

       let is_valid = verify(password, &user.password)?;

       if !is_valid {
        return Ok(serde_json::json!({
            "status": "Failed",
            "message": "Invalid email or password"
        }))    
       };

       Ok(serde_json::json!({
        "status": "success",
        "message": "Successful"
       }))
       
    }

    async fn create_org(&self, ctx: &Context<'_>,org_input: CreateOrg) -> FieldResult<String>{
        let db = ctx.data_opt::<AppContext>().to_owned().unwrap();
        let collection = db.db.collection("organizations");

        let name = org_input.org_name.to_owned();
        
        if name.is_empty() {
            return Err("Name cannot be empty".into());
        }

        let doc = Organization::create_org(org_input);
        
        // checking user before allow them to signup
        let org = collection.find_one(doc! {"org_name": name}, None).await?;
        if org.is_some(){
            return Err("Organization already exist.".into());
        }

        collection.insert_one(doc, None).await?;
        Ok("School have been created!".to_string())

    }


  
}

