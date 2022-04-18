import React from "react";

function PlanButton(props) {
  return (
    <>
      <button
        className={`rounded-md px-3 py-2 capitalize ${
          props.bgColor || "bg-transparent"
        } ${props.border || "border-none"}  ${props.textColor}`}>
        {props.value}
      </button>
    </>
  );
}

export default PlanButton;
