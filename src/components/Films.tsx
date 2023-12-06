"use server";
import { Card, CardProps } from "./Card";

async function getFilms(): Promise<CardProps[]> {
  const data = await fetch(`${process.env.API_URL}/movie`, {
    next: {
      tags: ["films"],
      revalidate: 60 * 60 * 12,
    },
  });

  const films = await data.json();
  return films.results;
}

export async function Films() {
  const films = await getFilms();

  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-10 w-full justify-items-center">
      {films.map((film) => {
        const poster_path = `${process.env.NEXT_PUBLIC_TMDB_URL_POSTER}/${film.poster_path}`;
        return (
          <Card
            key={film.id}
            id={film.id}
            poster_path={poster_path}
            release_date={new Date(film.release_date).getFullYear().toString()}
            title={film.title}
            vote_average={film.vote_average}
          />
        );
      })}
    </section>
  );
}
