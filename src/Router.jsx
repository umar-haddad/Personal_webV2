import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Home/home";
import About from "./Pages/about/about";
import Cerfication from "./Pages/Certif/Sertifikat";
import Skill from "./Pages/skills/skill";
import Project from "./Pages/Project/project";
import LayoutHome from "./component/layouts/home";
import Contact from "./Pages/contact/Contact";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutHome content={<Homepage />} />} />
      <Route path="/About" element={<LayoutHome content={<About />} />} />
      <Route path="/Certif" element={<LayoutHome content={<Cerfication />} />} />
      <Route path="/Skills" element={<LayoutHome content={<Skill />} />} />
      <Route path="/Project" element={<LayoutHome content={<Project />} />} />
      <Route path="/Contact" element={<LayoutHome content={<Contact />} />} />
    </Routes>
  );
};

export default Router;
