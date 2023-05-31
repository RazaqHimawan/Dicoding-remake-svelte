<script>
import NavBarApp from './components/NavBarApp.svelte';
import Shelf from './components/Shelf.svelte';

import { books } from './scripts/stores';
</script>

<header>
  <NavBarApp />
</header>
<main>
  <Shelf bind:books={$books} />
</main>
