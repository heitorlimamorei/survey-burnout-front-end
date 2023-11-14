'use client';
import Image from 'next/image';
import brain from '../../public/brain.png';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const handleGoToQuiz = () => {
    router.push('/quiz');
  };
  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="flex flex-row py-3">
        <h1 className="text-5xl font-bold text-white mt-5">QUIZ BURNOUT</h1>
        <Image src={brain} width={120} alt="" />
      </div>
      <p className="text-white px-2 py-1">
        Equilibrar o benefício das tecnologias com a preservação da saúde
        torna-se essencial. O nosso tema específico discorre sobre a síndrome de
        burnout, uma síndrome resultante do estresse no local de trabalho que
        não foi gerenciado com sucesso, de uma exaustão física e mental, podendo
        levar a adoecimentos físicos, sociais, emocionais e prejuízos nos
        relacionamentos da vida pessoal e profissional.
      </p>
      <p className="text-white px-2 py-1">
        O objetivo desse projeto é conscientizar as pessoas sobre distúrbios
        mentais e incentivar a busca por apoio e tratamento com profissionais de
        saúde, ademais, visa-se também ajudar a identificar pessoas com sintomas
        de burnout. É importante ressaltar que este trabalho não tem como
        objetivo em nenhum momento diagnosticar pessoas com essa síndrome,
        apenas apresentar um conjunto de características que podem ser
        indicativas dessa doença.
      </p>
      <button
        className="p-4 text-xl w-[90%] rounded-full bg-[#29c2ba] text-white font-bold text-center"
        onClick={handleGoToQuiz}>
        INICIAR
      </button>
    </div>
  );
}
