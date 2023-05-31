<script>
import { Button } from 'flowbite-svelte';

export let africa;
export let americas;
export let asia;
export let europe;
export let oceania;
export let all;
</script>

<section class="flex justify-center gap-4">
  <Button
    on:click={africa}
    pill
    class="w-32"
  >
    <span class="text-lg">Africa</span>
  </Button>
  <Button
    on:click={americas}
    pill
    class="w-32"
  >
    <span class="text-lg">Americas</span>
  </Button>
  <Button
    on:click={asia}
    pill
    class="w-32"
  >
    <span class="text-lg">Asia</span>
  </Button>
  <Button
    on:click={europe}
    pill
    class="w-32"
  >
    <span class="text-lg">Europe</span>
  </Button>
  <Button
    on:click={oceania}
    pill
    class="w-32"
  >
    <span class="text-lg">Oceania</span>
  </Button>
  <Button
    on:click={all}
    pill
    class="w-32"
  >
    <span class="text-lg">Show All</span>
  </Button>
</section>
