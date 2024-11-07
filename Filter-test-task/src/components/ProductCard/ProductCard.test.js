import { render, screen } from "@testing-library/react";
import ProductCard from "./ProductCard";

describe("ProductCard Component", () => {
  const product = {
    name: "Apple iPhone",
    brand: "Apple",
    price: 999,
    imageUrl: "iphone.jpg",
    rating: 4,
  };

  test("renders product details", () => {
    render(<ProductCard product={product} />);
    expect(screen.getByText("Apple iPhone")).toBeInTheDocument();
    expect(screen.getByText("Apple")).toBeInTheDocument();
    expect(screen.getByText("999$")).toBeInTheDocument();
    expect(screen.getByAltText("Apple iPhone")).toHaveAttribute(
      "src",
      "iphone.jpg"
    );
  });
});
