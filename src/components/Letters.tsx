import { motion } from "framer-motion";
import { LetterBox } from "./LetterBox";
interface Props {
  letters: string[];
  guess: string;
  setGuess: React.Dispatch<React.SetStateAction<string>>;
}
export const Letters = ({ letters, guess, setGuess }: Props) => {
  return (
    <motion.div
      className="flex gap-3 m-auto mb-4"
      transition={{ staggerChildren: 1 }}
    >
      {letters.map((letter, i) => {
        return <LetterBox letter={letter} key={i} index={i} guess={guess} />;
      })}
    </motion.div>
  );
};
