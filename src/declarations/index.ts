import { StaticImageData } from "next/image";
export interface GenericObject {
  [index: string]: any;
}
export interface ButtonComponentProps {
  text: string;
}
export interface CharacterImage {
  url: string;
  image: StaticImageData;
}
export interface Character extends CharacterImage {
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
  title:string,
  release_year:string
}

export interface ShopItem {
  title:string,
  price:number,
  in_cart:boolean
}