import React from "react";
import Hero from "../hero/Hero";
import "./home.scss";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      className="Home"
      initial={{ translateX: "-100vw" }}
      animate={{ translateX: 0 }}
      exit={{ translateX: "100vw" }}
    >
      <Hero />
    </motion.div>

  );
};

export default Home;
