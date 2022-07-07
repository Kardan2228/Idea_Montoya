import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget.jsx";
import Categories from "./Categories.jsx";

const NavBar = () => {
  
  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          ABRIGATE
        </Link>

        <div className="dropdown">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <ul style={{ left: "-7rem" }} className="dropdown-menu">
            <li className="nav-item">
              <Link className="dropdown-item" to="/">
                Todo
              </Link>
            </li>
            
              <Categories />
          
          </ul>
          <CartWidget />
        </div>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <Link onClick={collapseNav} className="nav-link" to="/"> */}
              <Link className="nav-link" to="/">
                Todo
              </Link>
            </li>
            <Categories />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
