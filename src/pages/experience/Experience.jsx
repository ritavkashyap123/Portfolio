import React, { useState } from "react";

import "./experience.scss";

const Experience = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);

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

  return (
    <div className="Experience" id="exp">
      <div style={{ height: "4rem" }}></div>
      <div className="head">
        Experience : <span>5 years</span>
        <div className="hr">
          <hr color="white" />
        </div>
      </div>

      <div className="container">
        <div className="timeline-block timeline-block-right">
          <div className="marker" />
          <div className="timeline-content" onClick={handleToggle1}>
            <h3>First Year</h3>
            <span>Some work experience</span> <br />
            {!isOpen1 && <button className="btn">Show More</button>}
            {isOpen1 && (
              <div className="timeline-expanded-content">
                {" "}
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate.
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="timeline-block timeline-block-left">
          <div className="marker" />
          <div className="timeline-content" onClick={handleToggle2}>
            <h3>First Year</h3>
            <span>Some work experience</span> <br />
            {!isOpen2 && <button className="btn">Show More</button>}
            {isOpen2 && (
              <div className="timeline-expanded-content">
                {" "}
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate.
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="timeline-block timeline-block-right">
          <div className="marker" />
          <div className="timeline-content" onClick={handleToggle3}>
            <h3>First Year</h3>
            <span>Some work experience</span> <br />
            {!isOpen3 && <button className="btn">Show More</button>}
            {isOpen3 && (
              <div className="timeline-expanded-content">
                {" "}
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate.
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="timeline-block timeline-block-left">
          <div className="marker" />
          <div className="timeline-content" onClick={handleToggle4}>
            <h3>First Year</h3>
            <span>Some work experience</span> <br />
            {!isOpen4 && <button className="btn">Show More</button>}
            {isOpen4 && (
              <div className="timeline-expanded-content">
                {" "}
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate.
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="timeline-block timeline-block-right">
          <div className="marker" />
          <div className="timeline-content" onClick={handleToggle5}>
            <h3>First Year</h3>
            <span>Some work experience</span> <br />
            {!isOpen5 && <button className="btn">Show More</button>}
            {isOpen5 && (
              <div className="timeline-expanded-content">
                {" "}
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
