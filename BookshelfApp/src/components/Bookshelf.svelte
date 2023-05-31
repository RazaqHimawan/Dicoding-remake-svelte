<script>
import NavBarApp from './NavBarApp.svelte';
import Shelf from './Shelf.svelte';

export let books;
</script>

<header>
  <NavBarApp />
</header>
<main>
  <Shelf {books} />
</main>
