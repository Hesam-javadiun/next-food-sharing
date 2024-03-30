"use client";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

import classes from "./image-input.module.css";

type ImageInputProps = Omit<
  React.HTMLAttributes<HTMLInputElement>,
  "type" | "accept" | "onChange" | "id" | "value"
> & {
  name?: string;
};

const ImageInput = function (props: ImageInputProps) {
  const [imageFile, setImageFile] = useState("");

  const onChangeHandler = useCallback((event: any) => {
    event.currentTarget?.value && setImageFile(event.currentTarget.value);
  }, []);

  const adjustedProps = {
    ...props,
    className: `${props.className} ${classes["image-input"]}`,
  };

  useEffect(() => {
    console.log(`image html ref value`, imageFile);
  }, [imageFile]);

  return (
    <div className={classes.container}>
      <div className={classes.box}>
        {imageFile ? (
          <img src={imageFile} alt={"picked image!"} width={'auto'} height={'auto'}></img>
        ) : (
          <div className={classes["empty-box"]}>
            <span>No Image</span>
            <span> picked yet.</span>
          </div>
        )}
        <input
          type="file"
          id="file"
          accept="image/png, image/jpeg"
          onChange={onChangeHandler}
          value={imageFile}
          {...adjustedProps}
        />
      </div>
      <label htmlFor="file" className={classes.container}>Pick an image</label>
    </div>
  );
};

export default ImageInput;
