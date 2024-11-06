import Image from "next/image";
import Plus from '@/images/plus.svg';

export default function AddMusic({ position }) {
  return (
    <div className="relative bg-deepBlue rounded-xl h-[200px] flex flex-col items-center justify-center p-4">
      <div className="absolute top-[8px] left-[8px] transform -translate-x-1/2 -translate-y-1/2 bg-customPurple text-lg font-bold h-7 w-8 flex items-center justify-center rounded-3xl">
        {position}º 
      </div>

      <button className="bg-shadowBlue hover:bg-customPurple p-4 rounded-full">
        <Image src={Plus} alt="Ícone de soma" width={40} height={40} />
      </button>
      <p className="text-lightBlue mt-2 text-xs">Adicionar Música</p>

    </div>
  );
};
