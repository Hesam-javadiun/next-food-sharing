import type { ReactNode } from "react";

const ShareMealLayout = function ({children} : {children: ReactNode}) {
  return (
    <div>
      <h1>Share Meals Layout Component</h1>
      {children}
    </div>
  );
};

export default ShareMealLayout
