import { motion } from "framer-motion";

// This is a utility component for the text that changes at the bottom of the hours component
// Controls the animations, apperance, height, size, etc... of the changing text
const Text = ({ text }: any) => {
  return (
    <motion.div
      className="h-full text-e6palette-900 text-[2.1rem]/tight drop-shadow-lg md:text-[2.6rem] font-bold"
      key={text}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {text}
    </motion.div>
  );
};

export default Text;
