'use client';
import { Button } from "@/components/Button";
import { Lightning } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex py-16 px-24 flex-col justify-center items-center gap-9 min-h-screen">
      <header className="w-full flex items-center justify-between">
        <Link href='/'>
          <Image src='/logo.svg' alt='Logo' width={85} height={44} />
        </Link>

        <Button>
          Nova recomendação
          <div className="flex items-center justify-center w-8 h-8 rounded-full shrink-0 bg-white bg-opacity-20">
            <Lightning size={18} />
          </div>
        </Button>
      </header>
    </main>
  )
}
