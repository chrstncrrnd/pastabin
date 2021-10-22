import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native"

const RecentPaste = (props) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity>
                <Text style={styles.pasteId}>{props.pasteId}</Text>
            </TouchableOpacity>

            <Text style = {styles.preview}>{props.pastePreview}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#5E5E5E",
        left: 20,
        padding: 20,
        borderRadius: 30,
        marginBottom: 10,
        flex: 1,
        flexDirection: "row",
        width: 360
    },
    pasteId: {
        fontSize: 20,
        color: "white",
        paddingRight: 24
    },
    preview: {
        fontSize: 10,
        color: "lightgrey"
    }
})


export default RecentPaste;
