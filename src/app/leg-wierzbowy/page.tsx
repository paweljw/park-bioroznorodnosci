import type { Metadata } from "next";
import Link from "next/link";
import Masthead from "~/components/Masthead";

export const metadata: Metadata = {
  title: "Łęg wierzbowy",
};

export default function PodgorskiLegPage() {
  return (
    <div className="flex w-full flex-col">
      <Masthead>Łęg wierzbowy</Masthead>
      <blockquote className="relative mx-auto w-full max-w-4xl p-4 italic before:float-left before:p-2 before:text-5xl before:text-gray-400 before:content-['❝'] after:float-right after:p-2 after:text-5xl after:text-gray-400 after:content-['❞']">
        Łęg wierzbowy (Salicetum triandro-viminalis) – młode zbiorowisko
        roślinności łęgowej rozwijające się z czasem w lasy. W skład łęgu
        wierzbowego wchodzi Salix purpurea, S. viminalis, S. trianda i inne.
        Dojrzałym stadium tego zbiorowiska leśnego jest łęg wierzbowo-topolowy
        (Salicetum albo-fragilis).
      </blockquote>
      <p className="mx-auto max-w-4xl p-4 text-center text-sm text-gray-500">
        Za:{" "}
        <Link
          href="https://pl.wikipedia.org/wiki/%C5%81%C4%99g_wierzbowy"
          className="text-blue-500 underline"
        >
          Łęg wierzbowy - Wikipedia, wolna encyklopedia
        </Link>
      </p>
    </div>
  );
}
