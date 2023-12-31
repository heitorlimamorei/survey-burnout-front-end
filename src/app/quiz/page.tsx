'use client';
import { motion } from 'framer-motion';
import useQuiz from '@/hooks/useQuiz';
import ProgressBar from '@/components/ProgressBar';
import React, { useState } from 'react';
import Checkout from '@/components/Checkout';

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);
  const { questions, answerQuestion } = useQuiz();

  const currentQuestion = questions[currentQuestionIndex];

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
  return !isCheckoutOpen ? (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <ProgressBar questions={questions} />
      <motion.div
        className="h-[50%] py-5 rounded-xl my-2 w-[95%] bg-[#E7E7E7]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: [0, 0.71, 0.2, 1.01],
          damping: 5,
          stiffness: 100,
          restDelta: 0.001,
        }}>
        <motion.h1
          className="text-center p-2 text-xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0, 0.71, 0.2, 1.01],
            type: 'spring',
            damping: 5,
            stiffness: 100,
            restDelta: 0.001,
          }}>
          {currentQuestion.title}
        </motion.h1>
        <ul className="flex flex-col items-center">
          {currentQuestion.options.map((option) => (
            <motion.li
              key={option.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: [0, 0.71, 0.2, 1.01],
                type: 'spring',
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              }}
              onClick={() => handleConfirmAnswer(option.value)}
              className="text-center font-bold text-xl my-2 w-[90%] rounded-full py-3 bg-white">
              {option.title}
            </motion.li>
          ))}
        </ul>
      </motion.div>
      <motion.div
        className="h-[45%] text-white p-3 pl-4"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}>
        <h1
          className={`text-4xl font-bold ${
            currentQuestion.description == '' ? 'hidden' : ''
          }`}>
          O QUE É?
        </h1>
        <p>{currentQuestion.description}</p>
      </motion.div>
    </div>
  ) : (
    <>
      <Checkout questions={questions} />
    </>
  );
}
