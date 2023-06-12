<script>
import { createEventDispatcher } from 'svelte';

export let image;
export let altTag = '';
export let prio = 'high';

const dispatch = createEventDispatcher();
</script>

<section class="relative">
  <button
    tabindex="-1"
    on:click={() => dispatch('prevClick')}
    class="absolute left-0 min-w-[48px] min-h-[48px] font-bold text-4xl rounded-r-sm text-red-300 hover:text-red-400 bottom-[50%] xl:-left-14"
  >
    &#10094;
  </button>

  <button
    tabindex="-1"
    on:click={() => dispatch('nextClick')}
    class="absolute right-0 min-w-[48px] min-h-[48px] font-bold text-4xl rounded-l-sm text-red-300 hover:text-red-400 bottom-[50%] xl:-right-14"
  >
    &#10095;
  </button>

  <img
    class="w-[100vw] xl:w-[1200px] xl:m-auto"
    src={image}
    alt={altTag}
    fetchpriority={prio}
  />
</section>
