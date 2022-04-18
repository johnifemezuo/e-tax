import React, { useEffect, useRef } from "react";
import ImgIcon from "../icons/Svg/ImgIcon";
import CancelIcon from "../icons/Svg/CancelIcon";
import ButtonInfo from "../UI/Button/ButtonInfo";
import Button from "../UI/Button/Button";
import { useAtom } from "jotai";
import { addAssets } from "../../stores/siteAtom";
import UploadIcon from "../icons/Svg/UploadIcon";
import ImageCard from "../Cards/CardItems/ImageCard";
import SearchIcon from "../icons/Svg/SearchIcon";
import AddIcon from "../icons/Svg/AddIcon";

function AddingAssert() {
  const [openAsset, setOpenAsset] = useAtom(addAssets);
  function closeAddAsset() {
    setOpenAsset(false);
  }

  // import images from file logic
  const inputFile = useRef(null);
  const uploadImages = () => {
    inputFile.current.click();
    inputFile.current.onchange = (_) => {
      let files = Array.from(inputFile.current.files);
      console.log(files);
    };
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 bottom-0 grid h-screen w-full place-content-center rounded-md bg-black/20 ${
        openAsset ? "block" : "hidden"
      }`}
    >
      <main className="m-auto w-full overflow-hidden rounded-md shadow-lg">
        <div className="items-center flex justify-between border-b bg-gray-100  px-6 py-4">
          <h4 className="text-lg font-semibold capitalize">All Images</h4>
          <form action="">
            <div className="flex items-center space-x-2">
              <div className="flex w-[500px] space-x-2 rounded-md border  bg-white/70 p-2 text-gray-500">
                <SearchIcon />
                <input type="text" className=" w-full pl-1" />
              </div>
              <ButtonInfo>Search</ButtonInfo>
            </div>
          </form>
          <span
            onClick={closeAddAsset}
            className="bg-gra-100 text-gray-4 rounded-md border border-gray-300 bg-gray-50 p-2 transition hover:hover:bg-gray-100 hover:text-red-400"
          >
            <CancelIcon />
          </span>
        </div>

        <div className=" w-full  bg-white py-8 px-6">
          <div className="max-h-[500px]  overflow-y-auto   rounded-md border border-dashed border-gray-400 bg-gray-100 p-8 ">
            <div className=" mb-4 flex items-center space-x-4">
              <p className="text-lg text-gray-600">
                {" "}
                1 assert ready to delete{" "}
              </p>
              <button className="rounded-lg border border-red-400 bg-red-200/30 px-3 py-1.5 text-sm text-red-400  transition-all hover:bg-white">
                <span>Delete</span>
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <ImageCard />
              <ImageCard />
              <ImageCard />
              <ImageCard />
              <ImageCard />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between border-t  bg-gray-100 p-4 px-6">
          <Button click={closeAddAsset}>Cancel </Button>
          <div className="flex space-x-4">
            <Button click={uploadImages}>
              <input
                type="file"
                id="file"
                ref={inputFile}
                style={{ display: "none" }}
              />
              <span className="flex text-blue-500">
                <AddIcon /> Add Image{" "}
              </span>
            </Button>
            <ButtonInfo>Save image </ButtonInfo>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AddingAssert;

{
  /* <span className="text-lightBlue ml-12">
  <ImgIcon />
</span>
<p className="my-2 text-center text-lg font-semibold text-gray-500">
  Drag & Drop here or
</p>
<div>
  <ButtonInfo className="flex space-x-3" click={uploadImages}>
    <input
      type="file"
      id="file"
      ref={inputFile}
      style={{ display: "none" }}
    />
    <span>Browse files</span>
    <UploadIcon />
  </ButtonInfo>
</div> */
}
