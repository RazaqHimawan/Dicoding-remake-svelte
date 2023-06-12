<script>
import '../app.postcss';
import Navbar from '$lib/components/Navbar.svelte';
import Jumbotron from '$lib/components/Jumbotron.svelte';
import Footer from '$lib/components/Footer.svelte';
</script>

<a
  tabindex="0"
  href="#main"
  class="text-2xl bg-red-200 p-4 absolute underline -left-80 focus:-left-0"
  >Skip to content</a
>

<header>
  <Navbar />
  <Jumbotron />
</header>

<main id="main">
  <slot />
</main>

<footer>
  <Footer />
</footer>
