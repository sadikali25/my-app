import React from "react";
import { NavLink } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import buy from '../Images/buy.png'
import user from '../Images/user.png'
function Navbar() {
  return (
    <div>
      {/* <div className="container"> */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary p-fixed">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="#">
            Vegefoods
          </NavLink>
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
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/About">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Blog">
                  Blog
                </NavLink>
              </li>
              <NavDropdown title="Shop" id="basic-nav-dropdown">
                <NavDropdown.Item to="./Shop" href="./Shop">Shop </NavDropdown.Item>
                {/* <NavDropdown.Item to="./Singleproduct" href="./Singleproduct">SingleProduct</NavDropdown.Item> */}
                {/* <NavDropdown.Item to="./Cart" href="./Cart">cart</NavDropdown.Item> */}
                {/* <NavDropdown.Item to="Payment" href="./Payment">ChackOut</NavDropdown.Item> */}
              </NavDropdown>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Cart">
                  <img src={buy} alt=""/>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Login">
                  <img src={user} alt=""/>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
