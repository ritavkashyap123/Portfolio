import React, { useState, useEffect } from "react";
import "./loader.scss";
import Typewriter from "typewriter-effect";
import { BsRocket } from "react-icons/bs";
import { FcNext } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Loader = () => {
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
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      className="loader"
    >
      <div className="typewriter">
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
      </div>
      <div className="rocket">
        {/* <hr className="hr" style={{ color: "red" }} /> */}
        <BsRocket style={{ rotate: "90deg" }} />
      </div>
      <div className="skipdiv">
        <div className="skipbtn">
          <div className="text" onClick={() => navigate("/home")}>
            Skip Intro <FcNext />
          </div>
        </div>
      </div>
      <div className="mountains">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 637 56">
          <g>
            <path
              d="M1442,238.7l47.324-18.5,15.852,10.339,31.525,4.064,28.067-9.085,40.007,5.021,44.176-5.021,43.54-5.318,35.64-19.087,28.315-2.38,16.769-5.522,22.2,15.886,32.527,4.37,8.29-4.37,20.552-1.979,12.426-8.385,68.581,14.733,13.666,12.55,35.66-2.649,30.294,8.446,31.5-8.446h6.278l3.432,5.8,21.256,2.649v14.256H1442Z"
              transform="translate(-1442 -191)"
              fill="#180727"
            />
          </g>
        </svg>
      </div>

      <div className="moon">
        {/* <div className="lines">
          {Array.from({ length: 10 }, (_, index) => (
            <div key={index} className="line"></div>
          ))}
        </div> */}
      </div>

      <div className="plane">
        <div className="vlines">
          <div className="left">
            {Array.from({ length: 5 }, (_, index) => (
              <div key={index} className="line"></div>
            ))}
          </div>
          <div className="right">
            {Array.from({ length: 5 }, (_, index) => (
              <div key={index} className="line"></div>
            ))}
          </div>
        </div>
        <div className="lines">
          {Array.from({ length: 10 }, (_, index) => (
            <div key={index} className="line"></div>
          ))}
        </div>
      </div>

      <div className="car">
        <div className="wheels">
          <div className="wheel"></div>
          <div className="wheel"></div>
          <div className="parts"></div>
        </div>
        <div className="body">
          <div className="bumper"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;
