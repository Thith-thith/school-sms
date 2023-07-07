use actix_web::{App, HttpServer,web::{self, Data,resource}, HttpResponse, guard,http};
use async_graphql::{
    http::{playground_source, GraphQLPlaygroundConfig},
   EmptySubscription, Schema,
};
use actix_cors::Cors;
use async_graphql_actix_web::{GraphQLRequest, GraphQLResponse};
use graphql::SchemaType;
use mongodb::{Client};
use dotenv::dotenv;

pub mod middleware;
pub mod models;
pub mod types;
pub mod graphql;

pub mod schema;
use schema::AppContext;


use crate::graphql::{query::QueryRoot, mutation::MutationRoot};


async fn index(
    schema: web::Data<SchemaType>,
    req: GraphQLRequest,
) -> GraphQLResponse {
   let request = req.into_inner();
   schema.execute(request).await.into()
}


async fn playground() -> HttpResponse {
    let html = playground_source(GraphQLPlaygroundConfig::new("/").subscription_endpoint("/"));
    HttpResponse::Ok()
        .content_type("text/html; charset=utf-8")
        .body(html) 
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {


    dotenv().ok();

    let client = Client::with_uri_str("mongodb://127.0.0.1:27017").await.expect("Failed to connect to MongoDB");
    let db = client.database("schools");
    println!("Connected to MongoDB successfully!");

    let schema = Schema::build(QueryRoot, MutationRoot, EmptySubscription)
    .data(AppContext { db: db.clone() })
    .finish();


    HttpServer::new(move || {
        let cors = Cors::default()
            .allowed_origin("http://localhost:3000")
            .allow_any_origin()
            .allowed_methods(vec!["GET", "POST"])
            .allowed_headers(vec![
                http::header::AUTHORIZATION,
                http::header::ACCEPT,
                http::header::ACCESS_CONTROL_ALLOW_ORIGIN,
            ])
            .allowed_header(http::header::CONTENT_TYPE)
            .supports_credentials()
            .max_age(3600);
        App::new()
            .app_data(Data::new(schema.clone()))
            .wrap(cors)
            // .wrap(Authorization)
            .service(resource("/").guard(guard::Post()).to(index))            
            .service(resource("/").guard(guard::Get()).to(playground))
    })
    .workers(2)
    .bind("127.0.0.1:8080")?
    .run()
    .await

}
