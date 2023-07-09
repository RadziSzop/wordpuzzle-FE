interface Props {
  words: string[];
  guess: string;
  setGuess: React.Dispatch<React.SetStateAction<string>>;
}
export const WordInput = ({ words, guess, setGuess }: Props) => {
  return (
    //   border:0;
    // border-bottom:1px solid #555;
    // background:transparent;
    // width:100%;
    // padding:8px 0 5px 0;
    // font-size:16px;
    // color:#fff;
    <input
      type="text"
      className="border-0, border-b-zinc-700 border-b-2 bg-transparent outline-none tracking-widest text-3xl mt-8 focus:border-red-500 transition-colors duration-300 pb-2"
      // className="text-2xl outline-none p-1"
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
        setGuess(e.target.value);
      }}
      value={guess}
    />
  );
};
