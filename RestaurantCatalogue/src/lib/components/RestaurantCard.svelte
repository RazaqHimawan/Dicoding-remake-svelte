<script>
export let restaurant;
</script>

<a
  href="/detail/{restaurant.id}"
  class="w-[300px] h-[400px] my-6 border-2 border-red-500 relative rounded-2xl overflow-hidden text-red-950 bg-red-50 flex flex-col mx-auto hover:scale-105"
  aria-label="Restaurant {restaurant.name}"
>
  <span class="absolute top-0 bg-red-800 text-red-100 rounded-br-2xl w-fit p-2"
    >{restaurant.city}</span
  >
  <slot />
  <div class="px-4">
    <h3 class="text-2xl font-bold my-2">{restaurant.name}</h3>
    <p
      class="line-clamp-4"
      aria-hidden="true">{restaurant.description}</p
    >
  </div>
</a>
