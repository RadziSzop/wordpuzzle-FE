import { motion, AnimatePresence } from "framer-motion";

interface Props {
  letter: string;
  index: number;
  guess: string;
}
export const LetterBox = ({ index, letter, guess }: Props) => {
  return (
    <div
      className={`w-12 bg-zinc-800 h-16 flex justify-center items-center rounded-lg text-xl text-neutral-300 shadow-black shadow-inner overflow-hidden transition-colors ${
        guess.includes(letter) ? "bg-blue-700" : ""
      }`}
    >
      <AnimatePresence>
        <motion.p
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          exit={{ opacity: 0 }}
          transition={{
            type: "spring",
            delay: index / 10,
            // stiffness: 150,
            damping: 20,
          }}
          className="font-bold"
        >
          {letter.toUpperCase()}
        </motion.p>
      </AnimatePresence>
    </div>
  );
};
