import type { Metadata } from "next";
import Link from "next/link";
import Masthead from "~/components/Masthead";

export const metadata: Metadata = {
  title: "Łąka rajgrasowa",
};

export default function LakaRajgrasowaPage() {
  return (
    <div className="flex w-full flex-col">
      <Masthead>Łąka rajgrasowa</Masthead>
      <blockquote className="relative mx-auto w-full max-w-4xl p-4 italic before:float-left before:p-2 before:text-5xl before:text-gray-400 before:content-['❝'] after:float-right after:p-2 after:text-5xl after:text-gray-400 after:content-['❞']">
        Roślinność łąk rajgrasowych cechuje duże zróżnicowanie florystyczne
        spowodowane przez różnorodność siedlisk przez nie zajmowanych. Rozwijają
        się one na potencjalnych siedliskach lasów gradowych (Carpinion 41.2)
        oraz na najsuchszych siedliskach łęgowych (Ficario-Ulmetum 44.41).
        Występują prawie na całym obszarze kraju, z wyjątkiem wyższych położeń w
        górach. Wykształcają się najczęściej na obrzeżach dolin i wilgotnych
        kotlin. Uboższe florystycznie typy zbiorowiska porastają zbocza nasypów
        kolejowych, przydroża oraz ugory. Często notowane są w przesuszonych
        częściach dolin rzek (...)
      </blockquote>
      <p className="mx-auto max-w-4xl p-4 text-center text-sm text-gray-500">
        Za:{" "}
        <Link
          href="https://www.wigry.org.pl/siedliska/6510_1.htm"
          className="text-blue-500 underline"
        >
          Natura 2000, kod siedliska: 6510-1
        </Link>
      </p>
    </div>
  );
}
