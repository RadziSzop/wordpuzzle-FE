import { useQuery } from "@tanstack/react-query";
import "../../index.css";
import axios from "axios";
import { Letters } from "../../components/Letters";
import { WordInput } from "../../components/WordInput";
import { useState } from "react";
interface GetGameResponse {
  data: {
    words: string[];
    letters: string[];
  };
}
export const Game = () => {
  const [guess, setGuess] = useState("");
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["game"],
    // onSuccess: () => {},
    queryFn: async () =>
      await axios.get<GetGameResponse>(`http://localhost:4000`),

    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
  });
  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
  if (isError) {
    console.log(error);
    return <p>Error occured</p>;
  }
  return (
    <div className="flex flex-col">
      <Letters
        letters={data?.data?.data?.letters}
        guess={guess}
        setGuess={setGuess}
      />
      <WordInput
        words={data.data.data.words}
        guess={guess}
        setGuess={setGuess}
      />
    </div>
  );
};
