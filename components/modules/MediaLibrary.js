import { useAtom } from "jotai";
import React from "react";
import { addAssets } from "../../stores/siteAtom";
import ImageCard from "../Cards/CardItems/ImageCard";
import HeaderXl from "../Element/HeaderXl";
import AddIcon from "../icons/Svg/AddIcon";
import PenIcon from "../icons/Svg/PenIcon";
import ButtonInfo from "../UI/Button/ButtonInfo";
import SearchAndFilter from "../UI/SearchAndFilter/SearchAndFilter";

function MediaLibrary() {
  const [openAsset, setOpenAsset] = useAtom(addAssets);

  function uploadContent() {
    // experimental code
    setOpenAsset(true);
    // new comment --add
  }

  return (
    <div className="mt-28">
      <div className="mb-12 flex items-center justify-between">
        <div className="">
          <HeaderXl>Media Page</HeaderXl>
          <p className="py-3 text-xl">2 Asserts</p>
        </div>
        <ButtonInfo
          click={uploadContent}
          className="bg-lightBlue mt-4 flex cursor-pointer items-center pb-8  text-sm capitalize text-white transition-all "
        >
          <AddIcon />
          <span>Add new asset</span>
        </ButtonInfo>
      </div>

      <div className="">
        <div>
          <SearchAndFilter />
        </div>
        <div className="my-3 mb-4 flex items-center space-x-4">
          <p className="text-lg text-gray-600"> 1 assert ready to delete </p>
          <button className="rounded-lg border border-red-400 bg-red-200/30 px-3 py-1.5 text-sm text-red-400  transition-all hover:bg-white">
            <span>Delete</span>
          </button>
        </div>

        <ImageCard />
      </div>
    </div>
  );
}

export default MediaLibrary;
