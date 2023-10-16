import { INormalizedQuestionProps } from '@/types/QuizTypes';
import { motion } from 'framer-motion';

interface IProgressBarProps {
  questions: INormalizedQuestionProps[];
}
export default function ProgressBar({ questions }: IProgressBarProps) {
  const divs: number[] = questions.map((q, i) => i);
  return (
    <div className="w-full flex mt-1 items-center h-[1rem]">
      {divs.map((index) => (
        <div
          className="bg-transparent mx-1 w-[23%] h-2/3 rounded-full"
          key={index}>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 90 }}
            transition={{ type: 'spring', duration: 2 }}
            className={
              questions[index].answer == null
                ? 'bg-[#00CFC3] mx-1  h-2/3 rounded-full'
                : 'bg-white mx-1  h-2/3 rounded-full'
            }></motion.div>
        </div>
      ))}
    </div>
  );
}
