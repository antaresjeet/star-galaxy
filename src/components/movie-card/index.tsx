import Button from "@/components/button";
import Image from "next/image";
import { Movie } from "@/declarations";
import placeholder from '../../../public/imgs/movie-preview.png'

export default function MovieCard(movie: Movie): JSX.Element {
  return (
    <div className="movie-card">
      <Image className="w-full" alt='movie' src={placeholder}></Image>
      <div className="movie-info text-center px-2 pt-2">
        <p>{movie.title}</p>
        <small>Release year: {movie.release_year} </small>
        <div className="movie-action mt-2">
          <Button text="View Details"></Button>
        </div>
      </div>
    </div>
  );
}
