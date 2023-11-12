import React from "react";

import "./contact.scss";
import Navbar from "../../components/navbar/Navbar";
import SocialIcons from "../../components/socialIcons/SocialIcons";
import ContactRight from "../../components/models/ContactRight";

const Contact = () => {
  return (
    <>
      <Navbar />
      <SocialIcons />
      <div className="Contact">
        <div className="box">
          <h1>Contact Me</h1>
          <div className="content">
            <div className="Right">
              <ContactRight />
            </div>
            <div className="left">
              <form action="">
                {/* <div className="name">
                  <input type="text" />
                </div>
                <div className="name">
                  <input type="text" />
                </div>
                <div className="name">
                  <input type="text" />
                </div>
                <div className="name">
                  <input type="text" />
                </div> */}
                <input type="text" className="name" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
