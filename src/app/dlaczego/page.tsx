import type { Metadata } from "next";
import Link from "next/link";
import Masthead from "~/components/Masthead";

export const metadata: Metadata = {
  title: "Dlaczego ta strona istnieje?",
};

export default function DlaczegoIstniejePage() {
  return (
    <div className="flex w-full flex-col gap-4 text-justify">
      <Masthead>Dlaczego ta strona istnieje?</Masthead>
      <p className="mx-auto max-w-4xl px-4">
        W maju 2025 roku zeskanowałem - tak jak zapewne i Ty - kod QR na tablicy
        w Parku Bioróżnorodności. Zauważyłem, że domena
        park-bioroznorodnosci.pl, do której ten kod kieruje, wygasła.
      </p>
      <p className="mx-auto max-w-4xl px-4">
        To nie jest bezpieczna sytuacja. Wiele osób może zeskanować ten kod. W
        najgorszym przypadku domenę przejąłby ktoś, kto nie ma dobrych zamiarów:
        może chciałby tylko zarobić na reklamach, a może zainfekować urządzenia
        przechodniów szkodliwym oprogramowaniem.
      </p>
      <p className="mx-auto max-w-4xl px-4">
        Właściwie nie wiadomo komu zgłosić taki problem. Egzotarium, może
        Urzędowi Miasta? Jestem przekonany że oficjalna ścieżka byłaby długa -
        oraz niemal pewien że zostałbym potraktowany jako natręt i/lub
        zignorowany.
      </p>
      <p className="mx-auto max-w-4xl px-4">
        Zamiast tego sam przejąłem tę domenę i umieściłem na niej tę stronę. W
        tej chwili jest lepsza niż nic, a z czasem będzie coraz bardziej
        dopracowana.
      </p>
      <p className="mx-auto max-w-4xl px-4">
        Jeśli czyta to ktoś kto powinien był być odpowiedzialny za tę domenę -
        zapraszam do kontaktu. Chętnie opiszę tutaj jak długo będę na taki
        kontakt czekał 😁
      </p>
      <p className="mx-auto w-full max-w-4xl px-4 text-right">
        Paweł J. Wal
        <br />
        przypadkowy webmaster
        <br />
        <Link
          href="mailto:apka@park-bioroznorodnosci.pl"
          className="text-blue-500 underline"
        >
          apka@park-bioroznorodnosci.pl
        </Link>
      </p>
    </div>
  );
}
