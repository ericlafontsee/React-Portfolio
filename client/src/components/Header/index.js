import React from "react";
import "./style.css";
// import { Link, useLocation } from "react-router-dom";
import Nav from "../Nav";

function Header() {
  return (
    <header className="navbar navbar-expand-lg navbar-light border border-dark">
      <h1>Eric LaFontsee</h1>
      <Nav />
    </header>
  );
}

export default Header;
