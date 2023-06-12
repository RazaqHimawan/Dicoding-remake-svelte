export const csr = true;
export const ssr = false;
import { openDB } from 'idb';
import { IndexedDbConfig, IMG_URL } from '$lib/data/config-helper.js';

export function load() {
  const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } =
    IndexedDbConfig;

  const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
    upgrade(database) {
      database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
    },
  });

  return {
    async getAllRestaurants() {
      return (await dbPromise).getAll(OBJECT_STORE_NAME);
    },
    IMG_URL,
  };
}
