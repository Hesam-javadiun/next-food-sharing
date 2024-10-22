import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type GridContainerProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

const GridContainer = function <tagType extends ElementType>(
  props: GridContainerProps<tagType>
) {
  const { as, children, className, containerProps } = props;
  const Component = as ?? "ul";
  return (
    <Component
      {...containerProps}
      className={`grid grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] grid-rows-[auto] gap-20  ${
        className ?? ""
      }`}
    >
      {children}
    </Component>
  );
};

export default GridContainer;

// .container {
//   width: min(100%, 90rem);
//   margin: auto;
//   display: grid;
//   grid-template-columns: repeat(auto-fit ,minmax( 20rem,1fr));
//   gap: 5rem;
//   grid-template-rows: auto ;
//   overflow-y: auto;
//   list-style: none;
// }
