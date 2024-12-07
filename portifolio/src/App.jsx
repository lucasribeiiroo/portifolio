import { useRef } from "react";
import Main from "./pages/main";
import About from "./pages/about";
import Skills from "./pages/skills";
import Projects from "./pages/projects";
import NavBar from "./components/navbar";
import Contact from "./pages/contact";
import { Routes, Route, useLocation } from "react-router";
import usePageTransition from "./hooks/usePageTransition";
import { create } from "zustand";

export const useStore = create((set) => ({
  disabledAnimation: false,
  disabled: () =>
    set((state) => {
      return { alreadyEntered: (state.disabledAnimation = true) };
    }),
}));

const App = () => {
  const comp = useRef(null);
  const location = useLocation();
  const AboutPage = usePageTransition(About);
  const SkillsPage = usePageTransition(Skills);
  const ProjectsPage = usePageTransition(Projects);
  const MainPage = usePageTransition(Main);
  const ContactPage = usePageTransition(Contact);

  return (
    <div className="relative" ref={comp}>
      <NavBar id="navbar" />
      <Routes location={location} key={location.pathname}>
        <Route index element={MainPage} />
        <Route path="/home" element={MainPage} />
        <Route path="/about" element={AboutPage} />
        <Route path="/skills" element={SkillsPage} />
        <Route path="/projects" element={ProjectsPage} />
        <Route path="/contact" element={ContactPage} />
      </Routes>
    </div>
  );
};

export default App;
