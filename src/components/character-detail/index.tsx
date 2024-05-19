import Image from "next/image";
import { Character } from "@/declarations";

interface CharacterDetailsProps {
  character: Character,
  onClose: () => void;
}

export default function CharacterDetail({ character, onClose }: CharacterDetailsProps): JSX.Element {
  return (
    <div className="relative rounded-lg shadow">
      <div className="flex overflow-y-auto overflow-x-hidden charcter-detailed-view bg-white rounded-lg p-4 text-center text-black max-w-[300px] h-fit flex-col">
        <Image alt='' className="h-[270px] w-full rounded-lg shadow" src={character.image} draggable="false" placeholder="blur"></Image>
        <span className="close-detailed-view absolute right-[-15px] top-[-15px] w-9 h-9 bg-white rounded-full border-4 border-black
                   flex justify-center items-center cursor-pointer" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x">
            <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </span>
        <div className="character-bio mt-3">
          <h4 className="text-base">{character.name} {character.title}</h4>
          <div className="character-features mt-3">
            <p>Birth year: {character.birth_year}</p>
            <p>Gender: {character.gender}</p>
            <p>Height: {character.height}</p>
            <p>Weight: {character.mass}</p>
            <p>Hair color: {character.hair_color}</p>
            <p>Skin color: {character.skin_color}</p>
            <p>Eye color: {character.eye_color}</p>
            <p className="mt-3 character-feature">{character.tagline}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
