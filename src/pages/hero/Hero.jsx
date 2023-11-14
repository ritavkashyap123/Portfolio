import React, { useEffect, useState } from "react";
import HeroRight from "../../components/models/HeroRight";
import "./hero.scss";

const Hero = () => {

  return (
    <div className="Hero" >
      <div className="hero-left">
        <div>
          Hi ! <span className="head">Ritav Here</span>
          <br />
          <div className="tagline">
            A focused <span>UI/UX</span> designer and{" "}
            <span>Frontend Developer</span>
          </div>
        </div>
        <div className="hr">
          <hr color="white" />
        </div>
        <div className="text">
          I am a final year student of <span>Assam Engineering College</span>,
          Persuing my <span>B.Tech</span> in{" "}
          <span> Electronics and Telecommunication Engineering</span>. My
          hometown is <span>Guwahati</span>. I do play with{" "}
          <span>Robots</span> and <span>Electronics</span> staffs at my free
          time. <span> Competitive Robotics </span> is one of my hobby. My
          other hobbies are <span>Writing Poetry</span> in Assamese and{" "}
          <span>Playing Valorant</span>.
          <br />
          <br />
          <span className="span">Fun Fact:</span> I am addicted to{" "}
          <span>Chess</span> and <span>Web Series</span>
          {/* <ul>
            <li>
              I'm a final year Student of Assam Engineering College, Persuing my
              degree in <span>Electronics and Telecommunication Engineering</span>
            </li>
            <li>I have experience in blogging and maintaining <span>SEO</span> in <span>WordPress</span>, <span>Wixsite</span> etc.</li>
            <li>Skilled Frontend Developer in <span>HTML,CSS,JS</span> or <span>ReactJs</span></li>
            <li>I have experience in UI/UX designing in <span>Figma</span></li>
            <li>I'm familiar with <span>python</span> and <span>C/C++</span> programming languages.</li>
            <li>My 3D drawings are designed in <span>AutoCAD</span> and <span>Solidworks</span>.</li>
            <li>Learning backend in <span>Django</span> and <span>Flask</span></li>
            <li>Know the basics of <span>flutter</span> and <span>React-native</span> in the App dev section.</li>
          </ul> */}
        </div>
      </div>
      <div className="hero-right">
        <HeroRight />
      </div>
    </div>
  );
};

export default Hero;
