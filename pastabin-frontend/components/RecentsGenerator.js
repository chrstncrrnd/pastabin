import React, {useEffect, useState} from "react";
import {ActivityIndicator, Text, View} from "react-native"
import RecentPasteElement from "./RecentPasteElement";

const RecentsGenerator = (props) => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([""])

    const getPaste = async () =>{
        try{
            const response: String = await fetch("http://192.168.0.15:8000/api/recents")
            const json = await response.json().recents
            var recentsArr = []
            for (let i in json) {
                recentsArr.push(<RecentPasteElement pasteId={i} pastePreview={"hii"}/>)
            }
            setData(recentsArr)
        }catch (error){
            console.log(error)
        }finally {
            setLoading(false)
        }
    }

    useEffect(() =>{
        getPaste()
    }, []);

    return (
        <View>
            {loading ? <ActivityIndicator/> : <View>{data}</View>}
        </View>

    )
}

export default RecentsGenerator;