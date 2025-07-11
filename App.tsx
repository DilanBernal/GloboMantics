import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './app/views/Home.tsx';
import AboutScreen from './app/views/About.tsx';
import LoginScreen from './app/views/Login.jsx';
import RegisterScreen from './app/views/Register.jsx';
import GloboHeader from './app/components/Header.jsx';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{ title: 'About Us' }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ header: () => <GloboHeader /> }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
