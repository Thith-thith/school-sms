use crate::middleware::auth;
use actix_web::{
    dev::{self, Service, ServiceRequest, ServiceResponse, Transform},
    Error,
};
use futures_util::future::LocalBoxFuture;
use std::future::{ready, Ready};

pub struct Authorization;

impl<S, B> Transform<S, ServiceRequest> for Authorization
where
    S: Service<ServiceRequest, Response = ServiceResponse<B>, Error = Error>,
    S::Future: 'static,
    B: 'static,
{
    type Response = ServiceResponse<B>;
    type Error = Error;
    type InitError = ();
    type Transform = SayHiMiddleware<S>;
    type Future = Ready<Result<Self::Transform, Self::InitError>>;

    fn new_transform(&self, service: S) -> Self::Future {
        ready(Ok(SayHiMiddleware { service }))
    }
}

pub struct SayHiMiddleware<S> {
    service: S,
}

impl<S, B> Service<ServiceRequest> for SayHiMiddleware<S>
where
    S: Service<ServiceRequest, Response = ServiceResponse<B>, Error = Error>,
    S::Future: 'static,
    B: 'static,
{
    type Response = ServiceResponse<B>;
    type Error = Error;
    type Future = LocalBoxFuture<'static, Result<Self::Response, Self::Error>>;

    dev::forward_ready!(service);

    fn call(&self, req: ServiceRequest) -> Self::Future {

        let authorization = req.headers().get("Authorization");
        println!("Hi from start. You requested: {:?}", authorization);

        if authorization.is_none() {
            return Box::pin(async {
                Err(actix_web::error::ErrorUnauthorized(
                    "Unauthorized. Login required",
                ))
            });
        }



        let bearer_token = authorization.unwrap().to_str().unwrap().to_owned();
        if !bearer_token.contains("Bearer ") {
            return Box::pin(async {
                Err(actix_web::error::ErrorUnauthorized(
                    "Unauthorized. Token must be of Bearer type",
                ))
            });
        }

        let token = bearer_token.replace("Bearer ", "");
        let decoded = auth::verify_token(token);
        if decoded.is_none() {
            return Box::pin(async {
                Err(actix_web::error::ErrorUnauthorized(
                    "Unauthorized. Invalid JWT token",
                ))
            });
        }

        Box::pin(self.service.call(req))
    }
}