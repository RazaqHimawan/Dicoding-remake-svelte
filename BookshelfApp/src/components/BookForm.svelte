<script>
import { Label, Input, Button, Card, Checkbox } from 'flowbite-svelte';
import { clickOutside } from '../scripts/clickOutside';
import { createEventDispatcher } from 'svelte';

const dispatch = createEventDispatcher();

let open = false;

let id = newId();
let title = '';
let author = '';
let yearReleased = 0;
let isFinished = false;

function addNewBook() {
  dispatch('addNewBook', { id, title, author, yearReleased, isFinished });
  title = '';
  author = '';
  yearReleased = 0;
  isFinished = false;
}

function newId() {
  return +new Date();
}

function handleClickOutside() {
  open = !open;
}
</script>

<div class="flex justify-center p-4">
  <Button
    on:click={() => (open = true)}
    color="primary"
    size="xl"
    pill>Add new book +</Button
  >
</div>

{#if open}
  <section
    use:clickOutside
    on:click_outside={handleClickOutside}
    class="flex justify-center relative"
  >
    <Card
      color="form"
      class="w-96 fixed"
    >
      <form
        on:submit|preventDefault={addNewBook}
        class="flex flex-col space-y-4"
      >
        <h3
          class="text-xl font-medium text-center text-grey-900 dark:text-white"
          >Add new book</h3
        >
        <Label
          color="form"
          class="space-y-2"
        >
          Title
          <Input
            bind:value={title}
            color="form"
            type="text"
            name="title"
          />
        </Label>
        <Label
          color="form"
          class="space-y-2"
        >
          Author
          <Input
            bind:value={author}
            color="form"
            type="text"
            name="author"
          />
        </Label>
        <Label
          color="form"
          class="space-y-2"
        >
          Year released
          <Input
            bind:value={yearReleased}
            color="form"
            name="year"
            type="number"
          />
        </Label>
        <div class="flex items-start">
          <Checkbox
            color="form"
            bind:checked={isFinished}>Finished reading</Checkbox
          >
        </div>
        <Button
          type="submit"
          class="w-full"
          >Put a book in the
          {#if isFinished}
            <span class="font-semibold px-1"> finished </span>
          {:else}
            <span class="font-semibold px-1"> unfinished </span>
          {/if}
          shelf</Button
        >
        <Button
          on:click={() => (open = false)}
          class="w-full"
          color="red">Close</Button
        >
      </form>
    </Card>
  </section>
{/if}
