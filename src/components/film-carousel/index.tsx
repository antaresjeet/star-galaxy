import Image from "next/image";
import Button from "@/components/button";
import { useEffect, useRef, useState } from "react";
import useWindowSize from "@/helpers/hooks/useWindowResize";
import { CarouselProps } from "@/declarations";
import { AnimatePresence, Variants, motion } from "framer-motion";
import { openNewWindow } from "@/helpers";

export default function Carousel({ carouselItems }: CarouselProps) {
  const windowSize = useWindowSize();
  const previewContainer = useRef<HTMLDivElement>(null);
  const listContainer = useRef<HTMLDivElement>(null);
  const [listHeight, setListHeight] = useState<string>('0');
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const slideViewTime = 5000;

  useEffect(() => {
    if (!previewContainer.current) return;
    setListHeight(`${windowSize.width > 1024 ? (previewContainer.current.offsetHeight + 'px') : 'max-content'}`);
  }, [previewContainer, windowSize])


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % carouselItems.length)
    }, slideViewTime);

    const updateListScroll = () => {
      if (!listContainer.current) return;

      //* height of each list item
      const listItemHeight = (listContainer.current.firstElementChild as HTMLElement).offsetHeight;

      //* scroll to the new position
      listContainer.current.scrollTo({
        top: currentSlide * listItemHeight,
        behavior: 'smooth',
      });
    }

    if (windowSize.width > 1024 && listContainer.current) {
      updateListScroll();
    }
    return () => {
      clearInterval(interval)
    }
  }, [currentSlide, carouselItems.length, windowSize.width])

  return (
    <section className="container relative mx-auto py-8 px-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="col-span-9">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0.5 }}
              transition={{ duration: 0.1 }}
              className="relative min-h-[55vh] before:rounded-[10px] p-12 bg-[center_top] before:content-[''] before:block before:absolute before:bg-gradient-to-r before:left-[0.3px]
              before:from-black to-black before:-inset-1 before:top-[0.3px] flex items-center before:bottom-[0.3px] rounded-[10px]
              border border-[var(--theme-yellow-color)]"
              ref={previewContainer}>
              <Image
                src={carouselItems[currentSlide].coverImage}
                alt={carouselItems[currentSlide].title}
                layout="fill"
                className="rounded-[10px] -z-1"
                placeholder="blur"
              />
              <div className="films-banner-content w-2/3 relative z-2">
                <h3 className="text-3xl mb-4">{carouselItems[currentSlide].title}</h3>
                <p className="hidden md:block">{carouselItems[currentSlide].tagline}</p>
                <div className="watch-btn mt-10">
                  <Button text="Watch Now" clickHandler={() => openNewWindow(`${process.env.starWarsOfficialWebsite}${carouselItems[currentSlide].url}`)} />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        {windowSize.width > 1024 && (
          <div className="col-span-3 overflow-y-auto" style={{
            maxHeight: listHeight
          }} ref={listContainer}>
            {carouselItems.map((carouselItem, index) => (
              <motion.div className="flex mb-4 cursor-pointer relative" key={index} onClick={() => setCurrentSlide(index)}>
                <div className="flex p-[6px]">
                  <Image alt={carouselItem.coverImage} className="min-w-[68px] w-[68px] h-[68px] rounded-[5px] border border-neutral-500 me-3" src={carouselItem.image} placeholder="blur"></Image>
                  <h5>{carouselItem.title} (Episode {carouselItem.episodeRoman})</h5>
                </div>
                {currentSlide === index && (
                  <motion.div
                    layoutId="selectedBackdrop"
                    className="bg-[#ffffff33] w-full h-full absolute rounded-md"
                  />
                )}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}