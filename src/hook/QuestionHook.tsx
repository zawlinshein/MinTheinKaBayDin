import {useState, useEffect} from 'react';

import DATA from '../data.json';

type question = {
  questionNo: number;
  questionName: string;
};

const QuestionHook = () => {
  const [input, setInput] = useState<string>('');
  const [questions, setQuestions] = useState<question[]>([]);
  const [filterQuestion, setFilterQuestion] = useState<question[]>([]);

  useEffect(() => {
    setQuestions(DATA.questions);
  }, []);

  useEffect(() => {
    const result = questions.filter(question =>
      question.questionName.includes(input),
    );
    setFilterQuestion(result);
  }, [input]);
  return {
    setInput,
    questions,
    filterQuestion,
  };
};

export {QuestionHook};
