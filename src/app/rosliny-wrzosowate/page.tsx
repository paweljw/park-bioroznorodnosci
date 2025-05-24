import type { Metadata } from "next";
import Link from "next/link";
import Masthead from "~/components/Masthead";

export const metadata: Metadata = {
  title: "Rośliny wrzosowate",
};

export default function RoslinyWrzosowatePage() {
  return (
    <div className="flex w-full flex-col">
      <Masthead>Rośliny wrzosowate</Masthead>
      <blockquote className="relative mx-auto w-full max-w-4xl p-4 italic before:float-left before:p-2 before:text-5xl before:text-gray-400 before:content-['❝'] after:float-right after:p-2 after:text-5xl after:text-gray-400 after:content-['❞']">
        Rodzina roślin krzewinkowych, krzewiastych lub drzew z rzędu wrzosowców
        (Ericales). Obejmuje ok. 4 tysiące gatunków skupionych w 126 rodzajach.
        Wrzosowate występują na wszystkich kontynentach z wyjątkiem Antarktydy,
        sięgając głęboko w strefę arktyczną i subantarktyczną. Brak ich lub mają
        znikomy udział we florze wielkich pustyń, w strefie tropikalnej (poza
        górami) i na terenach zasolonych. Rośliny te preferują siedliska z
        kwaśnymi glebami. Do flory polskiej należy 13 rodzajów.
      </blockquote>
      <p className="mx-auto max-w-4xl p-4 text-center text-sm text-gray-500">
        Za:{" "}
        <Link
          href="https://pl.wikipedia.org/wiki/Wrzosowate"
          className="text-blue-500 underline"
        >
          Wrzosowate - Wikipedia, wolna encyklopedia
        </Link>
      </p>
    </div>
  );
}
