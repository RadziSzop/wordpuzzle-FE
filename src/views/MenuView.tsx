import { FaPlay } from "react-icons/fa";
import { BsSquareHalf } from "react-icons/bs";
import { IoDice } from "react-icons/io5";
import { MenuButton } from "../components/MenuButton";
import { IconType } from "react-icons/lib/esm/iconBase";
// import { AnimatedText } from "../components/AnimatedText";

export const MenuView = () => {
  return (
    <>
      <div className=" p-4  mb-6 rounded-full w-full">
        {/* <AnimatedText
          textClasses="text-8xl font-bold "
          colorFrom="#171717"
          colorTo="#171717"
        >
         
        </AnimatedText> */}
        <h1 className="text-6xl font-bold text-neutral-300">LAME GAME</h1>
      </div>
      <div className="w-[28rem] mx-auto">
        <MenuButton
          linkTo="/game"
          text="Play"
          state={{ type: "normal" }}
          Icon={FaPlay as IconType}
        />
        <div className="flex w-full gap-4">
          <MenuButton
            linkTo="/game"
            text="Half"
            state={{ type: "half" }}
            Icon={BsSquareHalf as IconType}
          />
          <MenuButton
            linkTo="/game"
            text="FreePlay"
            state={{ type: "full" }}
            Icon={IoDice as IconType}
          />
        </div>
      </div>
    </>
  );
};
