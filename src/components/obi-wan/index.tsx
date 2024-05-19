import React, { useEffect, useState } from "react";
import KidObiWanAnimated from "../../../public/extras/kid-obi-wan-kenobi-animated.webp";
import Image from "next/image";
import { delay, motion, useAnimate } from "framer-motion";
import { swTextContent } from "@/constants";

export default function ObiWan() {
  const [scope, animate] = useAnimate();
  const [quotes] = useState(swTextContent.quotes);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  const changeQuote = () => {
    setCurrentQuoteIndex((prevIndex) =>
      prevIndex === quotes.length - 1 ? 0 : prevIndex + 1
    );
  };

  async function obiWanAnimations() {
    await animate(scope.current, { y: 0, opacity: 1, delay: 1 }, {
      type: "spring",
      bounce: 0.1,
      duration: 1.6
    });
    animate(scope.current, { y: -20 },
      {
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 0,
        duration: 1.2,
      }
    );
  }

  useEffect(() => {
    obiWanAnimations();
  }, [])

  return (
    <motion.div className="fixed -translate-y-2/4 h-auto z-[10] cursor-pointer left-[45px] top-[220px]" ref={scope} initial={{ y: -400, opacity: 0 }}>
      <div className="flex flex-col items-center gap-2">
        <motion.div className="group relative" whileTap={{ skewY: 2 }}>
          <Image alt='Obi Wan' className="w-[80px] select-none" src={KidObiWanAnimated} height={100} width={100} onMouseEnter={changeQuote} draggable="false" placeholder="blur"></Image>
          <div
            className="bg-zinc-800 p-2 rounded-full group-hover:flex hidden absolute top-1/2 -translate-y-1/2 -right-2 translate-x-full"
          >
            <span className="break-words p-1 w-max max-w-96 rounded-md text-[var(--theme-yellow-color)]">{quotes[currentQuoteIndex]}</span>
            <div
              className="bg-inherit rotate-45 p-1 absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/2"
            ></div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
};
