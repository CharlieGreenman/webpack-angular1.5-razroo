import React, {Component, PropTypes} from "react";
import ReactDOM from "react-dom";
import {connect} from "react-redux";
import Form from "../components/showHide.js";
import * as types from "../constants/ActionTypes";

class App extends Component {
  render(){
    return(
      <Form/>
    );
  }
}

export default App;
