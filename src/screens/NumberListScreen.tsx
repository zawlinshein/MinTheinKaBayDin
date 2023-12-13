import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';

import DATA from '../data.json';
import {RootStackScreenProps} from '../navigations/type';

const numberList: string[] = DATA.numberList;

type Props = RootStackScreenProps<'NumberListScreen'>;

const nums: {[key: string]: number} = {
  '၁': 1,
  '၂': 2,
  '၃': 3,
  '၄': 4,
  '၅': 5,
  '၆': 6,
  '၇': 7,
  '၈': 8,
  '၉': 9,
  '၁၀': 10,
};

function mm2en(num: string): number {
  return nums[num];
}

const NumberListScreen = ({navigation, route}: Props) => {
  const handleAnswerNavigate = (num: number) => {
    const questionNO: number = route.params.questionNo;
    return navigation.navigate('AnswerScreen', {
      num: num,
      questionNo: questionNO,
    });
  };

  return (
    <View style={{flex: 1}}>
      <View style={styles.numberListContainerStyle}>
        <ScrollView
          contentContainerStyle={styles.numberListContainerStyle}
          style={styles.scrollViewStyle}>
          {numberList.map(number => {
            return (
              <TouchableOpacity
                key={Math.random()}
                style={styles.numberStyle}
                onPress={() => handleAnswerNavigate(mm2en(number))}>
                <Text style={styles.numberTextStyle} key={`_${Math.random()}`}>
                  {number}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      <TouchableOpacity
        style={{padding: 10}}
        onPress={() => {
          navigation.canGoBack() && navigation.goBack();
        }}>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 40,
            color: 'black',
          }}>
          Go back
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default NumberListScreen;

const styles = StyleSheet.create({
  numberListContainerStyle: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollViewStyle: {
    alignSelf: 'center',
    backgroundColor: 'black',
  },
  numberStyle: {
    backgroundColor: 'gold',
    width: '10%',
    marginHorizontal: 6,
    marginVertical: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberTextStyle: {fontSize: 30, color: '#000'},
});
