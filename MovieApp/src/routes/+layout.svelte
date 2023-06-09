<script>
import './app.css';
import Navbar from '$lib/components/Navbar.svelte';
import Footer from '$lib/components/Footer.svelte';
</script>

<header>
  <Navbar />
</header>

<main>
  <slot />
</main>

<footer>
  <Footer />
</footer>

<style>
main {
  padding: 32px;
  flex: 1;
}

footer {
  padding: 16px;
}
</style>
