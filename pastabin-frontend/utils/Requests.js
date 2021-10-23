export async function ping() {
    return await fetch(
        "http://192.168.0.14:8000/test/ping"
    )
}

export async function paste(pasteData){
    return await fetch(
        "http://192.168.0.14:8000/api/paste",
        {
            method: "POST",
            headers: {
                "data": pasteData
            }
        })

}

export async function getPaste(pasteId) {
    return await fetch(
        `http://192.168.0.14:8000/api/get_paste/5Le38tszQJG`
    ).await;
}


export async function getRecents() {
    return await fetch(
        "http://192.168.0.14:8000/api/get_recents"
    ).split("\n");

}