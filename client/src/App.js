/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import friends from './portfolio.json';


class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        {/* <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/contact" component={Resume} />
        </Switch> */}
     <Footer />
      </Router>
    );
  }
}

export default App;
