import React from "react";
import "./style.css";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Home() {
  const location = useLocation();

  return (
    <div className="body">
      <div className="perspective-text">
        <div className="perspective-line">
          <p></p>
          <p>Hey!</p>
        </div>
        <div className="perspective-line">
          <p>Hey!</p>
          <p>I'm Eric,</p>
        </div>
        <div className="perspective-line">
          <p>I'm Eric,</p>
          <p>A Full Stack</p>
        </div>
        <div className="perspective-line">
          <p>A Full Stack</p>
          <p>Web Developer</p>
        </div>
        <div className="perspective-line">
          <p>Web Developer</p>
        </div>
      </div>
      <Link to="/about" className={location.pathname === "/about"}>
        <FontAwesomeIcon icon="arrow-circle-right" />
      </Link>
    </div>
  );
}
export default Home;
