import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import Socials from "../../components/socials";
import { useStore } from "../../App";

const Main = () => {
  const comp = useRef(null);
  const disabled = useStore((state) => state.disabled);
  const disabledAnimation = useStore((state) => state.disabledAnimation);

  useLayoutEffect(() => {
    if (!disabledAnimation) {
      let ctx = gsap.context(() => {
        const t1 = gsap.timeline();
        t1.from("#intro-slider", {
          xPercent: "-100",
          duration: disabledAnimation ? 0 : 1.3,
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
          .from(["#welcome", "#image-lucas"], {
            opacity: 0,
            duration: 0.5,
          });
      }, comp);

      return () => ctx.revert();
    }
    disabled();
  }, []);

  return (
    <div className="relative" ref={comp}>
      <div
        id="intro-slider"
        className="h-screen p-10 bg-gray-50 absolute top-0 left-0 font-spaceGrotesk z-10 w-full flex flex-col gap-10 tracking-tight"
      >
        {!disabledAnimation && (
          <>
            <h1 className="text-8xl" id="title-1">
              Software Engineer
            </h1>
            <h1 className="text-8xl" id="title-2">
              Front-End Developer
            </h1>
            <h1 className="text-8xl" id="title-3">
              React Developer
            </h1>
            <h1 className="text-8xl" id="title-4">
              Freelancer
            </h1>
          </>
        )}
      </div>

      <div className="h-screen flex bg-gray-950 justify-center">
        <div
          id="welcome"
          className="font-bold text-gray-300 font-spaceGrotesk place-items-center mt-40"
        >
          <h1 className="text-5xl text-nowrap">
            Welcome, i'm <span className="text-sky-500">Lucas Ribeiro</span>.
          </h1>
          <p className="text-2xl text-nowrap mt-4">
            Software Engineer, Front-End Developer, React Developer{" "}
            <span className="text-sky-500">& </span>
            Freelancer.
          </p>
          <Socials cv />
        </div>
        <div id="image-lucas" className="place-items-center mt-20">
          <img
            src="./src/assets/img_lucas.svg"
            className="w-[550px] h-[330px] absolute fill"
          />

          <motion.div>
            <motion.svg
              className="w-[550px] h-[300px] mt-0"
              viewBox="0 0 506 506"
              fill="transparent"
            >
              <motion.circle
                cx={253}
                cy={253}
                r={250}
                stroke={"#32b9e7"}
                strokeWidth={5}
                strokeLinecap={"round"}
                strokeLinejoin={"round"}
                initial={{ strokeDasharray: "24 10 0 0" }}
                animate={{
                  strokeDasharray: ["15 120 25 25", "16 25 92 72"],
                  rotate: [120, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatTime: "reverse",
                }}
              />
            </motion.svg>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Main;
