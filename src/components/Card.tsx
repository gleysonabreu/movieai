import { CalendarBlank, Star } from "@/components/phosphor-icons";
import Image from "next/image";
import {
  HoverCard,
  HoverCardArrow,
  HoverCardContent,
  HoverCardTrigger,
} from "./ui/hover-card";

export interface CardProps {
  title: string;
  vote_average: number;
  poster_path: string;
  release_date: string;
  overview?: string;
  id: number;
}

export function Card(props: CardProps) {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <div className="flex flex-col gap-3 w-48">
          <div className="flex items-center justify-between">
            <h1 className="text-xl truncate" title={props.title}>
              {props.title}
            </h1>
            <div className="text-brand-yellow flex gap-2 items-center">
              <Star size={18} weight="fill" />
              <span className="text-base">{props.vote_average}</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <Image
              src={props.poster_path}
              alt={props.title}
              width={194}
              height={288}
              className="w-48 h-72 bg-cover rounded-xl"
            />
          </div>
        </div>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="flex flex-col gap-[7px]">
          <div className="flex flex-col gap-[15px]">
            <div className="text-mauve12 m-0 text-[15px] leading-[1.5]">
              {props.overview ? props.overview : "Sem descrição"}
            </div>
            <div className="flex gap-[15px]">
              <div className="flex gap-[5px]">
                <div className="flex items-center gap-2 m-0 text-sm font-medium leading-[1.5]">
                  <CalendarBlank />
                  {props.release_date}
                </div>
              </div>
            </div>
          </div>
        </div>
        <HoverCardArrow />
      </HoverCardContent>
    </HoverCard>
  );
}
