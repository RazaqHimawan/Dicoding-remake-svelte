<script>
import {
  Card,
  Heading,
  Table,
  TableBody,
  TableBodyCell,
  TableBodyRow,
  TableHeadCell,
} from 'flowbite-svelte';

export let flag;
export let alt;
export let countryName;
export let capitalCity;
export let continents;
export let population;
</script>

<Card>
  <img
    class="border object-contain w-full h-fit"
    src={flag}
    {alt}
  />

  <Heading
    class="text-center p-4"
    tag="h2">{countryName}</Heading
  >
  <Table>
    <TableBody>
      <TableBodyRow>
        <TableHeadCell>Capital City</TableHeadCell>
        <TableBodyCell>{capitalCity}</TableBodyCell>
      </TableBodyRow>
      <TableBodyRow>
        <TableHeadCell>Continent</TableHeadCell>
        <TableBodyCell>{continents}</TableBodyCell>
      </TableBodyRow>
      <TableBodyRow>
        <TableHeadCell>Population</TableHeadCell>
        <TableBodyCell>{population}</TableBodyCell>
      </TableBodyRow>
    </TableBody>
  </Table>
</Card>
