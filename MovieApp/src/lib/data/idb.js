import { CONFIG } from '../server/config';

export function favIndexedDb(openDB) {
  const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

  return openDB(DATABASE_NAME, DATABASE_VERSION, {
    upgrade(database) {
      database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
    },
  });
}
