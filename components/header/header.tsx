"use client";

import Link from "next/link";
import Image from "next/image";
import imageSource from "@/assets/logo.png";
import classes from "./header.module.css";
import { usePathname } from "next/navigation";
//how to make an string with '/'

const isActive = (route: string, path: string) => {
  return path.startsWith(route);
};

const Header = function () {
  const path = usePathname();

  return (
    <header className={classes.headerContainer}>
      <Link href="/" className={classes.logoContainer}>
        <Image
          src={imageSource.src}
          alt={"food community logo"}
          width={imageSource.width}
          height={imageSource.height}
          priority
        ></Image>
        Food Reservation
      </Link>
      <nav>
        <ul>
          <li>
            <Link
              href="/meals"
              className={isActive("/meals", path) ? classes.active : ""}
            >
              Browse Meals
            </Link>
          </li>
          <li>
            <Link
              href="/community"
              className={isActive("/meals", path) ? classes.active : ""}
            >
              Foodies Community
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
