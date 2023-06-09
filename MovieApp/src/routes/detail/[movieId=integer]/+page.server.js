import TheMovieDbSource from '$lib/data/tmdb-source.js';
import { CONFIG } from '$lib/server/config.js';

export async function load({ fetch, params }) {
  const movieId = params.movieId;
  const movie = await TheMovieDbSource.detailMovie(fetch, movieId);

  return {
    movie,
    CONFIG,
  };
}
