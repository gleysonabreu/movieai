'use client';
import { CalendarBlank, Clock, Play, Star } from "@phosphor-icons/react";
import Image from "next/image";
import { Button } from "./Button";

export interface CardProps {
  title: string;
  vote_average: number;
  poster_path: string;
  release_date: string;
  id: number;
}

export function Card(props: CardProps) {
  return (
    <div className="flex flex-col gap-3 w-48">
      <div className="flex items-center justify-between">
        <h1 className="text-xl truncate" title={props.title}>{props.title}</h1>
        <div className="text-brand-yellow flex gap-2 items-center">
          <Star size={18} weight="fill" />
          <span className="text-base">{props.vote_average}</span>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <Image src={props.poster_path} alt={props.title} width={194} height={288} className="w-48 h-72 bg-cover rounded-xl" />
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-1 text-brand-gray-light">
            <CalendarBlank size={20} />
            <span className="text-sm">{props.release_date}</span>
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
  );
}
