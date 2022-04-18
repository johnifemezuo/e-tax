import React from "react";
import Button from "../Button/Button";
import ButtonDisable from "../Button/ButtonDisable";
import SwitchButton from "../SwitchButton/SwitchButton";

function Notification() {
  return (
    <div className="mt-12 w-full">
      <div className="space-y-12 py-12 ">
        <h1 className="dark:darkTheme-text theme-transition text-4xl font-bold">
          My Notification
        </h1>
        <div>
          <h2 className="dark:darkTheme-text theme-transition text-textgray capitlized w-full text-2xl font-semibold">
            General
          </h2>
          <div className="dark:darkThemeBg-border mt-4 flex items-center justify-between border-b border-gray-100 pb-4">
            <div className="">
              <h3 className="dark:darkTheme-text theme-transition text-lg font-semibold">
                Comments and Replies
              </h3>
              <p className=" text-base text-gray-400">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
                veniam quam eum.
              </p>
            </div>
            <SwitchButton />
          </div>
          <div className="dark:darkThemeBg-border mt-4 flex items-center justify-between border-b border-gray-100  pb-4">
            <div className="">
              <h3 className="dark:darkTheme-text theme-transition text-lg font-semibold">
                Messages
              </h3>
              <p className="text-base text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur eveniet iure blanditiis nobis qui cum magni nulla
                natus.
              </p>
            </div>
            <SwitchButton />
          </div>
          <div className="dark:darkThemeBg-border mt-4 flex items-center justify-between border-b border-gray-100  pb-4">
            <div className="">
              <h3 className="dark:darkTheme-text theme-transition text-lg font-semibold">
                Mentions
              </h3>
              <p className="text-base text-gray-400">
                Lorem, ipsum dolor sit amet consectetur adipamet
                consecteturisicing elit. Nobis veniam quam eum.
              </p>
            </div>
            <SwitchButton />
          </div>
        </div>

        {/*-------------------------------- SHARES -----------------------------------*/}

        <div>
          <h2 className="text-textgray capitlized dark:darkTheme-text theme-transition w-full text-2xl font-semibold">
            Shares
          </h2>
          <div className="mt-4 flex items-center justify-between   pb-4">
            <div className="">
              <h3 className="dark:darkTheme-text theme-transition text-lg font-semibold">
                Shares of my content
              </h3>
              <p className="text-base text-gray-400">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
                veniam quam eum.
              </p>
            </div>
            <ButtonDisable
              customStyle="bg-white border  text-lightgray focus:outline-blue-100 focus:text-white focus:bg-lightBlue"
              disabled={true}
              placeholer="true"
            >
              Button Info
            </ButtonDisable>
          </div>
        </div>
      </div>
      <div className="mb-12 w-full border-t px-6 pt-6 pb-12">
        <div className="float-right flex space-x-4 ">
          <Button customStyle="bg-white border  text-redColor focus:outline-red-100 focus:text-white hover:text-redColor focus:bg-redColor">
            Cancel
          </Button>
          <Button customStyle="bg-lightBlue dark:bg-lightBlue  text-white focus:outline-blue-100 hover:bg-blue-500 focus:text-white hover:border-blue-200 focus:bg-lightBlue">
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Notification;
