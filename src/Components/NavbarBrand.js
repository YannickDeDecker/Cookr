import React from "react";
import { Link } from "react-router-dom";

//import CSS file
import "./NavbarBrand.css";

//import logo file
import Logo from "../Images/logo.png";

export default function NavbarBrand() {
  return (
    <div>
      <Link className="navbar-brand" to="/">
        <img src={Logo} alt="Logo Cookr" />
      </Link>
    </div>
  );
}
