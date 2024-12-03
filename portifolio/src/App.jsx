import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import Header from "./components/header";

const App = () => {
  const comp = useRef(null);

  /* useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
        delay: 0.3,
      })
        .from(["#title-1", "#title-2", "#title-3", "#title-4"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.5,
        })
        .to(["#title-1", "#title-2", "#title-3", "#title-4"], {
          opacity: 0,
          y: "-=30",
          delay: 0.3,
          stagger: 0.5,
        })
        .to("#intro-slider", {
          xPercent: "-100",
          duration: 1.3,
        })
        .from("#welcome", {
          opacity: 0,
          duration: 0.5,
        });
    }, comp);

    return () => ctx.revert();
  }, []); */
  return (
    <div className="relative" ref={comp}>
      {/*    <div
        id="intro-slider"
        className="h-screen p-10 bg-gray-50 absolute top-0 left-0 font-spaceGrotesk z-10 w-full flex flex-col gap-10 tracking-tight"
      >
        <h1 className="text-8xl" id="title-1">
          Software Engineer
        </h1>
        <h1 className="text-8xl" id="title-2">
          React Developer
        </h1>
        <h1 className="text-8xl" id="title-3">
          Front-End Developer
        </h1>
        <h1 className="text-8xl" id="title-4">
          Freelancer
        </h1>
      </div> */}
      <Header />
      <div className="h-screen flex bg-gray-950 justify-center place-items-center">
        <h1
          id="welcome"
          className="text-8xl font-bold text-gray-100 font-spaceGrotesk"
        >
          Welcome, i'm Lucas Ribeiro.
          {/* <motion.div>
            <motion.svg className="w-[300px] h-[300px]" viewBox="0 0 506 506">
              <motion.circle
                cx={253}
                cy={253}
                r={250}
                stroke={"#32b9e7"}
                strokeWidth={4}
                strokeLinecap={"round"}
                strokeLinejoin={"round"}
                initial={{ strokeDasharray: "24 10 0 0" }}
                animate={{
                  strokeDasharray: [
                    "15 120 25 25",
                    "16 25 92 72",
                    "4 250 22 22",
                  ],
                  rotate: [120, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatTime: "reverse",
                }}
              />
            </motion.svg>
          </motion.div> */}
        </h1>
      </div>
    </div>
  );
};

export default App;
