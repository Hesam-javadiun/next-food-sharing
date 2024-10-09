import { it, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import NotFound from "./not-found";

it("should renders a text with '''the requested URL does not exist''' ", () => {
    
  render(<NotFound />);
  const textElement = screen.getByText(/the requested URL does not exist/i);

  expect(textElement).toBeDefined();
});
