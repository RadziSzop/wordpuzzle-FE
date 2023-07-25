import { useQuery } from "@tanstack/react-query";
import "../index.css";
import axios from "axios";
import { useState } from "react";
import { motion } from "framer-motion";
import { settings } from "../utils/settings";
import { useLocation } from "react-router-dom";
import { Game } from "../components/Game";
import { GetGameResponse } from "../types/response";
import { CorectWord } from "../types/words";
import { FinishScreen } from "../components/FinishScreen";
import { State } from "../types/game";
import loading from "../assets/loading.svg";
export const GameView = () => {
  const location = useLocation();
  const gameType = (location.state as State)?.type || "normal";

  const [guess, setGuess] = useState("");
  const [showWords, setShowWords] = useState(false);
  // const [startTime, setStartTimer] = useState(Date.now());
  const [correctWords, setCorrectWords] = useState<CorectWord[]>([]);
  const { isLoading, isError, error, data, refetch } = useQuery({
    queryKey: ["game"],
    // onSuccess: () => {
    //   setStartTimer(Date.now());
    // },
    queryFn: async () => await axios.get<GetGameResponse>(settings.BE_URL),
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
  });
  const handleNewGame = async () => {
    await refetch();
    setCorrectWords([]);
  };
  if (isLoading) {
    return (
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        src={loading}
        alt="loading animation"
        className="w-full, h-full"
      />
    );
  }
  if (isError) {
    console.log(error);
    return <p>Error occured</p>;
  }
  const neededScore =
    gameType === "half"
      ? Math.floor(data.data.data.words.length / 2)
      : gameType === "full"
      ? data.data.data.words.length
      : 10;
  return (
    <div className="max-w-7xl h-96">
      <Game
        correctWords={correctWords}
        guess={guess}
        letters={data.data.data.letters}
        setCorrectWords={setCorrectWords}
        setGuess={setGuess}
        words={data.data.data.words}
        neededScore={neededScore}
      />
      <FinishScreen
        correctWords={correctWords}
        handleNewGame={handleNewGame}
        neededScore={neededScore}
        setShowWords={setShowWords}
        showWords={showWords}
        words={data.data.data.words}
      />
    </div>
  );
};
