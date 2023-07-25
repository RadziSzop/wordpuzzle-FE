import { FaPlay } from "react-icons/fa";
import { BsSquareHalf } from "react-icons/bs";
import { IoDice } from "react-icons/io5";
import { MenuButton } from "../components/MenuButton";
import { IconType } from "react-icons/lib/esm/iconBase";

export const MenuView = () => {
  return (
    <div className="w-[28rem]">
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
  );
};
