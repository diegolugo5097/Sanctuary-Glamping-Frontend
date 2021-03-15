import React from "react";
import { Button, Image } from "antd";
import { Link, Redirect } from "react-router-dom";
import { isAuthenticated, signout } from "../../api/auth/auth";
import "./Menu.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
        <Link className="navbar-brand" to="/">
          <img
            src={"https://i.postimg.cc/mgXfBC90/Logo-verde.png"}
            width={160}
          />
        </Link>
        <Button
          className="btn navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </Button>
        <div
          className="navigation collapse navbar-collapse"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            {!isAuthenticated() && (
              <>
                <Link
                  className="link nav-item nav-link text-white"
                  to="/"
                  style={{ textDecoration: "none" }}
                >
                  Inicio
                </Link>
                <Link
                  className="link mx-2 nav-item nav-link text-white"
                  style={{ textDecoration: "none" }}
                  to="/aboutUs"
                >
                  Nosotros
                </Link>
                <Link
                  className="link mx-2 nav-item nav-link text-white"
                  style={{ textDecoration: "none" }}
                  to="/glampings"
                >
                  Glampings
                </Link>
                <Link
                  to="/gallery"
                  className="link mx-2 nav-item nav-link text-white"
                  style={{ textDecoration: "none" }}
                >
                  Galeria
                </Link>
              </>
            )}
            {isAuthenticated() && (
              <>
                <Link
                  // to="/admin/glamping"
                  className="link nav-item nav-link"
                  to="/admin/glamping"
                >
                  Glamping <span className="sr-only">(current)</span>
                </Link>
                <Link to="/admin/user" className="link nav-item nav-link">
                  Usuario
                </Link>
                <Link to="/admin/aboutUs" className="link nav-item nav-link">
                  Nosotros
                </Link>
                <Link to="/admin/galleries" className="link nav-item nav-link">
                  Galeria
                </Link>
                <Link to="/admin/carousel" className="link nav-item nav-link">
                  Carousel
                </Link>
                <Link
                  to="/"
                  onClick={() =>
                    signout(() => {
                      <Redirect to="/" />;
                    })
                  }
                  className="nav-link text-white btn btn-danger mx-5"
                >
                  <i className="fas fa-door-open mx-2"></i>
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
