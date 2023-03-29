import React from "react";
import { NavLink } from "react-router-dom";


function Navbar() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
        <NavLink className="navbar-logo" to="/">
          <img src = "../logo.jpeg" width = "20%" height = "20%" alt="logo"></img>
        </NavLink>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">
                Home <span className="sr-only"></span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/bmi">
                BMI Calculator
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}


export default Navbar;