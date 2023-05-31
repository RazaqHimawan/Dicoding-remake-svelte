<script>
import { onMount } from 'svelte';
import ContinentButton from './ContinentButton.svelte';
import CountryCard from './CountryCard.svelte';
import Search from './Search.svelte';

let searchInput;

const baseUrl = 'https://restcountries.com/v3.1';
let countries = [];

async function showCountriesByContinent(params) {
  try {
    const response = await fetch(`${baseUrl}/region/${params}`);
    countries = await response.json();
  } catch (err) {
    console.error('Error:', err);
  }
}

async function showAllCountries() {
  try {
    const response = await fetch(`${baseUrl}/all`);
    countries = await response.json();
  } catch (error) {
    console.error('Error: ', error);
  }
}

onMount(async () => {
  showAllCountries();
});
</script>

<Search
  bind:searchInput
  on:input={() => (searchInput = searchInput.toLowerCase())}
/>

<ContinentButton
  africa={() => showCountriesByContinent('africa')}
  americas={() => showCountriesByContinent('americas')}
  asia={() => showCountriesByContinent('asia')}
  europe={() => showCountriesByContinent('europe')}
  oceania={() => showCountriesByContinent('oceania')}
  all={() => showAllCountries()}
/>

<section
  class="grid grid-cols-4 place-items-center gap-6 p-8 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1"
>
  {#each countries as country (country.name.common)}
    {#if country.name.common.toLowerCase().includes(searchInput)}
      <CountryCard
        flag={country.flags.svg}
        alt={country.flags.alt}
        countryName={country.name.common}
        capitalCity={country.capital}
        continents={country.continents}
        population={country.population.toLocaleString()}
      />
    {/if}
  {/each}
</section>
