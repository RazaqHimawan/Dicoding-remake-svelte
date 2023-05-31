<script>
import { Card, Input, Label } from 'flowbite-svelte';

export let searchInput;
</script>

<section class="flex justify-center p-4">
  <Card
    class="w-full"
    color="form"
  >
    <Label class="text-center">
      <span class="text-primary-800 font-semibold text-3xl"
        >Search Countries</span
      >
      <Input
        bind:value={searchInput}
        on:input
        class="mt-4"
        color="form"
        type="text"
      />
    </Label>
  </Card>
</section>
