import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type GridItemProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

const GridItem = function <tagType extends ElementType>(
  props: GridItemProps<tagType>
) {
  const { as, children, className, ...attributes } = props;
  const Component = as ?? "li";

  return (
    <Component {...attributes} className={` ${className ?? ""}`}>
      {children}
    </Component>
  );
};

export default GridItem;



// .item {
//   height: 28.25rem;
// }
