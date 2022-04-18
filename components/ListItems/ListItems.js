import React from "react";
import Pagination from "../Pagination/Pagination";
import SearchAndFilter from "../UI/SearchAndFilter/SearchAndFilter"
import ActionDropdown from "./ActionDropdown";

function ListItems({ items = [] }) {
  return (
    <section className="">
      <div>
        <SearchAndFilter />
      </div>
      <div className="flex justify-between gap-2 mt-2 border bg-gray-50 px-4 text-left text-xs font-semibold text-gray-600 first-letter:uppercase dark:border-gray-600 dark:bg-gray-500 dark:text-gray-200 sm:p-6 sm:text-xl">
        <div className="w-full "> Images</div>
        <div className="w-full "> Name</div>
        <div className="hidden w-full   sm:block">Category</div>
        <div className="hidden w-full   sm:block">Description</div>
        <div className="hidden w-full   sm:block">Gender</div>

        <div className="w-full ">Price</div>
        <div className="w-full ">Sizes</div>
        <div className="hidden w-full   sm:block"> Date</div>
        <div className="w-full ">Options</div>
      </div>
      {items?.map((item, index) => {
        return (
          <div
            key={index}
            className=" flex items-center border-b  border-zinc-50 bg-white text-left text-xs font-normal shadow dark:bg-gray-600 dark:text-gray-300 sm:px-3 sm:py-2 sm:text-xl"
          >
            <div className="w-full py-2 px-2">
              <div className="  inline-block rounded-full border">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item?.img}
                  className="h-16 w-16 object-contain p-1  "
                  alt="logo"
                />
              </div>
            </div>
            <div className=" w-full ">{item?.name}</div>
            <div className=" hidden w-full sm:block">{item?.category}</div>
            <div className=" w-full">{item?.price}</div>
            <div className=" w-full">{item?.stock}</div>
            <div className=" hidden w-full sm:block">{item?.sold}</div>
            <div className=" hidden w-full sm:block">{item?.revenew}</div>
            <div className=" w-full cursor-pointer text-left">
              <ActionDropdown>{item?.actions}</ActionDropdown>
            </div>
          </div>
        );
      })}
      <Pagination />
    </section>
  );
}

export default ListItems;
