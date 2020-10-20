import React from "react";
import "./style.css";
function Home() {
  return (
    <>
    <div class="perspective-text">
      <div class="perspective-line">
        <p></p>
        <p>Hey!</p>
      </div>
      <div class="perspective-line">
        <p>Hey!</p>
        <p>I'm Eric,</p>
      </div>
      <div class="perspective-line">
        <p>I'm Eric,</p>
        <p>A Full Stack</p>
      </div>
      <div class="perspective-line">
        <p>A Full Stack</p>
        <p>Web Developer</p>
      </div>
      <div class="perspective-line">
        <p>Web Developer</p>
      </div>
    </div>
          <a href="about.html"><i class="fas fa-3x fa-arrow-circle-right"></i></a>
          </>
  );
}
export default Home;
