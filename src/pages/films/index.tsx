
import { films, filmsSorting } from "@/constants";
import { useState } from "react";
import { Film, SortByFilm } from "@/declarations";
import Carousel from "@/components/film-carousel";
import FilmCard from "@/components/film-card";

export default function Films(): JSX.Element {
  const [sortBy, setSortBy] = useState<SortByFilm>(SortByFilm.RELEASE_DATE);

  const sortedFilms = [...films].sort((film1: Film, film2: Film) => film1[sortBy] - film2[sortBy]);
  return (
    <div className="movies-star-war">
      <Carousel carouselItems={films} />
      <section className="filter-movies-list container mx-auto px-12 py-8">
        <div className="movie-filter-head pb-2 border-b-[0.5px] border-neutral-500">
          {filmsSorting.map((filmSorting) => (
            <span key={filmSorting.value} className={sortBy === filmSorting.value ? 'text-base' : ''} onClick={() => setSortBy(filmSorting.value)}>{filmSorting.name}</span>
          ))}
        </div>
        <div className="movies-container mt-6 grid xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {sortedFilms.map((film, index) => (
            <FilmCard {...film} key={index}></FilmCard>
          ))}
        </div>
      </section>
    </div>
  );
}
