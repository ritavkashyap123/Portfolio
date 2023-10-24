import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Preloader from "./components/preloader/Preloader";
import Home from "./pages/home/Home";
import Skills from "./pages/skills/Skills";
import Achievements from "./pages/achievements/Achievements";
import Experience from "./pages/experience/Experience";
import Project from "./pages/projects/Project";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Preloader />} />
        <Route path="/home" element={<Home />} />
        <Route path="/skill" element={<Skills />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
