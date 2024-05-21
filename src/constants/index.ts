import { CharacterExtras, Film, FilmSorting, GenericObject, ShopItem, ShopItemCategory, SortByFilm } from '@/declarations';
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

//* films

import thePhantomMenace from '../../public/films/star-wars-the-phantom-menace.webp';
import attackOfTheClones from '../../public/films/star-wars-attack-of-the-clones.webp';
import revengeOfTheSith from '../../public/films/star-wars-revenge-of-the-sith.webp';
import aNewHope from '../../public/films/star-wars-a-new-hope.webp';
import theEmpireStrikesBack from '../../public/films/star-wars-the-empire-strikes-back.webp';
import returnOfTheJedi from '../../public/films/star-wars-the-return-of-the-jedi.webp';
import theForceAwakens from '../../public/films/star-wars-the-force-awakens.webp';
import theLastJedi from '../../public/films/star-wars-the-last-jedi.webp';
import riseOfSkywalker from '../../public/films/star-wars-the-rise-of-skywalker.webp';

import thePhantomMenaceCover from '../../public/films/star-wars-the-phantom-menace-cover.webp';
import attackOfTheClonesCover from '../../public/films/star-wars-attack-of-the-clones-cover.webp';
import revengeOfTheSithCover from '../../public/films/star-wars-revenge-of-the-sith-cover.webp';
import aNewHopeCover from '../../public/films/star-wars-a-new-hope-cover.webp';
import theEmpireStrikesBackCover from '../../public/films/star-wars-the-empire-strikes-back-cover.webp';
import returnOfTheJediCover from '../../public/films/star-wars-the-return-of-the-jedi-cover.webp';
import theForceAwakensCover from '../../public/films/star-wars-the-force-awakens-cover.webp';
import theLastJediCover from '../../public/films/star-wars-the-last-jedi-cover.webp';
import riseOfSkywalkerCover from '../../public/films/star-wars-the-rise-of-skywalker-cover.webp';


//* shop

import darthVaderActionFigure from '../../public/shop/darth-vader-action-figure.webp';
import millenniumFalconLegoSet from '../../public/shop/millennium-falcon-lego-set.webp';
import yodaPlushToy from '../../public/shop/yoda-plush-toy.webp';
import lightsaberKeychain from '../../public/shop/lightsaber-keychain.webp';
import starWarsTShirt from '../../public/shop/star-wars-t-shirt.webp';
import r2d2ModelKit from '../../public/shop/r2-d2-model-kit.webp';
import chewbaccaMug from '../../public/shop/chewbacca-mug.webp';
import kyloRenHelmet from '../../public/shop/kylo-ren-helmet.webp';
import stormtrooperBackpack from '../../public/shop/stormtrooper-backpackwebp.webp';
import theChildBabyYodaFunkoPop from '../../public/shop/the-child-(baby-yoda)-funko-pop.webp';
import xWingFighterModel from '../../public/shop/x-wing-fighter-model.webp';
import starWarsPosterSet from '../../public/shop/star-wars-poster-set.webp';
import hanSoloBlaster from '../../public/shop/han-solo-blaster.webp';
import princessLeiaCostume from '../../public/shop/princess-leia-costume.webp';
import bb8AlarmClock from '../../public/shop/bb-8-alarm-clock.webp';
import jediRobe from '../../public/shop/jedi-robe.webp';
import starWarsMonopoly from '../../public/shop/star-wars-monopoly.webp';
import c3poSocks from '../../public/shop/c-3po-Socks.webp';
import starWarsiPhoneCase from '../../public/shop/star-wars-iPhone-case.webp';
import jabbaTheHuttFigurine from '../../public/shop/jabba-the-hutt-figurine.webp';
import atatWalkerLEGOSet from '../../public/shop/at-at-walker-lego-set.webp';
import starWarsBedSheets from '../../public/shop/star-wars-bed-sheets.webp';
import theMandalorianHelmet from '../../public/shop/the-mandalorian-helmet.webp';
import reyActionFigure from '../../public/shop/rey-action-figure.webp';
import bobaFettKeychain from '../../public/shop/boba-fett-keychain.webp';
import darthMaulLightsaber from '../../public/shop/darth-maul-lightsaber.webp';
import starWarsPuzzle from '../../public/shop/star-wars-puzzle.webp';
import cloneTrooperBlaster from '../../public/shop/clone-trooper-blaster.webp';
import starWarsBaseballCap from '../../public/shop/star-wars-baseball-cap.webp';
import ewokPlushToy from '../../public/shop/ewok-plush-toy.webp';
import obiWanKenobiLightsaber from '../../public/shop/obi-wan-kenobi-lightsaber.webp';
import yodaActionFigure from '../../public/shop/yoda-action-figure.webp';
import starWarsCoffeeMug from '../../public/shop/star-wars-coffee-mug.webp';
import lukeSkywalkerCostume from '../../public/shop/luke-skywalker-costume.webp';
import darthVaderHelmet from '../../public/shop/darth-vader-helmet.webp';

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

