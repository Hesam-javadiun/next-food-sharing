import { it, test, expect, afterEach, vi } from "vitest";
import "@testing-library/jest-dom/vitest";
import { screen, render, cleanup, within } from "@testing-library/react";
import SubmitButton from "./submit-button";
//read this 
//https://github.com/vitest-dev/vitest/discussions/3589
// const mocks = vi.hoisted(() => {
//     return {
//         pending: vi.fn(),
//     }
// })

vi.mock("react-dom", () => {
  return {
    useFormStatus: () => ({
      pending: false,
    }),
  };
});

render(<SubmitButton />);

it("should render a button ", () => {
  const button = screen.getByRole("button");

  expect(button).toBeInTheDocument();
});

it("should render button with type submit", () => {
  const button = screen.getByRole("button");

  expect(button).toHaveAttribute("type", "submit");
});

it('should render "Share Meal" text with pending false', () => {
  const button = screen.getByRole("button");
  const textContent = within(button).getByText("Share Meal");
  expect(textContent).toBeDefined();
});

// it('should render "submitting..." text with pending false', () => {
//   const button = screen.getByRole("button");
//   const textContent = within(button).getByText("submitting..");
//   expect(textContent).toBeDefined();
// });

