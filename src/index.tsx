import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import axios from "axios";
import { configureStore } from "./redux/configureStore";
import { Provider } from "react-redux";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
axios.defaults.withCredentials = true;

const store = configureStore();

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
