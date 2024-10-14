"use client";

import Link from "next/link";
import Image from "next/image";
import imageSource from "@/assets/logo.png";
// import classes from "./header.module.css";
import { usePathname } from "next/navigation";
import { Typography } from "@/src/components/UI";
const isActive = (route: string, path: string) => {
  return path.startsWith(route);
};

const Header = function () {
  const path = usePathname();

  return (
    <header className="flex justify-around items-center">
      <Link
        href="/"
        className="w-12 h-12 flex gap-4 items-center drop-shadow-md"
      >
        <Image
          src={imageSource.src}
          alt={"food community logo"}
          width={imageSource.width}
          height={imageSource.height}
          priority
        ></Image>
        <Typography className="whitespace-nowrap all-small-caps" as="h1">
          Food Reservation
        </Typography>
      </Link>
      <nav>
        <ul className="flex gap-8">
          <li>
            <Typography>
              <Link
                href="/meals"
                className={isActive("/meals", path) ? "" : ""}
              >
                Browse Meals
              </Link>
            </Typography>
          </li>
          <li>
            <Typography>
              <Link
                href="/community"
                className={isActive("/meals", path) ? "" : ""}
              >
                Foodies Community
              </Link>
            </Typography>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
