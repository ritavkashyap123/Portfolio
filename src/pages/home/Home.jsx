import React from "react";
import SocialIcons from "../../components/socialIcons/SocialIcons";
import Hero from "../hero/Hero";
import Navbar from "../../components/navbar/Navbar";
import Skills from "../skills/Skills";
import Achievements from "../achievements/Achievements";
import Experience from "../experience/Experience";
import Project from "../projects/Project";
import Contact from "../contact/Contact";
import "./home.scss";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="Home">
          <SocialIcons />
          <Hero />
      </div>
    </>
  );
};

export default Home;
