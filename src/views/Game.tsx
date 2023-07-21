import { Typewriter } from "react-simple-typewriter";
import { useQuery } from "@tanstack/react-query";
import "../index.css";
import axios from "axios";
import { Letters } from "../components/Letters";
import { WordInput } from "../components/WordInput";
import { Fragment, useState } from "react";
import { CorrectWords } from "../components/CorrectWords";
import { AnimatePresence, motion } from "framer-motion";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
interface GetGameResponse {
  data: {
    words: string[];
    letters: string[];
  };
}
export const Game = () => {
  const [guess, setGuess] = useState("");
  const [showWords, setShowWords] = useState(false);
  // const [startTime, setStartTimer] = useState(Date.now());
  const [correctWords, setCorrectWords] = useState<
    { word: string; isError: boolean }[]
  >([]);
  const { isLoading, isError, error, data, refetch } = useQuery({
    queryKey: ["game"],
    // onSuccess: () => {
    //   setStartTimer(Date.now());
    // },
    queryFn: async () =>
      await axios.get<GetGameResponse>(`http://localhost:4000`),
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
  });
  console.log(correctWords.length);

  const handleNewGame = async () => {
    await refetch();
    setCorrectWords([]);
  };
  if (isLoading) {
    return (
      <AnimatePresence>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          Loading...
        </motion.p>
      </AnimatePresence>
    );
  }
  if (isError) {
    console.log(error);
    return <p>Error occured</p>;
  }
  return (
    <div className="max-w-7xl h-96">
      <AnimatePresence>
        {correctWords.length < 1 && (
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: 5 }}
          >
            {/* {data.data.data.words.length} */}
            <Letters
              letters={data?.data?.data?.letters}
              guess={guess}
              setGuess={setGuess}
            />
            <WordInput
              correctWords={correctWords}
              letters={data?.data?.data?.letters}
              words={data.data.data.words}
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
      {/* <AnimatePresence> */}
      {correctWords.length >= 1 && (
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
                data.data.data.words.map((word, index) => {
                  return (
                    <motion.span
                      key={word}
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: { delay: index * 0.03 },
                      }}
                      exit={{
                        opacity: 0,
                        transition: {
                          delay:
                            0.03 * data.data.data.words.length - index * 0.03,
                        },
                      }}
                      className={`h-10 text-lg text-left block  pt-1.5 font-medium px-4 bg-zinc-800 align-middle rounded-lg ${
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
      {/* </AnimatePresence> */}
    </div>
  );
};
