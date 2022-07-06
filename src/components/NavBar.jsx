import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget.jsx";
import Categories from "./Categories.jsx";

const NavBar = () => {
  const navButton = useRef(null);
  const linksContainerRef = useRef(null);

  function collapseNav() {
    navButton.current.classList.add("collapsed");
    linksContainerRef.current.classList.remove("show");
  }

  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          ABRIGATE
        </Link>
        <button
          
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link onClick={collapseNav} className="nav-link" to="/">
                Todo
              </Link>
            </li>
            <Categories />
          </ul>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
