import { it, test, expect, afterEach, vi } from "vitest";
import "@testing-library/jest-dom/vitest";
import { screen, render, cleanup } from "@testing-library/react";
import Form, { type ActionFunctionType } from "./form";

vi.mock("react-dom", () => {
  return {
    useFormState: () => [{ message: null }, vi.fn()],
  };
});

const spyAction = vi.fn() as ActionFunctionType;

render(
  <Form action={spyAction} initialState={{ message: null }} aria-label="form">
    <></>
  </Form>
);

it("should renders a form", () => {
  const formElement = screen.getByRole("form");
  screen.debug();
  expect(formElement).toBeInTheDocument();
});

