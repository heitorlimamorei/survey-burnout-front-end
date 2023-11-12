'use client';
import { KeyboardEventHandler, memo, useState } from 'react';
import { INormalizedQuestionProps } from '@/types/QuizTypes';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const Checkout = ({ questions }: { questions: INormalizedQuestionProps[] }) => {
  const [authorize, setAuthorize] = useState<boolean>(true);
  const [email, setEmail] = useState<string>('');

  const router = useRouter();

  const handleGoToResults = async (): Promise<void> => {
    const { status, result } = await sendSurvey();
    if (status !== 200) return;
    router.push(`/quiz/results?qr=${result}`);
  };

  const getResult = (): number => {
    let result = questions[0].answer;
    questions.forEach((c, i) => (i > 0 ? (result = result * c.answer) : null));
    return parseFloat(result.toFixed(6));
  };

  const sendSurvey = async () => {
    if (!authorize || !email) return;
    const answers = questions.map(({ id, answer }) => ({
      questionId: id,
      value: answer,
    }));
    const result = getResult();
    const resp = await axios.post(
      'https://survey-burnout-api.onrender.com/survey',
      {
        author: email,
        result: result,
        answers: answers,
      }
    );
    return { status: resp.status, result };
  };
  const handleKeyDown = (event) => {
    if (event.key ==='Enter') {
      handleGoToResults()
    }
  };

  return (
    <div className="h-full w-full flex flex-col items-center">
      <div className="flex flex-col mt-6 h-fit py-5 rounded-xl my-2 w-[95%] bg-[#E7E7E7]">
        <h1 className="font-bold text-2xl text-center">Checkout</h1>
        <div className="flex flex-col my-2 px-5">
          <label className="font-semibold" htmlFor="text">
            Email
          </label>
          <input
            className="rounded-md h-[2rem]"
            type="text"
            onKeyDown={handleKeyDown}
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
        </div>
        <div className="flex flex-row my-2 px-5">
          <input
            type="checkbox"
            checked={authorize}
            onChange={() => setAuthorize((authorize) => !authorize)}
          />
          <p className="text-sm ml-1">Concedo meus dados para uso futuro</p>
        </div>
        <button
          onClick={handleGoToResults}
          className="p-6 mt-5 mx-5 rounded-xl bg-[#009B92] text-white font-bold text-center">
          Seguir para resultados
        </button>
      </div>
    </div>
  );
};

export default memo(Checkout);
