import { Variants, motion, useAnimationControls } from "framer-motion";
import { getOccurrences } from "../utils/getOccurences";
interface Props {
  words: string[];
  guess: string;
  letters: string[];
  setGuess: React.Dispatch<React.SetStateAction<string>>;
  setCorrectWords: React.Dispatch<
    React.SetStateAction<
      {
        word: string;
        isError: boolean;
      }[]
    >
  >;
  correctWords: {
    word: string;
    isError: boolean;
  }[];
}
export const WordInput = ({
  words,
  guess,
  setGuess,
  letters,
  correctWords,
  setCorrectWords,
}: Props) => {
  const animationControler = useAnimationControls();
  const inputVariants: Variants = {
    default: {},
    error: {
      x: [0, -6, 6, -6, 0],
    },
  };
  const handleEnter = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (correctWords.some(({ word }) => (word === guess ? true : false))) {
        setCorrectWords((prevState) => {
          const newState = [...prevState];
          newState[
            newState.findIndex(({ word }) => {
              return word === guess;
            })
          ].isError = true;
          return newState;
        });
      } else if (words.includes(guess)) {
        setCorrectWords((prevState) => [
          ...prevState,
          { word: guess, isError: false },
        ]);
        setGuess("");
      } else {
        await animationControler.start("error");
      }
    }
  };
  return (
    <motion.input
      type="text"
      variants={inputVariants}
      animate={animationControler}
      className="border-0, border-b-zinc-700 border-b-2 bg-transparent outline-none tracking-widest text-3xl mt-8 focus:border-neutral-500 transition-colors duration-300 mx-auto px-2 pb-2 w-[28rem]"
      onKeyDown={handleEnter}
      transition={{ type: "tween", duration: 0.8 }}
      onChange={(e) => {
        let newString = "";
        for (const letter of e.target.value.toLowerCase()) {
          if (
            getOccurrences(letters, letter) > getOccurrences(newString, letter)
          ) {
            newString += letter;
          }
        }
        setGuess(newString);
      }}
      value={guess.toUpperCase()}
    />
  );
};
