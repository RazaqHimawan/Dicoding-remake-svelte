import { API_ENDPOINT } from '../server/api-endpoint';

class TheMovieDbSource {
  static async nowPlayingMovies(skFetch) {
    const response = await skFetch(API_ENDPOINT.NOW_PLAYING);
    const data = await response.json();
    return data.results;
  }

  static async upcomingMovies(skFetch) {
    const response = await skFetch(API_ENDPOINT.UPCOMING);
    const data = await response.json();
    return data.results;
  }

  static async detailMovie(skFetch, id) {
    const response = await skFetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default TheMovieDbSource;
