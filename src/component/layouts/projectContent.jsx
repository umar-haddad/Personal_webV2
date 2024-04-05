import { useEffect, useState } from "react";
import ScrollToTop from "react-scroll-to-top";
import AOS from "aos";
import "aos/dist/aos.css";
import ProjectContentWeb from "../Fragment/ProjectWeb";
import ProjectContentUi from "../Fragment/ProjectUi";

const ProjectContent = () => {
  const [selectedCategory, setSelectedCategory] = useState("Web");
  const [activeButton, setActiveButton] = useState("Web");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);

    setActiveButton(category);
  };

  const renderContent = () => {
    switch (selectedCategory) {
      case "Web":
        return <ProjectContentWeb />;
      case "Design":
        return <ProjectContentUi />;
      default:
        return null;
    }
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section className="project" id="project">
      <ScrollToTop smooth />
      <div className="project-title">
        <h1>🚀 Projects</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "60px",
          }}
        >
          <button
            className={`btn-project ${activeButton === "Web" ? "active2" : ""}`}
            onClick={() => handleCategoryClick("Web")}
          >
            Web
          </button>
          <button
            className={`btn-project ${
              activeButton === "Design" ? "active2" : ""
            }`}
            onClick={() => handleCategoryClick("Design")}
          >
            UI Design
          </button>
        </div>
      </div>
      <div>{renderContent()}</div>
    </section>
  );
};

export default ProjectContent;
