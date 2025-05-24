"use client";

import Link from "next/link";
import { useState } from "react";

export default function Map() {
  const defaults = "inline hover:cursor-pointer transition-all duration-100";
  const stroke = "stroke-black stroke-6";

  const sectionBase = `${defaults} ${stroke}`;

  const [currentHover, setCurrentHover] = useState<string | null>(null);

  const getSectionClass = (section: string, defaultClass: string) => {
    return `${sectionBase} ${defaultClass} ${currentHover === section ? "stroke-emerald-600 stroke-10" : ""}`;
  };

  const getTextClass = (
    section: string,
    defaultClass: string,
    setClass: string,
  ) => {
    return `${defaultClass} ${currentHover === section ? "transition-all duration-100 underline " + setClass : "transition-all duration-100 "}`;
  };

  return (
    <div className="flex flex-col gap-2 md:gap-8 md:pt-3">
      <div className="max-h-[65vh] w-full resize-x p-2">
        {/* Mapa wlasciwa */}
        <svg
          version="1.1"
          id="map"
          viewBox="0 0 1405 1824"
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
          className="max-h-[65vh] w-full object-contain"
        >
          {/* Brak interakcji - miejsca bez znaczenia "botanicznego" */}
          <path
            d="M 759.28552,150.19537 791.88111,108.01284 888.38962,47.934692 1398.4147,194.29528 1266.5458,449.0996 1108.8892,400.73402 1170.2456,288.88641 Z"
            id="map-wejscie-pn"
            className={`${sectionBase} fill-stone-400 hover:opacity-100`}
          />
          <path
            d="m 985.23767,360.68858 36.13933,11.83985 -39.99408,81.85534 -54.96511,107.67389 -45.32169,89.81704 -18.39151,35.94818 -136.49403,253.14882 -113.3256,205.1868 -51.21023,-14.1009 295.47193,-534.15076 z"
            id="map-alejka"
            className={`${sectionBase} fill-cyan-200`}
          />

          {/* Sekcje parku */}
          <Link href="/rosliny-wrzosowate">
            <path
              d="M 1266.4346,449.30784 1022.2872,372.9319 862.50489,688.02261 1098.024,764.71811 Z"
              id="map-rosliny-wrzosowate"
              className={getSectionClass(
                "rosliny-wrzosowate",
                "fill-violet-900",
              )}
              onMouseEnter={() => setCurrentHover("rosliny-wrzosowate")}
              onMouseLeave={() => setCurrentHover(null)}
            />
          </Link>

          <Link href="/laka-rajgrasowa">
            <path
              d="M 1109.2686,400.18632 1020.4639,372.27948 985.21308,360.64222 857.31616,597.90684 595.68771,506.11145 597.00297,343.92071 759.47274,150.04162 1170.6184,288.89792 Z"
              id="map-laka-rajgrasowa"
              className={getSectionClass("laka-rajgrasowa", "fill-blue-900")}
              onMouseEnter={() => setCurrentHover("laka-rajgrasowa")}
              onMouseLeave={() => setCurrentHover(null)}
            />
          </Link>

          <Link href="/rosliny-srodkowoeuropejskie">
            <path
              d="m 862.50488,688.02261 391.15622,127.94171 -67.7899,125.18533 -39.0922,-10.39445 -39.996,68.91973 -40.448,-16.49554 -55.8137,12.20218 -149.81565,-75.24678 -134.67592,21.24083 z"
              id="map-rosliny-srodkowoeuropejskie"
              className={getSectionClass(
                "rosliny-srodkowoeuropejskie",
                "fill-pink-300",
              )}
              onMouseEnter={() =>
                setCurrentHover("rosliny-srodkowoeuropejskie")
              }
              onMouseLeave={() => setCurrentHover(null)}
            />
          </Link>

          <Link href="/brzezina">
            <path
              d="m 726.0508,941.27756 134.68845,-21.10981 149.66755,75.2018 -172.18882,238.46945 -55.60425,-96.189 -92.35417,6.3913 -7.03042,34.8326 -70.30422,-32.9152 z"
              id="map-brzezina"
              className={getSectionClass("brzezina", "fill-emerald-200")}
              onMouseEnter={() => setCurrentHover("brzezina")}
              onMouseLeave={() => setCurrentHover(null)}
            />
          </Link>

          <Link href="/leg-topolowy">
            <path
              d="m 837.93836,1234.1985 -55.24473,-96.5085 -92.39412,6.3912 -7.07037,34.8326 -70.30421,-32.9951 -184.229,280.7775 194.1355,103.6987 z"
              id="map-leg-topolowy"
              className={getSectionClass("leg-topolowy", "fill-yellow-300")}
              onMouseEnter={() => setCurrentHover("leg-topolowy")}
              onMouseLeave={() => setCurrentHover(null)}
            />
          </Link>

          <Link href="/leg-wierzbowy">
            <path
              d="m 622.81962,1530.4133 651.60408,285.9919 74.139,-75.4172 -202.9236,-119.5172 -48.5738,26.2043 -112.16717,-73.8194 27.80217,-36.7499 -280.95216,-156.7174 z"
              id="map-leg-wierzbowy"
              className={getSectionClass("leg-wierzbowy", "fill-amber-500")}
              onMouseEnter={() => setCurrentHover("leg-wierzbowy")}
              onMouseLeave={() => setCurrentHover(null)}
            />
          </Link>

          <Link href="/grad-subkontynentalny">
            <path
              d="M 791.90694,107.97312 630.89792,55.813677 190.71556,8.3607532 18.529237,177.15758 308.66997,299.17939 301.43905,423.68682 595.69667,506.0162 597.3899,343.60233 759.57887,149.86931 Z"
              id="map-subkontynentalny"
              className={getSectionClass("subkontynentalny", "fill-green-700")}
              onMouseEnter={() => setCurrentHover("subkontynentalny")}
              onMouseLeave={() => setCurrentHover(null)}
            />
          </Link>

          <Link href="/subatlantycki-bor">
            <path
              d="M 595.42876,506.03056 593.07197,505.31155 301.10976,423.58289 88.519397,772.70723 49.852079,758.64639 9.2673737,816.80715 8.6282445,856.75272 311.42707,1033.4592 l 25.77175,-32.8831 -177.09695,-185.36678 79.4118,-123.83129 85.64333,29.08039 57.04227,-88.35962 133.25845,48.57382 z"
              id="map-subatlantycki-bor"
              className={getSectionClass("subatlantycki-bor", "fill-rose-900")}
              onMouseEnter={() => setCurrentHover("subatlantycki-bor")}
              onMouseLeave={() => setCurrentHover(null)}
            />
          </Link>

          <Link href="/ols-porzeczkowy">
            <path
              d="m 857.31197,597.90539 -261.86323,-91.87483 -80.23638,175.14079 -36.02523,61.49681 74.13899,71.26291 -37.8684,59.91836 21.41083,110.88892 -69.98465,120.31605 94.7509,27.0032 z"
              id="map-ols-porzeczkowy"
              className={getSectionClass("ols-porzeczkowy", "fill-orange-700")}
              onMouseEnter={() => setCurrentHover("ols-porzeczkowy")}
              onMouseLeave={() => setCurrentHover(null)}
            />
          </Link>

          <Link href="/buczyna-karpacka">
            <path
              d="m 311.53555,1033.4719 43.8203,55.9239 111.59678,15.7217 69.95587,-120.3392 -21.3378,-110.8998 37.81191,-60.09753 -73.99575,-71.2726 35.9603,-61.74374 -133.08613,-48.68881 -57.08407,88.32267 -85.64331,-29.04043 -79.39183,123.73143 176.91896,185.46731 z"
              id="map-buczyna-karpacka"
              className={getSectionClass(
                "buczyna-karpacka",
                "fill-emerald-700",
              )}
              onMouseEnter={() => setCurrentHover("buczyna-karpacka")}
              onMouseLeave={() => setCurrentHover(null)}
            />
          </Link>

          <Link href="/podgorski-leg">
            <path
              d="M 612.67938,1146.2424 561.6675,1132.0911 467.061,1105.1425 355.44499,1089.3836 311.60754,1033.5134 171.28246,1198.5253 4.0673935,1109.9465 v 88.1268 l 424.5341965,228.565 z"
              id="map-podgorski-leg"
              className={getSectionClass("podgorski-leg", "fill-orange-500")}
              onMouseEnter={() => setCurrentHover("podgorski-leg")}
              onMouseLeave={() => setCurrentHover(null)}
            />
          </Link>

          {/* FIXME: Sprawdzic w realu co to jest :s */}
          <path
            d="m 981.38291,454.42087 77.65419,24.28692 49.972,-78.57296 -87.6806,-27.84206 z"
            id="map-dunno-1"
            className={`${sectionBase} fill-lime-200 hover:opacity-100`}
            onMouseEnter={() => setCurrentHover("dunno-1")}
            onMouseLeave={() => setCurrentHover(null)}
          />
          <path
            d="m 881.03963,651.9118 71.42269,22.84888 47.61518,-87.88027 -73.6597,-24.76625 z"
            id="map-dunno-2"
            className={`${sectionBase} fill-lime-200 hover:opacity-100`}
            onMouseEnter={() => setCurrentHover("dunno-2")}
            onMouseLeave={() => setCurrentHover(null)}
          />

          {/* Bramy */}
          <circle
            id="map-brama-polnocna"
            cx="1131.7986"
            cy="116.78851"
            r="31.453564"
            className={getSectionClass("brama", "fill-red-700")}
            onMouseEnter={() => setCurrentHover("brama")}
            onMouseLeave={() => setCurrentHover(null)}
          />
          <circle
            id="map-brama-poludniowa"
            cx="430.69571"
            cy="1423.6306"
            r="31.453564"
            className={getSectionClass("brama", "fill-red-700")}
            onMouseEnter={() => setCurrentHover("brama")}
            onMouseLeave={() => setCurrentHover(null)}
          />

          {/* Oczka wodne */}
          <ellipse
            id="map-oczko-polnoc"
            cx="634.39917"
            cy="645.81836"
            rx="42.465504"
            ry="34.556683"
            className={getSectionClass("oczko", "fill-cyan-500")}
            onMouseEnter={() => setCurrentHover("oczko")}
            onMouseLeave={() => setCurrentHover(null)}
          />
          <ellipse
            id="map-oczko-zachod"
            cx="474.10187"
            cy="935.29901"
            rx="42.465504"
            ry="34.556683"
            className={getSectionClass("oczko", "fill-cyan-500")}
            onMouseEnter={() => setCurrentHover("oczko")}
            onMouseLeave={() => setCurrentHover(null)}
          />
          <ellipse
            id="map-oczko-wschod"
            cx="876.74927"
            cy="878.7829"
            rx="42.465504"
            ry="34.556683"
            className={getSectionClass("oczko", "fill-cyan-500")}
            onMouseEnter={() => setCurrentHover("oczko")}
            onMouseLeave={() => setCurrentHover(null)}
          />
        </svg>
      </div>
      <div className="flex flex-col gap-2">
        <ul className="flex flex-col gap-2 px-4 md:flex-row md:flex-wrap md:justify-center md:gap-4">
          <li
            className="flex cursor-pointer items-center gap-2"
            onMouseEnter={() => setCurrentHover("subatlantycki-bor")}
            onMouseLeave={() => setCurrentHover(null)}
          >
            <span className="inline-block h-10 w-10 rounded-full border-4 border-black bg-rose-900"></span>
            <Link
              href="/subatlantycki-bor"
              className={getTextClass(
                "subatlantycki-bor",
                "text-xl font-bold",
                "text-rose-900",
              )}
            >
              Subatlantycki bór
            </Link>
          </li>
          <li
            className="flex cursor-pointer items-center gap-2"
            onMouseEnter={() => setCurrentHover("ols-porzeczkowy")}
            onMouseLeave={() => setCurrentHover(null)}
          >
            <span className="inline-block h-10 w-10 rounded-full border-4 border-black bg-orange-700"></span>
            <Link
              href="/ols-porzeczkowy"
              className={getTextClass(
                "ols-porzeczkowy",
                "text-xl font-bold",
                "text-orange-700",
              )}
            >
              Ols porzeczkowy
            </Link>
          </li>
          <li
            className="flex cursor-pointer items-center gap-2"
            onMouseEnter={() => setCurrentHover("podgorski-leg")}
            onMouseLeave={() => setCurrentHover(null)}
          >
            <span className="inline-block h-10 w-10 rounded-full border-4 border-black bg-orange-500"></span>
            <Link
              href="/podgorski-leg"
              className={getTextClass(
                "podgorski-leg",
                "text-xl font-bold",
                "text-orange-500",
              )}
            >
              Podgórski łęg
            </Link>
          </li>
          <li
            className="flex cursor-pointer items-center gap-2"
            onMouseEnter={() => setCurrentHover("leg-wierzbowy")}
            onMouseLeave={() => setCurrentHover(null)}
          >
            <span className="inline-block h-10 w-10 rounded-full border-4 border-black bg-amber-500"></span>
            <Link
              href="/leg-wierzbowy"
              className={getTextClass(
                "leg-wierzbowy",
                "text-xl font-bold",
                "text-amber-700",
              )}
            >
              Łęg wierzbowy
            </Link>
          </li>
          <li
            className="flex cursor-pointer items-center gap-2"
            onMouseEnter={() => setCurrentHover("leg-topolowy")}
            onMouseLeave={() => setCurrentHover(null)}
          >
            <span className="inline-block h-10 w-10 rounded-full border-4 border-black bg-yellow-300"></span>
            <Link
              href="/leg-topolowy"
              className={getTextClass(
                "leg-topolowy",
                "text-xl font-bold",
                "text-yellow-700",
              )}
            >
              Łęg topolowy
            </Link>
          </li>
          <li
            className="flex cursor-pointer items-center gap-2"
            onMouseEnter={() => setCurrentHover("subkontynentalny")}
            onMouseLeave={() => setCurrentHover(null)}
          >
            <span className="inline-block h-10 w-10 rounded-full border-4 border-black bg-green-700"></span>
            <Link
              href="/grad-subkontynentalny"
              className={getTextClass(
                "subkontynentalny",
                "text-xl font-bold",
                "text-green-700",
              )}
            >
              Grąd subkontynentalny
            </Link>
          </li>
          <li
            className="flex cursor-pointer items-center gap-2"
            onMouseEnter={() => setCurrentHover("buczyna-karpacka")}
            onMouseLeave={() => setCurrentHover(null)}
          >
            <span className="inline-block h-10 w-10 rounded-full border-4 border-black bg-emerald-700"></span>
            <Link
              href="/buczyna-karpacka"
              className={getTextClass(
                "buczyna-karpacka",
                "text-xl font-bold",
                "text-emerald-700",
              )}
            >
              Buczyna karpacka
            </Link>
          </li>
          <li
            className="flex cursor-pointer items-center gap-2"
            onMouseEnter={() => setCurrentHover("brzezina")}
            onMouseLeave={() => setCurrentHover(null)}
          >
            <span className="inline-block h-10 w-10 rounded-full border-4 border-black bg-emerald-200"></span>
            <Link
              href="/brzezina"
              className={getTextClass(
                "brzezina",
                "text-xl font-bold",
                "text-emerald-700",
              )}
            >
              Brzezina
            </Link>
          </li>
          <li
            className="flex cursor-pointer items-center gap-2"
            onMouseEnter={() => setCurrentHover("laka-rajgrasowa")}
            onMouseLeave={() => setCurrentHover(null)}
          >
            <span className="inline-block h-10 w-10 rounded-full border-4 border-black bg-blue-900"></span>
            <Link
              href="/laka-rajgrasowa"
              className={getTextClass(
                "laka-rajgrasowa",
                "text-xl font-bold",
                "text-blue-900",
              )}
            >
              Łąka rajgrasowa
            </Link>
          </li>
          <li
            className="flex cursor-pointer items-center gap-2"
            onMouseEnter={() => setCurrentHover("rosliny-wrzosowate")}
            onMouseLeave={() => setCurrentHover(null)}
          >
            <span className="inline-block h-10 w-10 rounded-full border-4 border-black bg-violet-900"></span>
            <Link
              href="/rosliny-wrzosowate"
              className={getTextClass(
                "rosliny-wrzosowate",
                "text-xl font-bold",
                "text-violet-900",
              )}
            >
              Rośliny wrzosowate
            </Link>
          </li>
          <li
            className="flex cursor-pointer items-center gap-2"
            onMouseEnter={() => setCurrentHover("rosliny-srodkowoeuropejskie")}
            onMouseLeave={() => setCurrentHover(null)}
          >
            <span className="inline-block h-10 w-10 rounded-full border-4 border-black bg-pink-300"></span>
            <Link
              href="/rosliny-srodkowoeuropejskie"
              className={getTextClass(
                "rosliny-srodkowoeuropejskie",
                "text-xl font-bold",
                "text-pink-500",
              )}
            >
              Rośliny srodkowoeuropejskie
            </Link>
          </li>
          <li
            className="flex cursor-pointer items-center gap-2"
            onMouseEnter={() => setCurrentHover("oczko")}
            onMouseLeave={() => setCurrentHover(null)}
          >
            <span className="inline-block h-10 w-10 rounded-full border-4 border-black bg-cyan-500"></span>
            <span
              className={getTextClass(
                "oczko",
                "text-xl font-bold",
                "text-cyan-500",
              )}
            >
              Oczka wodne
            </span>
          </li>
          <li
            className="flex cursor-pointer items-center gap-2"
            onMouseEnter={() => setCurrentHover("brama")}
            onMouseLeave={() => setCurrentHover(null)}
          >
            <span className="inline-block h-10 w-10 rounded-full border-4 border-black bg-red-700"></span>
            <span
              className={getTextClass(
                "brama",
                "text-xl font-bold",
                "text-red-700",
              )}
            >
              Bramy
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
