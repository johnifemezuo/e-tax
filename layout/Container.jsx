import React, { Children } from "react";

function Container({ children }) {
  return (
    <div className="max-w-screen-l mx-auto bg-transparent px-6 my-12">
      {children}
    </div>
  );
}

export default Container;
