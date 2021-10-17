//! # Generates a random paste id that is _probably_ unique
//! cannot guarantee that it is actually unique because yeh
//! but it takes a base 62 string with a length of 11 so yeah there is a lot of possibilities.
use rand::Rng;

/// # paste id struct
pub struct PasteId(pub String);

/// string with a lot of random characters
const BASE62: &[u8] = b"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
/// the paste length you can change this if you start to run out of them. it will be a really long time until then
const PASTE_LENGTH: usize = 11;

/// # impl for the paste id struct
impl PasteId{
    /// # create a new paste id
    /// you can also create one without the random but not really that great
    pub fn new() -> PasteId{
        // id created with capacity of the lenght
        let mut id = String::with_capacity(PASTE_LENGTH);
        //random thing
        let mut rng = rand::thread_rng();

        //for loop that pushes a random char to the id string
        for _ in 0..PASTE_LENGTH{
            id.push(BASE62[rng.gen::<usize>() % 62] as char);
        }
        // return a new random paste id
        PasteId(id)

    }
    pub fn get_id_as_string(&self) -> String{
        self.0.clone()
    }
}
