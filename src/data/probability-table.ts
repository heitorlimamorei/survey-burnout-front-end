import _ from 'lodash';
import questions from './questions';

interface NormalizedQuestionOption {
  opt0: number;
  opt1: number;
}

const normalizeQuestionsOptions = (): NormalizedQuestionOption[] => {
  return questions.map((question) => {
    return {
      opt0: question.options[0].value,
      opt1: question.options[1].value,
    };
  });
};

const optionsList = normalizeQuestionsOptions();

function tableGenerator(opts: NormalizedQuestionOption[]): number[] {
  if (opts.length === 0) {
    return [];
  }
  if (opts.length === 1) {
    return [opts[0].opt0, opts[0].opt1];
  }
  const prevResults = tableGenerator(opts.slice(1));
  const result: number[] = [];

  for (const cValue of prevResults) {
    result.push(opts[0].opt0 * cValue);
    result.push(opts[0].opt1 * cValue);
  }
  return result.map((c) => c * 0.18); // appling the large number theorem
}

const table = _.sortBy(tableGenerator(optionsList), (a) => a);

export default table;
