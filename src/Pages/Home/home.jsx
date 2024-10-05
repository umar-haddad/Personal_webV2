import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTiktok,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowDown, faDownload } from "@fortawesome/free-solid-svg-icons";
import tenorGif from "../../../public/img/tenor.gif";
import cvPdf from "../../assets/cv/CV_FULL_STACK_DEVELOPER.pdf";
import "./home.css";

function HeroSection() {
  return (
    <section
      className="hero pt-5 mt-5 justify-content-center align-items-center"
      data-aos="fade-up"
    >
      <div className="hero-title">
{/*         <img src={tenorGif} alt="Tenor GIF" /> */}
        <div className="hero-teks">
          <h1>Sayyid Umar</h1>
          <p>
            Hi everyone <span>👋🏼</span>, welcome to my portfolio website
          </p>
        </div>
      </div>

      <div className="hero-btn">
        <Link to="/Contact">
          <button className="btn btn-outline-primary">
            Contact Me
            <span>
              <FontAwesomeIcon icon={faArrowDown} />
            </span>
          </button>
        </Link>
        <a href={cvPdf} target="_blank" rel="noopener noreferrer">
          <button className="btn btn-outline-primary">
            Download CV
            <span>
              <FontAwesomeIcon icon={faDownload} />
            </span>
          </button>
        </a>
      </div>

      <div className="hero-icons">
        <a
          href="https://www.instagram.com/sayyid_umar_24/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <FontAwesomeIcon icon={faInstagram} />
          </span>
        </a>
        <a
          href="https://www.tiktok.com/@gurukuhaddad?is_from_webapp=1&sender_device=pc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <FontAwesomeIcon icon={faTiktok} />
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/sayyid-umar/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <FontAwesomeIcon icon={faLinkedin} />
          </span>
        </a>
        <a
          href="https://github.com/umar-haddad"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <FontAwesomeIcon icon={faGithub} />
          </span>
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
