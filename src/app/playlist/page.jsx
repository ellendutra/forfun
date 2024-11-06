import Image from 'next/image';
import AddMusic from '@/components/AddMusic';
import PrimaryButton from '@/components/PrimaryButton';
import BottomGradient from '@/components/BottomGradient';
import Logo from '@/images/logo.svg';

export default function Playlist() {
  return (
    <main className="pb-28">
      <Image src={Logo} alt="Logotipo Forfun TOP10" className="object-fill" />
      <p className='p-6 font-dm font-medium text-xl text-customWhite'>Monte sua playlist</p>
      <section className="mx-auto p-3 md:px-40 xl:px-80">
        <div className="relative grid grid-cols-2 gap-5 pl-2 pt-1">
          {[...Array(10)].map((_, index) => (
            <AddMusic key={index} position={index + 1} />
          ))}
        </div>
      </section>
      <PrimaryButton className="fixed bottom-9 left-1/2 transform -translate-x-1/2" text="Descobrir meu Match" />
      <BottomGradient />
    </main>
  );
};
