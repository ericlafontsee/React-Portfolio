import React from "react";
import "./style.css";
import { Link, useLocation } from "react-router-dom";

function Home() {
  const location = useLocation();

  return (
    <>
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
        <i className="fas fa-3x fa-arrow-circle-right"></i>
      </Link>
    </>
  );
}
export default Home;
