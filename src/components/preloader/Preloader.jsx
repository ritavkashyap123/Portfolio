import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import { BsRocket } from "react-icons/bs";
import { FcNext } from "react-icons/fc";
import "./preloader.scss";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Preloader = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const rocketElement = document.querySelector(".rocket");

    const handleAnimationEnd = () => {
      // Navigate to home page after the animation ends
      navigate("/home");
    };

    rocketElement.addEventListener("animationend", handleAnimationEnd);

    return () => {
      // Clean up the event listener on component unmount
      rocketElement.removeEventListener("animationend", handleAnimationEnd);
    };
  }, [navigate]);

  return (
    <motion.div
      className="startPage"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 1 }}
    >
      <div className="Preloader">
        <Typewriter
          options={{
            strings: [
              "Welcome To",
              "Ritav Kashyap's <br> Portfolio Website",
              "So, Who am I ?",
              "<span style='color: #8ddffd;'> A DEVELOPER ?</span>",
              "<span style='color: #8ddffd;'> A CODER ?</span>",
              "<span style='color: #8ddffd;'> A 3D DESIGNER ?</span>",
              "<span style='color: #8ddffd;'> A ROBOTICS ENTHUSIAST ?</span>",
              // "<span style='color: red; fontSize: 80px;'> A Rapist ?</span>",
              // "<span style='color: red; fontSize: 80px;'> A Racist ?</span>",
              "Let's Explode",
            ],
            cursorClassName: "cursor",
            delay: 80,
            pauseFor: 200,
            deleteSpeed: 15,
            autoStart: true,
            // devMode: true
          }}
        />
        <div className="rocket">
          <hr className="hr" style={{ color: "red" }} />
          <BsRocket style={{ rotate: "90deg" }} />
        </div>
      </div>
      <div className="skipdiv">
        <div className="skipbtn">
          <div className="text" onClick={() => navigate("/home")}>
            Skip Intro <FcNext />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;
