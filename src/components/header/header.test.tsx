import { it, expect, vi } from "vitest";
import { screen, render} from "@testing-library/react";
import Header from "./header";
//usePathName ro mock konam;

vi.mock("next/navigation", () => {
  return {
    usePathname: () => {
      return "/";
    },
  };
});

render(<Header />);

it("should renders a nav and links tag markup ", () => {
  const navEl = screen.getByRole("navigation");
  const anchorEl = screen.getAllByRole("link");

  expect(anchorEl).toBeDefined();
  expect(navEl).toBeDefined();
});

it("should renders application icon with correct alt", () => {
  const imgEl = screen.getByAltText(/food community logo/i);

  expect(imgEl).toBeDefined();
});

it(`should renders links with with '/', '/meals' and '/community'  `, () => {
  const links = ['/', "/meals", "/community"];
  const anchorEls = screen.getAllByRole("link") as HTMLAnchorElement[];
  anchorEls.forEach((anchor, index) => {
    console.log(anchor.href, '*');
    expect(anchor.href).toMatch(links[index]);
  });
});
