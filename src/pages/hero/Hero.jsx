import React from "react";
import HeroRight from "../../components/hero-side/HeroRight";
import "./hero.scss";

const Hero = () => {
  return (
    <div className="Hero">
      <div className="hero-left">
        <div>
          Hi ! <span className="head">Ritav Here</span>
        </div>
        <div className="hr">
          <hr color="white" />
        </div>
        <div className="text">
          <ul>
            <li>
              I'm a final year Student of Assam Engineering College, Persuing my
              degree in <span>Electronics and Telecommunication Engineering</span>
            </li>
            <li>
              As a student, my first duty is learning new things. I am very
              flexible in learning new stacks.
            </li>
            <li>I'm familiar with <span>python</span> and <span>C/C++</span> programming languages.</li>
            <li>I have experience in blogging and maintaining <span>SEO</span> in <span>WordPress</span>, <span>Wixsite</span> etc.</li>
            <li>I have experience in UI/UX designing in <span>Figma</span></li>
            <li>Skilled Frontend Developer in <span>HTML,CSS,JS</span> or <span>ReactJs</span></li>
            <li>My 3D drawings are designed in <span>AutoCAD</span> and <span>Solidworks</span>.</li>
            <li>Learning backend in <span>Django</span> and <span>Flask</span></li>
            <li>Know the basics of <span>flutter</span> and <span>React-native</span> in the App dev section.</li>
          </ul>
        </div>
      </div>
      <div className="hero-right">
        <HeroRight />
      </div>
    </div>
  );
};

export default Hero;
