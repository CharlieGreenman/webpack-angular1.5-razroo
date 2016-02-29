import {combineReducers} from "redux";

import environment from "../reducers/environment.js";

const rootReducer = combineReducers({
  environment
});

export default rootReducer;
