import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

import App from "./app/App";

const store = configureStore();
const InitialApp: React.StatelessComponent<any> = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<InitialApp />, document.querySelector("#root"));
