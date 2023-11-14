'use client';
import table from '@/data/probability-table';
import { motion } from 'framer-motion';
import _ from 'lodash';
import { useSearchParams } from 'next/navigation';

export default function Results() {
  const searchParams = useSearchParams();

  const getScale = () => {
    const quizResult = parseFloat(searchParams.get('qr'));
    console.log(table);
    const index = _.findIndex(table, (c) => c == quizResult);
    console.log(index);
    const scaleRaw = (index * 16) / table.length;
    console.log(scaleRaw);
    return Math.round(scaleRaw == 0 ? scaleRaw + 1 : scaleRaw);
  };

  const scale = getScale();
  function getBgClass(scale: number): string {
    const colors = [
      'bg-[#0292cf]',
      'bg-[#01a9b2]',
      'bg-[#00bc99]',
      'bg-[#00be58]',
      'bg-[#75ce70]',
      'bg-[#bcdb63]',
      'bg-[#00bc99]',
      'bg-[#e1e455]',
      'bg-[#febf19]',
      'bg-[#fd9532]',
      'bg-[#ff6839]',
      'bg-[#ee4725]',
      'bg-[#fe0106]',
      'bg-[#fd0079]',
      'bg-[#cc0061]',
      'bg-[#61002d]',
    ];

    const index = scale - 1;
    return colors[index <= 16 ? index : 16];
  }
  const handleRedirect = () => {
    window.location.href =
      'https://forms.office.com/Pages/ResponsePage.aspx?id=jQCVJyeleEy6Lb9MnBfeCzmwwLZ60vhFuxTpRa1B8Z9UOVpXUVRNQUJIV0VQNUo3SDU2UTdDNlhMQS4u&origin=QRCode';
  };
  return (
    <div className="h-full w-full flex flex-col items-center">
      <h1 className="text-3xl text-white font-bold mb-8">Seu Resultado</h1>
      <div className="flex flex-col items-center">
        <div className="text-5xl text-white font-bold border-8 h-64 w-64 rounded-full flex">
          <motion.div
            className={`w-[15rem] h-[15rem] rounded-full flex items-center text-8xl justify-center ${getBgClass(
              scale
            )}`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'linear', duration: 1 }}>
            <motion.div
              className="rounded-full text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}>
              {scale > 8 ? '🤒' : '😃'}
            </motion.div>
          </motion.div>
        </div>
        <h2 className="text-white text-4xl">
          Nível {scale <= 16 ? scale : 16}
        </h2>
        <p className="text-white p-2 text-justify">
          A escala produzida pelo nosso grupo possui 16 níveis do menor ao maior
          em relação a probabilidade de possuir a síndrome de burnout. Tal
          escala foi construída a partir da frequência dos sintomas inseridos no
          quiz em indivíduos com a doença, dessa forma, a presença de vários
          sintomas indica uma chance maior do usuário apresentar burnout.
        </p>
        <button
          className="p-4 text-xl w-[90%] m-5 rounded-full bg-[#29c2ba] text-white font-bold text-center"
          onClick={handleRedirect}>
          Avalie nosso trabalho!
        </button>
        <p className="p-3 bg-red-600 h-fit text-justify text-white m-1 bottom-0 rounded-xl">
          Disclaimer: Esse resultado não tem validação médica e é baseado apenas
          em probabilidade, em caso de suspeita procure um profissional.
        </p>
      </div>
    </div>
  );
}
