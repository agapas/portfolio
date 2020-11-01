import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders element with name", () => {
  render(<App />);
  const element = screen.getByText(/agnieszka pas/i);
  expect(element).toBeInTheDocument();
});
