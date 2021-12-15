import React, {useEffect, useState} from "react";
import {ActivityIndicator, View} from "react-native"
import RecentPasteElement from "./RecentPasteElement";

const RecentsGenerator = (props) => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    const getPaste = async () =>{
        try{
            const response = await fetch("http://192.168.0.17:8000/api/recents")
            const json = await response.json()
            let dataList = []
            json.recents.forEach(recent => {
                dataList.push(recent)
            })
            setData(dataList)
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
            {
                loading ? <ActivityIndicator /> :
                data.map((data, key) => {
                    return <RecentPasteElement pasteId={data} pastePreview={"hi"} key={key}/>
                })
            }
        </View>
    )
}

export default RecentsGenerator;