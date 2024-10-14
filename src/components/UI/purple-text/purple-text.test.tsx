import { it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import PurpleText from "./purple-text";

render(<PurpleText>{"test"}</PurpleText>);

it("should render span element with children in the dom", () => {
  const spanElement = screen.getByText(/test/i);

  expect(spanElement).toBeInTheDocument();
  expect(spanElement).toHaveTextContent(/test/i)
});

it("should have background clip text", () => {

  const spanElement = screen.getByText(/test/i);
  screen.debug();
  expect(spanElement).toHaveClass('bg-clip-text');
});
