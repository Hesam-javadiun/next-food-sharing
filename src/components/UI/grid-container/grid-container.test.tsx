import { it, expect } from "vitest";
import GridContainer from "./grid-container";
import "@testing-library/jest-dom/vitest";
import { screen, render } from "@testing-library/react";

render(
  <GridContainer>
    <li>{"test grid item"}</li>
    <li>{"test grid item"}</li>
    <li>{"test grid item"}</li>
    <li>{"test grid item"}</li>
  </GridContainer>
);

it("should render a ul element as the default grid container ", () => {
    const gridContainerEl = screen.getByRole('list')
    expect(gridContainerEl).toBeInTheDocument();
});


it("should have the grid class ", () => {
    const gridContainerEl = screen.getByRole('list');
    expect(gridContainerEl).toHaveClass('grid');
});

