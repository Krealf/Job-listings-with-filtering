import {ADD_FILTER, CLEAR_FILTER, REMOVE_FILTER} from "./filters-actions.js";

export const filtersReducer = (state = [], action) => {
  switch (action.type) {
    case (REMOVE_FILTER): {
      return state.filter(item => item !== action.filter)
    }

    case (ADD_FILTER): {
      if (!state.includes(action.filter)) return [...state, action.filter]

      return state;
    }

    case (CLEAR_FILTER): {
      return [];
    }

    default: {
      return state
    }
  }
}