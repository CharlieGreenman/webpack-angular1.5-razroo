import * as types from "../constants/ActionTypes";

export function showBlock(show) {
    return {
        type: types.SHOW,
        show: true,
        show
    };
}

export function hideBlock(hide) {
    return {
        type: types.HIDE,
        show: false,
        hide
    };
}
