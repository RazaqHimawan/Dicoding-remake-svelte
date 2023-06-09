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
  return {
    ...data,
    async getAllMovies() {
      return (await dbPromise).getAll(OBJECT_STORE_NAME);
    },
  };
}
