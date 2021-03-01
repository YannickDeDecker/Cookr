import React, { useState } from "react";
import SearchBar from "./SearchBar";
import NavbarBrand from "./NavbarBrand";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = (props) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark mt-5">
        <div className="container">
          <NavbarBrand />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={!isNavCollapsed ? true : false}
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  exact
                  eventKey="1"
                  activeClassName="active"
                  className="nav-link"
                  to="/"
                >
                  Recepten
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  eventKey="2"
                  activeClassName="active"
                  className="nav-link"
                  to="/about"
                >
                  Over mij
                </NavLink>
              </li>
              <li className="nav-item mr-5">
                <NavLink
                  eventKey="3"
                  activeClassName="active"
                  className="nav-link"
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
              <SearchBar/>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
