import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget.jsx";
import Categories from "./Categories.jsx";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
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
              <Link className="nav-link" to="/">
                Todo
              </Link>
            </li>
            <Categories />
            {/* <li className="nav-item">
              <Link className="nav-link" to="/category/vestidos">
                Vestidos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/pantalones">
                Pantalones
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/faldas">
                Faldas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/blusas">
                Blusas
              </Link>
            </li> */}
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="¿Qué buscas?"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-info btn-outline-success"
              type="submit"
            >
              Buscar
            </button>
          </form>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
