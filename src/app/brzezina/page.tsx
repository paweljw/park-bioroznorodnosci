import type { Metadata } from "next";
import Link from "next/link";
import Masthead from "~/components/Masthead";

export const metadata: Metadata = {
  title: "Brzezina",
};

export default function BrzezinaPage() {
  return (
    <div className="flex w-full flex-col">
      <Masthead>Brzezina</Masthead>
      <blockquote className="relative mx-auto w-full max-w-4xl p-4 italic before:float-left before:p-2 before:text-5xl before:text-gray-400 before:content-['❝'] after:float-right after:p-2 after:text-5xl after:text-gray-400 after:content-['❞']">
        Zespół leśny w typie boru mieszanego bagiennego o nazwie naukowej
        Vaccinio uliginosi-Betuletum pubescentis Libbert 1933, z klasy
        Vaccinio-Piceetea, rzędu Piceetalia excelsae i związku Dicrano-Pinion,
        występujący w północno-zachodniej części Polski. Zasiedla zagłębienia
        terenu o wysokim poziome wód gruntowych, na podłożu piaszczystym lub
        piaszczysto-gliniastym z powierzchniową warstwą torfu typu przejściowego
        lub murszu; często są to brzegi zatorfionego zagłębienia, w którego
        centrum występuje bór bagienny. Czasami brzezina bagienna jest zespołem
        samodzielnie zajmującym płytkie zagłębienia albo wchodzi w kompleks z
        olsami lub acydofilnymi lasami brzozowo-dębowymi.
      </blockquote>
      <p className="mx-auto max-w-4xl p-4 text-center text-sm text-gray-500">
        Za:{" "}
        <Link
          href="https://encyklopedialesna.com/haslo/brzezina-bagienna/"
          className="text-blue-500 underline"
        >
          Brzezina bagienna - Encyklopedia Leśna
        </Link>
      </p>
    </div>
  );
}
