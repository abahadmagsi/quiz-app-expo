import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Appbar({width}) {
  return (
    <View
      style={{
        width: `${width}%`,
        backgroundColor: "grey",
        height: 10,
        paddingTop: 30,
      }}
    ></View>
  );
}

const styles = StyleSheet.create({
  container: {
   
  },
});
