"use client";


import Image, { type StaticImageData } from "next/image";

import burgerImage from "@/assets/burger.jpg";
import curryImage from "@/assets/curry.jpg";
import dumplingsImage from "@/assets/dumplings.jpg";
import macncheeseImage from "@/assets/macncheese.jpg";
import pizzaImage from "@/assets/pizza.jpg";
import schnitzelImage from "@/assets/schnitzel.jpg";
import tomatoSaladImage from "@/assets/tomato-salad.jpg";
import { useEffect, useState } from "react";


const imageSources = [
  { image: burgerImage, alt: "burgerImage" },
  { image: curryImage, alt: "curryImage" },
  { image: dumplingsImage, alt: "dumplingsImage" },
  { image: macncheeseImage, alt: "macncheeseImage" },
  { image: pizzaImage, alt: "pizzaImage" },
  { image: schnitzelImage, alt: "schnitzelImage" },
  { image: tomatoSaladImage, alt: "tomatoSaladImage" },
];

const isLastElement = function (index: number) {
  return imageSources.length === index + 1;
};

const needToShow = function (index: number, shownImageIndex: number) {
  return index === shownImageIndex;
};

const ImageSlider = function () {
  const [imageIndex, setImageIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageIndex((pervIndex) =>
        isLastElement(pervIndex) ? 0 : pervIndex + 1
      );
    }, 5000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);


  return (
    <div className="text-base relative w-full max-w-128 h-full object-cover overflow-hidden custom-box-shadow rounded-md">
      {imageSources.map(({ image, alt }, index) => (
        <Image
          key={image.src}
          src={image.src}
          alt={alt}
          className={`transition-all duration-500 ease-out ${
            needToShow(index, imageIndex)
              ? "z-10 opacity-100 translateX-0 translateY-0 scale-100 rotate-0"
              : "z-0 opacity-0  -translateY-4 scale-110 -rotate-6"
          }`}
          fill
        ></Image>
      ))}
    </div>
  );
};

export default ImageSlider;
