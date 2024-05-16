import Image from "next/image";
import placeholder from '../../../public/imgs/movie-preview.png'
import Button from "@/components/button";
export default function Shop(): JSX.Element {
  return (
    <section className="shop-star-container container px-12 py-8">
      <div className="shop-star-war mt-6 grid xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        <div className="shop-card">
          <Image alt='' src={placeholder}></Image>
          <div className="shop-item-info bg-[#333333] p-2 z-[2] w-[90%] left-[11px] top-[-20px] right-[14px] relative text-center">
            <h4>Star Wars Art</h4>
            <span>$45</span>
            <div className="text-ecenter mt-2 mb-2">
              <Button text="Add to cart"></Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
