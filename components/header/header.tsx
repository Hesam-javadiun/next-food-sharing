import Link from "next/link";
import Image from "next/image";
import imageSource from "@/assets/logo.png";
import classes from "./header.module.css";

const Header = function () {
  
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
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
