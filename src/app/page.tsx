import Image from 'next/image';
import brain from '../../public/brain.png';

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="flex flex-row py-3">
        <h1 className="text-5xl font-bold text-white mt-5">QUIZ BURNOUT</h1>
        <Image src={brain} width={120} alt="" />
      </div>
      <p className='text-white p-2'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget arcu
        vel neque mollis consequat. Ut ultricies, tortor mattis ultricies
        fringilla, dui diam placerat turpis, rutrum tincidunt metus leo sit amet
        ex. Nulla facilisi. Mauris feugiat rhoncus semper. Nunc nec est est.
        Proin vel erat fringilla, feugiat nulla ac, imperdiet lectus. Etiam ante
        odio, interdum sit amet vehicula eu, maximus nec leo. Sed tincidunt sem
        mi, eu condimentum nulla rutrum eget. Maecenas mollis leo id congue
        bibendum. Vestibulum nec sollicitudin nibh. Suspendisse a dui eros. Sed
        non dui nisi. Phasellus sed dui quis dolor ultricies congue. Vestibulum
        eu convallis velit, non tempus leo. Fusce rhoncus tortor vel metus
        bibendum, eget varius augue molestie. Suspendisse pellentesque elementum
        consectetur. Maecenas eu interdum libero. Morbi ut leo sagittis dolor.
      </p>
      <button className='p-4 text-xl w-[90%] rounded-full bg-[#29c2ba] text-white font-bold text-center'>
        INICIAR
      </button>
    </div>
  );
}
