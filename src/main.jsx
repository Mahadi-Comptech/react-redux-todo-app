import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./redux/userReducer";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";

const store = configureStore({
  reducer: {
    //reducers from slices goes here
    //users
    users: userReducer,
  },
});


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
