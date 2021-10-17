import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import RecentPaste from './components/RecentPaste';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Pasta Bin
      </Text>
      <Text style={styles.subtitle}>Recent pastes: </Text>
      <View style={styles.recentpastes}>
        <RecentPaste pasteId={"0fdFjfds"} pastePreview={`         fjdklafjdkslajfd
lskajfkldsjafklsdjafkljdsaklfjsdk
        la`}/>
        <RecentPaste pasteId={"0fdFjfds"} pastePreview={"fjdklafjdkslajfdlskajfkldsjafklsdjafkljdsaklfjsdkla"}/>
        <RecentPaste pasteId={"0fdFjfds"} pastePreview={"fjdklafjdkslajfdlskajfkldsjafklsdjafkljdsaklfjsdkla"}/>
        <RecentPaste pasteId={"0fdFjfds"} pastePreview={"fjdklafjdkslajfdlskajfkldsjafklsdjafkljdsaklfjsdkla"}/>
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
    position: "absolute",
    top: 80,
    left: 20,
    fontSize: 50,
    color: "white"
  },
  subtitle: {
    fontSize: 25,
    color: "#fff",
    position: "absolute",
    top: 180,
    left: 20
  },
  recentpastes: {
    position: "absolute",
    top: 220,
    flex: 1,
    flexDirection: "column"

  }
});
