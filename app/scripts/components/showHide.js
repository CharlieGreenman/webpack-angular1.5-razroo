import React, {Component, PropTypes} from "react";
require("../../scss/core.scss");

class Form extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e){
    console.log("click");
  }
    render() {
        return(
        <div className = "works">
          <button id="show-block" type="button" className="show-hide-button" onClick={this.handleClick}>show</button>
          <button id="hide-block" type="button" className="show-hide-button" onClick={this.handleClick}>Hide</button>
        </div>
      );
    }
}

export default Form;
