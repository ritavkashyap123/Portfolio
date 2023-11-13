import React from "react";
import { motion } from "framer-motion";
import "./project.scss";
import Navbar from "../../components/navbar/Navbar";
import SocialIcons from "../../components/socialIcons/SocialIcons";

const Project = () => {
  return (
    <>
      <Navbar />
      <SocialIcons />
      <motion.div
        className="Project"
        initial={{ translateX: "-100vw" }}
        animate={{ translateX: 0 }}
        exit={{ translateX: "100vw" }}
      >
        Project
      </motion.div>
    </>
  );
};

export default Project;
