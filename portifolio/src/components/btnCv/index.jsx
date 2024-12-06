import { useState } from "react";
import { Container, Circle, ArrowDown, Title } from "./styles";
import { motion } from "framer-motion";

const BtnCv = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <Container
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <motion.div
        animate={{
          scale: isHover ? 800 : 1,
        }}
        transition={{
          ease: "easeInOut",
        }}
      >
        <Circle />
      </motion.div>

      <Title>Download CV</Title>

      <motion.div
        animate={{
          position: isHover ? "relative" : "none",
          display: isHover ? "flex" : "none",
          zIndex: 10,
        }}
        transition={{
          ease: "easeOut",
          delay: 0.1,
        }}
      >
        <ArrowDown />
      </motion.div>
    </Container>
  );
};

export default BtnCv;
