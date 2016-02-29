import React, {Component, PropTypes} from "react";
import ReactDOM from "react-dom";
import {connect} from "react-redux";
import Form from "../components/showHide.js";

class App extends Component {

}

ReactDOM.render(<Form/>, document.getElementById("drawing_container"));

// export default connect(mapStateToProps)(App);
