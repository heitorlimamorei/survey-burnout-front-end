import { IQuestionProps } from '@/types/QuizTypes';
import { v4 } from 'uuid';

const generateRandomId = () => v4();

const questions: IQuestionProps[] = [
  {
    id: 'question-1-burnout-survey',
    title: 'TESTE',
    options: [
      {
        id: generateRandomId(),
        name: 'TESTE',
        title: 'Sim',
        value: 0.72,
      },
      {
        id: generateRandomId(),
        name: 'TESTE',
        title: 'Não',
        value: 0.23,
      },
    ],
  },
  {
    id: 'question-2-burnout-survey',
    title: 'Pergunta 02',
    options: [
      {
        id: generateRandomId(),
        name: 'TESTE (02)',
        title: 'Sim',
        value: 0.72,
      },
      {
        id: generateRandomId(),
        name: 'TESTE (02)',
        title: 'Não',
        value: 0.23,
      },
    ],
  },
  {
    id: 'question-3-burnout-survey',
    title: 'Pergunta 03',
    options: [
      {
        id: generateRandomId(),
        name: 'TESTE (03)',
        title: 'Sim',
        value: 0.72,
      },
      {
        id: generateRandomId(),
        name: 'TESTE (03)',
        title: 'Não',
        value: 0.23,
      },
    ],
  },
  {
    id: 'question-4-burnout-survey',
    title: 'Pergunta 04',
    options: [
      {
        id: generateRandomId(),
        name: 'TESTE (04)',
        title: 'Sim',
        value: 0.72,
      },
      {
        id: generateRandomId(),
        name: 'TESTE (04)',
        title: 'Não',
        value: 0.23,
      },
    ],
  },
];

export default questions;
