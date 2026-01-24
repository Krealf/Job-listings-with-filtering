import {combineReducers} from "redux";

import {positionReducer} from "./positions/position-reducer.js";

export const rootReducer = combineReducers({
  positions: positionReducer,
})