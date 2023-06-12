<script>
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import RestaurantCard from '$lib/components/RestaurantCard.svelte';
export let data;
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<section>
  <h2 class="uppercase text-4xl text-center m-8 font-bold text-red-900">
    restaurants
  </h2>
  <div
    class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
  >
    {#each data.restaurants as restaurant (restaurant.id)}
      <RestaurantCard {restaurant}>
        <img
          class="w-[300px] h-[200px] lazyload"
          data-src={data.IMG_URL.small + restaurant.pictureId}
          alt={restaurant.name}
        />
      </RestaurantCard>
    {/each}
  </div>
</section>
