import React from "react";
import { motion } from "framer-motion";
import "./project.scss";

const Project = () => {
  return (
    <motion.div
      className="Project"
      initial={{ translateX: "-100vw" }}
      animate={{ translateX: 0 }}
      exit={{ translateX: "100vw" }}
    >
      <div className="head">
        <div class="glitch-wrapper">
          <div class="glitch" data-text="Projects">Projects</div>
        </div>
        <div className="hr">
          <hr color="white" />
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
