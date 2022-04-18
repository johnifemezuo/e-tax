import React from "react";
import Button from "../UI/Button/Button";
import Input from "../Forms/Input/Input";
import AddProfile from "./AddProfile";
import SwitchButton from "../UI/SwitchButton/SwitchButton";

function MyAccount() {
  return (
    <div className="w-full">
      <div className=" py-12">
        <h1 className="dark:darkTheme-text theme-transition text-4xl font-bold">
          My Account
        </h1>
        <AddProfile />
        <div>
          <h3 className="text-textgray dark:darkTheme-text theme-transition text-2xl font-bold">
            Business Profile
          </h3>
          <p className="dark:darkTheme-text theme-transition">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
            similique nemo libero.
          </p>
          <div className="flex w-[970px] justify-between">
            <div className="mt-6">
              <label className="font-semibold " htmlFor="">
                Business Name
              </label>
              <Input placeholder="Acme Inc." className="w-[300px]" />
            </div>
            <div className="mt-6">
              <label className="font-semibold " htmlFor="">
                Business Name
              </label>
              <Input placeholder="Acme Inc." className="w-[300px]" />
            </div>
            <div className="mt-6">
              <label className="font-semibold " htmlFor="">
                Business Name
              </label>
              <Input placeholder="Acme Inc." className="w-[300px]" />
            </div>
          </div>

          <div className="mt-6">
            <div>
              <h3 className="text-textgray dark:darkTheme-text theme-transition text-2xl font-bold">
                Email{" "}
              </h3>
              <p className="mb- 2 dark:darkTheme-text theme-transition">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique.
              </p>
              <div className="flex space-x-4">
                <Input placeholder="Acme Inc." className="w-[300px]" />
                <Button customStyle="bg-white border  text-lightBlue focus:outline-blue-100 focus:text-white hover:border-blue-200 focus:bg-lightBlue">
                  Change
                </Button>
              </div>
            </div>

            <div>
              <h3 className="dark:darkTheme-text theme-transition text-textgray mt-6 text-2xl font-bold ">
                Password
              </h3>
              <p className="dark:darkTheme-text theme-transition mb-2">
                sit amet consectetur adipisicing elit. Obcaecati similique nemo
                libero.
              </p>
              <Button customStyle="bg-white border  text-lightBlue focus:outline-blue-100 focus:text-white hover:border-blue-200 focus:bg-lightBlue">
                Set New Password
              </Button>
            </div>
            <div className="mt-4">
              <h3 className=" text-textgray dark:darkTheme-text theme-transition mb-3 mt-6 text-2xl font-bold">
                Smart Sync update for Mac
              </h3>
              <SwitchButton />
            </div>
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

export default MyAccount;
