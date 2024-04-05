import { useEffect } from "react";
import "../../../public/css/skillsContent.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";
import icon1 from "../../../public/img/Icon/bootstrap.png";
import icon2 from "../../../public/img/Icon/css.png";
import icon3 from "../../../public/img/Icon/express.png";
import icon4 from "../../../public/img/Icon/figma.png";
import icon5 from "../../../public/img/Icon/html.png";
import icon6 from "../../../public/img/Icon/js.png";
import icon7 from "../../../public/img/Icon/mongo.png";
import icon8 from "../../../public/img/Icon/MySQL.png";
import icon9 from "../../../public/img/Icon/node.png";
import icon10 from "../../../public/img/Icon/react.png";
import icon11 from "../../../public/img/Icon/ms.office.png";
import icon12 from "../../../public/img/Icon/canva.png";

function SkillsContent() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <section
        className="skills col-12 d-flex align-items-center justify-content-center"
        data-aos="fade-up"
        id="skills"
      >
        <div className="skills-page">
          <h1>🎯 Skills</h1>
          <div className="skills-card">
            <img src={icon5} alt="html" title="HTML" className="lazyload" />
            <img src={icon2} alt="css" title="CSS" className="lazyload" />
            <img
              src={icon6}
              alt="Javacript"
              title="Javacript"
              className="lazyload"
            />
            <img
              src={icon1}
              alt="Bootstrap"
              title="Bootstrap"
              className="lazyload"
            />
            <img
              src={icon9}
              alt="Node.js"
              title="Node.js"
              className="lazyload"
            />
            <img
              src={icon10}
              alt="React.js"
              title="React.js"
              className="lazyload"
            />
            <img
              src={icon3}
              alt="Express.js"
              title="Express.js"
              className="lazyload"
            />
            <img src={icon8} alt="MySQL" title="MySQL" className="lazyload" />
            <img
              src={icon7}
              alt="Mongo DB"
              title="Mongo DB"
              className="lazyload"
            />
            <img src={icon4} alt="Figma" title="Figma" className="lazyload" />
            <img
              src={icon11}
              alt="ms.office"
              title="ms.office"
              className="lazyload"
            />
            <img src={icon12} alt="canva" title="canva" className="lazyload" />
          </div>
        </div>
      </section>
    </>
  );
}

export default SkillsContent;
