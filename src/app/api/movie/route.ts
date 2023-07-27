import { getGenreList } from "@/utils/get-genres";
import { NextResponse } from "next/server";

export async function GET() {
  const LANGUAGE = 'pt-BR';
  const TOTAL_PAGES = 500;

  const pageRandom = Math.floor(Math.random() * TOTAL_PAGES);
  const genres = getGenreList(3);

  const url = `${process.env.API_TMDB_URL}/discover/movie?page=${pageRandom}&language=${LANGUAGE}&with_genres=${genres}`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.API_KEY_TMDB}`
    }
  };

    
    try {
      const response = await fetch(url, options);
      const films = await response.json();

      return NextResponse.json(films, { status: 200 });
    } catch (error) {
      return NextResponse.json({ message: 'Something went wrong, please try again.' }, { status: 500 });
    }

}
