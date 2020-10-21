/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import "./style.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faArrowCircleRight, faDownload } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faEnvelope, faPhone, faArrowCircleRight, faDownload )


class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
          <Route exact path={process.env.PUBLIC_URL + "/about"} component={About} />
          <Route exact path={process.env.PUBLIC_URL + "/portfolio"} component={Portfolio} />
          <Route exact path={process.env.PUBLIC_URL + "/contact"} component={Contact} />
          <Route exact path={process.env.PUBLIC_URL + "/resume"} component={Resume} />
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
