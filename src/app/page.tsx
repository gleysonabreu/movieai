"use client";
import { Button } from "@/components/Button";
import { Card, CardProps } from "@/components/Card";
import { Lightning } from "@phosphor-icons/react";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { LoadingFilms } from "@/components/LoadingFilms";

type ResultQuery = {
  results: CardProps[];
};

export default function Home() {
  const { data, isLoading, isFetching, refetch } = useQuery<ResultQuery>({
    queryKey: ["getFilms"],
    queryFn: () => axios.get("/api/movie").then((res) => res.data),
    staleTime: 5000,
  });

  return (
    <main className="flex py-10 px-24 flex-col justify-center items-center gap-9 min-h-screen max-w-7xl mx-auto">
      <header className="w-full flex flex-col gap-5 md:flex-row items-center justify-between">
        <Link href="/">
          <Image src="/logo.svg" alt="Logo" width={85} height={44} />
        </Link>

        <Button
          isLoading={isLoading || isFetching}
          disabled={isLoading || isFetching}
          onClick={() => refetch()}
        >
          Nova recomendação
          <div className="flex items-center justify-center w-8 h-8 rounded-full shrink-0 bg-white bg-opacity-20">
            <Lightning size={18} />
          </div>
        </Button>
      </header>

      {isLoading && <LoadingFilms />}

      {data && (
        <section className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-10 w-full justify-items-center">
          {data.results.map((film: CardProps) => {
            const poster_path = `https://image.tmdb.org/t/p/original/${film.poster_path}`;
            return (
              <Card
                key={film.id}
                id={film.id}
                poster_path={poster_path}
                release_date={new Date(film.release_date)
                  .getFullYear()
                  .toString()}
                title={film.title}
                vote_average={film.vote_average}
              />
            );
          })}
        </section>
      )}
    </main>
  );
}
