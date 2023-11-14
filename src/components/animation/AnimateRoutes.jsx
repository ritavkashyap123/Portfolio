import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Preloader from "../preloader/Preloader";
import Home from "../../pages/home/Home";
import Skills from "../../pages/skills/Skills";
import Achievements from "../../pages/achievements/Achievements";
import Experience from "../../pages/experience/Experience";
import Project from "../../pages/projects/Project";
import Contact from "../../pages/contact/Contact";
import { AnimatePresence } from "framer-motion";
import Navbar from "../navbar/Navbar";
import SocialIcons from "../socialIcons/SocialIcons";

const AnimateRoutes = () => {
  const [show, isShow] = useState(false);
  const location = useLocation();

  // Check if the current path is the preloader page
  const isPreloaderPage = location.pathname === '/';

  // Use useEffect to update the state when the path changes
  useEffect(() => {
    isShow(!isPreloaderPage);
  }, [location.pathname]);

  return (
    <AnimatePresence>
      {show && <Navbar />}
      {show && <SocialIcons />}
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
