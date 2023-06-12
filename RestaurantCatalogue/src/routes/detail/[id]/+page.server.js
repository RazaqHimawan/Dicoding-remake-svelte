import { API_ENDPOINTS } from '$lib/server/api-endpoint.js';
import { IMG_URL } from '$lib/data/config-helper.js';

export async function load({ fetch, params }) {
  const res = await fetch(API_ENDPOINTS.DETAIL(params.id));
  const { restaurant } = await res.json();

  return {
    restaurant,
    IMG_URL,
  };
}
