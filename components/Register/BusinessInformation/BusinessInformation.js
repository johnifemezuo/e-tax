import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../../Dashboard/Forms/Input/Input";
import ExclamationMarkIcon from "../../Dashboard/icons/Svg/ExclamationMarkIcon";

export default function BusinessInformation() {
  const [businessTypeBorder, setBusinessTypeBorder] = useState(true);
  const [howManyOthersBorder, setHowManyOthersBorder] = useState(true);
  const [businessNameBorder, setBusinessNameBorder] = useState(true);
  const [employeeCountBorder, setEmployeeCountBorder] = useState(true);
  const [registeredBorder, setRegisteredBorder] = useState(true);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      businessType: "Ibeto and Brother",
      businessName: "Ibeto  Factory",
      howManyOthers: 12,
      employeeCount: "12 Employees",
      registered: "Yes",
    },
  });

  const onSubmit = (data) => console.log(data);



   const ErrorBorderHandler = (
     defaultBorder,
     setDefaultBorder,
     errroMessage
   ) => {
     return defaultBorder
       ? setDefaultBorder(false)
       : errroMessage
       ? "border-b border-[#FA3D13]"
       : "border-b border-[#1786A8]  text-[#1786A8]";
   };


  return (
    <div>

      <div className="flex items-center justify-between">
        <p className="text-sm text-[#656262]">
          All your personal info will save guarded and protected.
        </p>
        <button className="text-sm text-[#1786A8]">Edit</button>
      </div>

      <div className="my-4 border-b border-[#DDDDDD]" />
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* ============= Type of Busness* ============= */}
        <div className="grid grid-cols-12 items-center  pb-4 ">
          <label
            htmlFor="businessType"
            className="col-span-10 flex  items-center   text-sm text-[#656262] dark:text-gray-400 md:col-span-4"
          >
            Type of Business*
          </label>

          <div className="col-span-2 flex justify-end md:order-3 md:col-span-1">
            <div className="h-7 w-7 items-center justify-center rounded-full bg-[#DFDFDF] p-2">
              <ExclamationMarkIcon className="h-3 w-3" />
            </div>
          </div>

          <div className="col-span-12 md:col-span-7">
            <Input
              placeholder="Start Up"
              className={`mt-2 rounded-none    bg-[#F9FBF4] 
              p-2 placeholder:text-[#BBBBBB] focus:outline focus:outline-gray-100/50  ${
                !businessTypeBorder &&
                ErrorBorderHandler(
                  businessTypeBorder,
                  setBusinessTypeBorder,
                  errors?.businessType?.message
                )
              }`}
              error={errors?.businessType?.message}
              inputConfig={{
                ...register("businessType", {
                  required: "This field is required.",
                  onChange: () =>
                    ErrorBorderHandler(
                      businessTypeBorder,
                      setBusinessTypeBorder,
                      errors?.businessType?.message
                    ),
                }),
              }}
            />
          </div>
        </div>

        {/* =============  Type of Busness ============= */}

        {/* ============= Name Of Busness ============= */}
        <div className="grid grid-cols-12 items-center  pb-4 ">
          <label
            htmlFor="businessName"
            className="col-span-10 flex  items-center   text-sm text-[#656262] dark:text-gray-400 md:col-span-4"
          >
            Name Of Busness
          </label>

          <div className="col-span-2 flex justify-end md:order-3 md:col-span-1">
            <div className="h-7 w-7 items-center justify-center rounded-full bg-[#DFDFDF] p-2">
              <ExclamationMarkIcon className="h-3 w-3" />
            </div>
          </div>

          <div className="col-span-12 md:col-span-7">
            <Input
              placeholder="Ibeto Cement and Brothers"
              className={`mt-2 rounded-none    bg-[#F9FBF4] 
              p-2 placeholder:text-[#BBBBBB] focus:outline focus:outline-gray-100/50  ${
                !businessNameBorder &&
                ErrorBorderHandler(
                  businessNameBorder,
                  setBusinessNameBorder,
                  errors?.businessName?.message
                )
              }`}
              error={errors?.businessName?.message}
              inputConfig={{
                ...register("businessName", {
                  required: "This field is required.",
                  onChange: () =>
                    ErrorBorderHandler(
                      businessNameBorder,
                      setBusinessNameBorder,
                      errors?.businessName?.message
                    ),
                }),
              }}
            />
          </div>
        </div>

        {/* ============= Name Of Busness ============= */}

        {/* ============= How many Owners* ============= */}
        <div className="grid grid-cols-12 items-center  pb-4 ">
          <label
            htmlFor="howManyOthers"
            className="col-span-10 flex  items-center   text-sm text-[#656262] dark:text-gray-400 md:col-span-4"
          >
            How many Owners*
          </label>

          <div className="col-span-2 flex justify-end md:order-3 md:col-span-1">
            <div className="h-7 w-7 items-center justify-center rounded-full bg-[#DFDFDF] p-2">
              <ExclamationMarkIcon className="h-3 w-3" />
            </div>
          </div>

          <div className="col-span-12 md:col-span-7">
            <Input
              placeholder="3"
              className={`mt-2 rounded-none    bg-[#F9FBF4] 
              p-2 placeholder:text-[#BBBBBB] focus:outline focus:outline-gray-100/50  ${
                !howManyOthersBorder &&
                ErrorBorderHandler(
                  howManyOthersBorder,
                  setHowManyOthersBorder,
                  errors?.howManyOthers?.message
                )
              }`}
              error={errors?.howManyOthers?.message}
              inputConfig={{
                type: "number",
                ...register("howManyOthers", {
                  required: "This field is required.",
                  onChange: () =>
                    ErrorBorderHandler(
                      howManyOthersBorder,
                      setHowManyOthersBorder,
                      errors?.howManyOthers?.message
                    ),
                }),
              }}
            />
          </div>
        </div>

        {/* ============= How many Owners ============= */}

        {/* ============= Employee Count ============= */}
        <div className="grid grid-cols-12 items-center  pb-4 ">
          <label
            htmlFor="employeeCount"
            className="col-span-10 flex  items-center   text-sm text-[#656262] dark:text-gray-400 md:col-span-4"
          >
            Employee Count
          </label>

          <div className="col-span-2 flex justify-end md:order-3 md:col-span-1">
            <div className="h-7 w-7 items-center justify-center rounded-full bg-[#DFDFDF] p-2">
              <ExclamationMarkIcon className="h-3 w-3" />
            </div>
          </div>

          <div className="col-span-12 md:col-span-7">
            <Input
              placeholder="12 Employees"
              className={`mt-2 rounded-none  bg-[#F9FBF4] 
              p-2 placeholder:text-[#BBBBBB] focus:outline focus:outline-gray-100/50  ${
                !employeeCountBorder &&
                ErrorBorderHandler(
                  employeeCountBorder,
                  setEmployeeCountBorder,
                  errors?.employeeCount?.message
                )
              }`}
              error={errors?.employeeCount?.message}
              inputConfig={{
                ...register("employeeCount", {
                  required: "This field is required.",
                  onChange: () =>
                    ErrorBorderHandler(
                      employeeCountBorder,
                      setEmployeeCountBorder,
                      errors?.employeeCount?.message
                    ),
                }),
              }}
            />
          </div>
        </div>

        {/* ============= Employee Count ============= */}

        {/* ============= Registered ============= */}
        <div className="grid grid-cols-12 items-center  pb-4 ">
          <label
            htmlFor="Registered"
            className="col-span-10 flex  items-center   text-sm text-[#656262] dark:text-gray-400 md:col-span-4"
          >
            Registered
          </label>

          <div className="col-span-2 flex justify-end md:order-3 md:col-span-1">
            <div className="h-7 w-7 items-center justify-center rounded-full bg-[#DFDFDF] p-2">
              <ExclamationMarkIcon className="h-3 w-3" />
            </div>
          </div>

          <div className="col-span-12 md:col-span-7">
            <Input
              placeholder="Yes"
              className={`mt-2 rounded-none  bg-[#F9FBF4] 
              p-2 placeholder:text-[#BBBBBB] focus:outline focus:outline-gray-100/50  ${
                !registeredBorder &&
                ErrorBorderHandler(
                  registeredBorder,
                  setRegisteredBorder,
                  errors?.registered?.message
                )
              }`}
              error={errors?.registered?.message}
              inputConfig={{
                ...register("registered", {
                  required: "This field is required.",
                  onChange: () =>
                    ErrorBorderHandler(
                      registeredBorder,
                      setRegisteredBorder,
                      errors?.registered?.message
                    ),
                }),
              }}
            />
          </div>
        </div>

        {/* ============= Location ============= */}
      </form>
    </div>
  );
}
