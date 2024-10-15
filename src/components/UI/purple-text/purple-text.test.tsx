import { it, expect, afterEach } from "vitest";
import "@testing-library/jest-dom/vitest";
import { render, screen, cleanup } from "@testing-library/react";
import PurpleText from "./purple-text";

afterEach(cleanup);
it("should render span element with children in the dom", () => {
  render(<PurpleText>{"test"}</PurpleText>);

  const spanElement = screen.getByText(/test/i);

  expect(spanElement).toBeInTheDocument();
  expect(spanElement).toHaveTextContent(/test/i);
});

it("should have purple text color with no props", () => {

  render(<PurpleText>{"test"}</PurpleText>);

  const spanElement = screen.getByText(/test/i);

  expect(spanElement).not.toHaveClass("custom-purple-background");
});

it("should have purple background color with isBackgroundColorFilled prop", () => {

  render(<PurpleText isBackgroundColorFilled>{"test"}</PurpleText>);

  const spanElement = screen.getByText(/test/i);

  expect(spanElement).toHaveClass("custom-purple-background");
});
