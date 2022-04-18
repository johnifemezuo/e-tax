import { useAtom } from "jotai";
import React from "react";
import shoe from "../../public/img/shoe.png";
import Label from "../Element/Label";
import ImgLineIcon from "../icons/Svg/ImgLineIcon";
import Tooltip from "../ToolTip/Tooltip";
import {addAssets} from "../../stores/siteAtom"

function ProductImagesUpload() {
   const [openAsset, setOpenAsset] = useAtom(addAssets)

  function uploadContent() {
    // experimental code
    setOpenAsset(true)
  }

  return (
    <>
      <div className="dark:text-gray-300 ">
        {/* The header container */}
        <div className="flex items-center space-x-2 dark:text-gray-300">
          <Label>Product Images</Label>
          <Tooltip toolTipText="you can drap and drop or can browse from file." />
        </div>
        {/* The Upload box container */}
        <div className="mt-2">
          <div className="grid h-[350px] w-full grid-cols-11 gap-4">
            {/* The show image Container*/}
            {/* <div className="col-span-4 flex cursor-pointer items-center justify-center rounded border-2 border-dashed bg-gray-50 p-2.5 transition-all hover:border-gray-400 dark:border dark:border-gray-500 dark:bg-transparent">
              <img src={shoe.src} alt="" className="w-36" />
            </div> */}
            {/* The upload image */}
            <div
              onClick={uploadContent}
              className="col-span-4 flex cursor-pointer flex-col items-center justify-center gap-2 rounded border-2 border-dashed p-2.5 text-center text-sm transition-all hover:border-gray-400 dark:border-gray-500"
            >
              <ImgLineIcon />
              <div className="text-lg">
                <p> drop your images here, or select</p>
                <p className="text-lightBlue cursor-pointer font-semibold dark:text-blue-50">
                  click to browse
                </p>
              </div>
            </div>
            <div className="col-span-4 flex cursor-pointer flex-col items-center justify-center gap-2 rounded border-2 border-dashed p-2.5 text-center text-sm transition-all hover:border-gray-400 dark:border-gray-500">
              <ImgLineIcon />
            </div>
            {/* Other upload */}
            <div className="col-span-3 grid gap-y-2">
              <div className="flex cursor-pointer flex-col items-center justify-center gap-y-2 rounded border-2 border-dashed p-1.5 text-center text-xs transition-all hover:border-gray-400 dark:border-gray-500">
                <ImgLineIcon />
                {/* <p className="mx-4 text-base ">
                  drop your images here, or select{" "}
                  <a className="text-lightBlue cursor-pointer font-semibold dark:text-blue-50">
                    click to browse
                  </a>
                </p> */}
              </div>

              <div className="flex cursor-pointer flex-col items-center justify-center gap-y-2 rounded border-2 border-dashed p-1.5 text-center text-xs transition-all hover:border-gray-400 dark:border-gray-500">
                <ImgLineIcon />
              </div>
            </div>
          </div>

          {/* The image info */}
          <p className="mb-8 mt-4 text-lg text-gray-500">
            Please add the images according the sizes and dimensions specified
            (1200* 800)
          </p>
        </div>
      </div>
    </>
  );
}

export default ProductImagesUpload;
