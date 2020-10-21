import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AboutPic from '../../images/Professional_pic.png';
import "./style.css";


function About() {
  return (
    <>
      <Header />
      <div class="container bio">
        <div className="row">
        <div className="col-md-12 mb-3">
          <div className="rounded-lg margin-top about-me">
            <h3 className="text-light border border-white rounded-lg p-2">
              About Me
            </h3>
            <div className="row">
              <div className="col-md-3">
                <img
                  src={AboutPic}
                  className="propic img-fluid "
                  alt="Portrait of Eric LaFontsee"
                />
              </div>
              <div className="col-md-9">
                <p className="card-text pt-2">
                  Full stack web developer with a background in the music
                  business. Successfully managed tours for a Sony artist
                  providing support for national acts like Lynyrd Skynyrd. Known
                  for my time management skills and discipline, I taught myself
                  XML languages and got offered a job as junior programmer at a
                  technical publications company. Recently earned a certificate
                  in Full Stack Web Development from Vanderbilt University
                  learning HTML, CSS, and JavaScript. Motivated to work with a
                  team invested in developing cutting-edge web applications. My
                  determination combined with diligence makes me a reliable and
                  successful team member.
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
