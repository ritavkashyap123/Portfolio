import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Preloader from "./components/preloader/Preloader";
import Home from "./pages/home/Home";
import Skills from "./pages/skills/Skills";
import Achievements from "./pages/achievements/Achievements";
import Experience from "./pages/experience/Experience";
import Project from "./pages/projects/Project";
import Contact from "./pages/contact/Contact";
import react, { useEffect, useState } from 'react';

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
      <div id="stars-container">
        {stars.map((star, index) => (
          <Star
            key={index}
            left={star.left}
            top={star.top}
            duration={star.duration}
          />
        ))}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Preloader />} />
            <Route path="/home" element={<Home />} />
            <Route path="/skill" element={<Skills />} />
            <Route path="/achievement" element={<Achievements />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
