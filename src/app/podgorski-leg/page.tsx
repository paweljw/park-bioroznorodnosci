import type { Metadata } from "next";
import Link from "next/link";
import Masthead from "~/components/Masthead";

export const metadata: Metadata = {
  title: "Podgórski łęg",
};

export default function PodgorskiLegPage() {
  return (
    <div className="flex w-full flex-col">
      <Masthead>Podgórski łęg</Masthead>
      <blockquote className="relative mx-auto w-full max-w-4xl p-4 italic before:float-left before:p-2 before:text-5xl before:text-gray-400 before:content-['❝'] after:float-right after:p-2 after:text-5xl after:text-gray-400 after:content-['❞']">
        Zespół leśny kształtujący się w dolinach niewielkich zwykle cieków o
        znacznym spadku oraz w obrębie źródlisk; na glebach bardzo żyznych,
        drobnoziarnistych, zwykle madach z zachodzącym procesem darniowym
        (czarnoziemnym) i brunatnienia, czasem też z procesem bagiennym
        skutkującym powstawaniem mułu, o odczynie obojętnym lub lekko zasadowym.
      </blockquote>
      <p className="mx-auto max-w-4xl p-4 text-center text-sm text-gray-500">
        Za:{" "}
        <Link
          href="https://pl.wikipedia.org/wiki/Podg%C3%B3rski_%C5%82%C4%99g_jesionowy"
          className="text-blue-500 underline"
        >
          Podgórski łęg jesionowy - Wikipedia, wolna encyklopedia
        </Link>
      </p>
    </div>
  );
}
