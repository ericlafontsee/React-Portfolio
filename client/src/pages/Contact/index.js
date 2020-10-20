import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Contact() {
  return (
    <>
    <Header />
     <section class="container container-fluid">
        <div class="row mb-3">
            <div class="col-md-12">
                <div class="border border-dark margin-top contact rounded-lg">
                    <h3 class="text-light border border-white rounded-lg p-2">Contact</h3>
                    <div class="row">
                        <div class="col-md-8 contactLinks">
                            <a href="tel:+9522885051" target="_blank"><i class="fas fa-phone medium icon"></i></a>
                            <a href="mailto:elafontsee@gmail.com" target="_blank"><i class="far fa-envelope medium icon"></i></a>
                            <a href="https://www.linkedin.com/in/eric-lafontsee-a2b65a6b/" target="_blank"><i class="fab fa-linkedin medium icon"></i></a>
                            <a href="https://github.com/ericlafontsee" target="_blank"><i class="fab fa-github medium icon"></i></a>
                        </div>
                    </div>
                    <div class="row">
                        <form class="col-md-8 mx-auto rounded-lg">
                            <div class="form-group">
                                <label>Name:</label>
                                <input type="text" class="form-control border border-dark" placeholder="Enter Full Name" />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email:</label>
                                <input type="email" class="form-control border border-dark" id="exampleInputEmail1" placeholder="Enter Email" />
                            </div>
                            <div class="form-group">
                                <label>Message:</label>
                                <input type="text" class="form-control border border-dark" placeholder="Enter Message"/>
                            </div>
                            <button type="submit" class="btn mb-3">Submit</button>
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
