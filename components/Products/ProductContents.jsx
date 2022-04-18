import React from "react";
import ButtonInfo from "../UI/Button/ButtonInfo";
import AddIcon from "../icons/Svg/AddIcon";
import Button from "../UI/Button/Button";
import ArrowBackIcon from "../icons/Svg/ArrowBackIcon";
import DashboardListProduct from "../ListItems/DashboardListProduct";
import ProductListed from "./ProductListed";
import SearchAndFilter from "../UI/SearchAndFilter/SearchAndFilter";

function ProductContents() {
// const [openCreateContent, setOpenCreateContent] = useAtom(CreateContent)

  function createNewContent() {
    alert('hi')
  }


  return (
    <div>
      <div className=" flex items-center justify-between py-4">
        <div className="space-y-4">
          <Button customStyle="space-x-3">
            <ArrowBackIcon /> <span className="ml-2">Back Up</span>
          </Button>
          <div className="mt-6">
            <h1 className="dark:darkTheme-text theme-transition mt-6 text-4xl font-semibold">
              Trowsers
            </h1>

            <h3 className="mt-2 text-xl text-gray-400 ">
              You have{" "}
              <span className="mx-2 inline-block rounded-full bg-blue-500/50 py-1 px-3 font-semibold text-gray-100">
                2
              </span>{" "}
              enteries
            </h3>
          </div>
        </div>

          <ButtonInfo click={createNewContent} className="flex">
            <AddIcon />
            Create New Entry
          </ButtonInfo>
      </div>

      <div className="mt-12 ">
        <div>
          <SearchAndFilter />
        </div>
        <ProductListed />
        {/* <DashboardListProduct /> */}
      </div>
    </div>
  );
}

export default ProductContents;
