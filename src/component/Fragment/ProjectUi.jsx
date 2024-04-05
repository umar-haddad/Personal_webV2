import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";
import gambar1 from "../../../public/img/image-web/Web_WeHealt.png";

function ProjectUi() {
  return (
    <>
      <div className="project-page col-12">
        <div className="project-card col-6" data-aos="fade-up">
          <img src={gambar1} alt="image" loading="lazy" />
          <div className="project-description">
            <h1>Wehealth</h1>
            <p>Membuat Design Usahaoptima menggunakan Figma</p>
          </div>
          <div className="project-icons">
            <img
              src="/public/img/Icon/figma.png"
              alt="image"
              title="figma"
              className="lazyload"
            />
            <img
              src="/public/img/Icon/canva.png"
              alt="image"
              title="canva"
              className="lazyload"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectUi;
