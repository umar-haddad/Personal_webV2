import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./navbar.css";

function navbar() {
  return (
    <Navbar expand="lg" className="navbar navbar-expand-lg fixed-top">
      <Container>
        <h1>MY Portofolio</h1>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <ul className="ms-auto text-center navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Skills">
                Skill
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Certif">
                Sertifikat
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Project">
                Project
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contact">
                Contact
              </Link>
            </li>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navbar;
