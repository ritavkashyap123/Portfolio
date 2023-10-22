import React from "react";
import { FaEnvelope, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./socialIcons.scss";

const SocialIcons = () => {
  return (
    <div className="SocialIcons">
      <div className="navbtns">
        <Link to="https://github.com/ritavkashyap123">
          <FaGithub className="icon"/>
        </Link>
        <Link to="https://www.linkedin.com/in/ritav-kashyap/">
          <FaLinkedin className="icon" />
        </Link>
        <Link to="https://www.instagram.com/suhrid_kashyap/">
          <FaInstagram className="icon" />
        </Link>
        <Link to="mailto:ritavkashyap123@gmail.com">
          <FaEnvelope className="icon" /> 
        </Link>
      </div>
    </div>
  );
};

export default SocialIcons;
