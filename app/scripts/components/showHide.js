import React, {Component, PropTypes} from "react";
import { connect } from "react-redux";
import {showBlock, hideBlock} from "../actions/showHide.js"
require("../../scss/core.scss");

class Form extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.hideBlock = this.hideBlock.bind(this);
    this.showBlock = this.showBlock.bind(this);
    this.renderColorBlock = this.renderColorBlock.bind(this);
  }
  componentWillMount(){
    const{dispatch} = this.props;
    dispatch(showBlock);
  }
  handleClick(e){
    console.log("click");
    //was turning up as undefined
    //solved by realizing have to use connect
    //https://github.com/reactjs/redux/issues/916
    const{dispatch} = this.props;
    dispatch(showBlock());
    this.renderColorBlock();
    console.log(dispatch(showBlock));
  }
  hideBlock(){
    const{dispatch} = this.props;
    dispatch(hideBlock());
    console.log(dispatch(hideBlock));
  }
  showBlock(){
    const{dispatch} = this.props;
    dispatch(showBlock());
    console.log(dispatch(showBlock));
    // this.renderColorBlock();
  }
  renderColorBlock(){
    const{environment, dispatch} = this.props;
    console.log("cur environment" + JSON.stringify(environment));
    console.log("show environment" + environment.show);
    if(environment.show === true){
        return(
          <div className = "works">
            <button id="show-block" type="button" className="show-hide-button" onClick={this.showBlock}>show</button>
            <button id="hide-block" type="button" className="show-hide-button" onClick={this.hideBlock}>Hide</button>
            <div id = "color-block">Color Block</div>
          </div>
        );
    }
    return(
      <div className = "works">
        <button id="show-block" type="button" className="show-hide-button" onClick={this.showBlock}>show</button>
        <button id="hide-block" type="button" className="show-hide-button" onClick={this.hideBlock}>Hide</button>
      </div>
    );
  }
    render() {
      const {dispatch} = this.props;
      return(
        <div>
        {this.renderColorBlock()}
        </div>
      );
    }
}
function mapStateToProps(state) {
  const {environment} = state;
  return{
    environment
  }
}

export default connect(mapStateToProps)(Form);
