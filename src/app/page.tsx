import Image from "next/image";
import Link from "next/link";
import { LoadingFilms } from "@/components/LoadingFilms";
import { Suspense } from "react";
import { Films } from "@/components/Films";

export default function Home() {
  return (
    <main className="flex py-10 px-24 flex-col justify-center items-center gap-9 min-h-screen max-w-7xl mx-auto">
      <header className="w-full flex flex-col gap-5 md:flex-row items-center justify-between">
        <Link href="/">
          <Image src="/logo.svg" alt="Logo" width={85} height={44} />
        </Link>
      </header>

      <Suspense fallback={<LoadingFilms />}>
        <Films />
      </Suspense>
    </main>
  );
}
