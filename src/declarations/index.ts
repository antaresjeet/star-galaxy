import { StaticImageData } from "next/image";
export interface ButtonComponentProps {
  text: string;
}

export interface CharacterComponentProps {
  name: string;
  img: StaticImageData;
  planet: string;
  birth: string;
}