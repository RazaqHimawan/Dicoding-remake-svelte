<script>
export let CONFIG;
export let movie;
</script>

<div class="movie-item">
  <div class="movie-item__header">
    <img
      class="movie-item__header__poster"
      alt={movie.title || '-'}
      src={movie.backdrop_path
        ? CONFIG.BASE_IMAGE_URL + movie.backdrop_path
        : 'https://picsum.photos/id/666/800/450?grayscale'}
    />
    <div class="movie-item__header__rating">
      <p
        >⭐️<span class="movie-item__header__rating__score"
          >{movie.vote_average ? movie.vote_average.toFixed(1) : '-'}</span
        ></p
      >
    </div>
  </div>
  <div class="movie-item__content">
    <h3 class="movie__title"
      ><a href="/detail/{movie.id}">{movie.title || '-'}</a></h3
    >
    <p>{movie.overview || '-'}</p>
  </div>
</div>

<style>
.movie-item {
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  overflow: hidden;
}

.movie-item__header {
  position: relative;
}

.movie-item .movie-item__header .movie-item__header__poster {
  width: 100%;
}

.movie-item .movie-item__header .movie-item__header__rating {
  position: absolute;
  padding: 8px;
  bottom: 20px;
  left: 0;
  display: inline-block;
  background-color: black;
  color: white;
}

.movie-item
  .movie-item__header
  .movie-item__header__rating
  .movie-item__header__rating__score {
  margin-left: 10px;
}

.movie-item .movie-item__content {
  padding: 16px;
}

.movie-item .movie-item__content h3 {
  margin: 0 0 10px 0;
}

.movie-item .movie-item__content h3 a {
  color: #db0000;
  text-decoration: none;
}

.movie-item .movie-item__content p {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4; /* number of lines to show */
  -webkit-box-orient: vertical;
}
</style>
