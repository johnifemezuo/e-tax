import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function NavItem({
  link,
  title,
  icon,
  linkStyle,
  counter,
  counterClass,
  navLinkClasss,
  firstLetter,
  closeNavbar,
}) {
  const { route } = useRouter();
  const checkPage = () => {
    if (link === route)
      return " dark:bg-gray-700 theme-transition border-blue-600 font-bold text-blue-600 font-bold dark:text-blue-500 bg-blue-100";
  };
  return (
    <Link passHref={true} href={link}>
      <div
        className={`${linkStyle} my-2 flex  cursor-pointer justify-between 
          py-3 hover:bg-blue-50/50 hover:pl-4 dark:hover:bg-gray-700  ${navLinkClasss} ${checkPage()} transition-all ease-in-out`}
        onClick={closeNavbar}
      >
        <div className="flex items-center px-6">
          <div className="theme-transition dark:darkTheme-text">{icon}</div>
          <div
            className={`flex items-center gap-2 text-base font-medium first-letter:capitalize `}
          >
            <p className="theme-transition dark:darkTheme-text  pl-4 font-medium md:hidden lg:block">
              {title}
            </p>
            {counter && (
              <p
                className={`${counterClass} flex h-5 w-5 items-center justify-center justify-items-center rounded-full  bg-red-400 font-semibold text-white md:hidden lg:flex`}
              >
                {counter}
              </p>
            )}
          </div>
        </div>

        {/* {firstLetter && (
            <p className="theme-transition dark:darkThemeBg-lighter mr-5 rounded-sm bg-blue-200 p-1 px-2 text-sm  font-light text-blue-700 theme-transition dark:text-blue-200  md:hidden lg:block">
              {firstLetter}
            </p>
          )} */}
      </div>
    </Link>
  );
}
