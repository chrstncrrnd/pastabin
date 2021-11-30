#[macro_use] extern crate rocket;
#[macro_use] extern crate serde;

use rocket::Data;
use rocket::data::ToByteUnit;
use rocket::tokio::fs::File;

use paste_id_gen::PasteId;

mod paste_id_gen;

#[derive(Serialize)]
pub struct RecentsResult{recents: Vec<String>}

#[get("/ping")]
fn ping() -> String{
    String::from("{\"data\": \"Pong!\"}")
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

//get recents for that part in the app
//TODO: FIX THIS
#[get("/recents")]
async fn get_recents() -> String{
    //not safe nor efficient
    let mut results = RecentsResult{recents: Vec::new()};
    let paths = std::fs::read_dir("./pastes").unwrap();

    for entry in paths{
        let mut path = entry.unwrap().file_name().into_string().unwrap();
        //remove .txt ending
        path.truncate(11);
        //adds the path and new line to then be made into an
        //array in js
        results.recents.push(path)
    }

    serde_json::to_string(&results).unwrap()

}


#[rocket::main]
async fn main() {
    rocket::build()
        .mount("/test", routes![ping])
        .mount("/api", routes![paste, get_paste, get_recents])
        .launch()
        .await;
}