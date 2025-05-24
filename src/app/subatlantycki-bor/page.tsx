import type { Metadata } from "next";
import Link from "next/link";
import Masthead from "~/components/Masthead";

export const metadata: Metadata = {
  title: "Subatlantycki bór",
};

export default function SubatlantyckiBorPage() {
  return (
    <div className="flex w-full flex-col">
      <Masthead>Subatlantycki bór</Masthead>
      <blockquote className="relative mx-auto w-full max-w-4xl p-4 italic before:float-left before:p-2 before:text-5xl before:text-gray-400 before:content-['❝'] after:float-right after:p-2 after:text-5xl after:text-gray-400 after:content-['❞']">
        Jeden z zespołów leśnych. Drzewostan zespołu tworzy sosna zwyczajna z
        domieszką brzozy brodawkowatej, dębu bezszypułkowego i świerka. W
        podszycie dominują jałowce, kruszyna i jarzębina, w runie – borówka
        czarna, borówka brusznica, wrzos oraz śmiałek pogięty. Bujna jest także
        warstwa mszysta utworzona między innymi przez rokiet, płonnik i
        bielistkę w miejscach bardziej wilgotnych. Miejsca suchsze i
        prześwietlone opanowują porosty.
      </blockquote>
      <p className="mx-auto max-w-4xl p-4 text-center text-sm text-gray-500">
        Za:{" "}
        <Link
          href="https://pl.wikipedia.org/wiki/Suboceaniczny_b%C3%B3r_sosnowy_%C5%9Bwie%C5%BCy"
          className="text-blue-500 underline"
        >
          Suboceaniczny bór sosnowy świeży - Wikipedia, wolna encyklopedia
        </Link>
      </p>
    </div>
  );
}
