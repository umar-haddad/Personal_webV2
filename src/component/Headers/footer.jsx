import React from "react";
import "./footer.css";

function footer() {
  return (
    <>
      <footer className="footer mt-auto py-3 bg-light fixed-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start">
              &copy; {new Date().getFullYear()} By Umar
            </div>
            <div className="col-md-6 text-center text-md-end">
              <span className="me-3">085772169466</span>
              <span>sayyidumar11@gmail.com</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default footer;
