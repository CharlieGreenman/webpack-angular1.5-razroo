import * as types from '../constants/ActionTypes';

function initEnvironment(init) {
    return {
        type: types.SHOW,
        init
    };
}
