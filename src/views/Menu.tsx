import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <div className="w-[28rem]">
      <Link to={"/game"}>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full px-4 py-8 text-2xl shadow-lg hover:shadow-2xl hover:shadow-black hover:text-neutral-200 transition"
        >
          Play
        </motion.button>
      </Link>
    </div>
  );
};
