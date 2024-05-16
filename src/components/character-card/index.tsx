import Button from "@/components/button";
import Image from "next/image";
import { Character } from "@/declarations";

export default function CharacterCard(character: Character): JSX.Element {
  return (
    <div className="card-wrap">
      <div className="character-card">
        <div className="content-box">
          <h4 className="text-lg mb-2 mt-3 font-semibold character-name">{character.name}</h4>
          <div className="character-info">
            <p>Planet: {character.homeworld_name}</p>
            <p>Birth year: {character.birth_year}</p>
          </div>
          <div className="see-more text-end">
            <Button text="More Info"></Button>
          </div>
        </div>
        <div className="avatar-container h-[87px] w-[87px]">
          <Image alt='Avatar' className="avatar-img h-full w-full" src={character.image} height={50} width={50}></Image>
        </div>
      </div>
    </div>
  );
}
