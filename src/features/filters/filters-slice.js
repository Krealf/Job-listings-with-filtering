import {createSlice} from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "@@filter",
  initialState: [],
  reducers: {
    addFilter: (state, action) => {
      if (!state.includes(action.filter)) {
        state.push(action.payload)
      }
    },
    removeFilter: (state, action) => {
      return state.filter(item => item !== action.payload)
    },
    clearFilter: () => {
      return []
    }
  }
})

export const {addFilter, removeFilter, clearFilter} = filtersSlice.actions
export const filtersReducer = filtersSlice.reducer

export const selectFilters = (state) => (state.filters);