import React from "react";
import SocialIcons from "../../components/socialIcons/SocialIcons";
import Hero from "../hero/Hero";
import Navbar from "../../components/navbar/Navbar";
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
