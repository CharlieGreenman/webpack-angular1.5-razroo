import {combineReducers} from "redux";

import environment from "../reducers/environment.js";

export const RootReducer = combineReducers({
  environment
});
