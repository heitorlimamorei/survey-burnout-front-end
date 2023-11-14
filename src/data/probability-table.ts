import _ from 'lodash';
import questions from './questions';

const roundListNumbers = (collection: number[], n: number): number[] => {
  return collection.map((c) => parseFloat(c.toFixed(n)));
};

const normalizeQuestionsOptions = (): number[][] => {
  return questions.map((question): number[] => {
    return question.options.map((option): number => option.value);
  });
};

const optionsList = normalizeQuestionsOptions();

function tableGenerator(opts: number[][]): number[] {
  if (opts.length === 1) {
    return opts[0].map((c) => c);
  }
  if (opts.length === 0) {
    return [];
  }

  const prevResults = tableGenerator(opts.slice(1));
  const result: number[] = [];

  for (const cv of prevResults) {
    opts[0].forEach((c) => {
      result.push(c * cv);
    });
  }

  return roundListNumbers(result, 8);
}

const table = _.sortBy(tableGenerator(optionsList), (a) => a);

export default table;
