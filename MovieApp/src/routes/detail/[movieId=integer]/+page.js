export const csr = true;
export const ssr = false;

import { openDB } from 'idb';

export function load({ data }) {
  const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = data.CONFIG;

  const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
    upgrade(database) {
      database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
    },
  });
  const FavoriteMovieIdb = {
    async getMovie(id) {
      return (await dbPromise).get(OBJECT_STORE_NAME, id);
    },
    async getAllMovies() {
      return (await dbPromise).getAll(OBJECT_STORE_NAME);
    },
    async putMovie(movie) {
      return (await dbPromise).put(OBJECT_STORE_NAME, movie);
    },
    async deleteMovie(id) {
      return (await dbPromise).delete(OBJECT_STORE_NAME, id);
    },
  };
  return {
    ...data,
    FavoriteMovieIdb,
  };
}
