import React from "react";
import Navbar from "../../components/navbar/Navbar";
import SocialIcons from "../../components/socialIcons/SocialIcons";

import "./skills.scss";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaWordpressSimple,
  FaFigma,
} from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";

const Skills = () => {
  return (
    <>
      <Navbar />
      <SocialIcons />
      <div className="Skills">
        <div style={{ height: "5rem" }}></div>
        <div className="head">
          Skills
          <div className="hr">
            <hr color="white" />
          </div>
        </div>
        <div className="head2">Frontend Development stack</div>
        <div className="StackCard">
          <div className="card">
            <div className="head">HTML</div>
            <div className="icon">
              <img src="src/assets/html.png" alt="HTML" style={{width:"7rem"}}/>
            </div>
            <div className="content">
              HTML (HyperText Markup Language) is the standard language for
              creating web pages and web applications. It structures content
              using elements, defining their layout and appearance in browsers.
            </div>
          </div>
          <div className="card">
            <div className="head">CSS</div>
            <div className="icon">
              <img src="src/assets/css.png" alt="CSS" className="img" />
            </div>
            <div className="content">
              CSS (Cascading Style Sheets) is a stylesheet language used to
              control the presentation and layout of HTML documents. It defines
              how elements are displayed, enhancing the visual design of
              websites.
            </div>
          </div>
          <div className="card">
            <div className="head">JavaScript</div>
            <div className="icon">
              <img src="src/assets/js.png" alt="JavaScript" style={{width:"7rem"}} />
            </div>
            <div className="content">
              JavaScript is a versatile programming language for web
              development. It enables interactive and dynamic content on
              websites, handling user interactions, data manipulation, and
              enhancing overall user experience.
            </div>
          </div>
          <div className="card">
            <div className="head">ReactJS</div>
            <div className="icon">
              <FaReact color="#5FD4F4" />
            </div>
            <div className="content">
              React is a popular JavaScript library for building user
              interfaces. It allows developers to create interactive and dynamic
              web applications efficiently, using reusable components for a
              seamless user experience.
            </div>
          </div>
          <div className="card">
            <div className="head">Wordpress</div>
            <div className="icon">
              <img src="src/assets/WordPress.png" alt="WordPress" className="img" />
            </div>
            <div className="content">
              WordPress is a popular open-source content management system (CMS)
              that simplifies website creation and management. It offers
              customizable themes, plugins, and an intuitive interface for
              building various web solutions.
            </div>
          </div>
          <div className="card">
            <div className="head">WixSite</div>
            <div className="icon">
              <img src="src/assets/Wix.png" alt="WixSite" className="img" style={{background:"white", borderRadius:"50%"}} />
            </div>
            <div className="content">
              WordPress is a popular open-source content management system (CMS)
              that simplifies website creation and management. It offers
              customizable themes, plugins, and an intuitive interface for
              building various web solutions.
            </div>
          </div>
        </div>
        <div className="head2">Programming Language</div>
        <div className="StackCard">
          <div className="card">
            <div className="head">C</div>
            <div className="icon">
              <img src="src/assets/c.png" alt="C" className="img" />
            </div>
            <div className="content">
              React Native is a framework for building mobile applications using
              JavaScript and React. It allows developers to create
              cross-platform apps for iOS and Android, sharing most of the
              codebase.
            </div>
          </div>
          <div className="card">
            <div className="head">C++</div>
            <div className="icon">
              <img src="src/assets/c++.png" alt="C++" className="img" />
            </div>
            <div className="content">
              Figma is a cloud-based design tool enabling collaboration and
              prototyping. It allows real-time editing, simplifying UI/UX
              design. Teams can create, iterate, and share designs seamlessly,
              enhancing productivity and creativity.
            </div>
          </div>
          <div className="card">
            <div className="head">Python</div>
            <div className="icon">
              <img src="src/assets/python.png" alt="Python" className="img" />
            </div>
            <div className="content">
              Figma is a cloud-based design tool enabling collaboration and
              prototyping. It allows real-time editing, simplifying UI/UX
              design. Teams can create, iterate, and share designs seamlessly,
              enhancing productivity and creativity.
            </div>
          </div>
        </div>
        <div className="head2">App Development stack</div>
        <div className="StackCard">
          <div className="card">
            <div className="head">React_Native</div>
            <div className="icon">
              <TbBrandReactNative color="#5FD4F4" />
            </div>
            <div className="content">
              React Native is a framework for building mobile applications using
              JavaScript and React. It allows developers to create
              cross-platform apps for iOS and Android, sharing most of the
              codebase.
            </div>
          </div>
          <div className="card">
            <div className="head">Flutter</div>
            <div className="icon">
              <img src="src/assets/flutter.png" className="img" alt="Flutter" />
            </div>
            <div className="content">
              Figma is a cloud-based design tool enabling collaboration and
              prototyping. It allows real-time editing, simplifying UI/UX
              design. Teams can create, iterate, and share designs seamlessly,
              enhancing productivity and creativity.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
