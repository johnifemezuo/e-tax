import LightModeIcon from "../icons/Svg/LightModeIcon";

export default function Theme() {
  return (
    <div className=" w-full px-">
      <div
        className={` group text-lightBlue inline-flex items-center rounded-md bg-blue-100 px-3 py-3 text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <div className="hover:text-lightBlue relative ">
          <LightModeIcon className="md:h-7  md:w-6" />
        </div>
      </div>
    </div>
  );
}
