import React from "react";
import "./style.css";
import { Link, useLocation } from "react-router-dom";
import Nav from "../Nav";

function Header() {
  const location = useLocation();

  return (
    <header className="navbar navbar-expand-lg navbar-light border border-dark">
      <Link
            to="/"
            className={
              location.pathname === "/"
                ? "nav-link active text-light"
                : "nav-link text-light"
            }
          >
                 <h1>Eric LaFontsee</h1>
          </Link>
      <Nav />
    </header>
  );
}

export default Header;
