import { localStore } from './storage';

const initialBooks = [
  {
    id: 1,
    title: 'Against The Grain',
    author: 'J. K. Huysmans',
    yearReleased: 1884,
    isFinished: false,
  },
  {
    id: 2,
    title: 'Little Women',
    author: 'L. M. Alcott',
    yearReleased: 1868,
    isFinished: true,
  },
];

export const books = localStore('svelte-bookshelf', initialBooks);
