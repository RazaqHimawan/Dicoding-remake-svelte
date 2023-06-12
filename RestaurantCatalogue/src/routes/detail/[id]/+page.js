export const csr = true;
export const ssr = false;
import { openDB } from 'idb';
import { IndexedDbConfig } from '$lib/data/config-helper.js';

export function load({ data }) {
  const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } =
    IndexedDbConfig;

  const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
    upgrade(database) {
      database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
    },
  });

  return {
    ...data,
    async getRestaurant(id) {
      return (await dbPromise).get(OBJECT_STORE_NAME, id);
    },
    async putRestaurant(restaurant) {
      return (await dbPromise).put(OBJECT_STORE_NAME, restaurant);
    },
    async deleteRestaurant(id) {
      return (await dbPromise).delete(OBJECT_STORE_NAME, id);
    },
  };
}
