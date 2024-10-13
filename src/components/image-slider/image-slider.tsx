"use client";

import classes from "./styles.module.css";
import Image, { type StaticImageData } from "next/image";

import burgerImage from "@/assets/burger.jpg";
import curryImage from "@/assets/curry.jpg";
import dumplingsImage from "@/assets/dumplings.jpg";
import macncheeseImage from "@/assets/macncheese.jpg";
import pizzaImage from "@/assets/pizza.jpg";
import schnitzelImage from "@/assets/schnitzel.jpg";
import tomatoSaladImage from "@/assets/tomato-salad.jpg";
import { useEffect, useState, useLayoutEffect } from "react";

//ToDo 
//add tailwind add test 

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
    <div className={classes.imageContainer}>
      {imageSources.map(({ image, alt } , index) => (
        <Image
          key={image.src}
          src={image.src}
          alt={alt}
          className={`${classes.image} ${imageIndex === index ? classes.active : ''}`}
          width={image.width}
          height={image.height}
        ></Image>
      ))}
    </div>
  );
};

export default ImageSlider;
