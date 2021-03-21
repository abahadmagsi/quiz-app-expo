import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Questions from "../../question.json";
import Appbar from './Appbar'
export default function QuestionComp() {
  const [id, setId] = useState(0);
  const [ques, setQues] = useState(Questions[id]);
  const [ans, setAns] = useState(ques.incorrect_answers);
  const [iscorrect, setCorrect] = useState(null);
  const [width,setWidth] = useState(5)
  useEffect(() => {}, [checkAns]);

  useEffect(() => {
    ans.push(ques.correct_answer);
  }, []);

  const checkAns = (i) => {
    console.log(i);
    if (i === ques.correct_answer) {
      setCorrect(true);
    } else {
      setCorrect(false);
    }
  };

const nextHandle = () => {
  setId(id+1)
  setQues(Questions[id])
  setAns(ques.incorrect_answers)
  setCorrect(null)
  setWidth(width+5)
}


  return (
    <>
    <Appbar width={width}/>
    <View style={styles.container}>
      <Text style={styles.quesHeading}>Question {id + 1} of 20</Text>
      <Text style={styles.scndHeading}>Entertainment: Board Games</Text>
      <Text style={styles.question}>
        {ques.question.replaceAll("%20", " ")}
      </Text>
      <View>
        {ans.map((val, ind) => {
          return (
            <TouchableOpacity
              style={styles.btn}
              onPress={(i) => checkAns(val)}
              key={ind}
              value={ques.correct_answer}
            >
              <Text>{val.replaceAll("%20", " ")}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {iscorrect === null ? null : iscorrect ? (
        <>
          <Text style={{ fontSize: 30 }}>Correct</Text>
          <TouchableOpacity style={styles.btn} onPress={nextHandle}>
            <Text>Next Question</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Text style={{ fontSize: 30 }}>Sorry!</Text>
          <TouchableOpacity style={styles.btn} onPress={nextHandle}>
            <Text>Next Question</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  quesHeading: {
    fontSize: 30,
    textAlign: "left",
  },
  scndHeading: {
    textAlign: "left",
  },
  question: {
    textAlign: "left",
    padding: 10,
    fontSize: 20,
    marginTop: 30,
  },
  btn: {
    flexDirection: "column",
    flexWrap: "wrap",
    borderWidth: 2,
    borderColor: "grey",
    backgroundColor: "lightgrey",
    padding: 10,
    textAlign: "center",
    margin: 10,
  },
});
