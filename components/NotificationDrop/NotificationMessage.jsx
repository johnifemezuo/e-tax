import React from 'react'

function NotificationMessage() {
  return (
    <div className="dark:border-gray-500  border-b border-gray-100 ">
      <div className=" px-6 py-4">
        <p className="text-textgray dark:text-gray-300">
          Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.
        </p>
        <small className="font-semibold text-gray-400">Feb 12, 2022</small>
      </div>
    </div>
  );
}

export default NotificationMessage