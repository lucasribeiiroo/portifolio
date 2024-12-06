import { motion } from "framer-motion";

const usePageTransition = (Component) => {
  return (
    <>
      <Component />
      <motion.div
        className="slide-in"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 0.85, ease: [0.5, 1, 0.5, 1] }}
      />
    </>
  );
};

export default usePageTransition;
