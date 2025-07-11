import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const cancelLogin = () => {
    Alert.alert('Login Cancelled');
    navigation.navigate('Home');
  };

  const creacteAccount = () => {
    navigation.navigate('Register');
  };

  const loginUser = () => {
    if (!userName) {
      Alert.alert('Please insert a username');
    } else if (!password) {
      Alert.alert('Please insert a password');
    } else {
      AsyncStorage.getItem('usserLoggedIn', (err, result) => {
        if (err) {
        }
        if (result !== 'none') {
          Alert.alert('Someone already logged on');
          navigation.navigate('Home');
        } else {
          AsyncStorage.getItem(userName, (er, result) => {
            if (er) {
            }
            if (result !== null) {
              if (result !== password) {
                Alert.alert('Password incorrect');
              } else {
                AsyncStorage.setItem('usserLoggedIn', userName, (e, result) => {
                  if (er) {
                  }
                  Alert.alert(`${userName} Logged in`);
                  navigation.navigate('Home');
                });
              }
            }
          });
        }
      });
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login</Text>

      <TextInput
        style={styles.inputs}
        onChangeText={setUserName}
        value={userName}
      />
      <Text style={styles.labels}>Enter Username</Text>

      <TextInput
        style={styles.inputs}
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
      />
      <Text style={styles.labels}>Enter Username</Text>

      <TouchableHighlight onPress={loginUser} underlayColor="#00ff4f">
        <Text style={styles.buttons}>Login</Text>
      </TouchableHighlight>

      <TouchableHighlight onPress={cancelLogin} underlayColor="#00ffff">
        <Text style={styles.buttons}>Cancel</Text>
      </TouchableHighlight>

      <TouchableHighlight onPress={creacteAccount} underlayColor="#00ffff">
        <Text style={styles.buttons}>Create Account</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: '45%',
    color: '#ffffff',
    paddingTop: '5%',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputs: {
    width: '80%',
    marginTop: 15,
    borderWidth: 1,
    height: 45,
    borderColor: '#ffffff',
    borderRadius: 15,
    borderBottomColor: '#ff0000',
    fontSize: 16,
    color: '#ffffff',
  },
  labels: {
    paddingBottom: 10,
    fontSize: 15,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  buttons: {
    borderRadius: 15,
    padding: 15,
    margin: 5,
    fontSize: 16,
    backgroundColor: '#DD3D34',
    width: 150,
    height: 50,
    textAlign: 'center',
  },
});

export default LoginScreen;
