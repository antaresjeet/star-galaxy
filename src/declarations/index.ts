import { StaticImageData } from "next/image";
import { ReactNode } from "react";
export interface GenericObject {
  [index: string]: any;
}
export interface ButtonComponentProps {
  text: string;
  clickHandler?: () => void;
}
export interface CharacterExtras {
  url: string;
  image: StaticImageData;
  tagline: string;
  title: string;
}
export interface Character extends CharacterExtras {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  homeworld_name?: string;
}

export interface HomeWorld {
  climate: string;
  created: string;
  diameter: string;
  edited: string;
  films: string[];
  gravity: string;
  name: string;
  orbital_period: string;
  population: string;
  residents: string[];
  rotation_period: string;
  surface_water: string;
  terrain: string;
  url: string;
}

export interface Movie {
  title: string,
  release_year: string
}

export interface ShopItem {
  title: string,
  price: number,
  in_cart: boolean
}

export enum ModalAnimation {
  OPEN = 'open',
  CLOSE = 'close'
}
export interface ModalProps {
  children: ReactNode,
  animation: ModalAnimation
}
export interface Film {
  title: string,
  episode: number,
  episodeRoman: string;
  tagline: string,
  releaseYear: number,
  director: string,
  boxOffice: number,
  image: StaticImageData;
  coverImage: StaticImageData;
  url: string;
}

export enum SortByFilm {
  EPISODE = 'episode',
  RELEASE_DATE = 'releaseYear'
}

export interface FilmSorting {
  name: string,
  value: SortByFilm
}

export interface CarouselProps {
  carouselItems: Film[] | any[]
}