import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      className="text-center text-lg-start text-muted"
      style={{ position: "-webkit-sticky", left: 0, bottom: 0, right: 0 }}
    >
      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase text-center fw-bold mb-4">Pages</h6>
              <p>
                <Link className="link-secondary" to="/">
                  Home
                </Link>
              </p>
              <p>
                <Link className="link-secondary" to="/movies">
                  Movies
                </Link>
              </p>
              <p>
                <Link className="link-secondary" to="/listings">
                  Playing Now
                </Link>
              </p>
              <p>
                <Link className="link-secondary" to="/about">
                  About Us
                </Link>
              </p>
              <p>
                <Link className="link-secondary" to="/forum">
                  Discussions
                </Link>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase text-center fw-bold mb-4">
                Contact
              </h6>
              <p>
                <i className="fas fa-home me-3"></i> 123 Oneroad, Two City,
                AB123 4CD
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                QA_Cinema@gmail.com
              </p>
              <p>
                <i className="fas fa-phone me-3"></i> 44 123 456 789
              </p>
            </div>
          </div>
        </div>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2021 Copyright <br />
        <a className="text-reset fw-bold">QA Cinema</a>
      </div>
    </div>
  );
};

export default Footer;
