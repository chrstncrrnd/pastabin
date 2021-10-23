import React from "react";
import {View} from "react-native"
import {ScrollView} from "react-native";
import {getRecents} from "../utils/Requests";

const RecentsGenerator = (props) => {
    let recents = []

    let recentPastes = getRecents();

    recents = recentPastes

    return (
        <View>
            <ScrollView>
                {recents}
            </ScrollView>
        </View>
    )
}

export default RecentsGenerator;