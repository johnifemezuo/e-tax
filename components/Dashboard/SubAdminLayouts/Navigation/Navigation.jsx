import { useState } from "react";
import { Tab } from "@headlessui/react";
import UserIcon from "../../icons/Svg/UserIcon";
import Notification from "../../UI/Notification/Notification";
import Plan from "../MyAccount/Plan/Plan";
import FolderIcon from "../../icons/Svg/FolderIcon";
import NotificationIcon from "../../icons/Svg/NotificationIcon";
import AppIcon from "../../icons/Svg/AppIcon";
import MyAccount from "../MyAccount/MyAccount";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  let [categories] = useState([
    {
      name: "My Account",
      id: 1,
      page: <MyAccount />,
      icon: <UserIcon />,
    },

    {
      name: "My Notifications",
      id: 2,
      page: <Notification/>,
      icon: <NotificationIcon />,
    },
    {
      name: "Plans",
      id: 3,
      page: <Plan/>,
      icon: <FolderIcon />,
    },
    {
      name: "Connected Apps",
      id: 4,
      page: "Connectd Apps",
      icon: <AppIcon />,
    },
    {
      name: "Billing & Invoice",
      id: 5,
      page: "Billing & Invoice",
      icon: <AppIcon />,
    },
  ]);

  return (
    <div className="w-full sm:px-0   md:mt-12">
      <Tab.Group>
        <div className="block h-auto w-full lg:flex">
          <Tab.List className=" bg-transition theme-transition w-full border-r border-gray-100 p-3 dark:border-gray-600 lg:h-screen  lg:w-[300px] lg:pt-12">
            <h2 className="text-darkgray mb-4 uppercase dark:text-gray-400">
              Businss Setting
            </h2>
            {categories.map((category) => (
              <Tab
                key={category.id}
                className={({ selected }) =>
                  classNames(
                    "text-textgray dark:darkTheme-text theme-transition rounded-md w-full px-5 py-3.5 text-left text-base  capitalize ",
                    "  focus:outline-none ",
                    selected
                      ? "text-lightBlue theme-transition  bg-blue-50 dark:bg-blue-100/50"
                      : "hover:text-lightBlue  dark:hover:text-blue-300"
                  )
                }
              >
                <div className="flex items-center space-x-3">
                  <span>{category.icon}</span> <p>{category.name}</p>
                </div>
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className=" h-screen w-full py-8">
            {categories.map((posts) => (
              <Tab.Panel key={posts.id} className={classNames(" ")}>
                <ul className="pl-8">{posts.page}</ul>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </div>
      </Tab.Group>
    </div>
  );
}
