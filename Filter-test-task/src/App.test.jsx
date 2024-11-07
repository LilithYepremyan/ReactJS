import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";

describe("App component", () => {
  test("renders Main component within Provider", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
});
