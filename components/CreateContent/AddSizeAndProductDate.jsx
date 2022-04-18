import React from "react";
import Label from "../Element/Label";
import DateInput from "../Forms/DateInput/DateInput";
import SelectInput from "../Forms/SelectInput/SelectInput";

function AddSizeAndProductDate() {
  return (
    <>
      <div className="mt-6 grid grid-cols-2 gap-2 dark:text-gray-300">
        {/* The Add size Container */}
        <div className="">
          {/* the header text and the svg */}
          <label className="font-semibold capitalize">Add Size</label>
          <SelectInput />
        </div>
        {/* The Product Date container */}
        <DateInput />
      </div>

      <div className="my-6">
        <Label>Description</Label>
        <textarea
          name="Product description"
          placeholder="Enter Text here..."
          form="usrform"
          className="h-[200px] w-full border p-4 active:border-red-300"
        />
      </div>

      {/* {console.log(ProductButton({ name: "suhy" }))} */}
    </>
  );
}

export default AddSizeAndProductDate;
