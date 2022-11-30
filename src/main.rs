use reqwest::header::HeaderMap;
use serde::Deserialize;
use serde_json::Value;
use std::collections::HashMap;
#[derive(Deserialize)]
pub struct Ip {
    access_token: String,
}
const APPID: &str = "wx71941f6106ae1072";
const APPSECRET: &str = "b4b2ad8a8d4a94e403831886ac10c646";
const TOUSER: &str = "oonWJ5slWuS2OrJdgCLM3GmNdxVk";
const TEMPLATE_ID: &str = "fzGx9ko6oYDEOsOu8to7Ya4PLmpF_17d4B9qeAiiLQ0";

async fn get_token() -> String {
    let ip = reqwest::get(
        "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=".to_string()
            + APPID
            + "&secret="
            + APPSECRET,
    )
    .await
    .unwrap()
    .json::<Ip>()
    .await
    .unwrap();
    ip.access_token
}

async fn send(token: &str) -> Result<HashMap<String, Value>, reqwest::Error> {
    // post 请求要创建client
    let client = reqwest::Client::new();

    // 组装header
    let mut headers = HeaderMap::new();
    headers.insert("Content-Type", "application/json".parse().unwrap());

    // 组装要提交的数据
    let mut data = HashMap::new();
    data.insert("touser", TOUSER);
    data.insert("template_id", TEMPLATE_ID);

    // 发起post请求并返回
    Ok(client
        .post(
            "https://api.weixin.qq.com/cgi-bin/message/template/send?access_token=".to_string()
                + token,
        )
        .headers(headers)
        .json(&data)
        .send()
        .await?
        .json::<HashMap<String, Value>>()
        .await?)
}

#[tokio::main]
async fn main() {
    let token = get_token().await;
    let t = &token[..];
    let res = send(t).await.unwrap();
    println!("{:?}", res)
}
