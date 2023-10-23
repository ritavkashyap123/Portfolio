import React from "react";
import { Link } from 'react-router-dom'

import "./navbar.scss"

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav-header">
          <Link to="/"><div className="nav-title">RitChan</div></Link>
        </div>
        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span />
            <span />
            <span />
          </label>
        </div>
        <div className="nav-links">
          <Link to='#' className="link" target='_block'>
            Home
          </Link>
          <Link to='#' className="link" target='_block'>
            Projects
          </Link>
          <Link to='#' className="link" target='_block'>
            Experience
          </Link>
          <Link to='#' className="link" target='_block'>
            Skills
          </Link>
          <Link to='#' className="link" target='_block'>
            Achievements
          </Link>
          <Link to='#' className="link" target='_block'>
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;