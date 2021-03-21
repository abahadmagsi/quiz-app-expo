import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Appbar from "./src/components/Appbar";
import QuestionComp from "./src/components/QuestionComp";
export default function App() {
  return (
    <>
      <View style={styles.ques}>
        <QuestionComp />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  ques: {
    textAlign: "center",
  },
});
