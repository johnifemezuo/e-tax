import React from "react";
import ButtonDark from "../UI/Button/ButtonDark";
import ButtonInfo from "../UI/Button/ButtonInfo"

function Pagination() {
  return (
    <div className="flex justify-between my-4">
      <div>
        <ButtonDark className="" isloading={false}>
          Next
        </ButtonDark>
      </div>

      <div>
        <ButtonInfo className="" isloading={false}>
          Previous
        </ButtonInfo>
      </div>
    </div>
  );
}

export default Pagination;
