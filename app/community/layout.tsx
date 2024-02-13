import type { ReactNode } from "react";

const CommunityLayout = function ({children} : {children: ReactNode}) {
  return (
    <div>
      <h1>Community Layout Component</h1>
      {children}
    </div>
  );
};

export default CommunityLayout
