import type { Metadata } from "next";
import Link from "next/link";
import Masthead from "~/components/Masthead";

export const metadata: Metadata = {
  title: "Ols porzeczkowy",
};

export default function OlsPorzeczkowyPage() {
  return (
    <div className="flex w-full flex-col">
      <Masthead>Ols porzeczkowy</Masthead>
      <blockquote className="relative mx-auto w-full max-w-4xl p-4 italic before:float-left before:p-2 before:text-5xl before:text-gray-400 before:content-['❝'] after:float-right after:p-2 after:text-5xl after:text-gray-400 after:content-['❞']">
        Las z udziałem olszy czarnej i czarnej porzeczki o kępkowo-dolinkowej
        strukturze. Na kępkach gatunki roślinności leśnej, rzadziej borowej i
        łąkowej, w okresowo zalewanych dolinkach – szuwarowej i torfowiskowej
        (zwłaszcza ze związku Magnocaricion). Czasem podobny do zabagnionych
        postaci łęgu jesionowo-olszowego, który jednak nie ma struktury
        dolinowo-kępkowej, ma znaczny udział gatunków leśnych i łąkowych, a
        mniejszy udział gatunków szuwarowych.
      </blockquote>
      <p className="mx-auto max-w-4xl p-4 text-center text-sm text-gray-500">
        Za:{" "}
        <Link
          href="https://pl.wikipedia.org/wiki/Ols_porzeczkowy"
          className="text-blue-500 underline"
        >
          Ols porzeczkowy - Wikipedia, wolna encyklopedia
        </Link>
      </p>
    </div>
  );
}
