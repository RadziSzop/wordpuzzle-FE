import { FaPlay } from "react-icons/fa";
import { BsSquareHalf } from "react-icons/bs";
import { IoDice } from "react-icons/io5";
import { MenuButton } from "../components/MenuButton";
import { IconType } from "react-icons/lib/esm/iconBase";
import { AnimatedText } from "../components/animatedText";

export const MenuView = () => {
  return (
    <>
      <div className="bg-[#0b0b0b] p-4  mb-4 rounded-3xl w-full">
        <AnimatedText
          textClasses="text-8xl font-bold "
          colorFrom="#171717"
          colorTo="#171717"
        >
          Word Gay
        </AnimatedText>
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
