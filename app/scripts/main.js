import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import configureStore from "./store/configureStore";
import App from "./containers/App";

require("../scss/core.scss");

const store = configureStore();

ReactDOM.render(
  //provider magically makes store available to all container componenets in the application without passing explicitly
  //http://redux.js.org/docs/basics/UsageWithReact.html
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("drawing_container")
);
