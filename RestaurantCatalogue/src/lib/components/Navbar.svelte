<script>
let open = false;

$: drawer = open ? 'left-0' : '-left-80';
</script>

<nav class="flex justify-between items-center px-4 py-2 bg-red-50 shadow-sm">
  <button
    on:click={() => (open = !open)}
    class="md:hidden"
    aria-label="open navigation"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="48"
      viewBox="0 -960 960 960"
      width="48"
    >
      <path
        d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"
      />
    </svg>
  </button>

  <h1 class="text-3xl select-none font-bold text-red-800">SomethingTitle</h1>

  <!-- Mobile nav -->
  <div
    class="flex flex-col absolute top-16 duration-300 {drawer} px-6 bg-red-50 text-red-900 text-lg z-10 md:hidden"
    class:open
  >
    <ul>
      <li class="flex">
        <a
          class="p-2 my-2 w-full min-h-[48px] focus:text-red-700 active:text-red-600"
          href="/">Home</a
        >
      </li>
      <li class="flex">
        <a
          class="p-2 my-2 w-full min-h-[48px] focus:text-red-700 active:text-red-600"
          href="/favorite">Favorite</a
        >
      </li>
      <li class="flex">
        <a
          class="p-2 my-2 w-full min-h-[48px] focus:text-red-700 active:text-red-600"
          href="https://github.com/RazaqHimawan">About Us</a
        >
      </li>
    </ul>
  </div>

  <!-- Default nav -->
  <div class=" bg-red-50 text-red-900 text-xl max-md:hidden">
    <ul class="flex">
      <li class="flex">
        <a
          class="p-2 my-2 w-full min-h-[48px] hover:text-red-700 focus:text-red-700 active:text-red-600"
          href="/">Home</a
        >
      </li>
      <li class="flex ml-4">
        <a
          class="p-2 my-2 w-full min-h-[48px] hover:text-red-700 focus:text-red-700 active:text-red-600"
          href="/favorite">Favorite</a
        >
      </li>
      <li class="flex ml-4">
        <a
          class="p-2 my-2 w-full min-h-[48px] hover:text-red-700 focus:text-red-700 active:text-red-600"
          href="https://github.com/RazaqHimawan">About Us</a
        >
      </li>
    </ul>
  </div>
</nav>
