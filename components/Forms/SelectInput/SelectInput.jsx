import React, { useState, useRef, useEffect } from "react";
import ChevronDown from "../../icons/Svg/ChevronDown";
import DeleteX from "../../icons/Svg/DeleteX";
import SizeValue from "./SizeValue";

function SelectInput() {
  const [inputValues, setInputValues] = useState({
    items: ["EU-44", "EU-66"],
    addItem: "",
  });

  // function handleInput(e) {
  //   setInputValues({
  //     addItem: e.target.value,
  //   });
  // }
  const inputValue = useRef();

  function addSizes(e) {
    e.preventDefault();

    const newItem = inputValues.addItem;
    // if (newItem == "") {
    //   const newItems = [...inputValues.items];
    //   // setInputValues({
    //   //   items: newItems,
    //   //   // addItem: "",
    //   // });
    const newItems = [...inputValues.items, inputValue.current.value];
    setInputValues({ items: [newItems] ,addItem:''});
    console.log('newItem');
  // }
  }

  return (
    <div className="relative mt-2">
      <form
        onSubmit={addSizes}
        id="size-adding-form"
        className="flex w-full items-center  rounded border p-4 dark:border-gray-600"
      >
        <input
          type="text"
          placeholder="EU-44"
          className={`w-full bg-inherit outline-none dark:text-gray-300`}
          ref={inputValue}
        />
        <button
          type="submit"
          className={`text-lightBlue font-semibold hover:text-blue-500/50`}
        >
          Add
        </button>
      </form>

      <div className="mt-4 grid grid-cols-3 gap-4">
        <SizeValue items={inputValues.items} />
      </div>
    </div>
  );
}

export default SelectInput;
