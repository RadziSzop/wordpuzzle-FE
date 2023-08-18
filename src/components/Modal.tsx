import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { GetDefinitions, GetDefinitionsError } from "../types/response";
import { settings } from "../utils/settings";
import loading from "../assets/loading.svg";

interface Props {
  word: string;
  setModal: React.Dispatch<React.SetStateAction<string | undefined>>;
}
export const Modal = ({ word, setModal }: Props) => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: [`words/${word}`],
    queryFn: async () => {
      return await axios.get<GetDefinitions>(
        `${settings.BE_URL}/definition/${word}`
      );
    },
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
  });

  return (
    <motion.div
      className="absolute justify-center items-center inset-0 flex place-content-center bg-[#00000080] cursor-pointer"
      onClick={() => {
        setModal(undefined);
      }}
    >
      <motion.div
        layout
        className="cursor-default w-11/12 max-w-max break-words p-4 flex flex-col justify-center items-center bg-neutral-800 rounded-lg border-1 border-solid border-neutral-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {!isError && (
          <motion.p className={`text-3xl w-full px-5 pb-2 text-left font-bold`}>
            {word.toUpperCase()}
          </motion.p>
        )}
        {isLoading ? (
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            src={loading}
            alt="loading animation"
            className="w-full, h-full"
          />
        ) : isError ? (
          <motion.p className="text-red-700 text-2xl">
            {(error as AxiosError<GetDefinitionsError>).response?.data
              .message || "Error occured, try again later"}
          </motion.p>
        ) : (
          data.data.data.map((definition, index) => {
            return (
              <motion.p
                className="text-left w-full text-lg font-medium my-1"
                key={index}
              >
                - {definition}
              </motion.p>
            );
          })
        )}
      </motion.div>
    </motion.div>
  );
};
