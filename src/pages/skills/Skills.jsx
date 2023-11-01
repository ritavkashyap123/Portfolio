import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import SocialIcons from "../../components/socialIcons/SocialIcons";
// import { BallCanvas } from "../../components/balls/Ball";

import "./skills.scss";

const frontend = [
  {
    head: "HTML",
    icon: "src/assets/html.png",
    content:
      "HTML (HyperText Markup Language) is the standard language for creating web pages and web applications. It structures content using elements, defining their layout and appearance in browsers.",
  },
  {
    head: "CSS",
    icon: "src/assets/css.png",
    content:
      "CSS (Cascading Style Sheets) is a stylesheet language used to control the presentation and layout of HTML documents. It defines how elements are displayed, enhancing the visual design of websites.",
  },
  {
    head: "JavaScript",
    icon: "src/assets/js.png",
    content:
      "JavaScript is a versatile programming language for web development. It enables interactive and dynamic content on websites, handling user interactions, data manipulation, and enhancing overall user experience.",
  },
  {
    head: "ReactJS",
    icon: "src/assets/react.png",
    content:
      "React is a popular JavaScript library for building user interfaces. It allows developers to create interactive and dynamic web applications efficiently, using reusable components for a seamless user experience.",
  },
  {
    head: "Wordpress",
    icon: "src/assets/WordPress.png",
    content:
      "WordPress is a popular open-source content management system (CMS) that simplifies website creation and management. It offers customizable themes, plugins, and an intuitive interface for building various web solutions.",
  },
  {
    head: "WixSite",
    icon: "src/assets/Wix.png",
    content:
      "WixSite is a user-friendly website builder offering drag-and-drop functionality, templates, and customization options. It empowers users to create professional websites without coding expertise, catering to diverse online needs.",
  },
];
const programming = [
  {
    head: "C",
    icon: "src/assets/c.png",
    content:
      "C is a versatile and efficient programming language developed in 1972. It's widely used for system software, embedded systems, and applications. C's simplicity and power make it foundational in programming.",
  },
  {
    head: "C++",
    icon: "src/assets/c++.png",
    content:
      "C++ is a high-performance, object-oriented programming language. It extends C with additional features like classes and objects, enabling both low-level memory manipulation and high-level data abstraction for software development.",
  },
  {
    head: "Python",
    icon: "src/assets/python.png",
    content:
      "Python is a versatile, high-level programming language known for its simplicity and readability. It emphasizes code readability and productivity, making it popular for web development, data analysis, and automation tasks.",
  },
];
const design = [
  {
    head: "Figma",
    icon: "src/assets/figma.png",
    content:
      "Figma is a cloud-based design tool enabling collaborative interface design and prototyping. It offers real-time collaboration, vector editing, and interactive prototyping, revolutionizing the way teams create digital designs.",
  },
  {
    head: "Canva",
    icon: "src/assets/canva.png",
    content:
      "Canva is a user-friendly graphic design platform with a vast library of templates, photos, and illustrations. It simplifies creating social media graphics, presentations, posters, and more, making design accessible to everyone.",
  },
  {
    head: "Powerpoint",
    icon: "src/assets/powerpoint.png",
    content:
      "Microsoft PowerPoint is a widely used presentation software. It allows users to create slideshows with text, images, animations, and multimedia elements, making it essential for professional and educational presentations.",
  },
];
const appDev = [
  {
    head: "React_Native",
    icon: "src/assets/react.png",
    content:
      "React Native is a framework for building mobile applications using JavaScript and React. It allows developers to create cross-platform apps for iOS and Android, sharing most of the codebase.",
  },
  {
    head: "Flutter",
    icon: "src/assets/flutter.png",
    content:
      "Flutter is a popular open-source UI software development toolkit created by Google. It allows developers to build natively compiled applications for mobile, web, and desktop from a single codebase.",
  },
];
const operatingSystem = [
  {
    head: "Windows",
    icon: "src/assets/windows.png",
    content:
      "Windows, developed by Microsoft, is a popular operating system for computers. It provides a user-friendly interface, multitasking capabilities, and supports various software, making it widely used in PCs worldwide.",
  },
  {
    head: "Debian",
    icon: "src/assets/debian.png",
    content:
      "Debian is a free and open-source Linux distribution known for its stability and security. It provides a wide range of software packages, making it popular for servers and desktops.",
  },
  {
    head: "Arch",
    icon: "src/assets/arch.png",
    content:
      "Arch Linux is a lightweight and highly customizable Linux distribution. It follows a rolling-release model, allowing users to have the latest software updates and build a personalized system.",
  },
  {
    head: "Red_Hat",
    icon: "src/assets/redhat.png",
    content:
      "Red Hat, a leading open-source software company, provides enterprise solutions like Red Hat Enterprise Linux. It offers secure, scalable, and flexible operating systems, empowering businesses in diverse industries.",
  },
  {
    head: "Kali_Linux",
    icon: "src/assets/kali.png",
    content:
      "Kali Linux is a powerful Debian-based Linux distribution designed for digital forensics and penetration testing. It offers a robust suite of tools for ethical hacking and security assessments.",
  },
];
const documentation = [
  {
    head: "OverLeaf",
    icon: "src/assets/overleaf.png",
    content:
      "Overleaf is an online collaborative LaTeX editor, simplifying document creation and sharing. It enables real-time collaboration, automatic compilation, and rich templates, making it popular among researchers, academics, and writers.",
  },
  {
    head: "Markdown",
    icon: "src/assets/markdown.png",
    content:
      "Markdown is a lightweight markup language used for formatting plain text documents. It is widely used for web content and allows easy conversion to HTML, simplifying document creation for non-programmers.",
  },
  {
    head: "MS_Word",
    icon: "src/assets/word.png",
    content:
      "Microsoft Word is a powerful word processing software. It offers tools for document creation, editing, and formatting. With diverse templates and collaboration features, it's essential for various professional tasks.",
  },
];
const threeDesign = [
  {
    head: "AutoCad",
    icon: "src/assets/autocad.png",
    content:
      "AutoCAD is a leading computer-aided design (CAD) software used for 2D and 3D drafting and modeling. It is crucial in architecture, engineering, and manufacturing for precise and detailed designs.",
  },
  {
    head: "SolidWorks",
    icon: "src/assets/solidworks.png",
    content:
      "SolidWorks is a popular 3D CAD software used for designing mechanical and electronic components. It offers parametric modeling, simulations, and assembly tools, essential for product development and engineering projects.",
  },
];
const electroSoft = [
  {
    head: "Matlab",
    icon: "src/assets/matlab.png",
    content:
      "MATLAB is a high-level programming environment and language for numerical computing and data analysis. It's widely used in engineering, science, and academia for algorithm development, data visualization, and simulation.",
  },
  {
    head: "Multisim",
    icon: "src/assets/multisim.png",
    content:
      "Multisim is a popular electronic circuit simulation software. Developed by National Instruments, it enables engineers and students to design, analyze, and prototype circuits for educational and professional applications.",
  },
  {
    head: "Proteus",
    icon: "src/assets/proteus.png",
    content:
      "Proteus is a widely used electronic design automation software, known for circuit simulation and PCB design. It helps engineers and students design, test, and debug electronic circuits effectively.",
  },
  {
    head: "Fritzing",
    icon: "src/assets/fritzing.png",
    content:
      "Fritzing is an open-source hardware initiative that simplifies electronics prototyping and documentation. It offers a user-friendly interface for creating circuit diagrams, designing PCBs, and sharing electronic projects, fostering DIY electronics.",
  },
  {
    head: "Arduino_IDE",
    icon: "src/assets/arduino.png",
    content:
      "Arduino IDE is an open-source software used to program Arduino boards. It provides a simple interface for writing code and uploading it to the board, making it accessible for beginners.",
  },
  {
    head: "Comsol",
    icon: "src/assets/comsol.png",
    content:
      "COMSOL Multiphysics is a powerful simulation software used for modeling and simulating physics-based systems. It enables engineers and scientists to analyze and optimize complex multiphysics phenomena for various applications.",
  },
];

