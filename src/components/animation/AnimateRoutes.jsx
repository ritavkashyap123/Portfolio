import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Preloader from "../preloader/Preloader";
import Home from "../../pages/home/Home";
import Skills from "../../pages/skills/Skills";
import Achievements from "../../pages/achievements/Achievements";
import Experience from "../../pages/experience/Experience";
import Project from "../../pages/projects/Project";
import Contact from "../../pages/contact/Contact";
import { AnimatePresence } from "framer-motion";
import Loader from "../preloader2.0/Loader";

const AnimateRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Preloader />} />
        {/* <Route path="/" element={<Loader />} /> */}
        <Route path="/home" element={<Home />} />
        <Route path="/skill" element={<Skills />} />
        <Route path="/achievement" element={<Achievements />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimateRoutes;
