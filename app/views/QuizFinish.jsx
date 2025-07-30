import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

const QuizFinish = ({ route, navigation }) => {
  const { score, missed, questions } = route.params;

  const exitQuiz = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.colorWhite}>Your quiz score was {score}</Text>
      <Text style={styles.colorWhite}>
        You missed on {missed} out of {questions}
      </Text>
      <TouchableHighlight onPress={exitQuiz} style={styles.button}>
        <Text style={styles.colorWhite}>Finish Quiz</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '10%',
    color: 'white',
  },
  colorWhite: {
    color: 'white',
  },
});

export default QuizFinish;
