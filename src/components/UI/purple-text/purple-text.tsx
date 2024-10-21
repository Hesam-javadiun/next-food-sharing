import type { ReactNode, ComponentPropsWithoutRef } from "react";

type PurpleTextProps = {
  children: ReactNode;
  isBackgroundColorFilled?: boolean;
} & ComponentPropsWithoutRef<"span">;

const PurpleText = function ({
  children,
  isBackgroundColorFilled = false,
  ...spanAttributes
}: PurpleTextProps) {
  return (
    <span
      {...spanAttributes}
      className={`
        ${
          isBackgroundColorFilled
            ? "custom-purple-background "
            : "custom-purple-text"
        } ${spanAttributes.className}`}
    >
      {children}
    </span>
  );
};

export default PurpleText;
