import { StaticImageData } from "next/image";
export interface ButtonComponentProps {
  btnText: string;
}

export interface CharacterComponentProps {
  name: string;
  img: StaticImageData;
  planet: string;
  birth: string;
}