import { IQuestionProps } from '@/types/QuizTypes';
import { v4 } from 'uuid';

const generateRandomId = () => v4();

const questions: IQuestionProps[] = [
  {
    id: 'question-0-burnout-survey',
    title: 'Qual é a sua faixa idade?',
    description: '',
    options: [
      {
        id: generateRandomId(),
        name: '13 - 29 anos',
        title: '13 - 29 anos',
        value: 0.58,
      },
      {
        id: generateRandomId(),
        name: '30 - 43 anos',
        title: '30 - 43 anos',
        value: 0.59,
      },
      {
        id: generateRandomId(),
        name: '44 - 60 anos',
        title: '44 - 60 anos',
        value: 0.31,
      },
    ],
  },
  {
    id: 'question-4-burnout-survey',
    title: 'Qual é o seu sexo ?',
    description: '',
    options: [
      {
        id: generateRandomId(),
        name: 'Masculino',
        title: 'Masculino',
        value: 0.31,
      },
      {
        id: generateRandomId(),
        name: 'Feminino',
        title: 'Feminino',
        value: 0.43,
      },
    ],
  },
  {
    id: 'question-1-burnout-survey',
    title: 'Você se sente exausto emocionalmente?',
    description:
      'A exaustão emocional representa o esgotamento dos recursos emocionais do indivíduo. Considerado o traço inicial da síndrome e decorre principalmente da sobrecarga e do conflito pessoal nas relações interpessoais. É um sintoma muito comum até mesmo em indivíduos que não apresentam a síndrome, entretanto, a maioria massiva de quem possui a doença possui, obrigatoriamente, essa predição.',
    options: [
      {
        id: generateRandomId(),
        name: 'TESTE',
        title: 'Sim',
        value: 0.95,
      },
      {
        id: generateRandomId(),
        name: 'TESTE',
        title: 'Não',
        value: 0.05,
      },
    ],
  },
  {
    id: 'question-2-burnout-survey',
    title:
      'A falta de realização no âmbito profissional, é um sentimento comum para você?',
    description:
      'A redução da realização pessoal ou sentimento de incompetência revela uma auto-avaliação negativa associada à insatisfação e infelicidade com o trabalho. É um sintoma que, em baixas quantidades, reflete uma insatisfação profissional, não necessariamente a síndrome, entretanto, casos esses sinais sejam elevados e permanentes representam um forte indício de burnout, uma vez que grande parte dos indivíduos afetados, apresentam esse indício.',
    options: [
      {
        id: generateRandomId(),
        name: 'TESTE (02)',
        title: 'Sim',
        value: 0.8,
      },
      {
        id: generateRandomId(),
        name: 'TESTE (02)',
        title: 'Não',
        value: 0.2,
      },
    ],
  },
  {
    id: 'question-3-burnout-survey',
    title: 'Você sofre de estresse crônico?',
    description:
      'O estresse crônico é caracterizado por um estado de tensão constante, em que a pessoa afetada se vê constantemente esgotada. Representa um caso grave de irritabilidade, sendo mais característico de indivíduos atingidos pela síndrome de burnout.',
    options: [
      {
        id: generateRandomId(),
        name: 'TESTE (03)',
        title: 'Sim',
        value: 0.6,
      },
      {
        id: generateRandomId(),
        name: 'TESTE (03)',
        title: 'Não',
        value: 0.4,
      },
    ],
  },
  {
    id: 'question-5-burnout-survey',
    title: 'Se encaixa no quadro de despersonalização?',
    description:
      'A despersonalização é caracterizada pela insensibilidade emocional do profissional, que passa a tratar clientes e colegas como objetos. Trata-se de um aspecto fundamental para caracterizar a síndrome de burnout,  já que suas outras características podem ser encontradas nos quadros depressivos em geral. É um sintoma raro que, entretanto, grande parte das pessoas que o manifestam, em sincronia com os demais sinais, apresenta burnout.',
    options: [
      {
        id: generateRandomId(),
        name: 'TESTE (04)',
        title: 'Sim',
        value: 0.888,
      },
      {
        id: generateRandomId(),
        name: 'TESTE (04)',
        title: 'Não',
        value: 0.112,
      },
    ],
  },
  {
    id: 'question-6-burnout-survey',
    title: 'Você sente uma constante falta de interrese, motivação ou energia quando se trata do seu trabalho?',
    description:'',
    options: [
      {
        id: generateRandomId(),
        name: 'TESTE (05)',
        title: 'Sim',
        value: 0.26,
      },
      {
        id: generateRandomId(),
        name: 'TESTE (05)',
        title: 'Não',
        value: 0.64,
      },
    ],
  },
  {
    id: 'question-7-burnout-survey',
    title: 'Você experiencia altos níveis de fadiga e cansaço?',
    description:'',
    options: [
      {
        id: generateRandomId(),
        name: 'TESTE (04)',
        title: 'Sim',
        value: 0.44,
      },
      {
        id: generateRandomId(),
        name: 'TESTE (04)',
        title: 'Não',
        value: 0.56,
      },
    ],
  },
];

export default questions;
