import React from "react";
import "./style.css";
import { Link, useLocation } from "react-router-dom";
import NavMenu from "../Nav";

function Header() {
  const location = useLocation();

  return (
    <header>
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
      <NavMenu />
    </header>
  );
}

export default Header;
