import React, { useState } from "react";
import { FaStopwatch, FaMapMarkerAlt } from "react-icons/fa";
import Navbar from "../../components/navbar/Navbar";

import "./experience.scss";
import SocialIcons from "../../components/socialIcons/SocialIcons";

const Experience = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
  const [isOpen8, setIsOpen8] = useState(false);
  const [isOpen9, setIsOpen9] = useState(false);

  const handleToggle1 = () => {
    setIsOpen1(!isOpen1);
  };
  const handleToggle2 = () => {
    setIsOpen2(!isOpen2);
  };
  const handleToggle3 = () => {
    setIsOpen3(!isOpen3);
  };
  const handleToggle4 = () => {
    setIsOpen4(!isOpen4);
  };
  const handleToggle5 = () => {
    setIsOpen5(!isOpen5);
  };
  const handleToggle6 = () => {
    setIsOpen6(!isOpen6);
  };
  const handleToggle7 = () => {
    setIsOpen7(!isOpen7);
  };
  const handleToggle8 = () => {
    setIsOpen8(!isOpen8);
  };
  const handleToggle9 = () => {
    setIsOpen9(!isOpen9);
  };

  return (
    <>
      <Navbar />
      <SocialIcons />
      <div className="Experience">
        <div className="head">
          Experience
          <div className="hr">
            <hr color="white" />
          </div>
        </div>
        <div className="head2">Professional Experience :</div>
        <div className="container">
          <div className="timeline-block timeline-block-right">
            <div className="marker" />
            <div className="timeline-content" onClick={handleToggle6}>
              <h3>Frint</h3>
              <span className="span">Chief Technology Officer</span> <br />
              <div className="details">
                <div className="time">
                  <FaStopwatch className="watch" />
                  Jan 2023 - Present · 10 mos
                </div>
                <div className="time">
                  <FaMapMarkerAlt className="watch" />
                  Guwahati, Remote
                </div>
              </div>
              {!isOpen6 && <button className="btn">Show More</button>}
              {isOpen6 && (
                <div className="timeline-expanded-content">
                  <div>
                    Here I first developed a wordpress site with student and
                    company dashboard and hosted in hostinger. Later we formed a
                    technical team consist of three parts,{" "}
                    <ul>
                      {" "}
                      <li>The UI/UX Team</li>
                      <li>The Frontend Team</li>
                      <li>The Backend Team</li>
                    </ul>
                    And started working on the full-stack site of Frint in MERN.
                    <br />
                    Website link:
                    <a
                      href="https://frint.in"
                      className="link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      frint.in
                    </a>
                  </div>
                  <button className="btn">Show Less</button>
                </div>
              )}
            </div>
          </div>
          <div className="timeline-block timeline-block-left">
            <div className="marker" />
            <div className="timeline-content" onClick={handleToggle4}>
              <h3>CDAC India</h3>
              <span className="span">Research Intern</span> <br />
              <div className="details">
                <div className="time">
                  <FaStopwatch className="watch" />
                  Jul 2023 - Aug 2023 · 2 mos
                </div>
                <div className="time">
                  <FaMapMarkerAlt className="watch" />
                  NIT Silchar, On-site
                </div>
              </div>
              {!isOpen4 && <button className="btn">Show More</button>}
              {isOpen4 && (
                <div className="timeline-expanded-content">
                  <div>
                    Here I first made a prototype of ODDS (Optical Drone
                    Detection System) in Figma. After confirming the design I
                    exactly made the Frontend of the Dashboard using ReactJS.
                    This internship was done under the guidance of Mr. Atul
                    Rawat Sir. <br />
                    <a
                      href="https://drive.google.com/drive/folders/18DSox5DJmF5Ghgi3yWaCnZy0T9BV3xGW?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link"
                    >
                      Certificate
                    </a>
                  </div>
                  <button className="btn">Show Less</button>
                </div>
              )}
            </div>
          </div>
          <div className="timeline-block timeline-block-right">
            <div className="marker" />
            <div className="timeline-content" onClick={handleToggle3}>
              <h3>Azim Premji University</h3>
              <span className="span">Consultant</span> <br />
              <div className="details">
                <div className="time">
                  <FaStopwatch className="watch" />
                  Aug 2022 - Aug 2023 · 1 yr 1 mos
                </div>
                <div className="time">
                  <FaMapMarkerAlt className="watch" />
                  Banglore, Hybrid
                </div>
              </div>
              {!isOpen3 && <button className="btn">Show More</button>}
              {isOpen3 && (
                <div className="timeline-expanded-content">
                  {" "}
                  <div>
                    Here we had to develop a live air quality monitoring system.
                    It was an IoT project. This internship consists of two
                    parts-
                    <ul>
                      <li>
                        <span className="span">Hardware:</span> In the hardware
                        part, we used ESP8266 as processor; MQ-9 & MQ-135 for
                        quantity of different gases in air; BME280 sensor for
                        meteorological data and Dust sensor for AQI measurement.
                        Here we used I2C and SPI protocol for master-slave
                        configuration of sensors with ESP and send the data
                        through HTTP post request.
                      </li>
                      <li>
                        <span className="span">Software:</span> The software
                        part is consists of a portfolio website and a portal
                        where the data taken from the sensor displayed. The
                        stacks used in portfolio is HTML and CSS. The fronted of
                        the Portal was made in ReactJs Material UI while the
                        backend was made in Django REST Framework. The data
                        fetched in the backend using REST API. <br />
                        Website Link:
                        <a
                          href="https:\\apusensor.net"
                          className="link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          apusensor.net
                        </a>
                      </li>
                    </ul>
                  </div>
                  <button className="btn">Show Less</button>
                </div>
              )}
            </div>
          </div>
          <div className="timeline-block timeline-block-left">
            <div className="marker" />
            <div className="timeline-content" onClick={handleToggle2}>
              <h3>Adamomedia</h3>
              <span className="span">SEO Manager and Editor</span> <br />
              <div className="details">
                <div className="time">
                  <FaStopwatch className="watch" />
                  Apr 2020 - Oct 2020 · 7 mos
                </div>
                <div className="time">
                  <FaMapMarkerAlt className="watch" />
                  Guwahati, Remote
                </div>
              </div>
              {!isOpen2 && <button className="btn">Show More</button>}
              {isOpen2 && (
                <div className="timeline-expanded-content">
                  {" "}
                  <div>
                    Here I designed and developed the Adamomedia website. Apart
                    from that I also managed the blog posts and regularly
                    uploaded posts written by the content team.
                    <br />
                    <a
                      href="https://www.instagram.com/adamomedia.in/"
                      className="link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      adamomedia.in
                    </a>
                  </div>
                  <button className="btn">Show Less</button>
                </div>
              )}
            </div>
          </div>
          <div className="timeline-block timeline-block-right">
            <div className="marker" />
            <div className="timeline-content" onClick={handleToggle1}>
              <h3>TeamBlogbug</h3>
              <span className="span">
                General Manager and Content Creator
              </span>{" "}
              <br />
              <div className="details">
                <div className="time">
                  <FaStopwatch className="watch" />
                  Apr 2020 - Oct 2020 · 7 mos
                </div>
                <div className="time">
                  <FaMapMarkerAlt className="watch" />
                  Guwahati, Remote
                </div>
              </div>
              {!isOpen1 && <button className="btn">Show More</button>}
              {isOpen1 && (
                <div className="timeline-expanded-content">
                  {" "}
                  <div>
                    Here I managed the website and made graphic design for each
                    and every post. Moreover we successfully orgaised a state
                    level "open-letter writing competiton"
                    <br />
                    <a
                      href="https://www.instagram.com/blogbug.assamese/"
                      className="link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      assamese.teamblogbug.com
                    </a>
                  </div>
                  <button className="btn">Show Less</button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="head2">Club Experience :</div>
        <div className="container">
          <div className="timeline-block timeline-block-left">
            <div className="marker" />
            <div className="timeline-content" onClick={handleToggle5}>
              <h3>Eastern Botz</h3>
              <span className="span">Mechanic and Inventory incharge</span>{" "}
              <br />
              <div className="details">
                <div className="time">
                  <FaStopwatch className="watch" />
                  Apr 2021 - Present · 2 yrs 7 mos
                </div>
                <div className="time">
                  <FaMapMarkerAlt className="watch" />
                  Guwahati, Hybrid
                </div>
              </div>
              {!isOpen5 && <button className="btn">Show More</button>}
              {isOpen5 && (
                <div className="timeline-expanded-content">
                  {" "}
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate.
                  </div>
                  <button className="btn">Show Less</button>
                </div>
              )}
            </div>
          </div>
          <div className="timeline-block timeline-block-right">
            <div className="marker" />
            <div className="timeline-content" onClick={handleToggle7}>
              <h3>AEC Coding Club</h3>
              <span className="span">Secretary</span> <br />
              <div className="details">
                <div className="time">
                  <FaStopwatch className="watch" />
                  Dec 2022 - Aug 2023 · 9 mos
                </div>
              </div>
              <span className="span">Content and Graphics Head</span> <br />
              <div className="details">
                <div className="time">
                  <FaStopwatch className="watch" />
                  Jul 2022 - Dec 2022 · 6 mos
                </div>
              </div>
              {!isOpen7 && <button className="btn">Show More</button>}
              {isOpen7 && (
                <div className="timeline-expanded-content">
                  {" "}
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate.
                  </div>
                  <button className="btn">Show Less</button>
                </div>
              )}
            </div>
          </div>
          <div className="timeline-block timeline-block-left">
            <div className="marker" />
            <div className="timeline-content" onClick={handleToggle8}>
              <h3>AEC Robotics Club</h3>
              <span className="span">Secretary</span> <br />
              <div className="details">
                <div className="time">
                  <FaStopwatch className="watch" />
                  Sep 2022 - Aug 2023 · 1 yr
                </div>
              </div>
              <span className="span">Content Writer</span> <br />
              <div className="details">
                <div className="time">
                  <FaStopwatch className="watch" />
                  Jan 2022 - Sep 2022 · 9 mos
                </div>
              </div>
              {!isOpen8 && <button className="btn">Show More</button>}
              {isOpen8 && (
                <div className="timeline-expanded-content">
                  {" "}
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate.
                  </div>
                  <button className="btn">Show Less</button>
                </div>
              )}
            </div>
          </div>
          <div className="timeline-block timeline-block-right">
            <div className="marker" />
            <div className="timeline-content" onClick={handleToggle9}>
              <h3>AEC Literary Society</h3>
              <span className="span">Secretary</span> <br />
              <div className="details">
                <div className="time">
                  <FaStopwatch className="watch" />
                  Oct 2022 - Aug 2023 · 11 mos
                </div>
              </div>
              <span className="span">Media & Publicity Team</span> <br />
              <div className="details">
                <div className="time">
                  <FaStopwatch className="watch" />
                  Jun 2021 - Oct 2022 · 1 yr 5 mos
                </div>
              </div>
              {!isOpen9 && <button className="btn">Show More</button>}
              {isOpen9 && (
                <div className="timeline-expanded-content">
                  {" "}
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate.
                  </div>
                  <button className="btn">Show Less</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
