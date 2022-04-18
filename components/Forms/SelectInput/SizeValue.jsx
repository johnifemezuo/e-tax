import React from "react";
import DeleteX from "../../icons/Svg/DeleteX";

function SizeValue({items}) {
  const listItems = items.map((item,i) => {
    return (
        <button key={i} className="group relative w-auto rounded-md border py-2 hover:bg-blue-50 dark:border-gray-400">
          <p className="group-hover:font-semibold  group-hover:text-blue-800">
            {item}
          </p>
          <DeleteX />
        </button>
    );
  });
  return <>{listItems}</>;
}

export default SizeValue;
