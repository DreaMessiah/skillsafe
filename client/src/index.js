import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'
import Store from "./store/store";

const store = new Store()

export const Context = createContext({
    store: store
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
reportWebVitals()
