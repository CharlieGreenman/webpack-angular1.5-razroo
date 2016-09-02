import * as types from "../constants/ActionTypes";

const initialState = {
    show: false
};

export default function environment(state = initialState, action) {
   switch(action.type) {
      case types.HIDE:
      case types.SHOW:
          return Object.assign({}, state, {
              show: action.show
          });
      default:
          return state;
    }
 }
