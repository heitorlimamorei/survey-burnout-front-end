'use client';

import useQuiz from '@/hooks/useQuiz';
import React, { useState } from 'react';

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);

  const { questions, answerQuestion } = useQuiz();

  const currentQuestion = questions[currentQuestionIndex];
  const questionPosition = currentQuestionIndex + 1;

  const toggleCheckoutIsOpen = () => {
    setIsCheckoutOpen((c) => !c);
  };

  const handleNextQuestion = () => {
    const nextIndex = currentQuestionIndex + 1;
    setCurrentQuestionIndex(nextIndex);
    if (nextIndex + 1 > questions.length) toggleCheckoutIsOpen();
  };

  const handleConfirmAnswer = (value: number) => {
    answerQuestion(currentQuestion.id, value);
    handleNextQuestion();
  };

  /*const handlePreviousQuestion = () => {
    const nextIndex =
      currentQuestionIndex - 1 >= 0
        ? currentQuestionIndex - 1
        : currentQuestionIndex;
    setCurrentQuestionIndex(nextIndex);
  };
  */

  if (!questions.length) return null;

  console.log(questions);

  return !isCheckoutOpen ? (
    <div>
      <span>{questionPosition}</span>
      <h1>{currentQuestion.title}</h1>
      <ul>
        {currentQuestion.options.map((option) => (
          <li
            key={option.id}
            onClick={() => handleConfirmAnswer(option.value)}
            className="my-2">
            {option.title}
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <div>Checkout is open</div>
  );
}
