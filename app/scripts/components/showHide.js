import React, {Component, PropTypes} from "react";

class Form extends Component {
  constructor() {
    super();
  }
    render() {
        return(
        <div className = "works">
          <button id="show-block" type="button" className="column large-6 tiny">show</button>
          <button id="hide-block" type="button" className="column large-6 tiny">Hide</button>
        </div>
      );
    }
}

export default Form;
