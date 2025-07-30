import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

const Question = (props: any) => {
  const [selected, setSelected] = useState(false);
  const [correct, setCorrect] = useState(false);

  const chooseAnswer = (ans: string) => {
    let worth = props.worth;
    console.log(props.correctAnswer)
    if (ans === props.correctAnswer) {
      setSelected(true);
      setCorrect(true);
      props.scoreUpdate(0);
    } else {
      setSelected(true);
      setCorrect(false);
      props.scoreUpdate(worth);
    }
  };

  return (
    <View style={styles.container}>
      {!selected && (
        <View style={(styles.container, styles.qContainer)}>
          <Text style={styles.questionText}>{props.question}</Text>
          <TouchableHighlight
            underlayColor="#d3d3d3"
            onPress={() => chooseAnswer('answer1')}
          >
            <Text style={styles.answerText}>{props.answer1}</Text>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor="#d3d3d3"
            onPress={() => chooseAnswer('answer2')}
          >
            <Text style={styles.answerText}>{props.answer2}</Text>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor="#d3d3d3"
            onPress={() => chooseAnswer('answer3')}
          >
            <Text style={styles.answerText}>{props.answer3}</Text>
          </TouchableHighlight>

          <TouchableHighlight
            underlayColor="#d3d3d3"
            onPress={() => chooseAnswer('answer4')}
          >
            <Text style={styles.answerText}>{props.answer4}</Text>
          </TouchableHighlight>
          {selected && correct && (
            <View style={styles.correctContainer}>
              <Text style={styles.questionText}>{props.question}</Text>
              <Text style={styles.answerText}>{props.answer1}</Text>
              <Text style={styles.answerText}>{props.answer2}</Text>
              <Text style={styles.answerText}>{props.answer3}</Text>
              <Text style={styles.answerText}>{props.answer4}</Text>
              <Text style={styles.answerText}>CORRECT</Text>
            </View>
          )}

          {selected && !correct && (
            <View style={styles.wrongContainer}>
              <Text style={styles.questionText}>{props.question}</Text>
              <Text style={styles.answerText}>{props.answer1}</Text>
              <Text style={styles.answerText}>{props.answer2}</Text>
              <Text style={styles.answerText}>{props.answer3}</Text>
              <Text style={styles.answerText}>{props.answer4}</Text>
              <Text style={styles.answerText}>INCORRECT</Text>
            </View>
          )}
        </View>
      )}
      {selected && correct && (
        <View style={(styles.correctContainer, styles.qContainer)}>
          <Text style={styles.questionText}>{props.question}</Text>
          <TouchableHighlight
            underlayColor="#d3d3d3"
            onPress={() => chooseAnswer('answer1')}
          >
            <Text style={styles.answerText}>{props.answer1}</Text>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor="#d3d3d3"
            onPress={() => chooseAnswer('answer3')}
          >
            <Text style={styles.answerText}>{props.answer2}</Text>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor="#d3d3d3"
            onPress={() => chooseAnswer('answer3')}
          >
            <Text style={styles.answerText}>{props.answer3}</Text>
          </TouchableHighlight>

          <TouchableHighlight
            underlayColor="#d3d3d3"
            onPress={() => chooseAnswer('answer4')}
          >
            <Text style={styles.answerText}>{props.answer4}</Text>
          </TouchableHighlight>
          {selected && correct && (
            <View style={styles.correctContainer}>
              <Text style={styles.questionText}>{props.question}</Text>
              <Text style={styles.answerText}>{props.answer1}</Text>
              <Text style={styles.answerText}>{props.answer2}</Text>
              <Text style={styles.answerText}>{props.answer3}</Text>
              <Text style={styles.answerText}>{props.answer4}</Text>
              <Text style={styles.answerText}>CORRECT</Text>
            </View>
          )}

          {selected && !correct && (
            <View style={styles.wrongContainer}>
              <Text style={styles.questionText}>{props.question}</Text>
              <Text style={styles.answerText}>{props.answer1}</Text>
              <Text style={styles.answerText}>{props.answer2}</Text>
              <Text style={styles.answerText}>{props.answer3}</Text>
              <Text style={styles.answerText}>{props.answer4}</Text>
              <Text style={styles.answerText}>INCORRECT</Text>
            </View>
          )}
        </View>
      )}
      {selected && !correct && (
        <View style={(styles.wrongContainer, styles.qContainer)}>
          <Text style={styles.questionText}>{props.question}</Text>
          <TouchableHighlight
            underlayColor="#d3d3d3"
            onPress={() => chooseAnswer('answer1')}
          >
            <Text style={styles.answerText}>{props.answer1}</Text>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor="#d3d3d3"
            onPress={() => chooseAnswer('answer3')}
          >
            <Text style={styles.answerText}>{props.answer2}</Text>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor="#d3d3d3"
            onPress={() => chooseAnswer('answer3')}
          >
            <Text style={styles.answerText}>{props.answer3}</Text>
          </TouchableHighlight>

          <TouchableHighlight
            underlayColor="#d3d3d3"
            onPress={() => chooseAnswer('answer4')}
          >
            <Text style={styles.answerText}>{props.answer4}</Text>
          </TouchableHighlight>
          {selected && correct && (
            <View style={styles.correctContainer}>
              <Text style={styles.questionText}>{props.question}</Text>
              <Text style={styles.answerText}>{props.answer1}</Text>
              <Text style={styles.answerText}>{props.answer2}</Text>
              <Text style={styles.answerText}>{props.answer3}</Text>
              <Text style={styles.answerText}>{props.answer4}</Text>
              <Text style={styles.answerText}>CORRECT</Text>
            </View>
          )}

          {selected && !correct && (
            <View style={styles.wrongContainer}>
              <Text style={styles.questionText}>{props.question}</Text>
              <Text style={styles.answerText}>{props.answer1}</Text>
              <Text style={styles.answerText}>{props.answer2}</Text>
              <Text style={styles.answerText}>{props.answer3}</Text>
              <Text style={styles.answerText}>{props.answer4}</Text>
              <Text style={styles.answerText}>INCORRECT</Text>
            </View>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
    marginHorizontal: 10,
    backgroundColor: '#181818ff',
    borderRadius: 20,
    color: 'white',
  },
  questionTitle: {
    color: 'white',
  },
  qContainer: {
    marginTop: 15,
    marginBottom: 20,
  },
  correctContainer: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#008000',
  },
  wrongContainer: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#ff0000',
  },
  questionText: {
    flex: 2,
    padding: 20,
    color: 'white',
  },
  answerText: {
    color: 'white',
    flex: 2,
    borderBottomWidth: 2,
    marginHorizontal: 20,
    borderTopWidth: 2,
    borderColor: 'gray',
    padding: 15,
    fontSize: 20,
    textAlign: 'center',
  },
});

export default Question;
