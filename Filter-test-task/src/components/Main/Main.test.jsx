import React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { render, screen, fireEvent } from "@testing-library/react";
import Main from "./Main";
import { getAllProducts } from "./Main.slice";

jest.mock("./Main.slice", () => ({
  ...jest.requireActual("./Main.slice"),
  getAllProducts: jest.fn(() => ({ type: "getAllProducts" })),
}));

const mockStore = configureMockStore([]);
let store;

describe("Main Component", () => {
  beforeEach(() => {
    store = mockStore({
      products: {
        products: [
          {
            id: 1,
            name: "Nike Shoes",
            category: "Footwear",
            brand: "Nike",
            price: 100,
            rating: 4,
          },
          {
            id: 2,
            name: "Apple iPhone",
            category: "Electronics",
            brand: "Apple",
            price: 999,
            rating: 5,
          },
        ],
        loading: false,
        error: null,
      },
    });
    store.dispatch = jest.fn();
  });

  it("should dispatch getAllProducts on mount", () => {
    render(
      <Provider store={store}>
        <Main />
      </Provider>
    );
    expect(getAllProducts).toHaveBeenCalled();
  });

  it("should show loading spinner when loading", () => {
    store = mockStore({
      products: { loading: true, products: [], error: null },
    });
    render(
      <Provider store={store}>
        <Main />
      </Provider>
    );
    expect(screen.getByTestId("spinner")).toBeInTheDocument();
  });

  it("should display products after loading", () => {
    render(
      <Provider store={store}>
        <Main />
      </Provider>
    );
    expect(screen.getByText("Nike Shoes")).toBeInTheDocument();
  });

  it("should filter products by category", () => {
    render(
      <Provider store={store}>
        <Main />
      </Provider>
    );
    fireEvent.change(screen.getByLabelText("Category"), {
      target: { value: "Electronics" },
    });
    expect(screen.queryByText("Nike Shoes")).not.toBeInTheDocument();
  });

  it("should filter products by brand", () => {
    render(
      <Provider store={store}>
        <Main />
      </Provider>
    );
    fireEvent.change(screen.getByLabelText("Brand"), {
      target: { value: "Nike" },
    });
    expect(screen.queryByText("Apple iPhone")).not.toBeInTheDocument();
  });

  it("should show no products found message if no products match filters", () => {
    render(
      <Provider store={store}>
        <Main />
      </Provider>
    );
    fireEvent.change(screen.getByLabelText("Category"), {
      target: { value: "Clothing" },
    });
    expect(
      screen.getByText("No products found with the selected filters.")
    ).toBeInTheDocument();
  });
});
