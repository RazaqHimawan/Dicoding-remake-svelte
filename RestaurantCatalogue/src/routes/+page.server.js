import { API_ENDPOINTS } from '$lib/server/api-endpoint.js';
import { IMG_URL } from '$lib/data/config-helper.js';

export async function load({ fetch }) {
  const res = await fetch(API_ENDPOINTS.LIST);
  const { restaurants } = await res.json();

  return {
    restaurants,
    IMG_URL,
  };
}
