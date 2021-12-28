import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

test("render Header", () => {
  render(<Header title="Hello Test"></Header>);

  expect(screen.getByText("Hello Test")).toBeTruthy();
});
