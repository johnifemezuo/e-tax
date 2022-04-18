import React from "react";

function Grid({ children, sm, md, lg }) {
  const smClass = `sm:grid-cols-${sm?.toString()}`;
  const mdClass = `md:grid-cols-${md?.toString()}`;
  const lgClass = `lg:grid-cols-${lg?.toString()}`;

  return (
    <div className={`grid  ${smClass}  ${mdClass} ${lgClass} gap-3`}>
      {children}
    </div>
  );
}

export default Grid;
