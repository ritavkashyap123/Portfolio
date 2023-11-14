import React from "react";
import { motion } from "framer-motion";
import "./contact.scss";
import Navbar from "../../components/navbar/Navbar";
import SocialIcons from "../../components/socialIcons/SocialIcons";
import ContactRight from "../../components/models/ContactRight";

const Contact = () => {
  return (
    <motion.div
      className="Contact"
      initial={{ translateX: "-100vw" }}
      animate={{ translateX: 0 }}
      exit={{ translateX: "100vw" }}
    >
      <div className="head">
        Experience
        <div className="hr">
          <hr color="white" />
        </div>
      </div>
      <div className="main">
        <div className="box">
          <div className="content">
            <div className="left">
              <form action="">
                <div className="input-group">
                  <input required type="text" className="input" id="name" />
                  <label className="label"> Name </label>
                </div>
                <div className="input-group">
                  <input required type="tel" className="input" id="phno" />
                  <label className="label"> Phone Number </label>
                </div>
                <div className="input-group">
                  <input required type="email" className="input" id="email" />
                  <label className="label"> Email </label>
                </div>
                <div className="input-group">
                  <textarea
                    required
                    type="textarea"
                    className="input"
                    id="message"
                  />
                  <label className="label"> Message </label>
                </div>
                <div className="btn">
                  <input
                    type="submit"
                    value="Submit"
                    className="submit text"
                  />
                  <input type="reset" value="Reset" className="reset text" />
                </div>
              </form>
            </div>
            <div className="Right">
              <ContactRight />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
