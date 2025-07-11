import { StyleSheet, Text, ScrollView, Image } from 'react-native';

const aboutGlobo = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi quas nam modi, iusto rerum nisi et harum accusantium provident obcaecati deleniti ab, minus molestiae facilis eum commodi deserunt animi, consequatur quae omnis autem! Blanditiis assumenda, similique ea repellendus minima obcaecati?`;

const whatGlobo = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi inventore soluta sunt totam enim iusto laborum cum. Repellendus ipsum veritatis eos aspernatur nisi maxime beatae quam illo ducimus?`;

const AboutScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.pics}
        source={require('../assets/img/QueenImage.jpg')}
      />
      <Text style={styles.aboutTitle}>Who we are</Text>
      <Text style={styles.aboutText}>{aboutGlobo}</Text>
      <Image
        style={styles.pics}
        source={require('../assets/img/KurtImage.jpg')}
      />

      <Text style={styles.aboutTitle}>Who we are</Text>
      <Text style={styles.aboutText}>{whatGlobo}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  pics: {
    height: 300,
  },
  aboutTitle: {
    paddingTop: 10,
    textAlign: 'center',
    color: 'white',
  },
  aboutText: {
    paddingBottom: 20,
    paddingLeft: 10,
    color: 'white',
    paddingRight: 10,
  },
});

export default AboutScreen;
