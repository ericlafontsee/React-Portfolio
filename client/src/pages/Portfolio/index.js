import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link, useLocation } from "react-router-dom";
import "./style.css";
import portfolio from "../../portfolio.json";


function Portfolio() {
  const location = useLocation();

  return (
    <>
      <Header />
      <div className="container container-fluid">
        <div className="row mb-3">
          <div className="col-md-12">
            <div className="border border-dark margin-top portfolio rounded-lg">
              <h3 className="text-light border border-white p-2 rounded-lg">
                Portfolio
              </h3>
              <div className="row">
                <div className="card margin-top mx-auto" >
                  <Link to="https://ericlafontsee.github.io/Weather-Dashboard/" target="_blank"><img src="../../images/Weather-Dashboard.png" className="cardimg rounded d-block w-100 p-0 m-0" alt="Weather DashBoard App" /></Link>
                  <div className="card-body text-center">
                    <h5 className="card-title">Weather DashBoard</h5>
                    {/* <a href="https://github.com/ericlafontsee/Weather-Dashboard" target="_blank" className="btn  m-3">GitHub Repo</a> */}
                    {/* <a href="https://ericlafontsee.github.io/Weather-Dashboard/" target="_blank" className="btn  m-3">Deployed App</a> */}
                  </div>
                </div>
                <div className="card margin-top mx-auto" >
                  {/* <a href="https://ericlafontsee.github.io/Work-Day-Scheduler/" target="_blank"><img src="assets/images/Workday-scheduler.png" className="cardimg rounded d-block w-100 p-0 m-0" alt="Work-Day-Scheduler App" /></a> */}
                  <div className="card-body text-center">
                    <h5 className="card-title">Work Day Scheduler</h5>
                    {/* <a href="https://github.com/ericlafontsee/Work-Day-Scheduler" target="_blank" className="btn  m-3">GitHub Repo</a> */}
                    {/* <a href="https://ericlafontsee.github.io/Work-Day-Scheduler/" target="_blank" className="btn  m-3">Deployed App</a> */}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="card margin-top mx-auto" >
                  {/* <a href="https://ericlafontsee.github.io/Homework-CodeQuiz/" target="_blank"><img src="assets/images/code-quiz.png" className="cardimg rounded d-block w-100 p-0 m-0" alt="Code-Quiz app" /></a> */}
                  <div className="card-body text-center">
                    <h5 className="card-title">Code Quiz</h5>
                    {/* <a href="https://github.com/ericlafontsee/Homework-CodeQuiz" target="_blank" className="btn  m-3">GitHub Repo</a> */}
                    {/* <a href="https://ericlafontsee.github.io/Homework-CodeQuiz/" target="_blank" className="btn  m-3">Deployed App</a> */}
                  </div>
                </div>
                <div className="card margin-top mx-auto" >
                  {/* <a href="https://github.com/ericlafontsee/Node-Express-Handlebars" target="_blank"><img src="assets/images/EAT-DA-BURGER.png" className="cardimg rounded d-block w-100 p-0 m-0" alt="Eat-Da-Burger App" /></a> */}
                  <div className="card-body text-center">
                    <h5 className="card-title"> EAT-DA-BURGER</h5>
                    {/* <a href="https://github.com/ericlafontsee/Node-Express-Handlebars" target="_blank" className="btn  m-3">GitHub Repo</a> */}
                    {/* <a href="https://github.com/ericlafontsee/Node-Express-Handlebars" target="_blank " className="btn  m-3 ">Deployed App</a> */}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="card margin-top mx-auto" >
                  {/* <a href="https://github.com/ericlafontsee/Team-Profile-Generator" target="_blank"><img src="assets/images/Team-Profile-Generator.png" className="cardimg rounded d-block w-100 p-0 m-0" alt="Team Profile Generator app" /></a> */}
                  <div className="card-body text-center">
                    <h5 className="card-title">Team Profile Generator</h5>
                    {/* <a href="https://github.com/ericlafontsee/Team-Profile-Generator" target="_blank" className="btn  m-3">GitHub Repo</a> */}
                    {/* <a href="https://drive.google.com/file/d/1FAkVv5czBKA5EqCrOKxXFto6FAjKJssY/view" target="_blank" className="btn  m-3">Live Demo</a> */}
                  </div>
                </div>
                <div className="card margin-top mx-auto" >
                  {/* <a href="https://github.com/ericlafontsee/Note-Taker" target="_blank"><img src="assets/images/Note-Taker.png" className="cardimg rounded d-block w-100 p-0 m-0" alt="Note Taker App" /></a> */}
                  <div className="card-body text-center">
                    <h5 className="card-title"> Note Taker</h5>
                    {/* <a href="https://github.com/ericlafontsee/Note-Taker" target="_blank" className="btn  m-3">GitHub Repo</a> */}
                    {/* <a href="https://drive.google.com/file/d/1kQuU7-dF2I2n0Ycimuo-hSqAZ3-IhruR/view?usp=sharing" target="_blank" className="btn  m-3">Live Demo</a> */}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="card margin-top mx-auto" >
                  {/* <a href="https://github.com/ericlafontsee/Employee-Tracker" target="_blank"><img src="assets/images/Employee-Tracker.png" className="cardimg rounded d-block w-100 p-0 m-0" alt="Employee Tracker" /></a> */}
                  <div className="card-body text-center">
                    <h5 className="card-title">Employee Tracker</h5>
                    {/* <a href="https://github.com/ericlafontsee/Employee-Tracker" target="_blank" className="btn  m-3">GitHub Repo</a> */}
                    {/* <a href="https://drive.google.com/file/d/1bwvdGhdnEXA_C8qCx2j2WkBCmHRg0gyG/view" target="_blank" className="btn  m-3">Live Demo</a> */}
                  </div>
                </div>
                <div className="card margin-top mx-auto" >
                  {/* <a href="https://github.com/ericlafontsee/Note-Taker" target="_blank"><img src="assets/images/changeforgood.png" className="cardimg rounded d-block w-100 p-0 m-0" alt="Change For Good App" /></a> */}
                  <div className="card-body text-center">
                    <h5 className="card-title"> Change For Good</h5>
                    {/* <a href="https://github.com/ericlafontsee/Change-For-Good" target="_blank" className="btn  m-3">GitHub Repo</a> */}
                    {/* <a href="https://arcane-ravine-47168.herokuapp.com/" target="_blank" className="btn  m-3">Deploy App</a> */}
                  </div>
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

export default Portfolio;
