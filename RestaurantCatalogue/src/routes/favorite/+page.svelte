<script>
import RestaurantCard from '$lib/components/RestaurantCard.svelte';

export let data;
</script>

<svelte:head>
  <title>Favorite</title>
</svelte:head>

{#await data.getAllRestaurants() then result}
  <section>
    {#if result.length < 1}
      <h2 class="uppercase text-4xl text-center m-8 font-bold text-red-900">
        There is no favorite restaurant
      </h2>
    {/if}
    <h2 class="uppercase text-4xl text-center m-8 font-bold text-red-900">
      restaurants
    </h2>
    <div
      class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
    >
      {#each result as restaurant (restaurant.id)}
        <RestaurantCard
          {restaurant}
          img={data.IMG_URL.small + restaurant.pictureId}
        />
      {/each}
    </div>
  </section>
{/await}
