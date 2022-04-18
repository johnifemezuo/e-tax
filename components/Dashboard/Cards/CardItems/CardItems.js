import React from "react";

function CardItems({ data = [] }) {
  return (
    <div className="flex flex-wrap sm:flex-nowrap items-start gap-10">
      {data?.map((item, index) => {
        return (
          <div
            key={index}
            className="w-full overflow-hidden rounded-3xl  shadow-md"
          >
            <img src={item?.src} className="h-48 w-full object-cover" />
            <div className="relative -top-5 bottom-0  h-28 w-full overflow-hidden rounded-tl-3xl bg-white p-4   duration-300 ease-in  hover:-top-12  hover:h-[130px]">
              <div className="flex gap-3">
                <img
                  src={item?.src}
                  className="h-10 w-10 rounded-full object-cover "
                />
                <div>
                  <p>{item?.title}</p>
                  <p className="text-gray-300">{item?.time}</p>
                </div>
              </div>
              <p className="pt-5 ">{item?.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CardItems;
