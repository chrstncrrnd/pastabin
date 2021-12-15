import React from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity, Image} from 'react-native';
import RecentsGenerator from "./components/RecentsGenerator";


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Pasta Bin
      </Text>

      <Text style={styles.subtitle}>Recent pastes: </Text>

      <TouchableOpacity>
        <Text style={styles.refresh} onPress={console.log("hello")}>
          Refresh
        </Text>
      </TouchableOpacity>

      <View style={styles.recentpastes}>
        <ScrollView>
          <RecentsGenerator />
        </ScrollView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C3D55',
  },
  title: {
    top: 80,
    left: 20,
    fontSize: 50,
    color: "white",
    fontWeight: "bold"
  },
  subtitle: {
    fontSize: 25,
    color: "#fff",
    top: 100,
    left: 20
  },
  recentpastes: {
    top: 120,
    marginBottom: 200
  },
  plus: {
    bottom: 100,
    left: 100,
    fontSize: 100,
    backgroundColor: "white",
    padding: 0
  },
  refresh: {
    position: "absolute",
    top: 75,
    left: 320,
    padding: "0%",
    margin: "0%",
    fontWeight: "300",
    fontSize: 20,
    color: "white",
  }
});

