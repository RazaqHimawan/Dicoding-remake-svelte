<script>
import RestaurantCard from '$lib/components/RestaurantCard.svelte';

export let data;
</script>

<svelte:head>
  <title>Favorite</title>
</svelte:head>

{#await data.idb.getAllRestaurants() then result}
  <section>
    {#if result.length < 1}
      <h2 class="uppercase text-4xl text-center m-8 font-bold text-red-900">
        There is no favorite restaurant
      </h2>
    {:else}
      <h2 class="uppercase text-4xl text-center m-8 font-bold text-red-900">
        restaurants
      </h2>
    {/if}
    <div
      class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
    >
      {#each result as restaurant (restaurant.id)}
        <RestaurantCard {restaurant}>
          <img
            class="w-[300px] h-[200px]"
            src={data.IMG_URL.small + restaurant.pictureId}
            alt={restaurant.name}
          />
        </RestaurantCard>
      {/each}
    </div>
  </section>
{/await}
