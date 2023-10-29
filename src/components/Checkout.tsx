'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Checkout() {
  const [authorize, setAuthorize] = useState<boolean>(true);
  const router = useRouter();

  const handleAuthorize = () => {
    setAuthorize((authorize) => !authorize);
  };

  const handleGoToResults = () => {
    router.push('/quiz/results');
  };

  return (
    <div className="h-full w-full flex flex-col items-center">
      <div className="flex flex-col mt-6 h-fit py-5 rounded-xl my-2 w-[95%] bg-[#E7E7E7]">
        <h1 className="font-bold text-2xl text-center">Checkout</h1>
        <div className="flex flex-col my-2 px-5">
          <label className="font-semibold" htmlFor="text">
            Email
          </label>
          <input className="rounded-md h-[2rem]" type="text" />
        </div>
        <div className="flex flex-row my-2 px-5">
          <input
            type="checkbox"
            checked={authorize}
            onChange={handleAuthorize}
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
}
