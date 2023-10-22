import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";

import { FcNext } from "react-icons/fc";
import "./preloader.scss";
import { useNavigate } from "react-router-dom";

const Preloader = () => {
  const navigate = useNavigate();

  return (
    <div className="startPage">
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
            loop: true,
            // devMode: true
          }}
        />
      </div>
      <div className="skipdiv">
        <div className="skipbtn">
          <div className="text" onClick={() => navigate("/home")}>
            Skip Intro <FcNext />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
