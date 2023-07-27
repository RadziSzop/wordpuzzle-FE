import { AnimatePresence, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

interface Props {
  progress: number;
  neededScore: number;
  containerClasses?: string;
  lineColor?: string;
}
export const ProgressBar = ({
  progress,
  neededScore,
  containerClasses,
  lineColor,
}: Props) => {
  const lineClasses = twMerge(
    "overflow-hidden h-3 bg-neutral-800 rounded-lg w-[28rem] mx-auto",
    containerClasses
  );
  return (
    <AnimatePresence>
      <div className={lineClasses}>
        <motion.div
          initial={{
            transform: `translateX(-100%)`,
            backgroundColor: lineColor || "#d46235",
            height: 12,
          }}
          animate={{
            transform: `translateX(${-100 + progress / (neededScore / 100)}%)`,
          }}
          exit={{
            opacity: 0,
          }}
          className=""
        ></motion.div>
      </div>
    </AnimatePresence>
  );
};
