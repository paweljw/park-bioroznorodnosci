import type { Metadata } from "next";
import Link from "next/link";
import Masthead from "~/components/Masthead";

export const metadata: Metadata = {
  title: "Buczyna karpacka",
};

export default function BuczynaKarpackaPage() {
  return (
    <div className="flex w-full flex-col">
      <Masthead>Buczyna karpacka</Masthead>
      <blockquote className="relative mx-auto w-full max-w-4xl p-4 italic before:float-left before:p-2 before:text-5xl before:text-gray-400 before:content-['❝'] after:float-right after:p-2 after:text-5xl after:text-gray-400 after:content-['❞']">
        Zespół roślinności należący do związku Fagion sylvaticae grupującego
        lasy bukowe. Jest to zespół leśny, który niegdyś zajmował niemal całe
        piętro regla dolnego w Karpatach od ok. 600 do 1150 m n.p.m. Obecnie
        jeszcze zachował się w nienaruszonym stanie w niektórych trudno
        dostępnych miejscach. Buczyna ta charakteryzuje się domieszką jodły,
        wiązu górskiego i jaworu. W wyższych partiach miejsce jodły zajmuje
        świerk. Dominujący gatunek - buk zwyczajny osiąga często ogromne
        rozmiary. Tworzy zwarte i cieniste drzewostany z szerokimi koronami i
        rzadko rozstawionymi pniami ogromnych drzew.
      </blockquote>
      <p className="mx-auto max-w-4xl p-4 text-center text-sm text-gray-500">
        Za:{" "}
        <Link
          href="https://pl.wikipedia.org/wiki/%C5%BByzna_buczyna_karpacka"
          className="text-blue-500 underline"
        >
          Żyzna buczyna karpacka - Wikipedia, wolna encyklopedia
        </Link>
      </p>
    </div>
  );
}
