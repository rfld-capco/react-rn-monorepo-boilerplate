import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import Main from "./components/Main";
import { Route, BrowserRouter } from "react-router-dom";
import configureStore from "./redux/store/configureStore";
import "./index.css";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route path="/" exact component={Main} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
