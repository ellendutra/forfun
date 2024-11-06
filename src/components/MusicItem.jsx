import Image from 'next/image';

export default function MusicItem({ position, title, subtitle, imageUrl }){
  return (
    <div className="flex items-center">
      <div className="relative">
        <Image src={imageUrl} alt={title} width={100} height={100} className="rounded-xl object-cover" />
        <div className="absolute top-1 left-1 transform -translate-x-1/2 -translate-y-1/2 bg-customPurple text-sm font-bold h-6 w-8 flex items-center justify-center rounded-full">
          {position}º
        </div>
      </div>
      <div className="ml-2"> 
        <h3 className="font-dm text-sm">{title}</h3>
        <p className="font-dm text-xs text-blueViolet">{subtitle}</p>
      </div>
    </div>
  );
};
