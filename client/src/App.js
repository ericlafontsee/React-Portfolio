/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import logo from "./logo.svg";
import { BrowserRouter, Router} from 'react-router-dom';
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Header />
        {/* <Route path="/contact" component={Contact} />  */}

  
      </BrowserRouter>
    );
  }
}

export default App;
