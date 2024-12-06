import { IoLogoJavascript } from "react-icons/io";
import {
  FaReact,
  FaCss3,
  FaHtml5,
  FaNodeJs,
  FaSass,
  FaLess,
  FaBootstrap,
  FaGitlab,
  FaJira,
  FaBitbucket,
} from "react-icons/fa";
import {
  SiRedux,
  SiJest,
  SiTypescript,
  SiTestinglibrary,
} from "react-icons/si";

import { VscAzure } from "react-icons/vsc";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiStyledcomponents, SiAxios, SiVitest } from "react-icons/si";
import { BiLogoMongodb, BiPlusCircle } from "react-icons/bi";

import { PiFileSql } from "react-icons/pi";

import SkillsContainer from "../../components/skillsContainer";
import BtnCv from "../../components/btnCv";
const items = [
  {
    title: "React",
    icon: (
      <FaReact className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },

  {
    title: "Redux",
    icon: (
      <SiRedux className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },

  {
    title: "Jest",
    icon: (
      <SiJest className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "React Testing Library",
    icon: (
      <SiTestinglibrary className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },

  {
    title: "JavaScript",
    icon: (
      <IoLogoJavascript className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Typescript",
    icon: (
      <SiTypescript className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Axios",
    icon: (
      <SiAxios className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Node",
    icon: (
      <FaNodeJs className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Vitest",
    icon: (
      <SiVitest className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Next",
    icon: (
      <RiNextjsFill className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "SQL",
    icon: (
      <PiFileSql className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "MongoDB",
    icon: (
      <BiLogoMongodb className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "HTML",
    icon: (
      <FaHtml5 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "CSS",
    icon: (
      <FaCss3 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },

  {
    title: "Styled-Components",
    icon: (
      <SiStyledcomponents className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "SASS",
    icon: (
      <FaSass className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Less",
    icon: (
      <FaLess className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Bootstrap",
    icon: (
      <FaBootstrap className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "TailwindCSS",
    icon: (
      <RiTailwindCssFill className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },

  {
    title: "GitLab",
    icon: (
      <FaGitlab className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Jira",
    icon: (
      <FaJira className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },

  {
    title: "BitBucket",
    icon: (
      <FaBitbucket className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Azure",
    icon: (
      <VscAzure className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "more on CV :)",
    icon: (
      <BiPlusCircle className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
];

const Skils = () => {
  return (
    <div className="h-screen p-10 bg-gray-950 justify-center place-items-center">
      <div className="max-w-3xl mx-auto">
        <SkillsContainer items={items} />
      </div>
      <BtnCv />
    </div>
  );
};

export default Skils;
