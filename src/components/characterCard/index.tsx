import Button from "@/components/button";
import Image from "next/image";
import { CharacterComponentProps } from "@/declarations";

export default function CharacterCard({ name, img, planet, birth }: CharacterComponentProps): JSX.Element {
  return (
    <div className="card-wrap">
      <div className="character-card">
        <div className="content-box">
          <h4 className="text-lg mb-2 font-semibold character-name">{name}</h4>
          <div className="character-info">
            <p>Planet: {planet}</p>
            <p>Birth year: {birth}</p>
          </div>
          <div className="see-more text-end">
            <Button btnText="More Info"></Button>
          </div>
        </div>
        <div className="avatar-container h-[70px] w-[70px]">
          <Image alt='' className="avatar-img h-full w-full" src={img}></Image>
        </div>
      </div>
    </div>
  );
}
