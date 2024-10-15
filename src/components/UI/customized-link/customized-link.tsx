import React from "react";
import Link from "next/link";
import type { LinkProps } from "next/link";
import classes from "./customized-link.module.css";
//todo
// must be removed

type CustomizedLinkProps = React.HTMLAttributes<HTMLAnchorElement> &
  LinkProps & {
    isBackgroundColorFilled?: boolean;
  };

const CustomizedLink = function ({
  children,
  isBackgroundColorFilled = false,
  ...rest
}: CustomizedLinkProps) {
  const anchorProperties = {
    ...rest,
    className: `${
      isBackgroundColorFilled ? classes.bgFilled : classes.textFilled
    } ${rest.className}`,
  };

  return <Link {...anchorProperties}>{children}</Link>;
};

export default CustomizedLink;
