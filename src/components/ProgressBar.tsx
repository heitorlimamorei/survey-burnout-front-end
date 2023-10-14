import { motion } from 'framer-motion';

export default function ProgressBar({ questionPosition }) {
  const divs = [0, 1, 2, 3];
  let answered = [];
  switch (questionPosition) {
    case 0:
      answered = [0, 0, 0, 0];
      break;
    case 1:
      answered = [0, 0, 0, 0];
      break;
    case 2:
      answered = [1, 0, 0, 0];
      break;
    case 3:
      answered = [1, 1, 0, 0];
      break;
    case 4:
      answered = [1, 1, 1, 0];
  }

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
              answered[index]
                ? 'bg-[#00CFC3] mx-1  h-2/3 rounded-full'
                : 'bg-white mx-1  h-2/3 rounded-full'
            }></motion.div>
        </div>
      ))}
    </div>
  );
}
