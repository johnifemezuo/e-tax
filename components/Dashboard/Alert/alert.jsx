export default function AlertPage() {
  return (
    <>
      <div className="max-w-xl rounded-md bg-white p-5 text-gray-600 shadow-xl">
        <div className="flex gap-x-5">
          <div className="">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="">
            <h1 className="mb-2 text-2xl  font-bold">
              Upgrade your Subscription
            </h1>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
              veritatis distinctio perferendis corrupti.
            </p>
          </div>
        </div>

        <div className="mt-12 flex justify-end">
          <div className="space-x-2">
            <button className="rounded-md border px-2 py-1">Cancel</button>
            <button className="rounded-md border bg-violet-500 px-2 py-1 text-white">
              Yes, Upgrade it
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
