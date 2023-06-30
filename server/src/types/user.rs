use async_graphql::InputObject;
use serde::{Deserialize, Serialize};

#[derive(InputObject,Deserialize,Serialize)]
pub struct Signup {
    pub username: String,
    pub email: String,
    pub password: String,
}

#[derive(InputObject,Deserialize,Serialize)]
pub struct Login{
    pub email: String,
    pub password: String,
}