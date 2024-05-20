import Button from "@/components/button";
import Image from "next/image";
import { Film } from "@/declarations";
import { openNewWindow } from "@/helpers";

export default function FilmCard(film: Film): JSX.Element {
  return (
    <div className="movie-card flex flex-col justify-between h-full">
      <Image className="w-full h-auto" alt={film.title} src={film.image} placeholder="blur" draggable="false" />
      <div className="movie-info flex flex-col justify-end text-center px-2 pt-2">
        <p>{film.title} (Episode {film.episodeRoman})</p>
        <small>Release year: {film.releaseYear} </small>
        <div className="movie-action mt-2">
          <Button text="Watch Now" clickHandler={() => openNewWindow(`${process.env.starWarsOfficialWebsite}${film.url}`)} />
        </div>
      </div>
    </div>

  );
}
