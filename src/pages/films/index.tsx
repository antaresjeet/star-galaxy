import Image from "next/image";
import placeholder from '../../../public/imgs/movie-preview.png'
import Button from "@/components/button";
import FilmCard from "@/components/film-card";
import { films } from "@/constants";

export default function Films(): JSX.Element {
  return (
    <div className="movies-star-war">
      <section className="container relative mx-auto py-8 px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="lg-film-view col-span-9">
            <div className="relative min-h-[55vh] before:rounded-[10px] p-12 bg-[center_top] before:content-[''] before:block before:absolute before:bg-gradient-to-r before:left-[0.3px]
              before:from-black to-black before:-inset-1 before:top-[0.3px] flex items-center before:bottom-[0.3px] rounded-[10px]
              border border-[var(--theme-yellow-color)] bg-[url('/imgs/films-bg.png')] ">
              <div className="fims-banner-content w-2/3 relative z-2">
                <h3 className="text-3xl mb-4">A New Hope (1977)</h3>
                <p>A New Hope centers around a young hero named Luke Skywalker. He teams up with the quick-witted smuggler
                  Han Solo and the wise Jedi Master Obi-Wan Kenobi to rescue Princess Leia and defeat the evil Empire. </p>
                <div className="watch-btn mt-10">
                  <Button text="Watch Now"></Button>
                </div>
              </div>
            </div>
          </div>
          <div className="films-list-scroll col-span-3">
            <div className="film-item flex mb-4">
              <Image alt='' className="min-w-[68px] w-[68px] h-[68px] rounded-[5px] border border-neutral-500 me-3" src={placeholder}></Image>
              <h5>Star Wars: A New Hope (Episode IV) (1977)</h5>
            </div>
            <div className="film-item flex mb-4">
              <Image alt='' className="min-w-[68px] w-[68px] h-[68px] rounded-[5px] border border-neutral-500 me-3" src={placeholder}></Image>
              <h5>Star Wars: A New Hope (Episode IV) (1977)</h5>
            </div>
            <div className="film-item flex mb-4">
              <Image alt='' className="min-w-[68px] w-[68px] h-[68px] rounded-[5px] border border-neutral-500 me-3" src={placeholder}></Image>
              <h5>Star Wars: A New Hope (Episode IV) (1977)</h5>
            </div>
          </div>
        </div>
      </section>
      <section className="filter-movies-list container mx-auto px-12 py-8">
        <div className="movie-filter-head pb-2 border-b-[0.5px] border-neutral-500">
          <span>All Movies</span>
          <span>by Date</span>
          <span>by Category</span>
          <span>Coming soon</span>
        </div>
        <div className="movies-container mt-6 grid xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {films.map((film, index) => (
            <FilmCard {...film} key={index}></FilmCard>
          ))}
        </div>
      </section>
    </div>
  );
}
