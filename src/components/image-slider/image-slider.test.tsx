import { it, expect, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import ImageSlider from "./image-slider";

afterEach(cleanup);
//it should render Image with alt
it("should render Images with alt", () => {
  render(<ImageSlider />);

  const images = screen.getAllByRole("img");

  images.forEach((image) => {
    expect(image).toHaveAttribute("alt");
  });
});
//it should [search for how to test useEffect or state]
//
