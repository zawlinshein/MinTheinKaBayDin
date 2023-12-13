import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  QuestionScreen: undefined;
  NumberListScreen: {
    questionNo: number;
  };
  AnswerScreen:
    | {
        questionNo: number;
        num: number;
      }
    | undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
