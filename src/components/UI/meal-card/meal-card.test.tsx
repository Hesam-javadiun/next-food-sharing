import { it, expect, afterAll, vi } from "vitest";
import "@testing-library/jest-dom/vitest";
import { render, screen, cleanup } from "@testing-library/react";
import MealCard from "./meal-card";
import { ImageProps } from "next/image";

afterAll(cleanup);

vi.mock("next/image", () => ({
  default: (props : ImageProps) => {
    return <img alt={props.alt}></img>;
  },
}));

render(
  <MealCard
    title="test title"
    creator="test creator"
    slug="test slug"
    summary="test summary"
    image="test src"
  />
);

it("should render a image with alt text", () => {
  const image = screen.getByAltText(/test title image/i);

  expect(image).toBeInTheDocument();
});

it("should render a link with an href patten ", () => {
  const anchorEl = screen.getByRole("link");

  expect(anchorEl).toBeInTheDocument();
});