const Skills = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
            <div className="card" key={e.head}>
              <div className="head">{e.head}</div>
              <div className="icon">
                <img src={e.icon} alt={e.head} style={{ width: "5rem" }} />
              </div>
              <div className="content">{e.content}</div>
            </div>
          ))}
          {isMobile &&
            frontend.map((e) => (
              <div className="icon2">
                <img src={e.icon} alt={e.head} style={{ width: "5rem" }} />
              </div>
            ))}
        </div>
        <div className="head2">Programming Language</div>
        <div className="StackCard">
          {programming.map((e) => (
            <div className="card" key={e.head}>
              <div className="head">{e.head}</div>
              <div className="icon">
                <img src={e.icon} alt={e.head} style={{ width: "5rem" }} />
              </div>
              <div className="content">{e.content}</div>
            </div>
          ))}
          {isMobile &&
            programming.map((e) => (
              <div className="icon2">
                <img src={e.icon} alt={e.head} style={{ width: "5rem" }} />
              </div>
            ))}
        </div>
        <div className="head2">Designing</div>
        <div className="StackCard">
          {design.map((e) => (
            <div className="card" key={e.head}>
              <div className="head">{e.head}</div>
              <div className="icon">
                <img src={e.icon} alt={e.head} style={{ width: "5rem" }} />
              </div>
              <div className="content">{e.content}</div>
            </div>
          ))}
          {isMobile &&
            design.map((e) => (
              <div className="icon2">
                <img src={e.icon} alt={e.head} style={{ width: "5rem" }} />
              </div>
            ))}
        </div>
        <div className="head2">App Development stack</div>
        <div className="StackCard">
          {appDev.map((e) => (
            <div className="card" key={e.head}>
              <div className="head">{e.head}</div>
              <div className="icon">
                <img src={e.icon} alt={e.head} style={{ width: "5rem" }} />
              </div>
              <div className="content">{e.content}</div>
            </div>
          ))}
          {isMobile &&
            appDev.map((e) => (
              <div className="icon2">
                <img src={e.icon} alt={e.head} style={{ width: "5rem" }} />
              </div>
            ))}
        </div>
        <div className="head2">Operating Systems</div>
        <div className="StackCard">
          {operatingSystem.map((e) => (
            <div className="card" key={e.head}>
              <div className="head">{e.head}</div>
              <div className="icon">
                <img src={e.icon} alt={e.head} style={{ width: "5rem" }} />
              </div>
              <div className="content">{e.content}</div>
            </div>
          ))}
          {isMobile &&
            operatingSystem.map((e) => (
              <div className="icon2">
                <img src={e.icon} alt={e.head} style={{ width: "5rem" }} />
              </div>
            ))}
        </div>
        <div className="head2">Documentation</div>
        <div className="StackCard">
          {documentation.map((e) => (
            <div className="card" key={e.head}>
              <div className="head">{e.head}</div>
              <div className="icon">
                <img src={e.icon} alt={e.head} style={{ width: "5rem" }} />
              </div>
              <div className="content">{e.content}</div>
            </div>
          ))}
          {isMobile &&
            documentation.map((e) => (
              <div className="icon2">
                <img src={e.icon} alt={e.head} style={{ width: "5rem" }} />
              </div>
            ))}
        </div>
        <div className="head2">3D Designing Platform</div>
        <div className="StackCard">
          {threeDesign.map((e) => (
            <div className="card" key={e.head}>
              <div className="head">{e.head}</div>
              <div className="icon">
                <img src={e.icon} alt={e.head} style={{ width: "7rem" }} />
              </div>
              <div className="content">{e.content}</div>
            </div>
          ))}
          {isMobile &&
            threeDesign.map((e) => (
              <div className="icon2">
                <img src={e.icon} alt={e.head} style={{ width: "5rem" }} />
              </div>
            ))}
        </div>
        <div className="head2">Electronics Software</div>
        <div className="StackCard">
          {electroSoft.map((e) => (
            <div className="card" key={e.head}>
              <div className="head">{e.head}</div>
              <div className="icon">
                <img src={e.icon} alt={e.head} style={{ width: "5rem" }} />
              </div>
              <div className="content">{e.content}</div>
            </div>
          ))}
          {isMobile &&
            electroSoft.map((e) => (
              <div className="icon2">
                <img src={e.icon} alt={e.head} style={{ width: "5rem" }} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
