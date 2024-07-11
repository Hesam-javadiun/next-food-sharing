import { sizes } from "@/utility";
import React from "react";
const createSizesState = sizes.generateDeviceStatus();
export const SizeContext = React.createContext(createSizesState());
