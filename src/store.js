import {combineReducers, configureStore} from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import {persistReducer, persistStore} from 'redux-persist'

import {filtersReducer} from "./features/filters/filters-slice.js";
import {positionReducer} from "./features/positions/position-slice.js";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE, REGISTER,
  REHYDRATE
} from "redux-persist/es/constants";

const rootReducer = combineReducers({
  filters: filtersReducer,
  positions: positionReducer,
})

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  })
})

export const persistor = persistStore(store)