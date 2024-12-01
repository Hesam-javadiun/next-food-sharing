import { it, test, expect, afterEach } from "vitest";
import "@testing-library/jest-dom/vitest";
import { screen, render, cleanup } from "@testing-library/react";
import Input from "./input";

afterEach(cleanup);

it("should render input tag", () => {
  render(<Input as="input" label="test" name="test-name" />);

  const inputElement = screen.getByRole("textbox");

  expect(inputElement).toBeInTheDocument();
});

it("should render label tag if we provide a name for input", () => {
  render(<Input as="input" label="test" name="test-name" />);

  const labelElement = screen.getByText("test");
  expect(labelElement).toBeInTheDocument();
});

it("should render textarea if as prop provided with textarea", () => {
  render(<Input as="input" label="test" name="test-name" />);

  const inputElement = screen.getByRole("textbox");

  expect(inputElement).toBeInTheDocument();
});