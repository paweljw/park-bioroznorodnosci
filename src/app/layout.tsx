import "~/styles/globals.css";

import { type Metadata, type Viewport } from "next";
import { Figtree } from "next/font/google";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    template: "%s | Park Bioróżnorodności w Sosnowcu",
    default: "Park Bioróżnorodności w Sosnowcu",
  },
  description:
    "Park Bioróżnorodności w Sosnowcu przy ulicach Kresowej oraz Piłsudskiego, obok Egzotarium.",
  keywords: [
    "sosnowiec",
    "park",
    "bioróżnorodność",
    "egzotarium",
    "sosnowiec park bioróżnorodności",
    "park w sosnowcu",
  ],
  authors: [{ name: "Paweł J. Wal", url: "https://cooling.coffee" }],
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "oklch(0.39, 0.1, 152.27, 1)", // tailwind: green-900
  colorScheme: "light",
};

const figtree = Figtree({
  subsets: ["latin", "latin-ext"],
  variable: "--font-figtree",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${figtree.variable}`}>
      <body className="bg-neutral-200">
        <div className="container mx-auto flex min-h-screen flex-col gap-8 bg-white">
          <main className="flex flex-grow flex-col items-center bg-white text-black">
            {children}
          </main>
          <footer className="flex flex-col items-center bg-white p-4 text-center text-black">
            <p className="text-sm text-gray-500">
              Zaprojektował i zbudował{" "}
              <Link
                href="https://cooling.coffee"
                className="text-blue-500 underline"
              >
                Paweł J. Wal
              </Link>
              . To jest nieoficjalna strona,{" "}
              <Link href="/dlaczego" className="text-blue-500 underline">
                zobacz dlaczego istnieje
              </Link>
              . Kontakt:{" "}
              <Link
                href="mailto:apka@park-bioroznorodnosci.pl"
                className="text-blue-500 underline"
              >
                apka@park-bioroznorodnosci.pl
              </Link>
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
