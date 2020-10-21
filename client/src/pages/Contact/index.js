import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Contact() {

  return (
    <>
    <Header />
     <section className="container">
        <div className="row mb-3">
            <div className="col-md-12">
                <div className="border border-dark margin-top contact rounded-lg">
                    <h3 className="text-light border border-white rounded-lg p-2">Contact</h3>
                    <div className="row">
                        <div className="col-md-8">
                        <FontAwesomeIcon icon="phone"/>
                        <FontAwesomeIcon icon="envelope" />
                        <FontAwesomeIcon icon={['fab', 'linkedin']} />
                        <FontAwesomeIcon icon={['fab', 'github']} />
                        <i className="fas fa-phone medium
                            icon"/>
                            <i className="far fa-envelope medium icon"/>
                            <a href="https://www.linkedin.com/in/eric-lafontsee-a2b65a6b/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin medium icon"></i></a>
                            <a href="https://github.com/ericlafontsee" target="_blank" rel="noopener noreferrer"><i className="fab fa-github medium icon"></i></a>
                        </div>
                    </div>
                    <div className="row">
                        <form className="col-md-8 mx-auto rounded-lg">
                            <div className="form-group">
                                <label>Name:</label>
                                <input type="text" className="form-control border border-dark" placeholder="Enter Full Name" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email:</label>
                                <input type="email" className="form-control border border-dark" id="exampleInputEmail1" placeholder="Enter Email" />
                            </div>
                            <div className="form-group">
                                <label>Message:</label>
                                <input type="text" className="form-control border border-dark" placeholder="Enter Message"/>
                            </div>
                            <button type="submit" className="mb-3">Submit</button>
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
