import React from "react";
import { motion } from "framer-motion";
import "./achievements.scss";
import Navbar from "../../components/navbar/Navbar";
import SocialIcons from "../../components/socialIcons/SocialIcons";

const Achievements = () => {
  return (
    <motion.div
      className="Achievements"
      initial={{ translateX: "-100vw" }}
      animate={{ translateX: 0 }}
      exit={{ translateX: "100vw" }}
    ></motion.div>
  );
};

export default Achievements;
