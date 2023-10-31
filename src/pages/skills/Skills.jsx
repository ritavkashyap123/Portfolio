import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import SocialIcons from "../../components/socialIcons/SocialIcons";
// import { BallCanvas } from "../../components/balls/Ball";

import "./skills.scss";

import { FaReact } from "react-icons/fa";

const frontend = [
  {
    head: "HTML",
    icon: "src/assets/html.png",
    content: "abc",
  },
  {
    head: "css",
    icon: "src/assets/html.png",
    content: "abc",
  },
];

const programming = [
  {
    head: "HTML",
    icon: "src/assets/html.png",
    content: "abc",
  },
];
const design = [
  {
    head: "HTML",
    icon: "src/assets/html.png",
    content: "abc",
  },
];
const appDev = [
  {
    head: "HTML",
    icon: "src/assets/html.png",
    content: "abc",
  },
];
const operatingSystem = [
  {
    head: "HTML",
    icon: "src/assets/html.png",
    content: "abc",
  },
];
const documentation = [
  {
    head: "HTML",
    icon: "src/assets/html.png",
    content: "abc",
  },
];
const threeDesign = [
  {
    head: "HTML",
    icon: "src/assets/html.png",
    content: "abc",
  },
];
const electroSoft = [
  {
    head: "HTML",
    icon: "src/assets/html.png",
    content: "abc",
  },
];

