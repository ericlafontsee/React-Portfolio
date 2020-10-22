import React, { Component } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./style.css";
import PortCard from "../../components/Card";
import portfolio from "../../portfolio.json";
import { CardGroup } from "react-bootstrap";

class Portfolio extends Component {
  state = {
    portfolio
  };

  render() {
    return (
      <>
        <Header />
        <div className="container">
          <div className="row mb-3">
            <div className="col-md-12">
              <div className="border border-dark margin-top portfolio rounded-lg">
                <h3 className="text-light border border-white p-2 rounded-lg">
                  Portfolio
                </h3>
                <div className="d-flex flex-wrap justify-content-space-evenly">
                {/* <CardGroup className="mx-auto"> */}
                  {this.state.portfolio.map((o, key) => {
                    return (
                      <PortCard
                        name={o.name}
                        image={o.image}
                        GitHub={o.GitHub}
                        Deployed={o.Deployed}
                        key={key}
                      />
                    );
                  })}
                  {/* </CardGroup> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Portfolio;
