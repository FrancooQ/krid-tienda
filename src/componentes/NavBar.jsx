import React from "react";

function NavBar() {
    return (
      <div className="App">
        <nav className="navbar bg-dark">
        <div className="container-fluid">
            <p className="navbar-brand"><img src="../images/logo.svg" alt="" /></p>
            <form className="d-flex .justify-content-center .align-items-md-center" role="search">
            <input classNameName="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button classNameName="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
        </nav>
      </div>
    );
  }

export default NavBar;