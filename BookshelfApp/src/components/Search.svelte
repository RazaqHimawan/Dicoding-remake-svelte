<script>
import { Button, Card, Input, Label } from 'flowbite-svelte';

export let searchInput;
</script>

<section class="flex justify-center">
  <Card
    class="w-full"
    color="form"
  >
    <Label class="text-center">
      <span class="text-primary-800 font-semibold text-3xl">Search Book</span>
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