const films: Film[] = [
  {
    title: "Star Wars: The Phantom Menace",
    episode: 1,
    episodeRoman: 'I',
    tagline: "The Phantom Menace introduces young Anakin Skywalker. He is discovered by Jedi Master Qui-Gon Jinn and his apprentice Obi-Wan Kenobi as the Sith return.",
    releaseYear: 1999,
    director: "George Lucas",
    boxOffice: 1027,
    image: thePhantomMenace,
    coverImage: thePhantomMenaceCover,
    url: 'films/star-wars-episode-i-the-phantom-menace'
  },
  {
    title: "Star Wars: Attack of the Clones",
    episode: 2,
    episodeRoman: 'II',
    tagline: "Attack of the Clones follows Anakin Skywalker as he falls in love with Padmé Amidala and begins his path to the dark side, while the galaxy edges closer to war.",
    releaseYear: 2002,
    director: "George Lucas",
    boxOffice: 653,
    image: attackOfTheClones,
    coverImage: attackOfTheClonesCover,
    url: 'films/star-wars-episode-ii-attack-of-the-clones'
  },
  {
    title: "Star Wars: Revenge of the Sith",
    episode: 3,
    episodeRoman: 'III',
    tagline: "Revenge of the Sith showcases Anakin Skywalker's transformation into Darth Vader. The Jedi are destroyed and the Galactic Empire rises.",
    releaseYear: 2005,
    director: "George Lucas",
    boxOffice: 868,
    image: revengeOfTheSith,
    coverImage: revengeOfTheSithCover,
    url: 'films/star-wars-episode-iii-revenge-of-the-sith'
  },
  {
    title: "Star Wars: A New Hope",
    episode: 4,
    episodeRoman: 'IV',
    tagline: "A New Hope centers around a young hero named Luke Skywalker. He teams up with the quick-witted smuggler Han Solo and the wise Jedi Master Obi-Wan Kenobi to rescue Princess Leia and defeat the evil Empire.",
    releaseYear: 1977,
    director: "George Lucas",
    boxOffice: 775,
    image: aNewHope,
    coverImage: aNewHopeCover,
    url: 'films/star-wars-episode-iv-a-new-hope'
  },
  {
    title: "Star Wars: The Empire Strikes Back",
    episode: 5,
    episodeRoman: 'V',
    tagline: "The Empire Strikes Back follows Luke Skywalker as he trains to become a Jedi Knight with Master Yoda while his friends are pursued by Darth Vader.",
    releaseYear: 1980,
    director: "Irvin Kershner",
    boxOffice: 538,
    image: theEmpireStrikesBack,
    coverImage: theEmpireStrikesBackCover,
    url: 'films/star-wars-episode-v-the-empire-strikes-back'
  },
  {
    title: "Star Wars: Return of the Jedi",
    episode: 6,
    episodeRoman: 'VI',
    tagline: "Return of the Jedi sees Luke Skywalker confronting Darth Vader and the Emperor. He strives to bring peace to the galaxy and redeem his father.",
    releaseYear: 1983,
    director: "Richard Marquand",
    boxOffice: 475,
    image: returnOfTheJedi,
    coverImage: returnOfTheJediCover,
    url: 'films/star-wars-episode-vi-return-of-the-jedi'
  },
  {
    title: "Star Wars: The Force Awakens",
    episode: 7,
    episodeRoman: 'VII',
    tagline: "The Force Awakens introduces a new generation of heroes led by Rey. They fight against the First Order with help from Han Solo and Leia Organa.",
    releaseYear: 2015,
    director: "J.J. Abrams",
    boxOffice: 2068,
    image: theForceAwakens,
    coverImage: theForceAwakensCover,
    url: 'films/star-wars-episode-vii-the-force-awakens'
  },
  {
    title: "Star Wars: The Last Jedi",
    episode: 8,
    episodeRoman: 'VIII',
    tagline: "The Last Jedi follows Rey as she seeks training from Luke Skywalker, while the Resistance battles the First Order in a struggle for survival.",
    releaseYear: 2017,
    director: "Rian Johnson",
    boxOffice: 1332,
    image: theLastJedi,
    coverImage: theLastJediCover,
    url: 'films/star-wars-episode-viii-the-last-jedi'
  },
  {
    title: "Star Wars: The Rise of Skywalker",
    episode: 9,
    episodeRoman: 'IX',
    tagline: "The Rise of Skywalker concludes the saga as Rey and the Resistance face the First Order in a final battle, and Rey discovers her true heritage.",
    releaseYear: 2019,
    director: "J.J. Abrams",
    boxOffice: 1074,
    image: riseOfSkywalker,
    coverImage: riseOfSkywalkerCover,
    url: 'films/star-wars-episode-ix-the-rise-of-skywalker'
  }
];

