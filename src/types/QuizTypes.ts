export interface IQuestionOptionProps {
  name: string;
  title: string;
  value: number;
  id: string;
}

export interface IQuestionProps {
  id: string;
  title: string;
  options: IQuestionOptionProps[];
}
