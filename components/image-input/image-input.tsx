"use client";
import Image from "next/image";
import { useCallback, useEffect,useRef, useState } from "react";

import classes from "./image-input.module.css";

const EmptyBox = () => (
  <div className={classes["empty-box"]}>
    <span>No Image</span>
    <span>picked yet.</span>
  </div>
);

type ImageInputProps = Omit<
  React.HTMLAttributes<HTMLInputElement>,
  "type" | "accept" | "onChange"
> & {
  name?: string;
  labelText?: string;
};

const ImageInput = function (props: ImageInputProps) {
  const [imageFile, setImageFile] = useState<unknown>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const onChangeHandler = useCallback((event: any) => {
    const imageFile = event.target.files[0];

    const reader = new FileReader();
    reader.onload = (event) => {
      const imageSrc = event.target?.result;
      setImageFile(imageSrc!);
    };
    reader.readAsDataURL(imageFile);
  }, []);

  const buttonClickHandler = useCallback(() => {
    inputRef.current?.click()
  }, []);

  const adjustedProps = {
    ...props,
    className: `${props.className} ${classes["image-input"]}`,
  };

  return (
    <>
      {props.labelText && <label htmlFor={props.id}>Your Image</label>}
      <div className={classes["flex-container"]}>
        <div className={classes.box}>
          {imageFile ? (
            <Image src={imageFile as string} alt={"picked image!"} fill></Image>
          ) : (
            <EmptyBox />
          )}
          <input
            type="file"
            ref={inputRef}
            id={props.id}
            accept="image/png, image/jpeg"
            onChange={onChangeHandler}
            {...adjustedProps}
          />
        </div>
        <button onClick={buttonClickHandler}>Pick an image</button>
      </div>
    </>
  );
};

export default ImageInput;
