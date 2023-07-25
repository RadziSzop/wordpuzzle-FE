import { AnimatePresence, motion } from "framer-motion";
import { CorrectWords } from "./CorrectWords";
import { Letters } from "./Letters";
import { WordInput } from "./WordInput";
import { CorectWord } from "../types/words";
interface Props {
  letters: string[];
  guess: string;
  correctWords: CorectWord[];
  words: string[];
  neededScore: number;
  setCorrectWords: React.Dispatch<React.SetStateAction<CorectWord[]>>;
  setGuess: React.Dispatch<React.SetStateAction<string>>;
}

export const Game = ({
  correctWords,
  words,
  guess,
  letters,
  setCorrectWords,
  setGuess,
  neededScore,
}: Props) => {
  return (
    <AnimatePresence>
      {correctWords.length < neededScore && (
        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: 5 }}
        >
          {/* {data.data.data.words.length} */}
          <Letters letters={letters} guess={guess} setGuess={setGuess} />
          <WordInput
            correctWords={correctWords}
            letters={letters}
            words={words}
            guess={guess}
            setGuess={setGuess}
            setCorrectWords={setCorrectWords}
          />
          <CorrectWords
            correctWords={correctWords}
            setCorrectWords={setCorrectWords}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
