import Image from "next/image";
import PrimaryButton from "@/components/PrimaryButton";
import BottomGradient from "@/components/BottomGradient";
import Mobile from '@/images/forfun-mob.png';
import Desktop from '@/images/forfun-desk.png';
import Logo from '@/images/logo-md.svg';
import LogoDesktop from '@/images/logo-desk.svg';

export default function Home() {
  return (
      <main className="bg-customBlue md:bg-darkBlue absolute inset-0 z-0 bg-no-repeat bg-contain md:bg-cover bg-[url('/background.svg')] md:bg-[url('/background-desk.svg')]">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start md:ml-[15%] md:w-1/2 ">

          <section className="mt-[45%] md:mt-[35%] md:w-1/2">
            <Image src={Logo} alt="Logotipo Forfun TOP10" className="lg:hidden" priority/>
            <Image src={LogoDesktop} alt="Logotipo Forfun TOP10" className="hidden lg:block" priority/>
            <div className="text-center md:text-left px-4 md:px-0 md:pl-5">
              <p className="font-dm text-xl">
                Crie seu TOP 10 de músicas do Forfun e descubra com qual membro da banda você deu match
              </p>
              <PrimaryButton text="Entrar" className="my-8" />
            </div>
          </section>

          <Image src={Mobile} alt="Imagem mobile" className="filter grayscale mt-auto mb-0 md:hidden" priority />
          <Image src={Desktop} alt="Imagem desktop" className="hidden md:block md:w-auto md:absolute md:right-0 md:h-[90%] md:object-right md:bottom-0 filter grayscale" priority />
        
        </div>
      <BottomGradient />
    </main>
  )
}
