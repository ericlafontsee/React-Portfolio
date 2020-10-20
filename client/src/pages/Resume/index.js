import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ResumePic from '../../images/Resume-2020.png';


function Resume() {
  return (
    <>
    <Header />
    <section class="container container-fluid">
    <div class="row mb-3">
        <div class="col-md-12">
            <div class="card resume margin-top">
                <a href="https://drive.google.com/file/d/1SeOB1Sipwgn7tsDr4H7k9gwA3twBFAWH/view?usp=sharing"> <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-download" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                    <path fill-rule="evenodd" d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                  </svg>
                </a>
                <img src={ResumePic} class="card-img-top img-fluid" alt="Eric LaFontsee's Resume"/>

            </div>
        </div>
    </div>
  
</section>
    <Footer />
    </>
  );
}

export default Resume;
