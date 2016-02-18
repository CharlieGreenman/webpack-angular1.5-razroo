import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    render() {
        return(
        	<div id = "choose_size_container" className="large-3 center">
            <h6 id="choose_size_header" className="row">choose size</h6>
        <form id="choose_size_form" className="row large-12 medium-12 small-12">
            <label className="column large-6">columns</label>
            <label className="column large-6">rows</label>
            <input type="text" defaultValue={20} id="input-for-columns" className="column large-6" />
            <input type="text" defaultValue={20} id="input-for-rows" className="column large-6" />
            <label className="column large-6">Pixel Size</label>
        <button id="create_grid" type="button" className="column large-6 tiny">Create Grid</button>
        <input type="text" defaultValue={20} id="input-for-pixel-size" className="column large-1 end" />
            </form>
            <div id="need_help" className="row" />
            </div>
        	)
    }
}

ReactDOM.render(<App/>, document.getElementById('drawing_container'));

export default test