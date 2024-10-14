import type { ComponentPropsWithoutRef, ReactNode, ElementType } from "react";

type TypographyProps<T extends ElementType> = {
  children: ReactNode;
  as?: T;
} & ComponentPropsWithoutRef<T>;

const Typography = function <C extends ElementType>({
  children,
  as,
  ...restOfProps
}: TypographyProps<C>) {
  const TypographyComponent = as || "p";

  const { className, ...attributes } = restOfProps;
  return (
    <TypographyComponent className={` ${className}`} {...attributes}>
      {children}
    </TypographyComponent>
  );
};

export default Typography;
