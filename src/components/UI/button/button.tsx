import type { ReactNode, ComponentPropsWithoutRef } from "react";
import Link, { type LinkProps } from "next/link";

type ButtonHTMLProps = ComponentPropsWithoutRef<"button"> & {
  href?: never;
  children: ReactNode;
};

type AnchorProps = LinkProps &
  ComponentPropsWithoutRef<"a"> & {
    href?: string;
    children: ReactNode;
  };

type ButtonProps = AnchorProps | ButtonHTMLProps;

function isAnchor(componentProps: ButtonProps): componentProps is AnchorProps {
  return "href" in componentProps;
}

const Button = function (props: ButtonProps) {
  if (isAnchor(props)) {
    const { children, ...nextLinkProps } = props;
    return <Link {...nextLinkProps} >{children}</Link>;
  }

  const { children, ...buttonAttributes } = props;
  return <button {...buttonAttributes}>{children}</button>;
};

export default Button;
