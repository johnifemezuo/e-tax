import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Dropdown({
  title,
  link,
  linkStyle,
  icon,
  dropdownitems = [],
  counter,
  counterClass,
  closeNavbar,
}) {
  const { route } = useRouter();

  const checkPage = () => {
    const link = dropdownitems.find((item) => {
      return item.link === route;
    });
    if (link) return "border--4 border-blue-400 bg-blue-100 text-lightBlue";
  };
  const activeSubLinks = () => {
    const link = dropdownitems.find((item) => {
      return item.link === route;
    });
  };

  return (
    <div>
      <div>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                className={`${linkStyle} flex items-center justify-between py-3 transition-all ease-in-out hover:bg-blue-50/50 hover:bg-white hover:pl-4 ${checkPage()}`}
              >
                <div className="flex items-center px-6">
                  <div className="heme-transition dark:darkTheme-text">
                    {icon}
                  </div>
                  <span className="cursor-pointer pl-4 text-base font-medium md:hidden lg:block">
                    {title}
                  </span>
                </div>
                <div className="ml-12 ">
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } text-darkgray  mr-12 h-5 w-5`}
                  />
                </div>
              </Disclosure.Button>
              {dropdownitems.map((dropdownitem, index) => {
                return (
                  <Link href={dropdownitem.link} passHref key={index}>
                    <Disclosure.Panel
                      key={index}
                      className={`hover:text-lightBlue cursor-pointer bg-zinc-100/50 py-3 px-16 text-base transition-all first-letter:capitalize hover:pl-20 ${activeSubLinks()}`}
                    >
                      <a onClick={closeNavbar}>{dropdownitem.item}</a>
                    </Disclosure.Panel>
                  </Link>
                );
              })}
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
