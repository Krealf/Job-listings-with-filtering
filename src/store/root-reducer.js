import {combineReducers} from "redux";

import {positionReducer} from "./positions/position-reducer.js";
import {filtersReducer} from "./filters/filters-reducer.js";

export const rootReducer = combineReducers({
  positions: positionReducer,
  filters: filtersReducer,
})