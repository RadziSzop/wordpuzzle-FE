import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { State } from "../types/game";
import { twMerge } from "tailwind-merge";
import { IconType } from "react-icons/lib/esm/iconBase";
interface Props {
  text: string;
  linkTo: string;
  state?: State;
  containerClasses?: string;
  textClasses?: string;
  Icon?: IconType;
}
export const MenuButton = ({
  text,
  linkTo,
  state,
  containerClasses,
  textClasses,
  Icon,
}: Props) => {
  const [hoverState, setHoverState] = useState(false);
  const containerClassesDefault = twMerge(
    "w-full flex-grow px-4 py-8 text-2xl shadow-lg flex justify-center items-center hover:shadow-2xl hover:shadow-black hover:text-neutral-200 transition duration-300",
    containerClasses
  );
  return (
    <Link
      to={linkTo}
      state={state}
      className="w-1/2"
      onMouseEnter={() => {
        setHoverState(true);
      }}
      onMouseLeave={() => {
        setHoverState(false);
      }}
    >
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={containerClassesDefault}
      >
        {Icon && (
          <motion.div animate={hoverState ? { x: -5 } : {}}>
            <Icon />
          </motion.div>
        )}
        <motion.p
          layout
          className={textClasses || ""}
          style={{ overflow: "hidden" }}
          transition={{
            duration: 0.3,
          }}
          initial={{ width: "0px" }}
          animate={
            hoverState
              ? {
                  width: "max-content",
                }
              : {}
          }
        >
          {text}
        </motion.p>
      </motion.button>
    </Link>
  );
};
