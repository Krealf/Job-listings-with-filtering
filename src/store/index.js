import {createStore} from "redux";
import {rootReducer} from "./root-reducer.js";
import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// Создаём конфиг persist
const persistConfig = {
  key: 'root',
  storage,
  // Указываем какие ключи хотим хранить в storage
  whilelist: ["filters", "positions"],
  // Указываем какие ключи НЕ хотим хранить в storage
  // blacklist: [],
}

// Используем хелпер и создаём persist reducer
const persistedReducer = persistReducer(persistConfig, rootReducer)

// Передаём persistedReducer в createStore
const store = createStore(persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export {store}
export const persistor = persistStore(store)