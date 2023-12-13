import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC} from 'react';

import {useNavigation} from '@react-navigation/native';
import {RootStackScreenProps} from '../navigations/type';

import {QuestionHook} from '../hook/QuestionHook';

type RenderItem = {
  item: {
    questionNo: number;
    questionName: string;
  };
};

type Props = RootStackScreenProps<'QuestionScreen'>;

const Questoin: FC<RenderItem> = ({item}) => {
  const navigation = useNavigation<Props['navigation']>();

  const handleNumberListScreenChange = () => {
    return navigation.navigate('NumberListScreen', {
      questionNo: item.questionNo,
    });
  };

  return (
    <TouchableOpacity onPress={handleNumberListScreenChange}>
      <Text style={styles.questionStyle}>{item.questionName}</Text>
    </TouchableOpacity>
  );
};

const QuestionScreen: FC = () => {
  const {setInput, questions, filterQuestion} = QuestionHook();

  return (
    <View>
      <TextInput
        style={styles.questionInputStyle}
        placeholder="search questions..."
        onChangeText={value => setInput(value)}
      />
      <FlatList
        data={filterQuestion.length !== 0 ? filterQuestion : questions}
        renderItem={({item}) => <Questoin item={item} />}
      />
    </View>
  );
};

export default QuestionScreen;

const styles = StyleSheet.create({
  questionStyle: {
    fontSize: 23,
    padding: 20,
    margin: 10,
    backgroundColor: 'black',
    color: 'white',
    borderRadius: 20,
  },
  questionInputStyle: {
    backgroundColor: '#aaa',
    marginLeft: 20,
    marginTop: 10,
    marginRight: 20,
    borderRadius: 20,
    marginBottom: 5,
    paddingHorizontal: 20,
  },
});
