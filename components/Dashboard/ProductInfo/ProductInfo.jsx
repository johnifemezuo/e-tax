import React from "react";
import Label from "../Element/Label";
import Input from "../Forms/Input/Input";
import InputSelect from "../Forms/InputSelect";
import Tooltip from "../ToolTip/Tooltip";

function ProductInfo() {
  return (
    <div className="mt-12">
      <div className="grid w-full grid-cols-3 justify-between gap-4">
        <div>
          <Label>Product Name</Label>
          <Input />
        </div>
        <div className="inline-block w-full">
          <Label>Category</Label>
          <InputSelect />
        </div>
        <div className="inline-block w-full">
          <Label>Gender</Label>
          <InputSelect />
        </div>
      </div>
      
    </div>
  );
}

export default ProductInfo;
