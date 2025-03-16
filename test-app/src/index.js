// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./i18n"; // Import the i18n configuration
import store from "./store";
import "./output.css";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
