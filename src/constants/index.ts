import { CharacterExtras, GenericObject } from '@/declarations';
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


const characterExtras: CharacterExtras[] = [
  {
    url: 'https://swapi.dev/api/people/1/',
    image: lukeSkyWalker,
    tagline: "A farm boy from Tatooine, Luke Skywalker becomes a hero when he trains as a Jedi and uses the Force to help save the galaxy.",
    title: "The Jedi"
  },
  {
    url: 'https://swapi.dev/api/people/2/',
    image: c3po,
    tagline: "A protocol droid fluent in over six million forms of communication, C-3PO often finds himself in the midst of the galaxy's most crucial events.",
    title: "The Diplomat"
  },
  {
    url: 'https://swapi.dev/api/people/3/',
    image: r2d2,
    tagline: "A resourceful astromech droid, R2-D2 is always ready to save the day with his clever gadgets and unwavering loyalty.",
    title: "The Heroic Droid"
  },
  {
    url: 'https://swapi.dev/api/people/4/',
    image: darthVader,
    tagline: "Once a Jedi Knight, Anakin Skywalker fell to the dark side and became one of the most feared figures in the galaxy.",
    title: "The Sith Lord"
  },
  {
    url: 'https://swapi.dev/api/people/5/',
    image: leiaOrgana,
    tagline: "A princess and a leader, Leia Organa's bravery and wisdom inspire the Rebel Alliance in their fight against the Empire.",
    title: "The Rebel Leader"
  },
  {
    url: 'https://swapi.dev/api/people/6/',
    image: owenLars,
    tagline: "A humble moisture farmer on Tatooine, Owen Lars tries to protect his family from the perils of the galaxy.",
    title: "The Protector"
  },
  {
    url: 'https://swapi.dev/api/people/7/',
    image: beruWhitesunLars,
    tagline: "A nurturing and kind-hearted woman, Beru Whitesun Lars provides a safe home for young Luke Skywalker on Tatooine.",
    title: "The Caregiver"
  },
  {
    url: 'https://swapi.dev/api/people/8/',
    image: r5d4,
    tagline: "An astromech droid with a bit of bad luck, R5-D4's malfunction leads to a fateful turn of events for the Rebel Alliance.",
    title: "The Unlucky Droid"
  },
  {
    url: 'https://swapi.dev/api/people/9/',
    image: biggs,
    tagline: "A skilled pilot and loyal friend to Luke Skywalker, Biggs Darklighter fights valiantly for the Rebel Alliance.",
    title: "The Brave Pilot"
  },
  {
    url: 'https://swapi.dev/api/people/10/',
    image: obiWanKenobi,
    tagline: "A wise and powerful Jedi Master, Obi-Wan Kenobi guides young heroes and stands as a beacon of hope against the darkness.",
    title: "The Mentor"
  },
]

const aboutImages: StaticImageData[] = [
  about1,
  about2,
  about3,
  about4,
  about5,
  about6,
  about7,
  about8
]

const swTextContent: GenericObject = {
  characterNotFound: `Amidst the cosmos, a missing link there be. Like a star's light fading into infinity.`,
  about: [
    `In the vast expanse of the galaxy, where starships soar through the cosmos and planets teem with life, the echoes of ancient conflicts reverberate across the stars. From the desolate sands of Tatooine to the bustling cityscape of Coruscant, every corner of the galaxy holds secrets waiting to be unearthed.`,
    `Amidst the backdrop of interstellar warfare and political intrigue, heroes rise to challenge the darkness that threatens to engulf the galaxy. From the noble Jedi Knights wielding the power of the Force to the daring smugglers and rebels fighting for freedom, their destinies are intertwined in a timeless struggle between light and darkness.`,
    `But amidst the chaos and turmoil, there is also hope. For in the heart of every being lies the potential for greatness, and in the darkest of times, even the smallest act of courage can ignite the flames of rebellion. As the galaxy hangs in the balance, new heroes emerge to shape the fate of worlds and forge their own destinies among the stars.`,
    `So, as you embark on your journey through the Star Wars saga, remember that the Force is with you, guiding your path and illuminating the way forward. For in this galaxy far, far away, adventure awaits at every turn, and the greatest stories are yet to be told.`,
  ],
  quotes: [
    "May the Force be with you. 🌟",
    "The Force will be with you, always. 💫",
    "There is good in him. I've felt it. ❤️",
    "Size matters not. Look at me. Judge me by my size, do you? 👀",
    "This is a new day, a new beginning. 🌅",
    "Stay on target. 🎯",
    "I have a good feeling about this. 😊",
    "The Force is strong with this one. 💪",
    "The ability to speak does not make you intelligent. 🗣️",
    "Breathe. Just breathe. Now reach out. What do you see? 🌌",
    "In my experience, there is no such thing as luck. 🍀",
    "You were the chosen one! 🌟",
    "There's always a bigger fish. 🐟",
    "This party's over. 🎉",
    "I love you. - I know. 💘",
    "There's more to life than who you're related to. 💭",
    "Hope is like the sun. If you only believe in it when you can see it, you'll never make it through the night. ☀️",
    "I'm just a simple man trying to make my way in the universe. 🚀",
    "We are what they grow beyond. That is the true burden of all masters. 🌱",
    "We are the spark, that will light the fire that'll burn the First Order down. 🔥"
  ]
}

export {
  characterExtras,
  aboutImages,
  swTextContent
}