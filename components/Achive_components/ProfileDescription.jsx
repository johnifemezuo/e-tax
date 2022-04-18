import React from "react";

function ProfileDescription() {
  return (
    <>
      <div className=" mt-4 px-4">
        <div className=" flex flex-col items-center md:flex-row md:items-start md:justify-between">
          {/* The description Container */}
          <div className="mt-14 flex flex-col items-center justify-center text-center md:block md:text-left ">
            {/* The person name */}
            <h2 className=" text-2xl font-bold">Ezeobi Kingsley Sunny</h2>

            {/* The user description */}
            <p className="mt-2 leading-tight md:mt-3">
              Fitness Fanstic, Design Enthuiasits Mentor, Meetup Orgainzer & PHP
              Lover
            </p>

            {/* The user location and email container */}
            <div className="mt-3 flex gap-x-4 md:mt-3">
              {/* the user location container */}
              <span className="flex gap-x-1.5">
                {/* The location svg */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                {/* The location text */}
                <p className="">Milan, IT</p>
              </span>

              {/* The email and the email icon container */}
              <span className="flex gap-x-1.5">
                {/* The email icon svg */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>

                {/* The email link */}
                <a href="" className=" text-blue-700 ">
                  carofinnacemail@gmail.com
                </a>
              </span>
            </div>
          </div>

          {/* The following, Chat and Options SVG Container*/}
          <div className="mt-4 flex gap-x-2">
            {/* The options svg container */}
            <div className="inline-block rounded-md border-2 p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                />
              </svg>
            </div>

            {/* The chat svg container */}
            <div className="inline-block rounded-md border-2 p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                />
              </svg>
            </div>

            {/* The following icon container */}
            <div className="flex items-center justify-center gap-x-1 rounded-md bg-blue-700 px-2 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="-ml-0.5 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <div className="capitalize">Following</div>
            </div>
          </div>
        </div>
        <div className="">my name is sunny</div>
      </div>
    </>
  );
}

export default ProfileDescription;
