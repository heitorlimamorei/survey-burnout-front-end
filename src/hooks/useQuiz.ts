import { useEffect, useState } from 'react';
import QuizQuestions from '../data/questions';
import { INormalizedQuestionProps } from '@/types/QuizTypes';

export default function useQuiz() {
  const [questions, setQuestions] = useState<INormalizedQuestionProps[]>([]);

  const loadQuestions = (c: INormalizedQuestionProps[]) => setQuestions(c);

  const updateQuestion = (updatedQuestion: INormalizedQuestionProps) => {
    // eslint-disable-next-line prefer-const
    let writeableQuestionList = [...questions];
    const questionIndex = writeableQuestionList.findIndex(
      (question) => question.id === updatedQuestion.id
    );
    writeableQuestionList[questionIndex] = updatedQuestion;

    setQuestions(writeableQuestionList);
  };

  const answerQuestion = (questionId: string, answer: number) => {
    const question = questions.find((question) => question.id === questionId);
    if (!question) throw new Error('Question not updated: Question not found!');
    const updatedQuestion = { ...question, answer: answer };
    updateQuestion(updatedQuestion);
  };

  useEffect(() => {
    const normalizedQuestions = QuizQuestions.map((question) => {
      return {
        ...question,
        answer: null,
      };
    });
    loadQuestions(normalizedQuestions);
  }, []);

  return {
    questions,
    answerQuestion,
  };
}
