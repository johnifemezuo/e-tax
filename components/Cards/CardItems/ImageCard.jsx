import React from 'react'
import CancelIcon from '../../icons/Svg/CancelIcon';
import PenIcon from '../../icons/Svg/PenIcon';

function ImageCard() {
  return (
    <div className="relative min-h-[200px] w-[300px] bg-gray-200 ">
      <div>
        <img
          src="/img/1.jpg"
          className="h-40 w-[100%] object-contain"
          alt="imgs"
        />
        <div className="absolute top-0 flex w-full items-center justify-between p-2 ">
          <input type="checkbox" />
          <span className="rounded-md border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm hover:bg-gray-100 hover:text-red-400 font-semibold">
            <CancelIcon />
          </span>
        </div>
      </div>
      <div className="relative  flex border bg-white">
        <p className="  max-w-[230px] bg-white p-3 text-sm">
          media.istockphoto.com/ y directory is mapped to /api/*. Files in this
          directory are treated as API routes instead of React pages.
        </p>
        <span className="absolute top-0 right-0 m-3 flex rounded-md border border-gray-300 bg-gray-50 p-2 text-xs font-semibold">
          image
        </span>
      </div>
    </div>
  );
}

export default ImageCard