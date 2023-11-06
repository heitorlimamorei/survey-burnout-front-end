import { INormalizedQuestionProps } from '@/types/QuizTypes';
import { motion } from 'framer-motion';

interface IProgressBarProps {
  questions: INormalizedQuestionProps[];
}
export default function ProgressBar({ questions }: IProgressBarProps) {
  const divs: number[] = questions.map((q, i) => i);
  return (
    <div className="w-screen flex mt-1 items-center h-[1rem]">
      {divs.map((index) => (
        <div
          className="flex bg-transparent w-full h-2/3 place-content-evenly rounded-full"
          key={index}>
          <motion.div
            transition={{ type: 'spring', duration: 2 }}
            className={
              questions[index].answer == null
                ? 'bg-[#00CFC3] w-full mx-1  h-2/3 rounded-full'
                : 'bg-white mx-1 w-full h-2/3 rounded-full'
            }></motion.div>
        </div>
      ))}
    </div>
  );
}
