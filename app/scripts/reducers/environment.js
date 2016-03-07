import * as types from "../constants/ActionTypes";

const initialState = {
    type: types.SHOW
};

export default function environment(state = initialState, action) {
  console.log(action);
    switch(action.type) {
        case types.HIDE:
            return Object.assign({}, state, {
                hide: action.hide
            });
        case types.SHOW:
            return Object.assign({}, state, {
                show: action.show
            });
        default:
              return state;
    }
}
