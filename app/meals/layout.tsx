import type { ReactNode } from "react";

const MealsLayout = function ({children} : {children: ReactNode}) {
  return (
    <div>
      <h1>Meals Layout Component</h1>
      {children}
    </div>
  );
};

export default MealsLayout
