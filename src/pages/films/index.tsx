import Image from "next/image";
import placeholder from '../../../public/imgs/movie-preview.png'
import Button from "@/components/button";
import './index.scss'
export default function Films(): JSX.Element {
  return (
    <div className="movies-star-war">
      <section className="container relative mx-auto py-8 px-12 bg-[url('/imgs/films-bg.png')] bg-[center_top_510px] min-h-[65vh] flex
      items-center justify-center before:content-[''] before:absolute before:inset-0 before:block before:bg-[#000000a6]">
        <h1 className="text-4xl relative z-[1] font-bold text-center">Star Wars Treasury: From A New Hope to The Rise
          of Skywalker</h1>
      </section>
      <section className="filter-movies-list container px-12 py-8">
        <div className="movie-filter-head pb-2 border-b-[1px] border-text-white">
          <span>All Movies</span>
          <span>by Date</span>
          <span>by Category</span>
          <span>Coming soon</span>
        </div>
        <div className="movies-container mt-6 grid xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          <div className="movie-card">
            <Image className="w-full" alt='movie' src={placeholder}></Image>
            <div className="movie-info text-center px-2 pt-2">
              <p>Star Wars: A New Hope (Episode IV) (1977)</p>
              <small>Release year:  1977</small>
              <div className="movie-action mt-2">
                <Button btnText="View Details"></Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
