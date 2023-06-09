<script>
let open = false;
let left = '-180';
function toggle() {
  open = !open;
  if (open) {
    left = '0';
  } else {
    left = '-180';
  }
}
</script>

<div class="app-bar">
  <div class="app-bar__menu">
    <button on:click={toggle}
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        height="48"
        viewBox="0 -960 960 960"
        width="48"
        ><path
          d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"
        /></svg
      ></button
    >
  </div>

  <div class="app-bar__brand">
    <h1>Movie Catalogue</h1>
  </div>
  <nav
    class="app-bar__navigation"
    style="left:{left}px"
  >
    <ul>
      <li><a href="/">Now Playing</a></li>
      <li><a href="/upcoming">Upcoming</a></li>
      <li><a href="/liked">Liked Movies</a></li>
    </ul>
  </nav>
</div>

<style>
.app-bar {
  padding: 8px 16px;
  background-color: white;
  display: flex;
  position: sticky;
  top: 0;
  z-index: 99;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
}

.app-bar__menu {
  display: flex;
  align-items: center;
}

.app-bar__menu button {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.app-bar__brand {
  display: flex;
  align-items: center;
  margin-left: 1rem;
}

.app-bar__brand h1 {
  color: #db0000;
  text-transform: uppercase;
  font-size: 1.5em;
  user-select: none;
}

.app-bar__navigation {
  position: absolute;
  top: 60px;
  width: 150px;
  transition: all 0.3s;
  padding: 12px;
  background-color: white;
  overflow: hidden;
}

ul li {
  list-style-type: none;
  margin: 0 0.5rem;
}

ul li a {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
  width: 100%;
  min-height: 48px;
}

@media screen and (min-width: 768px) {
  .app-bar__menu {
    display: none;
  }

  .app-bar {
    justify-content: space-between;
  }

  .app-bar__brand h1 {
    font-size: 2em;
  }

  .app-bar__navigation {
    position: static;
    width: fit-content;
  }

  ul {
    display: flex;
  }

  ul li {
    margin: 0 0.75rem;
  }

  ul li a {
    display: flex;
  }
}
</style>
