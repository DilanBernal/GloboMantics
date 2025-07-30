import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './app/views/Home.tsx';
import AboutScreen from './app/views/About.tsx';
import LoginScreen from './app/views/Login.jsx';
import RegisterScreen from './app/views/Register.jsx';
import GloboHeader from './app/components/Header.jsx';
import Blog from './app/views/Blog.jsx';
import BlogDetail from './app/views/BlogDetail.jsx';
import Quiz from './app/views/Quiz.tsx';
import QuizFinish from './app/views/QuizFinish.jsx';
import Video from './app/views/Video.jsx';
import VideoDetail from './app/views/VideoDetail.jsx';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Quiz" component={Quiz} options={{ title: '' }} />
        <Stack.Screen
          name="QuizFinish"
          component={QuizFinish}
          options={{ headerShown: false }}
        />
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
          name="Blog"
          component={Blog}
          options={{ title: 'Globo Blog' }}
        />
        <Stack.Screen
          name="BlogDetail"
          component={BlogDetail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Videos"
          component={Video}
          options={{ title: 'Video Lessons' }}
        />
        <Stack.Screen
          name="VideoDetail"
          component={VideoDetail}
          options={{ title: 'Watch Lessons' }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          // eslint-disable-next-line react/no-unstable-nested-components
          options={{ header: () => <GloboHeader /> }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
