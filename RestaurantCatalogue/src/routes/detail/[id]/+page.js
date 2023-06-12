export const csr = true;
export const ssr = false;

import { idbHelper } from '$lib/utils/db';

export function load({ data }) {
  return {
    ...data,
    idb: idbHelper(),
  };
}
