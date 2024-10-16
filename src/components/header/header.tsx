"use client";

import Image from "next/image";
import imageSource from "@/assets/logo.png";
import { usePathname } from "next/navigation";
import { Typography, Button, PurpleText } from "@/src/components/UI";

const isActive = (route: string, path: string) => {
  return path.startsWith(route);
};

const Header = function () {
  const path = usePathname();

  return (
    <header className="flex justify-around items-center mt-4">
      <Button
        href="/"
        className="w-12 h-12 flex gap-4 items-center drop-shadow-md"
      >
        <Image
          src={imageSource.src}
          alt={"food community logo"}
          width={imageSource.width}
          height={imageSource.height}
          priority
          className="custom-image-shadow"
        ></Image>
        <Typography
          className={`hidden md:block whitespace-nowrap all-small-caps tracking-wider custom-text-shadow custom-white-text hover:from-fuchsia-400 hover:to-fuchsia-400`}
          as="h1"
        >
          Food Reservation
        </Typography>
      </Button>
      <nav>
        <ul className="flex gap-4 md:gap-8">
          {[
            { route: "/meals", textContent: "Browse Meals" },
            { route: "/community", textContent: "Foodies Community" },
          ].map(({ route, textContent }) => (
            <li key={route}>
              <Button href={route}>
                <Typography
                  className={`text-[0.8em]  custom-text-shadow custom-white-text hover:from-fuchsia-400 hover:to-fuchsia-400 ${
                    isActive(route, path)
                      ? "from-fuchsia-400 to-fuchsia-400"
                      : ""
                  }`}
                >
                  {textContent}
                </Typography>
              </Button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
