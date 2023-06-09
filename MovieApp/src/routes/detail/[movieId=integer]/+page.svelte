<script>
import Like from '$lib/components/Like.svelte';
import Liked from '$lib/components/Liked.svelte';

import { page } from '$app/stores';
import { onMount } from 'svelte';

export let data;

const { CONFIG, movie } = data;

let like = false;

onMount(async () => {
  if (await data.FavoriteMovieIdb.getMovie(movie.id)) {
    like = true;
  }
});

async function toggle() {
  like = !like;
}

async function likeMovie() {
  await data.FavoriteMovieIdb.putMovie(movie);
}

async function unlikeMovie() {
  await data.FavoriteMovieIdb.deleteMovie(movie.id);
}
</script>

<svelte:head>
  <title>{$page.data.movie.title}</title>
</svelte:head>

<div class="movie">
  <h2 class="movie__title">{movie.title}</h2>
  <img
    class="movie__poster"
    src={CONFIG.BASE_IMAGE_URL + movie.poster_path}
    alt={movie.title}
  />
  <div class="movie__info">
    <h3>Information</h3>
    <h4>Tagline</h4>
    <p>{movie.tagline}</p>
    <h4>Release Date</h4>
    <p>{movie.release_date}</p>
    <h4>Duration</h4>
    <p>{movie.runtime} minutes</p>
    <h4>Rating</h4>
    <p>{movie.vote_average}</p>
  </div>
  <div class="movie__overview">
    <h3>Overview</h3>
    <p>{movie.overview}</p>
  </div>
</div>

{#if like}
  <Liked
    on:click={toggle}
    on:click={unlikeMovie}
  />
{:else}
  <Like
    on:click={toggle}
    on:click={likeMovie}
  />
{/if}

<style>
.movie {
  margin: 0 auto;
  width: 100%;
  max-width: 800px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px 16px;
}

.movie .movie__poster {
  width: 100%;
  max-width: 400px;
}

.movie .movie__info h4 {
  margin: 8px 0;
}
@media screen and (min-width: 650px) {
  .movie {
    grid-template-columns: auto 1fr;
  }

  .movie .movie__title {
    grid-column-start: 1;
    grid-column-end: 3;
  }

  .movie .movie__overview {
    grid-column-start: 1;
    grid-column-end: 3;
  }
}
</style>
