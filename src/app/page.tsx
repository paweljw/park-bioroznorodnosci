import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex w-full flex-col">
      <h1 className="w-full bg-green-900 p-4 px-2 text-center text-[2rem] font-extrabold tracking-tight hyphens-auto text-neutral-50 md:p-8 md:text-4xl lg:text-5xl">
        <Link
          href="/"
          className="block transition-all duration-100 hover:scale-101"
        >
          Park Bioróżnorodności w Sosnowcu
        </Link>
      </h1>
    </div>
  );
}
