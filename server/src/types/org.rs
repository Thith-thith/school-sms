use async_graphql::InputObject;
use serde::{Deserialize, Serialize};

#[derive(InputObject,Deserialize,Serialize)]
pub struct CreateOrg {
    pub org_name: String,
    #[serde(skip_serializing_if = "Option::is_none")]    
    pub logo: Option<String>,

}