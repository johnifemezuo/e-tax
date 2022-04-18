import React from "react";
import DashboadIcon from "../icons/Svg/DashboadIcon";
import HeartIcoin from "../icons/Svg/HeartIcoin";
import HelpIcoin from "../icons/Svg/HelpIcoin";
import MessageIcon from "../icons/Svg/MessageIcon";
import SettingsIcon from "../icons/Svg/SettingsIcon";
import UserIcon from "../icons/Svg/UserIcon";
import AsideFooterDropdown from "./AsideFooterDropdown/AsideFooterDropdown";
import Dropdown from "./Dropdown/Dropdown";
import NavItem from "./Navbar/NavItem";

export default function Sidebar({ closeNavbar }) {
  // Two options for different link styles.
  const linkStyles = {
    style1: "mx-0 border-l-4  w-full ",
    style2: "mx-4 rounded-lg",
  };

  return (
    <section>
      <div className="theme-transition dark:darkThemeBg flex  h-screen flex-col justify-between overflow-y-auto	border-r bg-white shadow-sm dark:border-gray-600">
        <div>
          {/* <div className="my-3 p-2 px-6">
            <AsideHeaderDropdown
              dropdownitems={[
                { item: "Invite People ", link: "dashboard/settings" },
                { item: "Preferences ", link: "dashboard/settings" },
                { item: "Tools", link: "dashboard/settings" },
                { item: "Live Chart", link: "dashboard/settings" },
              ]}
            />
          </div> */}
          <div className="hidden py-12 md:block"></div>

          <h4 className="text-darkgray theme-transition mt-8 pl-6 dark:text-gray-300">
            Menu
          </h4>
          <NavItem
            linkStyle={linkStyles.style1}
            title="Dashboard"
            link="/dashboard"
            closeNavbar={closeNavbar}
            icon={<DashboadIcon className="text-textgray  md:h-5  md:w-5 " />}
          />
          <Dropdown
            linkStyle={linkStyles.style1}
            title="Products"
            closeNavbar={closeNavbar}
            // counter="12"
            counterClass="h-8 w-8"
            dropdownitems={[
              {
                item: "Add new product",
                link: "/dashboard/products/adding-product",
              },
              { item: "categories", link: "/dashboard/products/category-list" },
            ]}
            icon={<MessageIcon className="text-textgray md:h-5  md:w-5" />}
          />
          <NavItem
            linkStyle={linkStyles.style1}
            title="Media Library"
            link="/dashboard/media-library"
            closeNavbar={closeNavbar}
            icon={<SettingsIcon className="text-textgray md:h-5  md:w-5" />}
            // firstLetter="M"
          />
          <NavItem
            linkStyle={linkStyles.style1}
            title="User Profile"
            link="/dashboard/userProfile"
            // firstLetter="O"
            closeNavbar={closeNavbar}
            icon={<UserIcon className="text-textgray md:h-5  md:w-5" />}
          />
          <div className="border-grey theme-transition dark:darkThemeBg-border my-7 border-b "></div>

          <NavItem
            linkStyle={linkStyles.style1}
            title="Helps"
            closeNavbar={closeNavbar}
            link="/helps"
            icon={<HelpIcoin className="text-textgray md:h-5  md:w-5" />}
          />

          <NavItem
            linkStyle={linkStyles.style1}
            title="Settings"
            link="/settings"
            closeNavbar={closeNavbar}
            icon={<SettingsIcon className="text-textgray md:h-5  md:w-5" />}
          />

          {/* ------------------user profile-------------------- */}
          <div
            className="absolute bottom-0 left-0 w-full
          "
          >
            <AsideFooterDropdown
              dropdownitems={[
                { item: "My Profile ", link: "/" },
                { item: "Pause Notifications ", link: "/" },
                { item: "Manage Notifications", link: "/" },
                {
                  item: "Explore Templates",
                  link: "/explore-template",
                  icon: <HeartIcoin className="text-textgray md:h-5  md:w-5" />,
                },
                {
                  item: "Become an Expert",
                  link: "/become-expert",
                  icon: <UserIcon className="text-textgray md:h-5  md:w-5" />,
                },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

{
  /* <NavItem
    
    className={linkStyles.style1} title="Order"
            link="/dashboard/plan"
            firstLetter="O"
            closeNavbar={closeNavbar}
            icon={<Cart className="text-textgray md:h-5  md:w-5" />}
          />
          <NavItem
          title="invoice"
            link="/dashboard/notification"
            firstLetter="O"
            closeNavbar={closeNavbar}
            icon={<HeartIcoin className="text-textgray md:h-5  md:w-5" />}
          /> */
}
{
  /* <NavItem
            title="Friends"
            link="/dashboard/channels"
            firstLetter="O"
            closeNavbar={closeNavbar}
            icon={<FriendsIcon className="text-textgray md:h-5  md:w-5" />}
          /> */
}
{
  /* <NavItem
            title="List Table"
            link="/dashboard/listitems"
            firstLetter="L"
            closeNavbar={closeNavbar}
            icon={<UserIcon className="text-textgray md:h-5  md:w-5" />}
          /> */
}

{
  /* <NavItem
            title="Buttons"
            link="/dashboard/buttons"
            firstLetter="B"
            closeNavbar={closeNavbar}
            icon={<HeartIcoin className="text-textgray md:h-5  md:w-5" />}
          />

          <NavItem
            title="Card"
            link="/dashboard/carditems"
            firstLetter="C"
            closeNavbar={closeNavbar}
            icon={<HeartIcoin className="text-textgray md:h-5  md:w-5" />}
          />
          <NavItem
            title="Modal"
            link="/dashboard/modal"
            firstLetter="M"
            closeNavbar={closeNavbar}
            icon={<DatabaseIcon className="text-textgray md:h-5  md:w-5" />}
          /> */
}
{
  /* <NavItem
            title="Acount"
            link="/dashboard/account"
            firstLetter="D"
            closeNavbar={closeNavbar}
            icon={<DatabaseIcon className="text-textgray md:h-5  md:w-5" />}
          /> */
}
{
  /* <NavItemcxcx
            title="Notification"
            link="/dashboard/notification"
            counter="2"
            firstLetter="N"
            closeNavbar={closeNavbar}
            icon={<NotificationIcon className="text-textgray md:h-5  md:w-5" />}
          /> */
}

{
  /* <NavItem
            title="Plan"
            link="/dashboard/plan"
            firstLetter="G"
            closeNavbar={closeNavbar}
            icon={<DatabaseIcon className="text-textgray md:h-5  md:w-5" />}
          /> */
}

{
  /*  border  */
}

{
  /* <NavItem
            title="Audience"
            link="/audience"
            closeNavbar={closeNavbar}
            firstLetter="A"
            icon={<UserIcon className="text-textgray md:h-5  md:w-5" />}
          /> */
}

{
  /* <Dropdown
            title="Campaigns"
            closeNavbar={closeNavbar}
            dropdownitems={[
              { item: "Invite People ", link: "/dashboard/settings" },
              { item: "Preferences ", link: "/dashboard/settings2" },
              { item: "Tools", link: "/dashboard/settings3" },
              { item: "Live Chart", link: "/dashboard/settings4" },
            ]}
            icon={<FolderIcon className="text-textgray md:h-5  md:w-5" />}
          /> */
}

{
  /* 
          <NavItem
            title="Billing"
            link="/billing"
            icon={<CreditCardIcon className="text-textgray md:h-5  md:w-5" />}
          />
          <NavItem
            title="Settings"
            link="/settings"
            icon={<SettingsIcon className="text-textgray md:h-5  md:w-5" />}
          /> */
}
