import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";

function Contact() {
  return (
    <>
      <Header />
      <section className="container">
        <div className="row mb-3">
          <div className="col-md-12">
            <div className="border border-dark margin-top contact rounded-lg">
              <h3 className="text-light border border-white rounded-lg p-2">
                Contact
              </h3>
              <div className="row">
                <div className="col-md-8 mx-auto text-center">
                  <div className="text-center">
                  <a
                    href="tel:+9522885051"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon="phone" size="4x" className="icon" />
                  </a>
                  952-288-5051
                  
        
                  <a
                    href="mailto:elafontsee@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon="envelope"
                      size="4x"
                      className="icon"
                    />
                  </a>
                  elafontsee@gmail.com
                  </div>
                  <a
                    href="https://www.linkedin.com/in/eric-lafontsee-a2b65a6b/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={["fab", "linkedin"]}
                      size="4x"
                      className="icon"
                    />
                  </a>
                  <a
                    href="https://github.com/ericlafontsee"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={["fab", "github"]}
                      size="4x"
                      className="icon"
                    />
                  </a>
                </div>
              </div>
              <div className="row">
                <form className="col-md-8 mx-auto rounded-lg">
                  <div className="form-group">
                    <label>Name:</label>
                    <input
                      type="text"
                      className="form-control border border-dark"
                      placeholder="Enter Full Name"
                    />
                  </div>
                  <div className="form-group">
                    <label for="exampleInputEmail1">Email:</label>
                    <input
                      type="email"
                      className="form-control border border-dark"
                      id="exampleInputEmail1"
                      placeholder="Enter Email"
                    />
                  </div>
                  <div className="form-group">
                    <label>Message:</label>
                    <input
                      type="text"
                      className="form-control border border-dark"
                      placeholder="Enter Message"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="mb-3"
                    style={{
                      background: "#556270",
                      border: "2px outset white "
                    }}
                  >
                    Submit
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
