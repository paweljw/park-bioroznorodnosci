import "~/styles/globals.css";

import { type Metadata, type Viewport } from "next";
import { Figtree } from "next/font/google";

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
        <main className="container mx-auto flex min-h-screen flex-col items-center bg-white text-black">
          {children}
        </main>
      </body>
    </html>
  );
}
