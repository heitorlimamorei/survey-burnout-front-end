import { motion } from 'framer-motion';

interface ResultsProps {
  scale: number;
}

export default function Results({ scale }: ResultsProps) {
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

    const index = Math.floor(((scale - 1) / 16) * colors.length);
    return colors[index];
  }

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
              className="w-fit h-fit bg-white rounded-full pt-4 pb-3 px-3 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}>
              {scale > 8 ? '🤒' : '😃'}
            </motion.div>
          </motion.div>
        </div>
        <h2 className="text-white text-4xl">Nível {scale}</h2>
        <p className="text-white p-2 text-justify">
          Explicação da escala aqui: Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Fusce eu aliquam metus, sed sollicitudin tellus.
          Curabitur sagittis, augue sit amet pharetra mattis, ex eros lacinia
          lectus, non vehicula arcu magna vitae lorem.
        </p>
        <button className="p-4 text-xl w-[90%] m-5 rounded-full bg-[#29c2ba] text-white font-bold text-center">
          Avalie nosso trabalho!
        </button>
        <p className="absolute p-3 bg-red-600 h-fit text-justify text-white m-1 bottom-0 rounded-xl">
          Disclaimer: Esse resultado não tem validação médica e é baseado apenas
          em probabilidade, em caso de suspeita procure um profissional.
        </p>
      </div>
    </div>
  );
}
