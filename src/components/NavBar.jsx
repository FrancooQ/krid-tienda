import React from "react";
import { Link } from "react-router-dom";
import CardWidget from "./CartWidget";

const NavBar = () => {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to={`/`}><p className="navbar-brand"><img src="../images/logo.svg" alt="logo"  title={"Aca dice KRID!"}/></p></Link>
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