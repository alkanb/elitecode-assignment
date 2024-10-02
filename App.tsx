import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LaunchingScreen from './src/screens/LaunchingScreen';
import QuestionScreen from './src/screens/QuestionScreen';
import CorrectAnswerScreen from './src/screens/CorrectAnswerScreen';
import IncorrectAnswerScreen from './src/screens/IncorrectAnswerScreen';

const Stack = createStackNavigator<RootStackParamList>();


function AppStack() {
  return (
    <Stack.Navigator initialRouteName="Launching">
      <Stack.Screen 
        name="Launching" 
        component={LaunchingScreen} 
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="Question" 
        component={QuestionScreen} 
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="CorrectAnswer" 
        component={CorrectAnswerScreen} 
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="IncorrectAnswer" 
        component={IncorrectAnswerScreen} 
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
type RootStackParamList = {
  Question: undefined;
  Launching: undefined;
  CorrectAnswer: undefined;
  IncorrectAnswer: undefined;
};



const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Launching">
        <Stack.Screen name="Launching" component={LaunchingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Question" component={QuestionScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CorrectAnswer" component={CorrectAnswerScreen} options={{ headerShown: false }} />
        <Stack.Screen name="IncorrectAnswer" component={IncorrectAnswerScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;