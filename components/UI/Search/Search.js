import React from "react";
import SearchIcon from "../../icons/Svg/SearchIcon";

function Search() {
  return (
    <div>
      <form className="flex  items-center">
        <div className="theme-transition dark:darkThemeBg-border flex w-full items-center rounded-md border border-gray-100 bg-white p-2 text-lg dark:bg-gray-700 dark:text-white ">
          <SearchIcon className="text-gray-400 md:h-5  md:w-6 " />
          <input
            type="text"
            placeholder="Search Here..."
            className="ml-3 bg-transparent w-full  outline-none"
            name="searchInput"
          />
        </div>
      </form>
    </div>
  );
}

export default Search;
