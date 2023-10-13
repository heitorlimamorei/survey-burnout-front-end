'use client';

import useQuiz from '@/hooks/useQuiz';
import ProgressBar from '@/components/ProgressBar';
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
    <div className='h-full w-full flex flex-col items-center justify-center'>
      <ProgressBar questionPosition={questionPosition}></ProgressBar>
      <div className='mt-6 h-[45%] py-5 rounded-xl my-2 w-[95%] bg-[#E7E7E7]'>
        <h1 className='text-center p-2 text-3xl font-bold'>{currentQuestion.title}</h1>
        <ul className='flex flex-col items-center'>
          {currentQuestion.options.map((option) => (
            <li
              key={option.id}
              onClick={() => handleConfirmAnswer(option.value)}
              className="text-center font-bold text-xl my-2 w-[90%] rounded-full py-3 bg-white">
              {option.title}
            </li>
          ))}
        </ul>
      </div>
      <div className='h-[55%] text-white '>
        <h1 className='text-5xl font-bold'>O QUE É EXAMPLE?</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu aliquam metus, sed sollicitudin tellus. Curabitur sagittis, augue sit amet pharetra mattis, ex eros lacinia lectus, non vehicula arcu magna vitae lorem. Morbi euismod porttitor molestie. In hac habitasse platea dictumst. In lobortis vel lorem eu egestas. Quisque id lacus ipsum. Aliquam porttitor nulla in risus suscipit, in scelerisque massa porttitor. Nunc fringilla justo eget leo faucibus, ac ultricies elit ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
      </div>
    </div>
  ) : (
    <div>Checkout is open</div>
  );
}
