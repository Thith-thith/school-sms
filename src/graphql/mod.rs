pub mod query;
pub mod mutation;


use async_graphql::{EmptySubscription, Schema};
use mutation::MutationRoot;
use query::QueryRoot;


pub type SchemaType = Schema<QueryRoot, MutationRoot, EmptySubscription>;
