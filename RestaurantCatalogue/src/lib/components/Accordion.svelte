<script>
import { slide } from 'svelte/transition';
let open = false;

$: rotate = open ? 'rotate-180' : 'rotate-0';
$: line = open ? 'border-b' : 'border-none';
</script>

<div class="my-4 border-2 rounded-2xl px-4">
  <div class="flex items-center {line}">
    <div class="flex-1">
      <slot name="head" />
    </div>

    <button on:click={() => (open = !open)}>
      <svg
        class="transition-transform duration-500 {rotate}"
        xmlns="http://www.w3.org/2000/svg"
        height="48"
        viewBox="0 -960 960 960"
        width="48"
        ><path d="m283-345-43-43 240-240 240 239-43 43-197-197-197 198Z" /></svg
      >
    </button>
  </div>

  {#if open}
    <div
      class="p-4"
      transition:slide
    >
      <slot name="details" />
    </div>
  {/if}
</div>
