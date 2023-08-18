import { motion } from "framer-motion";
import { ClassNameValue, twMerge } from "tailwind-merge";
interface IProps {
  children: string;
  colorFrom?: string;
  colorTo?: string;
  textClasses?: ClassNameValue;
}

export const AnimatedText = ({
  children,
  colorFrom = "#e9d8c9",
  colorTo = "#774e2f",
  textClasses,
}: IProps) => {
  const container = {
    visible: {
      transition: {
        staggerChildren: 0.055,
      },
    },
  };
  const item = {
    hidden: {
      y: "200%",
      color: colorFrom,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
    },
    visible: {
      y: 0,
      color: colorTo,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
    },
  };
  const splitWords = children.split(" ");
  const words: string[][] = [];
  for (const [, item] of splitWords.entries()) {
    words.push(item.split(""));
  }
  if (words.length > 1) {
    for (const word of words) {
      word.push("\u00A0");
    }
    words[words.length - 1].pop();
  }
  const textClassesDefault = twMerge("text-4xl", textClasses);
  return (
    <motion.div initial="hidden" animate="visible" variants={container} layout>
      <motion.h1 className={textClassesDefault}>
        {words.map((word: string[], index: number) => {
          return (
            <span
              key={index}
              style={{ display: "inline-block", overflow: "hidden" }}
            >
              {word.map((letter: string, index: number) => {
                return (
                  <motion.span
                    key={index}
                    style={{ display: "inline-block", overflow: "hidden" }}
                    variants={item}
                  >
                    {letter}
                  </motion.span>
                );
              })}
            </span>
          );
        })}
      </motion.h1>
    </motion.div>
  );
};
