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

export interface INormalizedQuestionProps {
  // question properties used in application state
  title: string;
  id: string;
  options: IQuestionOptionProps[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  answer: number;
}
