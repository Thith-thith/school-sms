use async_graphql::Object;
use mongodb::{bson::{oid::ObjectId, serde_helpers::{deserialize_hex_string_from_object_id, serialize_hex_string_as_object_id}, DateTime, doc}};
use serde::{Deserialize, Serialize};
use bcrypt::{hash,DEFAULT_COST};



use crate::types::user::{Signup};


#[derive(Debug, Serialize, Deserialize,Clone, Default)]
pub struct User {
   #[serde(
      deserialize_with = "deserialize_hex_string_from_object_id",
      serialize_with = "serialize_hex_string_as_object_id",
      rename(deserialize = "_id", serialize = "_id")
  )]
   pub id: String,
   pub email: String,
   pub username: String,
   pub password: String,
   pub created_at: Option<DateTime>,
}


#[derive(Debug, Serialize, Deserialize, Clone, Default)]

pub struct UserLogin {
   pub email: String,
   pub password: String,
}


impl UserLogin {
   pub fn new() -> Self {
      UserLogin::default()
  }

  pub fn login(input:UserLogin) -> UserLogin{
      UserLogin { 
         email: input.email,
         password: input.password
      }
  }
}


impl User {
   pub fn new() -> Self {
       User::default()
   }

   pub fn register(input: Signup) -> User {
      User{
         id : ObjectId::new().to_hex(),
         email: input.email,
         username : input.username,
         password : hash(input.password.to_owned().to_string(), DEFAULT_COST).unwrap(),
         created_at: Some(DateTime::now())
      }
   }
   
}

#[Object]
impl User {
    pub async fn id(&self) -> &str {
      &self.id
    }   
    pub async fn email(&self) ->&str{
      &self.email
    }
    pub async fn username(&self) ->&str {
      &self.username
    }
    pub async fn created_at(&self)->Option<String> {
      match self.created_at {
          Some(date) => Some(date.to_string()),
          None => None
      }
    }
}


