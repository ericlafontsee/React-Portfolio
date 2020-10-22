import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Resume() {
  return (
    <>
    <Header />
    <section className="container">
    <div className="row mb-3">
        <div className="col-md-12 d-flex justify-content-center">
            <div className=" margin-top ">
                <a href="https://drive.google.com/file/d/1SeOB1Sipwgn7tsDr4H7k9gwA3twBFAWH/view?usp=sharing">   
                <FontAwesomeIcon icon="download" size="4x" className="icon"/>
                </a>
                <img src={process.env.PUBLIC_URL + '/images/resume-2020.png'} className="resume card-img-top img-fluid w-100" alt="Eric LaFontsee's Resume"/>

            </div>
        </div>
    </div>
  
</section>
    <Footer />
    </>
  );
}

export default Resume;
