import React from "react";
import Label from "../../Element/Label";
import Filter from "../Filter/Filter";
import Search from "../Search/Search";

function SearchAndFilter() {
  return (
    <div className="flex space-x-12 items-center">
      <div className="w-[85%]	sm:w-full">
        <Search />
      </div>
      <div className="sm:w-full flex mt-8 justify-end">
        <Filter />
      </div>
    </div>
  );
}

export default SearchAndFilter;
