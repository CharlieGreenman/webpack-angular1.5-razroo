import * as types from '../constants/ActionTypes';

export default function environment(state = initialState, action) {
}

const initialState = {
    type: type.HIDE
};

export default function environment(state = initialState, action) {
    switch(action.type) {
        case types.HIDE:
            return Object.assign({}, state, {
                type: type.HIDE
            });
        case types.SHOW:
            return Object.assign({}, state, {
                type: type.SHOW
            });

    }
}
