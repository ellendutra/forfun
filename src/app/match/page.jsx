import Image from 'next/image';
import MusicItem from "@/components/MusicItem";
import ProgressCircle from "@/components/Progress";
import PrimaryButton from "@/components/PrimaryButton";
import Logo from '@/images/logo-md.svg';
import cd from '@/images/cd.png';
import danilo from '@/images/danilo.png'
import vitor from '@/images/vitor.png'
import nicolas from '@/images/nicolas.png'
import rodrigo from '@/images/rodrigo.png'

export default function Match() {
  // mocks:
  const musics = [
    { position: 1, title: "Teoria Dinâmica Gastativa", subtitle: "História de Verão", imageUrl: cd },
    { position: 2, title: "Teoria Dinâmica Gastativa", subtitle: "História de Verão", imageUrl: cd },
    { position: 3, title: "Teoria Dinâmica Gastativa", subtitle: "História de Verão", imageUrl: cd },
    { position: 4, title: "Teoria Dinâmica Gastativa", subtitle: "História de Verão", imageUrl: cd },
    { position: 5, title: "Teoria Dinâmica Gastativa", subtitle: "História de Verão", imageUrl: cd },
    { position: 6, title: "Teoria Dinâmica Gastativa", subtitle: "História de Verão", imageUrl: cd },
    { position: 7, title: "Teoria Dinâmica Gastativa", subtitle: "História de Verão", imageUrl: cd },
    { position: 8, title: "Teoria Dinâmica Gastativa", subtitle: "História de Verão", imageUrl: cd },
    { position: 9, title: "Teoria Dinâmica Gastativa", subtitle: "História de Verão", imageUrl: cd },
    { position: 10, title: "Teoria Dinâmica Gastativa", subtitle: "História de Verão", imageUrl: cd },
  ];
  const percentages = [85, 60, 47, 32];

  const images = [
    { url: danilo, name: "Danilo" },
    { url: vitor, name: "Vitor" },
    { url: nicolas, name: "Nicolas" },
    { url: rodrigo, name: "Rodrigo" }
  ];

  return (
    <main className="p-4 lg:px-40">
      <Image src={Logo} alt="Logotipo Forfun TOP10" className="object-fill pl-8 pb-3 pt-5" priority />
      <section className="pl-3 pt-2">
        <div className="grid grid-cols-2 gap-6">
          {musics.map((music) => (
            <MusicItem key={music.position} position={music.position} title={music.title} subtitle={music.subtitle} imageUrl={music.imageUrl} />
          ))}
        </div>
      </section>

      <section className="mt-10 font-dm font-medium text-2xl">
        <h1>Match com a banda</h1>

        <div className="grid grid-cols-2 gap-4">
          {percentages.map((percentage, index) => (
            <ProgressCircle key={percentage} percentage={percentage} imageUrl={images[index].url} altText={`Foto do ${images[index].name}`} />
          ))}
        </div>
      </section>

      <div className="text-center">
        <PrimaryButton text="Encontra o Match Perfeito"/>
      </div>

    </main>
  );
};
