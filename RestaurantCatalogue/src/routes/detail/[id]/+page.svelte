<script>
import Accordion from '$lib/components/Accordion.svelte';
import Like from '$lib/components/Like.svelte';
import Liked from '$lib/components/Liked.svelte';

import { page } from '$app/stores';
import { onMount } from 'svelte';

export let data;

const { restaurant } = data;
const foods = restaurant.menus.foods;
const drinks = restaurant.menus.drinks;
const reviews = restaurant.customerReviews;

let like = false;

function toggle() {
  like = !like;
}

onMount(async () => {
  if (await data.idb.getRestaurant(restaurant.id)) {
    like = true;
  }
});

async function likeRestaurant() {
  await data.idb.putRestaurant(restaurant);
}

async function unlikeRestaurant() {
  await data.idb.deleteRestaurant(restaurant.id);
}
</script>

<svelte:head>
  <title>{$page.data.restaurant.name}</title>
</svelte:head>

<section class="md:w-[800px] md:mx-auto xl:w-[1200px]">
  <h2 class="uppercase text-4xl text-center m-8 font-bold text-red-900">
    Restaurant Detail
  </h2>

  <div class="w-full overflow-hidden text-red-950 bg-red-50">
    <img
      class="w-full"
      src={data.IMG_URL.medium + restaurant.pictureId}
      alt={restaurant.name}
    />
    <h3 class="text-center text-3xl font-bold m-4">{restaurant.name}</h3>
    <div class="flex flex-col">
      <div class="flex justify-between">
        <span class="font-bold text-xl mx-4">Address</span>
        <span class="text-xl mx-4">{restaurant.address}</span>
      </div>
      <div class="flex justify-between">
        <span class="font-bold text-xl mx-4">City</span>
        <span class="text-xl mx-4">{restaurant.city}</span>
      </div>
    </div>

    <div class="p-4 my-4">
      <span class="text-3xl font-bold">Description</span>
      <p class="my-4">{restaurant.description}</p>
    </div>

    <div class="p-4">
      <span class="text-3xl font-bold">Menus</span>

      <Accordion>
        <span slot="head">FOODS</span>
        <ul slot="details">
          {#each foods as food}
            <li>{food.name}</li>
          {/each}
        </ul>
      </Accordion>
      <Accordion>
        <span slot="head">DRINKS</span>
        <ul slot="details">
          {#each drinks as drink}
            <li>{drink.name}</li>
          {/each}
        </ul>
      </Accordion>
    </div>

    <div class="p-4">
      <span class="text-3xl font-bold">Customer Reviews</span>

      <Accordion>
        <span slot="head">REVIEWS</span>
        <div
          class="flex flex-col"
          slot="details"
        >
          {#each reviews as review}
            <div class="border-2 p-4 my-2 rounded-2xl">
              <span class="text-xl font-bold mr-4">{review.name}</span>
              <span>{review.date}</span>
              <p class="mt-2">{review.review}</p>
            </div>
          {/each}
        </div>
      </Accordion>
    </div>
  </div>

  {#if like}
    <Liked
      on:click={toggle}
      on:click={unlikeRestaurant}
    />
  {:else}
    <Like
      on:click={toggle}
      on:click={likeRestaurant}
    />
  {/if}
</section>
