import { motion } from "framer-motion";

const Text = ({ text }: any) => {
  return (
    <motion.div
      className=" py-10 text-e6palette-900 text-[2.4rem]/tight drop-shadow-lg md:text-[2.6rem] font-bold"
      key={text}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {text}
    </motion.div>
  );
};

export default Text;