const Skills = () => {
  return (
    <>
      <Navbar />
      <SocialIcons />
      <div className="Skills">
        <div className="head">
          Skills
          <div className="hr">
            <hr color="white" />
          </div>
        </div>
        <div className="head2">Frontend Development stack</div>
        <div className="StackCard">
          {" "}
          {frontend.map((e) => (
            <div className="card">
              <div className="head">{e.head}</div>
              <div className="icon">
                <img
                  src={e.icon}
                  alt="HTML"
                  style={{ width: "7rem" }}
                />
              </div>
              <div className="content">
                {/* HTML (HyperText Markup Language) is the standard language for
              creating web pages and web applications. It structures content
              using elements, defining their layout and appearance in browsers. */}
                {e.content}
              </div>
            </div>
          ))}
          {/* <div className="card">
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
              <img
                src="src/assets/js.png"
                alt="JavaScript"
                style={{ width: "7rem" }}
              />
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
              <img
                src="src/assets/WordPress.png"
                alt="WordPress"
                className="img"
              />
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
              <img
                src="src/assets/Wix.png"
                alt="WixSite"
                className="img"
                style={{ width: "6rem" }}
              />
            </div>
            <div className="content">
              WixSite is a user-friendly website builder offering drag-and-drop
              functionality, templates, and customization options. It empowers
              users to create professional websites without coding expertise,
              catering to diverse online needs.
            </div>
          </div> */}
        </div>

        <div className="head2">Programming Language</div>
        <div className="StackCard">
          <div className="card">
            <div className="head">C</div>
            <div className="icon">
              <img src="src/assets/c.png" alt="C" className="img" />
            </div>
            <div className="content">
              C is a versatile and efficient programming language developed in
              1972. It's widely used for system software, embedded systems, and
              applications. C's simplicity and power make it foundational in
              programming.
            </div>
          </div>
          <div className="card">
            <div className="head">C++</div>
            <div className="icon">
              <img src="src/assets/c++.png" alt="C++" className="img" />
            </div>
            <div className="content">
              C++ is a high-performance, object-oriented programming language.
              It extends C with additional features like classes and objects,
              enabling both low-level memory manipulation and high-level data
              abstraction for software development.
            </div>
          </div>
          <div className="card">
            <div className="head">Python</div>
            <div className="icon">
              <img src="src/assets/python.png" alt="Python" className="img" />
            </div>
            <div className="content">
              Python is a versatile, high-level programming language known for
              its simplicity and readability. It emphasizes code readability and
              productivity, making it popular for web development, data
              analysis, and automation tasks.
            </div>
          </div>
        </div>
        <div className="head2">Designing</div>
        <div className="StackCard">
          <div className="card">
            <div className="head">Figma</div>
            <div className="icon">
              <img src="src/assets/figma.png" alt="Figma" className="img" />
            </div>
            <div className="content">
              Figma is a cloud-based design tool enabling collaborative
              interface design and prototyping. It offers real-time
              collaboration, vector editing, and interactive prototyping,
              revolutionizing the way teams create digital designs.
            </div>
          </div>
          <div className="card">
            <div className="head">Canva</div>
            <div className="icon">
              <img src="src/assets/canva.png" className="img" alt="canva" />
            </div>
            <div className="content">
              Canva is a user-friendly graphic design platform with a vast
              library of templates, photos, and illustrations. It simplifies
              creating social media graphics, presentations, posters, and more,
              making design accessible to everyone.
            </div>
          </div>
          <div className="card">
            <div className="head">Powerpoint</div>
            <div className="icon">
              <img
                src="src/assets/powerpoint.png"
                className="img"
                alt="powerpoint"
              />
            </div>
            <div className="content">
              Microsoft PowerPoint is a widely used presentation software. It
              allows users to create slideshows with text, images, animations,
              and multimedia elements, making it essential for professional and
              educational presentations.
            </div>
          </div>
        </div>
        <div className="head2">App Development stack</div>
        <div className="StackCard">
          <div className="card">
            <div className="head">React_Native</div>
            <div className="icon">
              <FaReact color="#5FD4F4" />
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
              Flutter is a popular open-source UI software development toolkit
              created by Google. It allows developers to build natively compiled
              applications for mobile, web, and desktop from a single codebase.
            </div>
          </div>
        </div>
        <div className="head2">Operating Systems</div>
        <div className="StackCard">
          <div className="card">
            <div className="head">Windows</div>
            <div className="icon">
              <img src="src/assets/windows.png" className="img" alt="Windows" />
            </div>
            <div className="content">
              Windows, developed by Microsoft, is a popular operating system for
              computers. It provides a user-friendly interface, multitasking
              capabilities, and supports various software, making it widely used
              in PCs worldwide.
            </div>
          </div>
          <div className="card">
            <div className="head">Debian</div>
            <div className="icon">
              <img
                src="src/assets/debian.png"
                className="img"
                alt="Debian Linux"
              />
            </div>
            <div className="content">
              Debian is a free and open-source Linux distribution known for its
              stability and security. It provides a wide range of software
              packages, making it popular for servers and desktops.
            </div>
          </div>
          <div className="card">
            <div className="head">Arch</div>
            <div className="icon">
              <img src="src/assets/arch.png" className="img" alt="Arch Linux" />
            </div>
            <div className="content">
              Arch Linux is a lightweight and highly customizable Linux
              distribution. It follows a rolling-release model, allowing users
              to have the latest software updates and build a personalized
              system.
            </div>
          </div>
          <div className="card">
            <div className="head">Red_Hat</div>
            <div className="icon">
              <img src="src/assets/redhat.png" className="img" alt="Red Hat" />
            </div>
            <div className="content">
              Red Hat, a leading open-source software company, provides
              enterprise solutions like Red Hat Enterprise Linux. It offers
              secure, scalable, and flexible operating systems, empowering
              businesses in diverse industries.
            </div>
          </div>
          <div className="card">
            <div className="head">Kali_Linux</div>
            <div className="icon">
              <img src="src/assets/kali.png" className="img" alt="Kali Linux" />
            </div>
            <div className="content">
              Kali Linux is a powerful Debian-based Linux distribution designed
              for digital forensics and penetration testing. It offers a robust
              suite of tools for ethical hacking and security assessments.
            </div>
          </div>
        </div>
        <div className="head2">Documentation</div>
        <div className="StackCard">
          <div className="card">
            <div className="head">OverLeaf</div>
            <div className="icon">
              <img src="src/assets/overleaf.png" className="img" alt="Latex" />
            </div>
            <div className="content">
              Overleaf is an online collaborative LaTeX editor, simplifying
              document creation and sharing. It enables real-time collaboration,
              automatic compilation, and rich templates, making it popular among
              researchers, academics, and writers.
            </div>
          </div>
          <div className="card">
            <div className="head">Markdown</div>
            <div className="icon">
              <img
                src="src/assets/markdown.png"
                className="img"
                alt="Markdown"
              />
            </div>
            <div className="content">
              Markdown is a lightweight markup language used for formatting
              plain text documents. It is widely used for web content and allows
              easy conversion to HTML, simplifying document creation for
              non-programmers.
            </div>
          </div>
          <div className="card">
            <div className="head">MS_Word</div>
            <div className="icon">
              <img src="src/assets/word.png" className="img" alt="MS Word" />
            </div>
            <div className="content">
              Microsoft Word is a powerful word processing software. It offers
              tools for document creation, editing, and formatting. With diverse
              templates and collaboration features, it's essential for various
              professional tasks.
            </div>
          </div>
        </div>
        <div className="head2">3D Designing Platform</div>
        <div className="StackCard">
          <div className="card">
            <div className="head">AutoCad</div>
            <div className="icon">
              <img src="src/assets/autocad.png" className="img" alt="AutoCAD" />
            </div>
            <div className="content">
              AutoCAD is a leading computer-aided design (CAD) software used for
              2D and 3D drafting and modeling. It is crucial in architecture,
              engineering, and manufacturing for precise and detailed designs.
            </div>
          </div>
          <div className="card">
            <div className="head">SolidWorks</div>
            <div className="icon">
              <img
                src="src/assets/solidworks.png"
                className="img"
                alt="SolidWorks"
              />
            </div>
            <div className="content">
              SolidWorks is a popular 3D CAD software used for designing
              mechanical and electronic components. It offers parametric
              modeling, simulations, and assembly tools, essential for product
              development and engineering projects.
            </div>
          </div>
          <div className="card">
            <div className="head">Blender</div>
            <div className="icon">
              <img src="src/assets/blender.png" className="img" alt="Blender" />
            </div>
            <div className="content">
              Blender is a powerful open-source 3D creation suite, supporting
              modeling, animation, rendering, and more. It's utilized by artists
              and developers for visual effects, game creation, and immersive
              experiences.
            </div>
          </div>
        </div>
        <div className="head2">Electronics Software</div>
        <div className="StackCard">
          <div className="card">
            <div className="head">Matlab</div>
            <div className="icon">
              <img src="src/assets/matlab.png" className="img" alt="Matlab" />
            </div>
            <div className="content">
              MATLAB is a high-level programming environment and language for
              numerical computing and data analysis. It's widely used in
              engineering, science, and academia for algorithm development, data
              visualization, and simulation.
            </div>
          </div>
          <div className="card">
            <div className="head">Multisim</div>
            <div className="icon">
              <img
                src="src/assets/multisim.png"
                className="img"
                alt="Multisim"
              />
            </div>
            <div className="content">
              Multisim is a popular electronic circuit simulation software.
              Developed by National Instruments, it enables engineers and
              students to design, analyze, and prototype circuits for
              educational and professional applications.
            </div>
          </div>
          <div className="card">
            <div className="head">Proteus</div>
            <div className="icon">
              <img src="src/assets/proteus.png" className="img" alt="Proetus" />
            </div>
            <div className="content">
              Proteus is a widely used electronic design automation software,
              known for circuit simulation and PCB design. It helps engineers
              and students design, test, and debug electronic circuits
              effectively.
            </div>
          </div>
          <div className="card">
            <div className="head">Fritzing</div>
            <div className="icon">
              <img
                src="src/assets/fritzing.png"
                className="img"
                alt="Fritzing"
              />
            </div>
            <div className="content">
              Fritzing is an open-source hardware initiative that simplifies
              electronics prototyping and documentation. It offers a
              user-friendly interface for creating circuit diagrams, designing
              PCBs, and sharing electronic projects, fostering DIY electronics.
            </div>
          </div>
          <div className="card">
            <div className="head">Arduino_IDE</div>
            <div className="icon">
              <img src="src/assets/arduino.png" className="img" alt="Arduino" />
            </div>
            <div className="content">
              Arduino IDE is an open-source software used to program Arduino
              boards. It provides a simple interface for writing code and
              uploading it to the board, making it accessible for beginners.
            </div>
          </div>
          <div className="card">
            <div className="head">Comsol</div>
            <div className="icon">
              <img src="src/assets/comsol.png" className="img" alt="Comsol" />
            </div>
            <div className="content">
              COMSOL Multiphysics is a powerful simulation software used for
              modeling and simulating physics-based systems. It enables
              engineers and scientists to analyze and optimize complex
              multiphysics phenomena for various applications.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
