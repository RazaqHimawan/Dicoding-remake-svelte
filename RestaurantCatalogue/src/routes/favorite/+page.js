export const csr = true;
export const ssr = false;

import { IMG_URL } from '$lib/data/config-helper.js';
import { idbHelper } from '$lib/utils/db';

export async function load() {
  return {
    IMG_URL,
    idb: idbHelper(),
  };
}
