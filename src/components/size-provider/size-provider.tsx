"use client";
//must be removed from the code 
import { sizes } from "@/src/utility";
import { useEffect, useReducer, useState, createContext } from "react";

const createSizesState = sizes.generateDeviceStatus();
export const SizeContext = createContext(createSizesState());


const createSizeState = sizes.generateDeviceStatus();

const reducer = (pervState: ReturnType<typeof createSizeState>) =>
  createSizeState();

const SizeProvider = function ({ children }: { children: React.ReactNode }) {
  const [media, resizeDispatch] = useReducer(reducer, null, createSizeState);

  const [countNumber, count] = useState(0);

  useEffect(() => {
    window.onresize = () => {
      count((countNumber) => ++countNumber);
    };

    return () => {
      window.onresize = null;
    };
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      resizeDispatch();
    }, 200);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [countNumber]);

  return <SizeContext.Provider value={media}>{children}</SizeContext.Provider>;
};

export default SizeProvider;
