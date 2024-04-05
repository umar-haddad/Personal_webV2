import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faWebflow } from "@fortawesome/free-brands-svg-icons";
import "../../../public/css/ProjectWeb.css";
import gambar1 from "../../../public/img/image-web/BMI_calculator.png";
import gambar2 from "../../../public/img/image-web/Kirim email.png";
import gambar3 from "../../../public/img/image-web/personal website.png";
import gambar4 from "../../../public/img/image-web/Pokemon_getApi.png";
import gambar5 from "../../../public/img/image-web/Todolist.png";
import gambar6 from "../../../public/img/image-web/Web_WeHealt.png";

const ProjectWeb = () => {
  return (
    <>
      <div className="project-page col-12 ">
        <div className="project-card col-6" data-aos="fade-up">
          <img src={gambar2} alt="image" className="lazyload" />
          <div className="project-description">
            <h1>Membuat daftar email</h1>
            <p>
              membuat daftar email yang nanti masuk ke api sementara dan ini
              pertama kali ngoding
            </p>
          </div>
          <div className="project-icons">
            <img
              src="/public/img/Icon/html.png"
              alt="image"
              title="html"
              className="lazyload"
            />
            <img
              src="/public/img/Icon/css.png"
              alt="image"
              title="css"
              className="lazyload"
            />
            <img
              src="/public/img/Icon/js.png"
              alt="image"
              title="javaScript"
              className="lazyload"
            />
          </div>
          <div className="project-btn">
            <a
              href="https://github.com/umar-haddad/landing-page.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>
                Repository
                <span>
                  <FontAwesomeIcon icon={faGithub} />
                </span>
              </button>
            </a>
            <a
              href="https://mellow-bonbon-b99920.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>
                Website
                <span>
                  <FontAwesomeIcon icon={faWebflow} />
                </span>
              </button>
            </a>
          </div>
        </div>

        <div className="project-card card col-6" data-aos="fade-up">
          <img src={gambar1} alt="image" className="lazyload" />
          <div className="project-description">
            <h1>BMI Calculator</h1>
            <p>
              membuat BMI Calculator dengan perhitungan yang sudah di berikan
            </p>
          </div>
          <div className="project-icons">
            <img
              src="/public/img/Icon/html.png"
              alt="image"
              title="html"
              className="lazyload"
            />
            <img
              src="/public/img/Icon/css.png"
              alt="image"
              title="css"
              className="lazyload"
            />
            <img
              src="/public/img/Icon/js.png"
              alt="image"
              title="javaScript"
              className="lazyload"
            />
          </div>
          <div className="project-btn">
            <a
              href="https://github.com/umar-haddad/BMI-Calculator.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>
                Repository
                <span>
                  <FontAwesomeIcon icon={faGithub} />
                </span>
              </button>
            </a>
            <a
              href="https://rococo-taiyaki-0fdfb6.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>
                Website
                <span>
                  <FontAwesomeIcon icon={faWebflow} />
                </span>
              </button>
            </a>
          </div>
        </div>

        <div className="project-card card col-6" data-aos="fade-up">
          <img src={gambar5} alt="image" className="lazyload" />
          <div className="project-description ">
            <h1>TodoList</h1>
            <p>membuat Daftar kegiatan harian waktu di Kursus</p>
          </div>
          <div className="project-icons">
            <img
              src="/public/img/Icon/html.png"
              alt="image"
              title="html"
              className="lazyload"
            />
            <img
              src="/public/img/Icon/css.png"
              alt="image"
              title="css"
              className="lazyload"
            />
            <img
              src="/public/img/Icon/js.png"
              alt="image"
              title="javaScript"
              className="lazyload"
            />
            <img
              src="/public/img/Icon/react.png"
              alt="image"
              title="React"
              className="lazyload"
            />
          </div>
          <div className="project-btn">
            <a
              href="https://github.com/umar-haddad/ToDoList.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>
                Repository
                <span>
                  <FontAwesomeIcon icon={faGithub} />
                </span>
              </button>
            </a>
            <a
              href="https://todolist-basic01.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>
                Website
                <span>
                  <FontAwesomeIcon icon={faWebflow} />
                </span>
              </button>
            </a>
          </div>
        </div>

        <div className="project-card card col-6" data-aos="fade-up">
          <img src={gambar3} alt="image" className="lazyload" />
          <div className="project-description ">
            <h1>personal website </h1>
            <p>membuat personal web yang untuk menguji kemampuan</p>
          </div>
          <div className="project-icons">
            <img
              src="/public/img/Icon/html.png"
              alt="image"
              title="html"
              className="lazyload"
            />
            <img
              src="/public/img/Icon/css.png"
              alt="image"
              title="css"
              className="lazyload"
            />
            <img
              src="/public/img/Icon/js.png"
              alt="image"
              title="javaScript"
              className="lazyload"
            />
          </div>
          <div className="project-btn">
            <a
              href="https://github.com/umar-haddad/personal_website_EX-1.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>
                Repository
                <span>
                  <FontAwesomeIcon icon={faGithub} />
                </span>
              </button>
            </a>
            <a
              href="https://sayyid-umar.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>
                Website
                <span>
                  <FontAwesomeIcon icon={faWebflow} />
                </span>
              </button>
            </a>
          </div>
        </div>

        <div className="project-card card col-6" data-aos="fade-up">
          <img src={gambar4} alt="image" className="lazyload" />
          <div className="project-description ">
            <h1>Pokemon</h1>
            <p>membuat daftar pokemon dengan get Api's </p>
          </div>
          <div className="project-icons">
            <img
              src="/public/img/Icon/html.png"
              alt="image"
              title="html"
              className="lazyload"
            />
            <img
              src="/public/img/Icon/css.png"
              alt="image"
              title="css"
              className="lazyload"
            />
            <img
              src="/public/img/Icon/js.png"
              alt="image"
              title="javaScript"
              className="lazyload"
            />
            <img
              src="/public/img/Icon/react.png"
              alt="image"
              title="React"
              className="lazyload"
            />
            <img
              src="/public/img/Icon/node.png"
              alt="image"
              title="React"
              className="lazyload"
            />
          </div>
          <div className="project-btn">
            <a
              href="https://github.com/umar-haddad/Pokedex_challengge.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>
                Repository
                <span>
                  <FontAwesomeIcon icon={faGithub} />
                </span>
              </button>
            </a>
            <a
              href="https://pokemon-dek.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>
                Website
                <span>
                  <FontAwesomeIcon icon={faWebflow} />
                </span>
              </button>
            </a>
          </div>
        </div>

        <div className="project-card card col-6" data-aos="fade-up">
          <img src={gambar6} alt="image" className="lazyload" />
          <div className="project-description ">
            <h1>WeHealth</h1>
            <p>
              membuat sebuah website bertema kesehatan yang responsible &
              interaktif, per kelompok satu kelompok terdiri dari 3 orang
              Project akhir Bootcamp Skilvul
            </p>
          </div>
          <div className="project-icons">
            <img
              src="/public/img/Icon/html.png"
              alt="image"
              title="html"
              className="lazyload"
            />
            <img
              src="/public/img/Icon/css.png"
              alt="image"
              title="css"
              className="lazyload"
            />
            <img
              src="/public/img/Icon/js.png"
              alt="image"
              title="javaScript"
              className="lazyload"
            />
            <img
              src="/public/img/Icon/react.png"
              alt="image"
              title="React"
              className="lazyload"
            />
            <img
              src="/public/img/Icon/node.png"
              alt="image"
              title="node.js"
              className="lazyload"
            />
            <img
              src="/public/img/Icon/express.png"
              alt="image"
              title="express.js"
              className="lazyload"
            />
            <img
              src="/public/img/Icon/MySQL"
              alt="image"
              title="Mysql"
              className="lazyload"
            />
            <img
              src="/public/img/Icon/mongo.png"
              alt="image"
              title="MONGO.DB"
              className="lazyload"
            />
            <img
              src="/public/img/Icon/bootstrap.png"
              alt="image"
              title="Bootstrap"
              className="lazyload"
            />
          </div>
          <div className="project-btn">
            <a
              href="https://github.com/Growth-Familie/GrowthFamilie-final"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>
                Repository
                <span>
                  <FontAwesomeIcon icon={faGithub} />
                </span>
              </button>
            </a>
            <a
              href="https://growth-familie.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>
                Website
                <span>
                  <FontAwesomeIcon icon={faWebflow} />
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectWeb;
