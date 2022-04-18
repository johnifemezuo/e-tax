import Link from 'next/link';
import React from 'react'
import DashboardItemCard from '../DashboardItemCard'
import HeaderXl from '../Element/HeaderXl'
import EyeIcon from '../icons/Svg/EyeIcon';
import AddIcon from "../icons/Svg/AddIcon";
import CartBag from '../icons/Svg/CartBag';
import Cart from '../icons/Svg/Cart';
import FriendsIcon from '../icons/Svg/FriendsIcon';
import DashboardListProduct from '../ListItems/DashboardListProduct';


function Dashboard() {
  return (
    <div className="mt-28">
      <HeaderXl>Dashboard</HeaderXl>

      <div className="theme-transition my-12 grid grid-cols-4  gap-6">
        <div
          className={` theme-transition inline-block rounded-sm border border-gray-100 bg-white px-8 pt-8 text-gray-700 dark:border-gray-500 dark:bg-gray-600`}
        >
          <div>
            <div className="theme-transition inline-block rounded-md bg-gray-100/60 p-6 dark:bg-gray-100/10">
              <EyeIcon />
            </div>
            <h3 className="text-muted py-2 text-xl font-normal ">
              Total Product
            </h3>
            <h2 className="theme-transition theme-transition border-b pb-6 text-4xl font-semibold dark:text-white">
              1,233
            </h2>
            <Link href="/dashboard">
              <p className="text-lightBlue mt-4 flex cursor-pointer items-center space-x-3 pb-8 text-xl capitalize transition-all ">
                <AddIcon />
                <span>Add New Product</span>
              </p>
            </Link>
          </div>
        </div>
        <DashboardItemCard
          customStyle="bg-white text-gray-700"
          title1="302.403"
          title2="Total Views"
          icon={<CartBag />}
        />
        <DashboardItemCard
          customStyle="bg-white text-gray-700"
          title1="302.403"
          title2="Total Users"
          icon={<FriendsIcon className="h-8 w-8 text-pink-400" />}
        />

        <DashboardItemCard
          customStyle="bg-white text-gray-700"
          title1="302.403"
          title2="Total Sells"
          icon={<Cart className="h-8 w-8 text-red-400" />}
        />
      </div>

      <DashboardListProduct/>
    </div>
  );
}

export default Dashboard