import React from "react";
import AddSizeAndProductDate from "../CreateContent/AddSizeAndProductDate";
import ProductImagesUpload from "../CreateContent/ProductImagesUpload";
import HeaderXl from "../Element/HeaderXl";
import ProductInfo from "../ProductInfo/ProductInfo";
import ButtonInfo from "../UI/Button/ButtonInfo"

function CreateContent() {
  return (
    <div className="mt-28 max-w-full">
      <div className="mt-8 flex justify-between">
        <HeaderXl>Add Product</HeaderXl>
        {/* <Button>Reset</Button> */}
      </div>
      <div className=" mt-16  rounded-lg border bg-white p-12">
        <ProductInfo />
        <ProductImagesUpload />
        <AddSizeAndProductDate />
      </div>
      <div className="mt-8 flex flex-row-reverse">
        <ButtonInfo>Save Product</ButtonInfo>
      </div>
    </div>
  );
}

export default CreateContent;
