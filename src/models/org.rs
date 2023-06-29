use async_graphql::Object;
use serde::{Deserialize, Serialize};


#[derive(Debug, Serialize, Deserialize)]
pub struct Organization {
   pub id: String,
   pub name: String,
   pub owner_id: String,
   pub logo: Option<String>,
}


impl Default for Organization {
    fn default() -> Self {
        Organization{
           id:"".to_string(), 
           name:"".to_string(),
           owner_id:"".to_string(), 
           logo:None, 
        
        }
    }
}

impl  Organization {
    pub fn new() -> Self {
       Organization::default()        
    }
}


#[Object]
impl Organization {
    pub async fn id(&self) ->&str{
        &self.id
    }
    pub async fn name(&self) ->&str{
        &self.name
    }
    pub async fn owner_id(&self) -> &str{
        &self.owner_id
    }
    pub async fn logo(&self) -> Option<String>{
        self.logo.clone()
    }
}