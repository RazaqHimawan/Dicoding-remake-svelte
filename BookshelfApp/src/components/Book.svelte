<script>
import { Button, Card, DropdownDivider } from 'flowbite-svelte';
import { createEventDispatcher } from 'svelte';

export let book;

const dispatch = createEventDispatcher();

function onRemove() {
  dispatch('remove', book);
}

function onFinished() {
  book = { ...book, isFinished: !book.isFinished };
  dispatch('finished', book);
}
</script>

<Card
  id={'id-' + book.id}
  class="my-4"
>
  <h2 class="text-primary-800 text-2xl">{book.title}</h2>
  <p>Author: {book.author}</p>
  <p>Released: {book.yearReleased}</p>
  <DropdownDivider />
  <div class="my-4">
    <Button on:click={onFinished}>
      {#if book.isFinished}
        Unfinished
      {:else}
        Finished
      {/if}
    </Button>
    <Button
      on:click={onRemove}
      color="red">Delete</Button
    >
  </div>
</Card>
