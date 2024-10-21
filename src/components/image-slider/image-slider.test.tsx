import { it, expect, afterEach, vi } from "vitest";
import { screen, render, cleanup, act } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import ImageSlider from "./image-slider";


afterEach(cleanup);


it("should render Images with alt", () => {
  render(<ImageSlider />);

  const images = screen.getAllByRole("img");

  images.forEach((image) => {
    expect(image).toHaveAttribute("alt");
  });
});

it('should show one image to user with z-index 10', () => {
  render(<ImageSlider /> );
  const notShownImages = screen.getAllByTestId('not-shown');
  const shownImage = screen.getByTestId('shown');

  notShownImages.forEach(image => {
    expect(image).toHaveClass('z-0')
  });

  expect(shownImage).toHaveClass('z-10')
});

it('should change th shown image every 5s', () => {
  vi.useFakeTimers();
  render(<ImageSlider /> );
  const shownImage = screen.getByTestId('shown');

  act(() => {
    vi.advanceTimersByTime(5000);
  })

  const shownImageAfter5Sec = screen.getByTestId('shown')
  console.log('shownImageAfter5Sec');
  console.log('shownImage');
  expect(shownImage).not.toEqual(shownImageAfter5Sec)
}); 

