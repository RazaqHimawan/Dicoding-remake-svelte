<script>
export let like = () => {};
</script>

<button
  on:click
  on:click={like}
  aria-label="like this movie"
  id="likeButton"
  class="like"
>
  <i
    class="fa fa-heart-o"
    aria-hidden="true"
  />
</button>

<style>
.like {
  width: 55px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #db0000;

  position: fixed;
  bottom: 16px;
  right: 16px;
  border-radius: 50%;
  border: 0;

  font-size: 18px;
  color: white;
  cursor: pointer;
}
</style>
