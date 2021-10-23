import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import RecentsGenerator from "./components/RecentsGenerator";


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Pasta Bin
      </Text>
      <Text style={styles.subtitle}>Recent pastes: </Text>
      <View style={styles.recentpastes}>
        <RecentsGenerator />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292929',
  },
  title: {
    top: 80,
    left: 20,
    fontSize: 50,
    color: "white"
  },
  subtitle: {
    fontSize: 25,
    color: "#fff",
    top: 120,
    left: 20
  },
  recentpastes: {
    top: 140,
    marginBottom: 250
  }
});
