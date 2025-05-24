import type { Metadata } from "next";
import Link from "next/link";
import Masthead from "~/components/Masthead";

export const metadata: Metadata = {
  title: "Grąd subkontynentalny",
};

export default function GradSubkontynentalnyPage() {
  return (
    <div className="flex w-full flex-col">
      <Masthead>Grąd subkontynentalny</Masthead>
      <blockquote className="relative mx-auto w-full max-w-4xl p-4 italic before:float-left before:p-2 before:text-5xl before:text-gray-400 before:content-['❝'] after:float-right after:p-2 after:text-5xl after:text-gray-400 after:content-['❞']">
        Występuje we wschodniej części kraju, na północy od Pojezierza
        Mazurskiego i Wysoczyzny Białostockiej, a na południu po Wyżynę
        Małopolską, Północne Podkarpacie oraz pogórze Karpat, w warunkach
        klimatu umiarkowanie kontynentalnego; podłoże i gleby takie jak w
        charakterystyce grądu środkowoeuropejskiego. Gatunki główne w
        drzewostanie - grab, dąb szypułkowy, lipa drobnolistna; gatunki
        domieszkowe: klon pospolity, świerk (w południowej i północno-wschodniej
        Polsce), buk i jodła (na południu), dąb bezszypułkowy, kolon jawor,
        brzozy - brodawkowata i omszona, osika i jabłoń dzika oraz modrzew
        polski (w granicach zasięgu); na siedliskach wilgotnych również jesion,
        olsza czarna oraz wiązy - górski, polny i szypułkowy. Warstwa krzewów
        może być w różnym stopniu rozwinięta, zazwyczaj jest lepiej wykształcona
        na siedliskach żyźniejszych i wilgotniejszych. Oprócz podrostu drzew w
        jej skład wchodzą: leszczyna pospolita, trzmieliny - pospolita i
        brodawkowata, kruszyna pospolita, czeremcha zwyczajna, głóg
        jednoszyjkowy, suchodrzew pospolity, kalina koralowa i jarząb pospolity,
        rzadziej inne gatunki, np. wawrzynek wilczełyko, czy kłokoczka
        południowa (w południowych rejonach Polski).
      </blockquote>
      <p className="mx-auto max-w-4xl p-4 text-center text-sm text-gray-500">
        Za:{" "}
        <Link
          href="https://encyklopedialesna.com/haslo/grad-subkontynentalny/"
          className="text-blue-500 underline"
        >
          Grąd subkontynentalny - Encyklopedia Leśna
        </Link>
      </p>
    </div>
  );
}
