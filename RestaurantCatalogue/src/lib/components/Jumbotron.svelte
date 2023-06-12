<script>
import Slide from './Slide.svelte';
import hero from '../assets/heroes/hero.jpg?format=webp';
import hero2 from '../assets/heroes/hero2.jpg?format=webp';
import hero3 from '../assets/heroes/hero3.jpg?format=webp';

const imgSlider = [
  {
    src: hero,
  },
  {
    src: hero2,
  },
  {
    src: hero3,
  },
];

let imageIndex = 0;

$: image = imgSlider[imageIndex];

$: prio = imageIndex === 2 ? 'low' : 'high';

function nextSlide() {
  if (imageIndex === imgSlider.length - 1) {
    imageIndex = 0;
  } else {
    imageIndex += 1;
  }
}

function prevSlide() {
  if (imageIndex === 0) {
    imageIndex = imgSlider.length - 1;
  } else {
    imageIndex -= 1;
  }
}
</script>

<Slide
  image={image.src}
  on:nextClick={nextSlide}
  on:prevClick={prevSlide}
  {prio}
/>
