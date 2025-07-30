import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import {
  GeneralQuiz,
  HtmlQuiz,
  MetalQuiz,
  QuestionModel,
} from '../data/QuizQuestions';
import Question from '../components/Question';

const Quiz = ({ navigation }) => {
  const [questLoaded, setQuestLoaded] = useState(false);
  const [totalScore, setTotalScore] = useState(100);
  const [completedQuiz, setCompletedQuiz] = useState(false);
  const [questList, setQuestList] = useState([]);
  const [numberOfQuestions, setNumberOfQuestionhs] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [questionAnswered, setQuestionAnswered] = useState(1);
  const [questionWorth, setQuestionWorth] = useState(0);
  const [selectedQuiz, setSelectedQuiz] = useState('');

  const setupQuiz = async () => {
    let quizData = new Promise(resolve => {
      const quizzes = [GeneralQuiz, HtmlQuiz, MetalQuiz];
      let selected = quizzes[Math.floor(Math.random() * quizzes.length)];
      let choice = selected;
      resolve(choice);
    });

    let chosenQuiz: any = await quizData;
    let quizTitle = await chosenQuiz.title[0];
    let quizContent = await chosenQuiz.questions;
    let questionCount = await quizContent.length;
    setSelectedQuiz(quizTitle);
    setQuestList(quizContent);
    setQuestionWorth(Math.floor(100 / questionCount));
    setNumberOfQuestionhs(questionCount);
    setQuestLoaded(true);
  };

  useEffect(() => {
    setupQuiz();
  }, []);

  const updateScore = (penality: number) => {
    let tempScore = totalScore;
    let missed = incorrect;
    let questionsTotal = numberOfQuestions;
    let questionsDone = questionAnswered;
    setTotalScore(tempScore - penality);
    setIncorrect(penality ? missed + 1 : missed);
    setQuestionAnswered(questionsDone + 1);
    if (questionAnswered === questionsTotal) {
      setCompletedQuiz(true);
    }
  };

  const finishQuiz = () => {
    console.log(totalScore);
    navigation.navigate('QuizFinish', {
      score: totalScore,
      missed: incorrect,
      questions: numberOfQuestions,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.selectedQuiz}>{selectedQuiz}</Text>
      {questLoaded && (
        <FlatList
          keyExtractor={(item: QuestionModel) => item.key.toString()}
          data={questList}
          renderItem={({ item }) => (
            <Question
              question={item.question}
              questionModel={item}
              answer1={item.answers[0].content}
              answer2={item.answers[1].content}
              answer3={item.answers[2].content}
              answer4={item.answers[3].content}
              correctAnswer={item.correctAnswer}
              scoreUpdate={updateScore}
              worth={questionWorth}
            />
          )}
        />
      )}
      {completedQuiz && (
        <TouchableHighlight onPress={finishQuiz} style={styles.enabled}>
          <Text>Touch to finish</Text>
        </TouchableHighlight>
      )}

      {!completedQuiz && (
        <TouchableHighlight style={styles.disabled}>
          <Text>Answer all the questions</Text>
        </TouchableHighlight>
      )}
      {!questLoaded && <Text>LOADING</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'white',
    paddingTop: 30,
  },
  disabled: {
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    backgroundColor: '#d3d3d3',
    height: '10%',
  },
  enabled: {
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    backgroundColor: '#90ee90',
    height: '10%',
  },
  selectedQuiz: {
    color: 'white',
  },
});
export default Quiz;
