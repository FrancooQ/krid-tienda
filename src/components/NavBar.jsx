import React from "react";
import { Link } from "react-router-dom";
import CardWidget from "./CartWidget";

const NavBar = () => {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to={`/`}><p className="navbar-brand"><img src="../images/logo.svg" alt="logo" /></p></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" activeclassname="page" to={`/category/Zapatillas`}>Zapatillas</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" activeclassname="page" to={`/category/Camperas`}>Camperas</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <i className="bi bi-search"></i>
              <input className="form-control me-2" type="search" placeholder="Buscar.." aria-label="Buscar"></input>
              <button className="btn btn-outline-success btn-light" type="submit"><img src="../images/search.svg" alt="" /></button>
            </form>
            <div className="col-md-6 d-flex align-items-center justify-content-end">
              <CardWidget />
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar;