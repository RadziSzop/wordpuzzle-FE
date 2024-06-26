import { motion } from "framer-motion";
import { Fragment } from "react";
import { Typewriter } from "react-simple-typewriter";
import { CorectWord } from "../types/words";
interface Props {
  setCorrectWords: React.Dispatch<React.SetStateAction<CorectWord[]>>;
  correctWords: CorectWord[];
}

export const CorrectWords = ({ correctWords, setCorrectWords }: Props) => {
  return (
    <motion.div className="mx-auto w-[28rem]  gap-2 flex-wrap flex items-start  justify-center mt-2">
      {/* {correctWords.length} */}
      {correctWords.map(({ word, isError }, index) => {
        return (
          <Fragment key={index}>
            <motion.p
              layout
              className="h-10 text-lg text-left block  pt-1.5 font-medium px-4 bg-zinc-800 align-middle rounded-lg"
              animate={
                isError
                  ? {
                      backgroundColor: "#b13232",
                      scale: 1.1,
                      transition: {
                        type: "spring",
                      },
                    }
                  : {
                      scale: 1,
                      transition: {
                        type: "spring",
                      },
                    }
              }
              onAnimationComplete={() => {
                if (isError) {
                  setCorrectWords((prevState) => {
                    const newState = [...prevState];
                    newState[index].isError = false;
                    return newState;
                  });
                }
              }}
            >
              <Typewriter typeSpeed={100} words={[word.toUpperCase()]} />
            </motion.p>
          </Fragment>
        );
      })}
    </motion.div>
  );
};
