import React from "react";
import "./style.css";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  const location = useLocation();

  return (
    <nav class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active ">
          <Link
            to="/"
            className={
              location.pathname === "/portfolio"
                ? "nav-link active text-light"
                : "nav-link text-light"
            }
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
        <Link
          to="/about"
          className={location.pathname === "/about" ? "nav-link active text-light" : "nav-link text-light"}
        >
          About
        </Link>
      </li>
        <li class="nav-item">
          <Link
            to="/portfolio"
            className={
              location.pathname === "/portfolio"
                ? "nav-link active text-light"
                : "nav-link text-light"
            }
          >
            Portfolio
          </Link>
        </li>
        <li class="nav-item">
          <Link
            to="/contact"
            className={
              location.pathname === "/contact"
                ? "nav-link active text-light"
                : "nav-link text-light"
            }
          >
            Contact
          </Link>
        </li>
        <li class="nav-item">
          <Link
            to="/resume"
            className={
              location.pathname === "/resume"
                ? "nav-link active text-light"
                : "nav-link text-light"
            }
          >
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
