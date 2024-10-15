import type { ReactNode } from "react";

type PurpleTextProps = {
  children: ReactNode;
  isBackgroundColorFilled?: boolean;
};

const PurpleText = function ({
  children,
  isBackgroundColorFilled = false,
}: PurpleTextProps) {
  return (
    <span
      className={
        isBackgroundColorFilled
          ? "custom-purple-background "
          : "custom-purple-text"
      }
    >
      {children}
    </span>
  );
};

export default PurpleText;
