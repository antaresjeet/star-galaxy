import { CharacterImage } from '@/declarations';
import { StaticImageData } from 'next/image';

// * characters
import lukeSkyWalker from '../../public/characters/luke-skywalker.webp';
import c3po from '../../public/characters/c3-po.webp';
import r2d2 from '../../public/characters/r2-d2.webp';
import darthVader from '../../public/characters/darth-vader.webp';
import leiaOrgana from '../../public/characters/leia-organa.webp';
import owenLars from '../../public/characters/owen-lars.webp';
import beruWhitesunLars from '../../public/characters/beru-whitesun-lars.webp';
import r5d4 from '../../public/characters/r5-d4.webp';
import biggs from '../../public/characters/biggs.webp';
import obiWanKenobi from '../../public/characters/obi-wan-kenobi.webp';

// * about
import about1 from '../../public/about/about-1.webp';
import about2 from '../../public/about/about-2.webp';
import about3 from '../../public/about/about-3.webp';
import about4 from '../../public/about/about-4.webp';
import about5 from '../../public/about/about-5.webp';
import about6 from '../../public/about/about-6.webp';
import about7 from '../../public/about/about-7.webp';
import about8 from '../../public/about/about-8.webp';


export const characterImages: CharacterImage[] = [
  {
    url: 'https://swapi.dev/api/people/1/',
    image: lukeSkyWalker
  },
  {
    url: 'https://swapi.dev/api/people/2/',
    image: c3po
  },
  {
    url: 'https://swapi.dev/api/people/3/',
    image: r2d2
  },
  {
    url: 'https://swapi.dev/api/people/4/',
    image: darthVader
  },
  {
    url: 'https://swapi.dev/api/people/5/',
    image: leiaOrgana
  },
  {
    url: 'https://swapi.dev/api/people/6/',
    image: owenLars
  },
  {
    url: 'https://swapi.dev/api/people/7/',
    image: beruWhitesunLars
  },
  {
    url: 'https://swapi.dev/api/people/8/',
    image: r5d4
  },
  {
    url: 'https://swapi.dev/api/people/9/',
    image: biggs
  },
  {
    url: 'https://swapi.dev/api/people/10/',
    image: obiWanKenobi
  },
]

export const aboutImages: StaticImageData[] = [
  about1,
  about2,
  about3,
  about4,
  about5,
  about6,
  about7,
  about8
]