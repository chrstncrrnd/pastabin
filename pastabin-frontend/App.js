import React from 'react';
import {StyleSheet, Text, SafeAreaView, Dimensions, View, TextInput, KeyboardAvoidingView, Platform} from 'react-native';
import RecentsGenerator from "./components/RecentsGenerator";


export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.title}>Pasta Bin</Text>
    
      <Text style={styles.subtitle}>Recent pastes: </Text>

      <View style={styles.recentscontainer}>
        <RecentsGenerator />
      </View>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} >
        <View style={styles.newpastecontainer}>
          <TextInput style={styles.pasteinput} placeholder='New paste'></TextInput>
        </View>
      </KeyboardAvoidingView>
    
    </SafeAreaView>
    )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#30405F",
    flex: 1
  },
  title: {
    paddingTop: 30,
    fontSize: 40,
    color: "#fff",
    left: Dimensions.get("window").width / 30,
    fontWeight: "bold"
  },
  subtitle: {
    fontSize: 20,
    color: "#fff",
    left: Dimensions.get("window").width / 30
  },
  recentscontainer: {
    paddingTop: 10,
    paddingBottom: 120
  },
  newpastecontainer: {
    
  },
  pasteinput: {
    borderColor: "grey",
    backgroundColor: "white",
    width: 300,
    fontSize: 30,
    height: 50,
    borderRadius: 40,
    paddingHorizontal: 20,
    borderWidth: 3
  }

});

