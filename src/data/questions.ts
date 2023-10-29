import { IQuestionProps } from '@/types/QuizTypes';
import { v4 } from 'uuid';

const generateRandomId = () => v4();

const questions: IQuestionProps[] = [
  {
    id: 'question-1-burnout-survey',
    title: 'Você se sente exausto emocionalmente?',
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
    title:
      'A falta de realização no âmbito profissional, é um sentimento comum para você?',
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
    title: 'Você sofre de estresse crônico?',
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
    id: generateRandomId(),
    title: 'Se encaixa no quadro de despersonalização?',
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
