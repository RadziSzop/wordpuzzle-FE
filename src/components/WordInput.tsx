import { getOccurrences } from "../utils/getOccurences";

interface Props {
  words: string[];
  guess: string;
  letters: string[];
  setGuess: React.Dispatch<React.SetStateAction<string>>;
}
export const WordInput = ({ words, guess, setGuess, letters }: Props) => {
  return (
    <input
      type="text"
      className="border-0, border-b-zinc-700 border-b-2 bg-transparent outline-none tracking-widest text-3xl mt-8 focus:border-red-500 transition-colors duration-300 pb-2"
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          if (words.includes(guess)) {
            console.log("jest to slowo!");
          } else {
            console.log("nie ma tego słowa!");
          }
          console.log(guess);
        }
      }}
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
