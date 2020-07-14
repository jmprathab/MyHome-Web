import React from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import store from "./redux/store";
import App from "./App";

test("renders learn react link", () => {
  render(<Provider store={store}><App /></Provider>);
});
