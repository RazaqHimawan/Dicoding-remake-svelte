<script>
import { Card, DropdownDivider } from 'flowbite-svelte';
import Book from './Book.svelte';
import BookForm from './BookForm.svelte';
import Search from './Search.svelte';

export let books;

let searchInput = '';

function addNewBook({ title, author, yearReleased, isFinished = false }) {
  books = [
    ...books,
    {
      id: newId(),
      title: title,
      author: author,
      yearReleased: yearReleased,
      isFinished: isFinished,
    },
  ];
}

function finishedBook(book) {
  const i = books.findIndex((b) => b.id === book.id);
  if (books[i].isFinished !== book.isFinished) {
    books[i] = { ...books[i], ...book };
  }
}

function removeBook(book) {
  books = books.filter((b) => b.id !== book.id);
}

function newId() {
  return +new Date();
}
</script>

<BookForm on:addNewBook={(e) => addNewBook(e.detail)} />

<Search
  bind:searchInput
  on:input={() => (searchInput = searchInput.toLowerCase())}
/>

<section class="flex justify-center my-4 max-sm:flex-col max-sm:items-center">
  <Card class="mx-4 w-full h-fit ">
    <h2 class="text-primary-800 text-3xl text-center font-semibold"
      >Unfinished book</h2
    >
    {#each books as book (book.id)}
      {#if book.title.toLowerCase().includes(searchInput) && !book.isFinished}
        <Book
          {book}
          on:finished={(e) => finishedBook(e.detail)}
          on:remove={(e) => removeBook(e.detail)}
        />
      {/if}
    {/each}
  </Card>

  <Card class="mx-4 w-full h-fit max-sm:mt-8">
    <h2 class="text-primary-800 text-3xl text-center font-semibold"
      >Finished book</h2
    >
    {#each books as book (book.id)}
      {#if book.title.toLowerCase().includes(searchInput) && book.isFinished}
        <Book
          {book}
          on:finished={(e) => finishedBook(e.detail)}
          on:remove={(e) => removeBook(e.detail)}
        />
      {/if}
    {/each}
  </Card>
</section>
