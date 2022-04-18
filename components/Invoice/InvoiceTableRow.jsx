import React from "react";

function InvoiceTableRow() {
  return (
    <>
      <tbody>
        <tr className="m-4 w-full border p-6 font-normal text-gray-600">
          {/* The Checkbox data */}
          <td className="py-4 first:px-4">
            <input type="checkbox" />
          </td>

          {/* product Id */}
          <td className=" ">1</td>

          {/* Product Name */}
          <td className="text-lg ">Jeans trowsers</td>

          <td className="py-3">
            <div className="  relative inline-block overflow-hidden rounded-full  border">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/1.jpg"
                className="h-16 w-16 object-contain "
                alt="logo"
              />
              <div className="absolute top-0 left-0 right-0 h-full place-content-center grid text-white/80 font-semibold text-2xl bg-black/40">
                3+
              </div>
            </div>
          </td>

          {/* The status data */}

          {/* The customer name */}
          <td className=" capitalize">Ezeobi Sunny</td>

          {/* The released on data */}
          <td>22/07/2022</td>

          {/* The paid on data */}
          <td>-</td>

          <td className="">
            <div className="inline-block rounded-full bg-pink-200 px-2 ">
              <p className="font-semibold text-pink-500">Overdue</p>
            </div>
          </td>
          {/* The TYPE data */}
          <td>
            <div className="flex gap-x-2">
              {/* The type svg */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>

              {/* The type description */}
              <p className="capitalize">Subscription</p>
            </div>
          </td>

          {/* the actions data */}
          <td className="pr-4">
            {/* The container for the actions icons */}
            <div className="flex justify-between">
              {/* The edit icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>

              {/* The download icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>

              {/* The delete icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 cursor-pointer text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </div>
          </td>
        </tr>
      </tbody>
    </>
  );
}

export default InvoiceTableRow;
