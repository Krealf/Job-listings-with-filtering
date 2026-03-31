import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Provider} from "react-redux"
import { PersistGate } from 'redux-persist/integration/react'

import './index.css'
import App from './App.jsx'
import {persistor, store} from "./store/index.js";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      {/* Здесь мы можем передать прелоадер*/}
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>,
)
