<script>
import MovieCard from '$lib/components/MovieCard.svelte';

export let data;
</script>

<div class="content">
  <h2 class="content__heading">Your Liked Movie</h2>
  <div class="movies">
    {#await data.getAllMovies() then result}
      {#each result as movie (movie.id)}
        <MovieCard
          CONFIG={data.CONFIG}
          {movie}
        />
      {/each}
    {/await}
  </div>
</div>

<style>
.content {
  margin: 0 auto;
  min-height: 100%;
}

.content .content__heading {
  font-weight: normal;
}

.movies {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin: 32px 0;
}

@media screen and (min-width: 650px) {
  .movies {
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (min-width: 850px) {
  .movies {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (min-width: 1200px) {
  .movies {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media screen and (min-width: 1600px) {
  .movies {
    grid-template-columns: repeat(5, 1fr);
  }
}
</style>
