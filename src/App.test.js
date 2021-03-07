import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import store from "./redux/store";
import App from "./App";

test("renders learn react link", () => {
  render(<BrowserRouter><Provider store={store}><App /></Provider></BrowserRouter>);
});
