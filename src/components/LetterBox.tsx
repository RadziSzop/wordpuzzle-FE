import { motion, AnimatePresence } from "framer-motion";
import { getOccurrences } from "../utils/getOccurences";
import { getSameLetterIndex } from "../utils/getSameLetterIndex";

interface Props {
  letter: string;
  letters: string[];
  index: number;
  guess: string;
  setGuess: React.Dispatch<React.SetStateAction<string>>;
}
export const LetterBox = ({
  index,
  letter,
  guess,
  letters,
  setGuess,
}: Props) => {
  const myIndex = getSameLetterIndex(letters, letter, index);
  const occurences = getOccurrences(guess, letter);

  return (
    <motion.div
      className={`w-12 cursor-pointer h-16 flex justify-center items-center rounded-lg text-xl text-neutral-300 overflow-hidden transition-all ${
        occurences >= myIndex
          ? "bg-blue-700 shadow-md scale-105 shadow-zinc-950"
          : "bg-zinc-800 shadow-inner shadow-black "
      }`}
      onClick={() => {
        setGuess((prev) => {
          if (occurences >= myIndex) {
            return prev.replace(letter, "");
          } else {
            return (prev += letter);
          }
        });
      }}
    >
      <AnimatePresence>
        <motion.p
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          exit={{ y: 50 }}
          transition={{
            type: "spring",
            delay: index / 10,
            damping: 20,
          }}
          className="font-bold select-none"
        >
          {letter.toUpperCase()}
        </motion.p>
      </AnimatePresence>
    </motion.div>
  );
};
