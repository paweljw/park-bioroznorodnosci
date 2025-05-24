import type { Metadata } from "next";
import Link from "next/link";
import Masthead from "~/components/Masthead";

export const metadata: Metadata = {
  title: "Rośliny środkowoeuropejskie",
};

export default function RoslinySrodkowoeuropejskiePage() {
  return (
    <div className="flex w-full flex-col">
      <Masthead>Rośliny środkowoeuropejskie</Masthead>
      <blockquote className="relative mx-auto w-full max-w-4xl p-4 italic before:float-left before:p-2 before:text-5xl before:text-gray-400 before:content-['❝'] after:float-right after:p-2 after:text-5xl after:text-gray-400 after:content-['❞']">
        [Grąd środkowoeuropejski] występuje w zachodniej Polsce (poza
        Pojezierzem Pomorskim). Oprócz gatunków charakterystycznych dla
        wszystkich grądów, takich jak grab pospolity (Carpinus betulus), lipa
        drobnolistna (Tilia cordata) i dąb szypułkowy (Quercus robur) w warstwie
        A (drzewostan) występuje ponadto buk pospolity (Fagus sylvatica), w
        podszycie jarząb brekinia (Sorbus torminalis), klon polny (Acer
        campestre) oraz róża polna (Rosa arvensis).
      </blockquote>
      <p className="mx-auto max-w-4xl p-4 text-center text-sm text-gray-500">
        Za:{" "}
        <Link
          href="https://pl.wikipedia.org/wiki/Gr%C4%85d_%C5%9Brodkowoeuropejski"
          className="text-blue-500 underline"
        >
          Grąd środkowoeuropejski - Wikipedia, wolna encyklopedia
        </Link>
      </p>
    </div>
  );
}
