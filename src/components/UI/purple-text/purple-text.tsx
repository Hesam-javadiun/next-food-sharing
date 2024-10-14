import type { ReactNode } from "react";

type PurpleTextProps = {
  children: ReactNode;
};

const PurpleText = function ({ children }: PurpleTextProps) {
  return (
    <span className="bg-gradient-to-r from-purple-color to-purple-light-color bg-clip-text text-transparent">
      {children}
    </span>
  );
};

export default PurpleText;
