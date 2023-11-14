import "./App.css";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import AnimateRoutes from "./components/animation/AnimateRoutes";

const Star = ({ left, top, duration }) => {
  const style = {
    left: `${left}vw`,
    top: `${top}vh`,
    animationDuration: `${duration}s`,
  };

  return <div className="star" style={style}></div>;
};

function App() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const starsArray = [];
    for (let i = 0; i < 100; i++) {
      starsArray.push({
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: Math.random() * 1 + 0.5,
      });
    }
    setStars(starsArray);
  }, []);

  return (
    <>
      <div>
        {/* <ParticleCanvas /> */}
        {stars.map((star, index) => (
          <Star
            key={index}
            left={star.left}
            top={star.top}
            duration={star.duration}
          />
        ))}
        <BrowserRouter>
          <AnimateRoutes />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
