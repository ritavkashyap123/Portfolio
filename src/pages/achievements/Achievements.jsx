import React from "react";
import { motion } from "framer-motion";
import "./achievements.scss";

const Achievements = () => {
  return (
    <motion.div
      className="Achievements"
      initial={{ translateX: "-100vw" }}
      animate={{ translateX: 0 }}
      exit={{ translateX: "100vw" }}
    >
      <div className="head">
        <div class="glitch-wrapper">
          <div class="glitch" data-text="Achievements">Achievements</div>
        </div>
        <div className="hr">
          <hr color="white" />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievements;
