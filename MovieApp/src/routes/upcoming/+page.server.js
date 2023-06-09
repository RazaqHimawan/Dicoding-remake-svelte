import TheMovieDbSource from '$lib/data/tmdb-source.js';
import { CONFIG } from '$lib/server/config.js';

export async function load({ fetch }) {
  const movies = await TheMovieDbSource.upcomingMovies(fetch);
  return {
    movies,
    CONFIG,
  };
}
