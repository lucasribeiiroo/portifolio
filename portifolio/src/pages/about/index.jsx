import { AnimatePresence, motion } from "framer-motion";
import { MdEngineering, MdComputer } from "react-icons/md";
import { useState } from "react";
import { FaReact, FaRegMoneyBillAlt } from "react-icons/fa";
import Card from "../../components/card";
import Socials from "../../components/socials";

export const items = [
  {
    title: "Software Engineer",
    description: "Graduated in Software Engineerig in PUCRS - 2021",
    icon: <MdEngineering />,
  },
  {
    title: "Front-End Developer",
    description:
      "Working and building applications with Front-end development tools.",

    icon: <MdComputer />,
  },
  {
    title: "React Developer",
    description:
      "More than 5 years of experience participating in projects and React.js ecosystem.",
    icon: <FaReact />,
  },
  {
    title: "Freelancer",
    description: "Making some extra is always good, right? :) ",
    icon: <FaRegMoneyBillAlt />,
  },
];

const About = () => {
  return (
    <div className="h-screen  bg-gray-950 justify-center place-items-center">
      <div className="max-w-5xl">
        <CardContainer items={items} />
      </div>
      <div className="-mt-10">
        <Socials cv={false} iconsSize={30} />
      </div>
    </div>
  );
};

export default About;

export const CardContainer = ({ items }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <motion.div
      className={"grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2  py-10"}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.5 },
      }}
    >
      {items.map((item, idx) => (
        <div
          key={item?.title}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card item={item} />
        </div>
      ))}
    </motion.div>
  );
};