const filmsSorting: FilmSorting[] = [
  {
    name: 'By Release Date',
    value: SortByFilm.RELEASE_DATE
  },
  {
    name: 'By Episode',
    value: SortByFilm.EPISODE
  },
]

const shopItems: ShopItem[] = [
  {
    id: 1,
    name: "Darth Vader Action Figure",
    availableQuantity: 50,
    category: ShopItemCategory.ActionFigures,
    price: 29.99,
    description: "12-inch Darth Vader action figure with lightsaber.",
    image: darthVaderActionFigure
  },
  {
    id: 2,
    name: "Millennium Falcon LEGO Set",
    availableQuantity: 20,
    category: ShopItemCategory.LEGO,
    price: 159.99,
    description: "Detailed LEGO set of the Millennium Falcon.",
    image: millenniumFalconLegoSet
  },
  {
    id: 3,
    name: "Yoda Plush Toy",
    availableQuantity: 35,
    category: ShopItemCategory.PlushToys,
    price: 19.99,
    description: "Soft and cuddly Yoda plush toy.",
    image: yodaPlushToy
  },
  {
    id: 4,
    name: "Lightsaber Keychain",
    availableQuantity: 100,
    category: ShopItemCategory.Accessories,
    price: 9.99,
    description: "Miniature lightsaber keychain with LED light.",
    image: lightsaberKeychain
  },
  {
    id: 5,
    name: "Star Wars T-Shirt",
    availableQuantity: 75,
    category: ShopItemCategory.Apparel,
    price: 24.99,
    description: "100% cotton Star Wars themed t-shirt.",
    image: starWarsTShirt
  },
  {
    id: 6,
    name: "R2-D2 Model Kit",
    availableQuantity: 30,
    category: ShopItemCategory.ModelKits,
    price: 39.99,
    description: "Build your own R2-D2 model with this kit.",
    image: r2d2ModelKit
  },
  {
    id: 7,
    name: "Chewbacca Mug",
    availableQuantity: 40,
    category: ShopItemCategory.HomeAndKitchen,
    price: 14.99,
    description: "Ceramic mug shaped like Chewbacca.",
    image: chewbaccaMug
  },
  {
    id: 8,
    name: "Kylo Ren Helmet",
    availableQuantity: 15,
    category: ShopItemCategory.Costumes,
    price: 89.99,
    description: "Detailed replica of Kylo Ren's helmet.",
    image: kyloRenHelmet
  },
  {
    id: 9,
    name: "Stormtrooper Backpack",
    availableQuantity: 25,
    category: ShopItemCategory.Accessories,
    price: 49.99,
    description: "Durable backpack designed like a Stormtrooper.",
    image: stormtrooperBackpack
  },
  {
    id: 10,
    name: "The Child (Baby Yoda) Funko Pop",
    availableQuantity: 60,
    category: ShopItemCategory.Collectibles,
    price: 12.99,
    description: "The Child Funko Pop vinyl figure.",
    image: theChildBabyYodaFunkoPop
  },
  {
    id: 11,
    name: "X-Wing Fighter Model",
    availableQuantity: 20,
    category: ShopItemCategory.ModelKits,
    price: 49.99,
    description: "Highly detailed X-Wing Fighter model kit.",
    image: xWingFighterModel
  },
  {
    id: 12,
    name: "Star Wars Poster Set",
    availableQuantity: 30,
    category: ShopItemCategory.HomeAndKitchen,
    price: 19.99,
    description: "Set of 4 Star Wars movie posters.",
    image: starWarsPosterSet
  },
  {
    id: 13,
    name: "Han Solo Blaster",
    availableQuantity: 10,
    category: ShopItemCategory.Toys,
    price: 39.99,
    description: "Replica of Han Solo's iconic blaster.",
    image: hanSoloBlaster
  },
  {
    id: 14,
    name: "Princess Leia Costume",
    availableQuantity: 25,
    category: ShopItemCategory.Costumes,
    price: 69.99,
    description: "Authentic Princess Leia costume for adults.",
    image: princessLeiaCostume
  },
  {
    id: 15,
    name: "BB-8 Alarm Clock",
    availableQuantity: 30,
    category: ShopItemCategory.HomeAndKitchen,
    price: 29.99,
    description: "BB-8 shaped digital alarm clock.",
    image: bb8AlarmClock
  },
  {
    id: 16,
    name: "Jedi Robe",
    availableQuantity: 15,
    category: ShopItemCategory.Costumes,
    price: 59.99,
    description: "High-quality Jedi robe for cosplay.",
    image: jediRobe
  },
  {
    id: 17,
    name: "Star Wars Monopoly",
    availableQuantity: 40,
    category: ShopItemCategory.BoardGames,
    price: 34.99,
    description: "Monopoly game set in the Star Wars universe.",
    image: starWarsMonopoly
  },
  {
    id: 18,
    name: "C-3PO Socks",
    availableQuantity: 80,
    category: ShopItemCategory.Apparel,
    price: 9.99,
    description: "Pair of socks featuring C-3PO.",
    image: c3poSocks
  },
  {
    id: 19,
    name: "Star Wars iPhone Case",
    availableQuantity: 50,
    category: ShopItemCategory.Accessories,
    price: 14.99,
    description: "Protective iPhone case with Star Wars design.",
    image: starWarsiPhoneCase
  },
  {
    id: 20,
    name: "Jabba the Hutt Figurine",
    availableQuantity: 30,
    category: ShopItemCategory.Collectibles,
    price: 29.99,
    description: "Detailed figurine of Jabba the Hutt.",
    image: jabbaTheHuttFigurine
  },
  {
    id: 21,
    name: "AT-AT Walker LEGO Set",
    availableQuantity: 15,
    category: ShopItemCategory.LEGO,
    price: 99.99,
    description: "LEGO set of the AT-AT Walker.",
    image: atatWalkerLEGOSet
  },
  {
    id: 22,
    name: "Star Wars Bed Sheets",
    availableQuantity: 20,
    category: ShopItemCategory.HomeAndKitchen,
    price: 49.99,
    description: "Star Wars themed bed sheets set.",
    image: starWarsBedSheets
  },
  {
    id: 23,
    name: "The Mandalorian Helmet",
    availableQuantity: 12,
    category: ShopItemCategory.Costumes,
    price: 119.99,
    description: "Authentic replica of The Mandalorian's helmet.",
    image: theMandalorianHelmet
  },
  {
    id: 24,
    name: "Rey Action Figure",
    availableQuantity: 40,
    category: ShopItemCategory.ActionFigures,
    price: 24.99,
    description: "6-inch action figure of Rey.",
    image: reyActionFigure
  },
  {
    id: 25,
    name: "Boba Fett Keychain",
    availableQuantity: 100,
    category: ShopItemCategory.Accessories,
    price: 7.99,
    description: "Boba Fett helmet keychain.",
    image: bobaFettKeychain
  },
  {
    id: 26,
    name: "Darth Maul Lightsaber",
    availableQuantity: 10,
    category: ShopItemCategory.Toys,
    price: 79.99,
    description: "Double-bladed lightsaber of Darth Maul.",
    image: darthMaulLightsaber
  },
  {
    id: 27,
    name: "Star Wars Puzzle",
    availableQuantity: 30,
    category: ShopItemCategory.Puzzles,
    price: 19.99,
    description: "1000-piece Star Wars jigsaw puzzle.",
    image: starWarsPuzzle
  },
  {
    id: 28,
    name: "Clone Trooper Blaster",
    availableQuantity: 20,
    category: ShopItemCategory.Toys,
    price: 29.99,
    description: "Clone Trooper blaster toy.",
    image: cloneTrooperBlaster
  },
  {
    id: 29,
    name: "Star Wars Baseball Cap",
    availableQuantity: 50,
    category: ShopItemCategory.Apparel,
    price: 19.99,
    description: "Adjustable baseball cap with Star Wars logo.",
    image: starWarsBaseballCap
  },
  {
    id: 30,
    name: "Ewok Plush Toy",
    availableQuantity: 35,
    category: ShopItemCategory.PlushToys,
    price: 16.99,
    description: "Cute and cuddly Ewok plush toy.",
    image: ewokPlushToy
  },
  {
    id: 31,
    name: "Obi-Wan Kenobi Lightsaber",
    availableQuantity: 15,
    category: ShopItemCategory.Toys,
    price: 89.99,
    description: "High-quality replica of Obi-Wan Kenobi's lightsaber.",
    image: obiWanKenobiLightsaber
  },
  {
    id: 32,
    name: "Yoda Action Figure",
    availableQuantity: 45,
    category: ShopItemCategory.ActionFigures,
    price: 21.99,
    description: "4-inch Yoda action figure with accessories.",
    image: yodaActionFigure
  },
  {
    id: 33,
    name: "Star Wars Coffee Mug",
    availableQuantity: 60,
    category: ShopItemCategory.HomeAndKitchen,
    price: 12.99,
    description: "Ceramic coffee mug with Star Wars graphics.",
    image: starWarsCoffeeMug
  },
  {
    id: 34,
    name: "Luke Skywalker Costume",
    availableQuantity: 20,
    category: ShopItemCategory.Costumes,
    price: 79.99,
    description: "Authentic Luke Skywalker costume.",
    image: lukeSkywalkerCostume
  },
  {
    id: 35,
    name: "Darth Vader Helmet",
    availableQuantity: 10,
    category: ShopItemCategory.Costumes,
    price: 129.99,
    description: "Detailed Darth Vader helmet replica.",
    image: darthVaderHelmet
  },
];

export {
  characterExtras,
  aboutImages,
  swTextContent,
  films,
  filmsSorting,
  shopItems
}