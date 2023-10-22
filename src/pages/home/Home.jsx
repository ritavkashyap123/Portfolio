import React from "react";
import SocialIcons from "../../components/socialIcons/SocialIcons";

import "./home.scss";
import HeroRight from "../../components/hero-side/HeroRight";

const Home = () => {
  return (
    <div className="Home">
      <SocialIcons />
      <div className="container">
        <div className="hero-left">
          <div>
            Hi ! <span className="head">Ritav Here</span>
          </div>
          <div className="hr">
            <hr color="white" />
          </div>
          <div className="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            nesciunt distinctio necessitatibus ab molestiae praesentium ut
            obcaecati dolores quam accusantium nobis commodi dolorum odit nam
            eveniet autem nemo, velit numquam, reprehenderit voluptatibus
            quaerat voluptates sequi. Saepe et dicta, aliquam quos laborum ad
            error numquam, dolorum maxime omnis libero eius, distinctio placeat!
            Sit voluptatibus tempore placeat quibusdam? Iste soluta vel enim
            odit, iure eius, laudantium voluptas a blanditiis consequuntur
            voluptate excepturi commodi nulla ipsum, doloremque inventore
            molestias? Amet at qui provident et minus, blanditiis minima maxime
            explicabo delectus iusto officia vel id natus quidem quas dolorum
            asperiores fuga? Nulla, tempora voluptas!
          </div>
        </div>
        <div className="hero-right">
          <HeroRight />
        </div>
      </div>
    </div>
  );
};

export default Home;
