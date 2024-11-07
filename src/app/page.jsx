import Image from "next/image";
import PrimaryButton from "@/components/PrimaryButton";
import BottomGradient from "@/components/BottomGradient";
import Mobile from '@/images/forfun-mob.png';
import Desktop from '@/images/forfun-desk.png';
import Logo from '@/images/logo-md.svg';
import LogoDesktop from '@/images/logo-desk.svg';

export default function Home() {
  return (
      <main className="bg-customBlue lg:bg-darkBlue absolute inset-0 z-0 bg-no-repeat bg-contain lg:bg-cover bg-[url('/background.svg')] md:bg-[url('/background-desk.svg')]">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start lg:ml-[15%] lg:w-[40%] xl:w-1/2 ">
          <section className="mt-[45%] lg:mt-[35%] lg:w-1/2">
            <Image src={Logo} alt="Logotipo Forfun TOP10" className="lg:hidden" priority/>
            <Image src={LogoDesktop} alt="Logotipo Forfun TOP10" className="hidden lg:block" priority/>
            <div className="text-center lg:text-left px-4 lg:px-0">
              <p className="font-dm text-xl">
                Crie seu TOP 10 de músicas do Forfun e descubra com qual membro da banda você deu match
              </p>
              <PrimaryButton text="Entrar" className="my-8" />
            </div>
          </section>

          <Image src={Mobile} alt="Imagem mobile" className="filter grayscale mt-auto mb-0 lg:hidden" priority />
          <Image src={Desktop} alt="Imagem desktop" className="hidden lg:block lg:w-3/4 lg:h-3/4 2xl:w-auto lg:absolute lg:right-0 xl:h-[90%] lg:object-right lg:bottom-0 filter grayscale" priority />
        
        </div>
      <BottomGradient />
    </main>
  )
}
