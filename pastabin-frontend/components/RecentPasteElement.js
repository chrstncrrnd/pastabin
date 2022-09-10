import React, {useEffect, useState} from "react";
import {View, Text, StyleSheet, TouchableOpacity, ActivityIndicator} from "react-native"


const RecentPasteElement = (props) => {
    const [loading, setLoading] = useState(true);
    const [preview, setPreview] = useState("");
    const [open, setOpen] = useState(false)

    const loadPreview = async () =>{
        try{
            const url = "http://192.168.0.17:8000/api/get_paste/" + props.pasteId
            const response = await fetch(url, {method: "GET"})
            let text = await response.text()
            setPreview(text)
        }catch (error) {
            console.log(error)
        }finally {
            setLoading(false)
        }

    }

    const toggleOpen = () => {
        setOpen(open => !open)
    }

    useEffect(
        () => {
            loadPreview()
        }, []
    )

    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={toggleOpen}>
                <Text style={styles.pasteId}>{props.pasteId}</Text>
            </TouchableOpacity>

            <View>
                {
                    loading ? <ActivityIndicator /> : <Text style={styles.preview}>{open ? preview : (preview.length > 203 ? preview.slice(0, 200) + "..." : preview)}</Text>
                }
            </View>
        </View>

    )
}



const styles = StyleSheet.create({
    container: {
        paddingLeft: 30,
        paddingRight: 30,
        padding: 5,
        backgroundColor: "#3E485E",
        borderRadius: 10,
        margin: 5,
    },
    pasteId: {
        fontSize: 20,
        color: "white",
        
    },
    preview: {
        fontSize: 10,
        color: "#858786"
    }
})

export default RecentPasteElement;

