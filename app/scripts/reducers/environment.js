import * as types from "../constants/ActionTypes";

const initialState = {
    type: types.HIDE
};

export default function environment(state = initialState, action) {
    switch(action.type) {
        case types.HIDE:
            return Object.assign({}, state, {
                type: types.HIDE
            });
        case types.SHOW:
            return Object.assign({}, state, {
                type: types.SHOW
            });
        default:
              return state;
    }
}
