import Tabs from "../../components/tabs";
import { motion } from "framer-motion";

const items = [
  {
    title: "Captura 4.0",
    value: "Captura 4.0",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10  bg-gradient-to-br from-sky-700 to-sky-900">
        <h4 className="text-xl md:text-3xl font-bold text-white">
          Bem Promotora - Captura 4.0
        </h4>
        <p className="mt-8 text-xl md:text-xl text-white font-bold">
          Software with the purpose of consigned credit, with operations like
          New Contract, Portability, Refinancing and Purchase of debt.
        </p>

        <p className="mt-2 text-xl md:text-xl text-gray-900 font-bold">
          Roles: Front-End Development // Componentization // Styling //
          Interface Design // Tests // Architecture
        </p>
      </div>
    ),
  },
  {
    title: "FGTS",
    value: "FGTS",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10  bg-gradient-to-br from-sky-700 to-sky-900">
        <h4 className="text-xl md:text-3xl font-bold text-white">
          Bem Promotora - FGTS
        </h4>
        <p className="mt-8 text-xl md:text-xl text-white font-bold">
          Software for Employee Severance Fund proposals.
        </p>
        ~
        <p className="mt-2 text-xl md:text-xl text-gray-900 font-bold">
          Roles: Front-End Development // Componentization // Styling //
          Interface Design // Tests // Architecture
        </p>
      </div>
    ),
  },
  {
    title: "MOVE",
    value: "MOVE",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10  bg-gradient-to-br from-sky-700 to-sky-900">
        <h4 className="text-xl md:text-3xl font-bold text-white">
          Bem Promotora - MOVE
        </h4>
        <p className="mt-8 text-xl md:text-xl text-white font-bold">
          Development of the platform afor CRM (Customer relationship
          management).
        </p>
        ~
        <p className="mt-2 text-xl md:text-xl text-gray-900 font-bold">
          Roles: FullStack Development // API // Database // Architecture //
          Componentization // Styling // Tests{" "}
        </p>
      </div>
    ),
  },
  {
    title: "Storybook",
    value: "Storybook",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10  bg-gradient-to-br from-sky-700 to-sky-900">
        <h4 className="text-xl md:text-3xl font-bold text-white">
          Bem Promotora - Storybook
        </h4>
        <p className="mt-8 text-xl md:text-xl text-white font-bold">
          Creation of components in the storybook used on Bem Promotora
          projects.
        </p>
        ~
        <p className="mt-2 text-xl md:text-xl text-gray-900 font-bold">
          Roles: Front-End Development // Componentization // Styling //
          Interface Design // Tests // Architecture
        </p>
      </div>
    ),
  },
  {
    title: "Ciclo",
    value: "Ciclo",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10  bg-gradient-to-br from-sky-700 to-sky-900">
        <h4 className="text-xl md:text-3xl font-bold text-white">
          Ciclo Sustentavél
        </h4>
        <p className="mt-8 text-xl md:text-xl text-white font-bold">
          Admin Dashboard (WEB) of{" "}
          <a href="https://ciclo.eco/" target="_blank">
            CICLO– Sustentável
          </a>
          , a platform with trash recycle purpose.
        </p>
        ~
        <p className="mt-2 text-xl md:text-xl text-gray-900 font-bold">
          Roles: Front-End Development // Componentization // Styling //
          Interface Design // Tests // Architecture
        </p>
      </div>
    ),
  },
  {
    title: "Darwinsoft",
    value: "Darwinsoft",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10  bg-gradient-to-br from-sky-700 to-sky-900">
        <h4 className="text-xl md:text-3xl font-bold text-white">
          Darwinsoft - FBC Transportes
        </h4>
        <p className="mt-8 text-xl md:text-xl text-white font-bold">
          Admin dashboard for management freight transportation for FBC
          Transportes.
        </p>
        ~
        <p className="mt-2 text-xl md:text-xl text-gray-900 font-bold">
          Roles: Front-End Development // Componentization // Styling //
          Interface Design // Tests // Architecture
        </p>
      </div>
    ),
  },
];

const Project = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.5 },
      }}
      className="h-screen flex bg-gray-950"
    >
      <div className="flex flex-col mt-8 mx-auto">
        <Tabs tabs={items} />
      </div>
    </motion.div>
  );
};

export default Project;
