import React, {useEffect, useState} from "react";
import {ActivityIndicator, Text, View} from "react-native"
import RecentPasteElement from "./RecentPasteElement";

const RecentsGenerator = (props) => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    const getPaste = async () =>{
        try{
            const response: String = await fetch("http://192.168.0.17:8000/api/recents")
            const json = await response.json()
            let dataList = []
            json.recents.forEach(recent => {
                dataList.push(recent + "\n")
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
            <Text>
                Recents:
            </Text>
            <View>
                {loading ? <ActivityIndicator/> :
                    <View>
                        {
                            data.forEach(d => <RecentPasteElement pasteId={d}/> )
                        }
                    </View>
                }
            </View>
        </View>
    )
}

export default RecentsGenerator;