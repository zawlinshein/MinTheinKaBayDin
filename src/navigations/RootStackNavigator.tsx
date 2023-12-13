import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import QuestionScreen from '../screens/QuestionScreen';
import NumberListScreen from '../screens/NumberListScreen';
import AnswerScreen from '../screens/AnswerScreen';

const Stack = createNativeStackNavigator();

const RootStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={'QuestionScreen'}>
      <Stack.Screen name="QuestionScreen" component={QuestionScreen} />
      <Stack.Screen name="NumberListScreen" component={NumberListScreen} />
      <Stack.Screen name="AnswerScreen" component={AnswerScreen} />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
