import React, {Component, PropTypes} from "react";
import ReactDOM from "react-dom";
import {connect} from "react-redux";
import Form from "../components/showHide.js";
import * as types from "../constants/ActionTypes";

class App extends Component {
  render(){
    if(types.Hide){
      console.log("app hidden");
    }
    if(types.SHOW){
      console.log("app shown");
    }
    return(
      <Form/>
    );
  }
}

export default App;
