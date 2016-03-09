import * as types from "../constants/ActionTypes";

const initialState = {
    show: false
};

export default function environment(state = initialState, action) {
    switch(action.type) {
        case types.HIDE:
            return Object.assign({}, state, {
                show: false
            });
        case types.SHOW:
            return Object.assign({}, state, {
                show: true
            });
        default:
              return state;
    }
}
