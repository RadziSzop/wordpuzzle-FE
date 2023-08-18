import { AnimatePresence, motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CorectWord } from "../types/words";
import { useState } from "react";
import { Modal } from "./Modal";

interface Props {
  correctWords: CorectWord[];
  words: string[];
  setShowWords: React.Dispatch<React.SetStateAction<boolean>>;
  showWords: boolean;
  handleNewGame: () => Promise<void>;
  neededScore: number;
}
export const FinishScreen = ({
  correctWords,
  words,
  setShowWords,
  showWords,
  neededScore,
  handleNewGame,
}: Props) => {
  const [modal, setModal] = useState<string>();

  return (
    <AnimatePresence>
      {correctWords.length >= neededScore && (
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
        >
          <div className="w-full flex flex-col justify-center">
            <p className="text-4xl block mb-4">GOOD JOB!</p>
            {/* <p className="text-4xl">
              <Typewriter
                words={[
                  "YOUR TIME:",
                  `${((Date.now() - startTime) / 1000).toFixed(1)}s`,
                ]}
              />
            </p> */}
          </div>
          <div className="flex gap-2 mb-4">
            <motion.button
              className="h-20 w-60 hover:shadow-black hover:shadow-2xl text-3xl shadow-lg transition duration-500 hover:text-neutral-200"
              onClick={handleNewGame}
            >
              NEW GAME
            </motion.button>
            <Link to={"/"}>
              <motion.button className="h-20 w-60 hover:shadow-black hover:shadow-2xl text-3xl shadow-lg transition duration-500 hover:text-neutral-200">
                MENU
              </motion.button>
            </Link>
          </div>
          <div
            className="mx-auto w-max flex items-center gap-2 cursor-pointer"
            onClick={() => {
              setShowWords((show) => !show);
            }}
          >
            <p className="2xl uppercase font-semibold">Show words</p>
            <div
              className={`${
                showWords ? "rotate-180" : "rotate-0"
              } transition-transform duration-500`}
            >
              <FaChevronDown />
            </div>
          </div>
          <motion.div className="w-72 flex flex-wrap justify-center gap-2 max-h-72 overflow-auto scroll pr-1">
            <AnimatePresence>
              {showWords &&
                words.map((word, index) => {
                  return (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: { delay: index * 0.03 },
                      }}
                      exit={{
                        opacity: 0,
                        transition: {
                          delay: 0.03 * words.length - index * 0.03,
                        },
                      }}
                      onClick={() => {
                        setModal(word);
                      }}
                      className={`cursor-pointer h-10 text-lg text-left block  pt-1.5 font-medium px-4 bg-zinc-800 align-middle rounded-lg ${
                        correctWords.some(
                          (correctWord) => correctWord.word === word
                        )
                          ? "text-blue-600"
                          : ""
                      } `}
                    >
                      {word}
                    </motion.span>
                  );
                })}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
      ``
      <AnimatePresence>
        {modal && <Modal word={modal} setModal={setModal} />}
      </AnimatePresence>
    </AnimatePresence>
  );
};
