import Image from "next/image";
import Button from "@/components/button";
import { aboutImages, swTextContent } from "@/constants";

export default function About(): JSX.Element {
  return (
    <section className="container mx-auto pt-8 px-12">
      <h1 className="text-4xl font-bold text-center">A Long Time Ago in a Galaxy Far, Far Away...</h1>
      <div className="about-gally-wrap flex justify-center items-center p-8 min-h-[68vh]">
        <div className="gallery mt-4">
          {aboutImages.map((aboutImage, index) => (
            <span key={index}>
              <Image width={550} height={400} alt={`About - ${index}`} src={aboutImage}></Image>
            </span>
          ))}
        </div>
      </div>
      <div className="xl:px-36 2xl:px-56 text-base">
        {swTextContent.about.map((about: string, index: number) => (
          <p className="mt-12" key={index}>{about}</p>
        ))}
      </div>
      <div className="text-center mt-6">
        <Button text="Official Website"></Button>
      </div>
    </section>
  );
}
