import type { Metadata } from "next";
import Link from "next/link";
import Masthead from "~/components/Masthead";

export const metadata: Metadata = {
  title: "Łęg topolowy",
};

export default function LegTopolowyPage() {
  return (
    <div className="flex w-full flex-col">
      <Masthead>Łęg topolowy</Masthead>
      <blockquote className="relative mx-auto w-full max-w-4xl p-4 italic before:float-left before:p-2 before:text-5xl before:text-gray-400 before:content-['❝'] after:float-right after:p-2 after:text-5xl after:text-gray-400 after:content-['❞']">
        Występuje w dolinach wielkich i średnich rzek, gdzie w obrębie terasy
        zalewowej zajmuje miejsca stosunkowo wyższe i lepiej utrwalone, zwykle
        oddalone od nurtu. Okresowy zalew występuje często, lecz nie w każdym
        roku, trwa krótko i akumuluje mieszany materiał piaszczysto-gliniasty.
        Drzewostan budują topole – biała, czarna i szara z domieszką wierzb –
        białej i kruchej, wiązów – szypułkowego i polnego, dębu szypułkowego i
        olszy czarnej. Warstwę krzewów tworzą: trzmielina pospolita, czeremcha,
        porzeczka dzika, bez czarny, głogi – jednoszyjkowy i dwuszyjkowy oraz
        dereń świdwa. Częstymi komponentami zwykle bujnej warstwy zielnej są:
        pokrzywa zwyczajna, jeżyna popielica, przytulia czepna, bluszczyk
        kurdybanek, czosnaczek pospolity, kuklik pospolity.
      </blockquote>
      <p className="mx-auto max-w-4xl p-4 text-center text-sm text-gray-500">
        Za:{" "}
        <Link
          href="https://encyklopedialesna.com/haslo/leg-topolowy/"
          className="text-blue-500 underline"
        >
          Łęg topolowy - Encyklopedia Leśna
        </Link>
      </p>
    </div>
  );
}
