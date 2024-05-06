import Image from "next/image";
import placeholder from '../../../public/images/preview.jpg'
export default function About(): JSX.Element {
  return (
    <section className="container mx-auto">
      <h1 className="text-3xl font-bold text-center">A Long Time Ago in a Galaxy Far, Far Away...</h1>
      <div className="about-gally-wrap flex justify-center items-center p-8 min-h-[70vh]">
        <div className="gallery mt-4">
          <span>
            <Image width={550} height={400} alt="" src={placeholder}></Image>
          </span>
          <span>
            <Image width={550} height={400} alt="" src={placeholder}></Image>
          </span>
          <span>
            <Image width={550} height={400} alt="" src={placeholder}></Image>
          </span>
          <span>
            <Image width={550} height={400} alt="" src={placeholder}></Image>
          </span>
          <span>
            <Image width={550} height={400} alt="" src={placeholder}></Image>
          </span>
          <span>
            <Image width={550} height={400} alt="" src={placeholder}></Image>
          </span>
          <span>
            <Image width={550} height={400} alt="" src={placeholder}></Image>
          </span>
          <span>
            <Image width={550} height={400} alt="" src={placeholder}></Image>
          </span>
        </div>
      </div>
      <p className="text-center">A murky world awaits. Here, we delve into the lives of bounty hunters - the galaxy's independent contractors who track down outlaws for a hefty price. Discover the motivations, codes of honor (or lack thereof), and the deadly tools of this trade. We'll also explore some of the most notorious bounty hunters in Star Wars history.</p>
    </section>
  );
}
