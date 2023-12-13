import React from 'react';

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import DATA from '../data.json';

import {RootStackScreenProps} from '../navigations/type';
import {FC} from 'react';

const answers = DATA.answers;

type Props = RootStackScreenProps<'AnswerScreen'>;

const AnswerScreen: FC<Props> = ({navigation, route}) => {
  const answer = answers.find(
    a =>
      a.answerNo === route.params?.num &&
      a.questionNo === route.params?.questionNo,
  );
  console.log(route.params);
  console.log(answer);
  return (
    <View style={styles.answerContainerStyle}>
      <Text style={styles.answerStyle}>{answer?.answerResult}</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.canGoBack() && navigation.goBack();
        }}
        style={{
          padding: 20,
          backgroundColor: '#ffa',
          borderRadius: 10,
        }}>
        <Text>Go back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AnswerScreen;

const styles = StyleSheet.create({
  answerStyle: {
    backgroundColor: 'black',
    fontSize: 40,
    padding: 10,
    borderRadius: 20,
    color: 'white',
  },
  answerContainerStyle: {
    flex: 1,
    backgroundColor: '#fafafa',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    paddingHorizontal: 10,
  },
});
