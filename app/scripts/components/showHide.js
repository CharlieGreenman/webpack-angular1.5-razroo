import React from "react";
import ReactDOM from "react-dom";

class Form extends React.Component {
    render() {
        return(
        <button id="show-block" type="button" className="column large-6 tiny">show</button>
        <button id="hide-block" type="button" className="column large-6 tiny">Hide</button>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('drawing_container'));

export default test
