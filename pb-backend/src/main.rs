mod paste_id_gen;

#[macro_use] extern crate rocket;

use rocket::tokio::fs::File;
use rocket::Data;
use paste_id_gen::PasteId;
use rocket::data::ToByteUnit;

#[get("/ping")]
fn ping() -> String{
    String::from("Pong!")
}

#[post("/paste", data="<paste>")]
async fn paste(paste: Data<'_>) -> std::io::Result<String>{
    //create a new paste id
    let paste_id = PasteId::new();
    // create a new file path with the paste id
    let file_path = format!("pastes/{}.txt", paste_id.get_id_as_string());
    // open paste with file limit of 128 kb and pipe that into a new file with the
    // previous file path and await for it
    paste.open(128.kibibytes()).into_file(file_path).await?;

    Ok(paste_id.get_id_as_string())

}

#[get("/get_paste/<id>")]
async fn get_paste(id: &str) -> Option<File>{
    let file_path = format!("pastes/{}.txt", id);
    File::open(&file_path).await.ok()
}


#[rocket::main]
async fn main() {
    rocket::build()
        .mount("/test", routes![ping])
        .mount("/api", routes![paste, get_paste])
        .launch()
        .await;
}