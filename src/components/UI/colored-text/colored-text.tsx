import classes from "./colored-text.module.css";

import type { ReactNode } from "react";

// todo
// add the tag you want render as 
// add test 
// add tailwind 
type ColoredTextProps = {
  children: ReactNode;
  className?: string;
};

const ColoredText = function ({ children, className = "" }: ColoredTextProps) {
  return (
    <span className={`${classes.typography} ${className}`}>{children}</span>
  );
};

export default ColoredText;
