use async_graphql::Object;
use mongodb::bson::{oid::ObjectId, DateTime, serde_helpers::{deserialize_hex_string_from_object_id, serialize_hex_string_as_object_id}};
use serde::{Deserialize, Serialize};

use crate::types::org::CreateOrg;


#[derive(Debug, Serialize, Deserialize,Default)]
pub struct Organization {
    #[serde(
        deserialize_with = "deserialize_hex_string_from_object_id",
        serialize_with = "serialize_hex_string_as_object_id",
        rename(deserialize = "_id", serialize = "_id")
    )]
   pub id: String,
   pub org_name: String,
   #[serde(
    deserialize_with = "deserialize_hex_string_from_object_id",
    serialize_with = "serialize_hex_string_as_object_id",
    rename(deserialize = "owner_id", serialize = "owner_id")
    )]
   pub owner_id: String,
   pub logo: Option<String>,
   pub created_at: Option<DateTime>,
}


impl  Organization {    
    pub fn new() -> Self {
       Organization::default()        
    }

    pub fn create_org(input:CreateOrg) -> Organization{
        Organization { 
                id:  ObjectId::new().to_hex(),
                org_name: input.org_name,
                owner_id: ObjectId::new().to_hex(),
                logo: match input.logo {
                    Some(logo) => Some(logo),
                    None => None
                },
                created_at: Some(DateTime::now())        

            }
    }
}


#[Object]
impl Organization {
    pub async fn id(&self) ->&str{
        &self.id
    }
    pub async fn org_name(&self) ->&str{
        &self.org_name
    }
    pub async fn owner_id(&self) -> &str{
        &self.owner_id
    }
    pub async fn logo(&self) -> Option<String>{
        self.logo.clone()
    }

    pub async fn created_at(&self)->Option<String> {
        match self.created_at {
            Some(date) => Some(date.to_string()),
            None => None
        }
      }
}