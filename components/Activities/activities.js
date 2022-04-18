const ActivitiesPage = () => {
  return (
    <>
      <div className="bg-red w-1/2  border border-gray-200  text-gray-700">
        {/* The recent Activities Header */}
        <div className="px-6 py-4 shadow-sm">
          <h1 className="text-xl font-bold">Recent Activity</h1>
        </div>

        {/* Div containing today and yesterday */}
        <div className="py-2 px-3">
          {/* Today div */}
          <div className="">
            {/* today header */}
            <h1 className="bg-gray-50 px-3 py-2 font-bold text-gray-400">
              TODAY
            </h1>

            {/* Today activities div */}
            <div className="flex gap-x-3 px-3 pt-2 cursor-pointer">
              {/* today activities svg/icon */}
              <div className="flex h-10 w-11 items-center justify-center rounded-full bg-violet-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              {/* Today activities notification text */}
              <div className="flex w-full items-center justify-between py-3 shadow-sm">
                <p className="">
                  <span className="">Nick Man</span> mentioned{" "}
                  <span className="">Sara Smith</span> in a new post
                </p>

                {/* The view link */}
                <a
                  href=""
                  className=" duration-250 flex items-end text-violet-500 transition hover:text-violet-400 "
                >
                  View
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 "
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="flex gap-x-3 px-3 pt-2 cursor-pointer">
              {/* today activities svg/icon */}
              <div className="flex h-10 w-11 items-center justify-center rounded-full bg-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                  />
                </svg>
              </div>
              {/* Today activities notification text */}
              <div className="flex w-full items-center justify-between py-3 shadow-sm">
                <p className="">
                  <span className="">Nick Man</span> mentioned{" "}
                  <span className="">Sara Smith</span> in a new post
                </p>

                {/* The view link */}
                <a
                  href=""
                  className=" duration-250 flex items-end text-violet-500 transition hover:text-violet-400 "
                >
                  View
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 "
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="flex gap-x-3 px-3 pt-2 cursor-pointer">
              {/* today activities svg/icon */}
              <div className="flex h-10 w-11 items-center justify-center rounded-full bg-violet-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              {/* Today activities notification text */}
              <div className="flex w-full items-center justify-between py-3 shadow-none">
                <p className="">
                  <span className="">Nick Man</span> mentioned{" "}
                  <span className="">Sara Smith</span> in a new post
                </p>

                {/* The view link */}
                <a
                  href=""
                  className=" duration-250 flex items-end text-violet-500 transition hover:text-violet-400 "
                >
                  View
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 "
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>


          {/* Yesterday div */}
          <div className="">
            {/* Yesterday header */}
            <h1 className="bg-gray-50 px-3 py-2 font-bold text-gray-400">
              YESTERDAY
            </h1>

            {/* Yesterday activities div */}
            <div className="flex gap-x-3 px-3 pt-2 cursor-pointer">
              {/* Yesterday activities svg/icon */}
              <div className="flex h-10 w-11 items-center justify-center rounded-full bg-violet-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              {/* Yesterday activities notification text */}
              <div className="flex w-full items-center justify-between py-3 shadow-sm">
                <p className="">
                  <span className="">Nick Man</span> mentioned{" "}
                  <span className="">Sara Smith</span> in a new post
                </p>

                {/* The view link */}
                <a
                  href=""
                  className=" duration-250 flex items-end text-violet-500 transition hover:text-violet-400 "
                >
                  View
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 "
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="flex gap-x-3 px-3 pt-2 cursor-pointer">
              {/* Yesterday activities svg/icon */}
              <div className="flex h-10 w-11 items-center justify-center rounded-full bg-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                  />
                </svg>
              </div>
              {/* Yesterday activities notification text */}
              <div className="flex w-full items-center justify-between py-3 shadow-sm">
                <p className="">
                  <span className="">Nick Man</span> mentioned{" "}
                  <span className="">Sara Smith</span> in a new post
                </p>

                {/* The view link */}
                <a
                  href=""
                  className=" duration-250 flex items-end text-violet-500 transition hover:text-violet-400 "
                >
                  View
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 "
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="flex gap-x-3 px-3 pt-2 cursor-pointer">
              {/* Yesterday activities svg/icon */}
              <div className="flex h-10 w-11 items-center justify-center rounded-full bg-violet-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              {/* Yesterday activities notification text */}
              <div className="flex w-full items-center justify-between py-3 shadow-none">
                <p className="">
                  <span className="">Nick Man</span> mentioned{" "}
                  <span className="">Sara Smith</span> in a new post
                </p>

                {/* The view link */}
                <a
                  href=""
                  className=" duration-250 flex items-end text-violet-500 transition hover:text-violet-400 "
                >
                  View
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 "
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActivitiesPage;
