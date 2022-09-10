import React, {useEffect, useState} from "react";
import {ActivityIndicator, StyleSheet, ScrollView, View, Dimensions} from "react-native"
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
            <ScrollView>
            {
                loading ? <ActivityIndicator /> :
                data.map((data, key) => {
                    return <RecentPasteElement pasteId={data} pastePreview={"default"} key={key}/>
                })
            }
            </ScrollView>

        </View>
    )


}

export default RecentsGenerator;