'use client';
import { Button } from "@/components/Button";
import { CalendarBlank, Clock, Lightning, Play, Star } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex py-10 px-24 flex-col justify-center items-center gap-9 min-h-screen max-w-7xl mx-auto">
      <header className="w-full flex flex-col gap-5 md:flex-row items-center justify-between">
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

      <section className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-10 w-full justify-items-center">
        <div className="flex flex-col gap-3 w-48">
          <div className="flex items-center justify-between">
            <h1 className="text-xl truncate">Barbie</h1>
            <div className="text-brand-yellow flex gap-2 items-center">
              <Star size={18} weight="fill" />
              <span className="text-base">4.9</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <Image src='/barbie.png' alt='Barbie' width={194} height={288} className="w-48 h-72 bg-cover rounded-xl" />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-brand-gray-light">
                <Clock size={20} />
                <span className="text-sm">1:54:00</span>
              </div>
              <div className="flex items-center gap-1 text-brand-gray-light">
                <CalendarBlank size={20} />
                <span className="text-sm">2023</span>
              </div>
            </div>

            <Button variant="gray">
              <div className="flex items-center justify-center w-8 h-8 rounded-full shrink-0 bg-brand-gray-dark">
                <Play size={18} weight="fill" className="text-brand-purple" />
              </div>
              Assistir trailer
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-3 w-48">
          <div className="flex items-center justify-between">
            <h1 className="text-xl truncate">Oppenheimer</h1>
            <div className="text-brand-yellow flex gap-2 items-center">
              <Star size={18} weight="fill" />
              <span className="text-base">4.9</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <Image src='/oppenheimer.png' alt='Oppenheimer' width={194} height={288} className="w-48 h-72 bg-cover rounded-xl" />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-brand-gray-light">
                <Clock size={20} />
                <span className="text-sm">3:00:00</span>
              </div>
              <div className="flex items-center gap-1 text-brand-gray-light">
                <CalendarBlank size={20} />
                <span className="text-sm">2023</span>
              </div>
            </div>

            <Button variant="gray">
              <div className="flex items-center justify-center w-8 h-8 rounded-full shrink-0 bg-brand-gray-dark">
                <Play size={18} weight="fill" className="text-brand-purple" />
              </div>
              Assistir trailer
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-3 w-48">
          <div className="flex items-center justify-between">
            <h1 className="text-xl truncate">Indiana Jones e o Chamado do Destino</h1>
            <div className="text-brand-yellow flex gap-2 items-center">
              <Star size={18} weight="fill" />
              <span className="text-base">4.9</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <Image src='/indiana_jones.png' alt='Indiana Jones e o Chamado do Destino' width={194} height={288} className="w-48 h-72 bg-cover rounded-xl" />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-brand-gray-light">
                <Clock size={20} />
                <span className="text-sm">2:22:00</span>
              </div>
              <div className="flex items-center gap-1 text-brand-gray-light">
                <CalendarBlank size={20} />
                <span className="text-sm">2023</span>
              </div>
            </div>

            <Button variant="gray">
              <div className="flex items-center justify-center w-8 h-8 rounded-full shrink-0 bg-brand-gray-dark">
                <Play size={18} weight="fill" className="text-brand-purple" />
              </div>
              Assistir trailer
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-3 w-48">
          <div className="flex items-center justify-between">
            <h1 className="text-xl truncate">Indiana Jones e o Chamado do Destino</h1>
            <div className="text-brand-yellow flex gap-2 items-center">
              <Star size={18} weight="fill" />
              <span className="text-base">4.9</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <Image src='/indiana_jones.png' alt='Indiana Jones e o Chamado do Destino' width={194} height={288} className="w-48 h-72 bg-cover rounded-xl" />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-brand-gray-light">
                <Clock size={20} />
                <span className="text-sm">2:22:00</span>
              </div>
              <div className="flex items-center gap-1 text-brand-gray-light">
                <CalendarBlank size={20} />
                <span className="text-sm">2023</span>
              </div>
            </div>

            <Button variant="gray">
              <div className="flex items-center justify-center w-8 h-8 rounded-full shrink-0 bg-brand-gray-dark">
                <Play size={18} weight="fill" className="text-brand-purple" />
              </div>
              Assistir trailer
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
