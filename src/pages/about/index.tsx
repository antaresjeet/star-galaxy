import Image from "next/image";
import placeholder from '../../../public/imgs/preview.jpg'
import Button from "@/components/button";
import './index.scss'
export default function About(): JSX.Element {
  return (
    <section className="container mx-auto py-8 px-12">
      <h1 className="text-4xl font-bold text-center">A Long Time Ago in a Galaxy Far, Far Away...</h1>
      <div className="about-gally-wrap flex justify-center items-center p-8 min-h-[68vh]">
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
      <h6 className="text-center">A murky world awaits. Here, we delve into the lives of bounty hunters -
        the galaxy&apos;s independent contractors who track down outlaws for a hefty price. Discover the motivations,
        codes of honor (or lack thereof), and the deadly tools of this trade. We&apos;ll also explore some of the most
        notorious bounty hunters in Star Wars history.</h6>
      <div className="text-center mt-6">
        <Button btnText="Official Website"></Button>
      </div>
    </section>
  );
}
