/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import "./style.css";

// import friends from './portfolio.json';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/resume" component={Resume} />
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
