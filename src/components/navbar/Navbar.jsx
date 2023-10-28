import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav-header">
          <Link to="/">
            <div className="nav-title">RitChan</div>
          </Link>
        </div>
        <div className="nav-btn">
          <label htmlFor="nav-check">
            <FaBars />
          </label>
        </div>
        <div className="nav-links">
          <Link to="/home" className="link">
            Home
          </Link>
          <Link to="/project" className="link">
            Projects
          </Link>
          <Link to="/experience" className="link">
            Experience
          </Link>
          <Link to="/skill" className="link">
            Skills
          </Link>
          <Link to="/achievement" className="link">
            Achievements
          </Link>
          <Link to="/contact" className="link">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
