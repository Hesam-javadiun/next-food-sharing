import Link from "next/link";
import Image from "next/image";
import imageSource from "@/assets/logo.png";

const Header = function () {
  return (
    <header>
      <li>
        <Link href="/">
          <Image
            src={imageSource.src}
            alt={"food community logo"}
            width={imageSource.width}
            height={imageSource.height}
          ></Image>
          Food Reservation
        </Link>
      </li>
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
