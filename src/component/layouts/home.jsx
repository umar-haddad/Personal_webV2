import propTypes from "prop-types";

import Navbar from "../Headers/navbar";
import Footer from "../Headers/footer";

function LayoutHome(props) {
  return (
    <>
      <Navbar />
      {props.content}
      <Footer />
    </>
  );
}

LayoutHome.propTypes = {
  content: propTypes.element.isRequired,
};

export default LayoutHome;
