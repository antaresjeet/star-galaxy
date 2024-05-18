import { ModalProps } from "@/declarations";
import { motion } from "framer-motion";

export default function Modal({ children, animation }: ModalProps): JSX.Element {
  return (
    <motion.div className="flex overflow-y-auto backdrop-blur-sm overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full" initial={{
      x: 400, opacity: 0
    }} animate={animation} variants={{
      open: { x: 0, opacity: 1 },
      close: { x: 800, opacity: 0 }
    }}>
      {children}
    </motion.div>
  );
}
