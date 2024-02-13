import type { ReactNode } from "react";

const MealsDetailsPage = function ({children} : {children: ReactNode}) {
  return (
    <div>
      <h1>Meals Details Layout Component</h1>
      {children}
    </div>
  );
};

export default MealsDetailsPage
