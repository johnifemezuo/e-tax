import React from 'react'
import EyeIcon from './icons/Svg/EyeIcon'

function DashboardItemCard({customStyle,title2,title1,icon}) {
  return (
    <div
      className={` theme-transition inline-block rounded-sm border border-gray-100 px-8 pt-8 text-white dark:border-gray-500 dark:bg-gray-600 ${customStyle}`}
    >
      <div>
        <div className="theme-transition inline-block rounded-md bg-gray-100/60 p-6 dark:bg-gray-100/10">
          {icon}
        </div>
        <h3 className="text-muted py-2 text-xl font-normal ">{title2}</h3>
        <h2 className="font-semibold theme-transition border-b pb-6 text-4xl dark:text-white">
          {title1}
        </h2>
        <p className="text-muted mt-4 pb-8 text-xl">Start from 1 Jan 2021</p>
      </div>
    </div>
  );
}

export default DashboardItemCard