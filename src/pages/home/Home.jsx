import React from "react";
import SocialIcons from "../../components/socialIcons/SocialIcons";
import Hero from "../hero/Hero";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <Navbar />
      <SocialIcons />
      <motion.div
        className="Home"
        initial={{ translateX: "-100vw" }}
        animate={{ translateX: 0 }}
        exit={{ translateX: "100vw" }}
      >
        <Hero />
      </motion.div>
    </>
  );
};

export default Home;
