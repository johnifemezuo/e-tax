import React, { useState } from "react";
import Input from "../../Dashboard/Forms/Input/Input";
import ExclamationMarkIcon from "../../Dashboard/icons/Svg/ExclamationMarkIcon";
import { useForm } from "react-hook-form";

function PersonalInfomation() {
  const [firstNameBorder, setFirstNameBorder] = useState(true);
  const [surnNameBorder, setSurnNameBorder] = useState(true);
  const [ageBorder, setAgeBorder] = useState(true);
  const [birthdayBorder, setBirthdayBorder] = useState(true);
  const [locationBorder, setLocationBorder] = useState(true);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "bill",
      surename: "luo",
      age: 60,
      location: "Abuja",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

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
        {/* ============= First Name ============= */}
        <div className="grid grid-cols-12 items-center  pb-4 ">
          <label
            htmlFor="firstName"
            className="col-span-10 flex  items-center   text-sm text-[#656262] dark:text-gray-400 md:col-span-4"
          >
            First Name
          </label>
          <div className="col-span-2 flex justify-end md:order-3 md:col-span-1">
            <div className="h-7 w-7 items-center justify-center rounded-full bg-[#DFDFDF] p-2 ">
              <ExclamationMarkIcon className="h-3 w-3" />
            </div>
          </div>

          <div className="col-span-12 md:col-span-7">
            <Input
              placeholder="John"
              className={`mt-2 rounded-none    bg-[#F9FBF4] 
              p-2 placeholder:text-[#BBBBBB] focus:outline focus:outline-gray-100/50  ${
                !firstNameBorder &&
                ErrorBorderHandler(
                  firstNameBorder,
                  setFirstNameBorder,
                  errors?.firstName?.message
                )
              }`}
              error={errors?.firstName?.message}
              inputConfig={{
                ...register("firstName", {
                  required: "This field is required.",

                  onChange: () =>
                    ErrorBorderHandler(
                      firstNameBorder,
                      setFirstNameBorder,
                      errors?.firstName?.message
                    ),
                }),
              }}
            />
          </div>
        </div>

        {/* ============= First Name ============= */}

        {/* ============= Surename ============= */}
        <div className="grid grid-cols-12 items-center  pb-4 ">
          <label
            htmlFor="surename"
            className="col-span-10 flex  items-center   text-sm text-[#656262] dark:text-gray-400 md:col-span-4"
          >
            Surename
          </label>

          <div className="col-span-2 flex justify-end md:order-3 md:col-span-1">
            <div className="h-7 w-7 items-center justify-center rounded-full bg-[#DFDFDF] p-2">
              <ExclamationMarkIcon className="h-3 w-3" />
            </div>
          </div>

          <div className="col-span-12 md:col-span-7">
            <Input
              placeholder="Deo"
              className={`mt-2 rounded-none   bg-[#F9FBF4] 
              p-2 placeholder:text-[#BBBBBB] focus:outline focus:outline-gray-100/50  ${
                !surnNameBorder &&
                ErrorBorderHandler(
                  surnNameBorder,
                  setSurnNameBorder,
                  errors?.surename?.message
                )
              }`}
              error={errors?.surename?.message}
              inputConfig={{
                ...register("surename", {
                  required: "This field is required.",
                  onChange: () =>
                    ErrorBorderHandler(
                      surnNameBorder,
                      setSurnNameBorder,
                      errors?.surename?.message
                    ),
                }),
              }}
            />
          </div>
        </div>

        {/* ============= Surename ============= */}

        {/* ============= Age ============= */}
        <div className="grid grid-cols-12 items-center  pb-4 ">
          <label
            htmlFor="age"
            className="col-span-10 flex  items-center   text-sm text-[#656262] dark:text-gray-400 md:col-span-4"
          >
            Age
          </label>

          <div className="col-span-2 flex justify-end md:order-3 md:col-span-1">
            <div className="h-7 w-7 items-center justify-center rounded-full bg-[#DFDFDF] p-2">
              <ExclamationMarkIcon className="h-3 w-3" />
            </div>
          </div>

          <div className="col-span-12 md:col-span-7">
            <Input
              placeholder="55"
              className={`mt-2 rounded-none   bg-[#F9FBF4] 
              p-2 placeholder:text-[#BBBBBB] focus:outline focus:outline-gray-100/50  ${
                !ageBorder &&
                ErrorBorderHandler(
                  ageBorder,
                  setAgeBorder,
                  errors?.age?.message
                )
              }`}
              error={errors?.age?.message}
              inputConfig={{
                type: "number",
                ...register("age", {
                  required: "This field is required.",
                  onChange: () =>
                    ErrorBorderHandler(
                      ageBorder,
                      setAgeBorder,
                      errors?.age?.message
                    ),
                }),
              }}
            />
          </div>
        </div>

        {/* ============= Age ============= */}

        {/* ============= Date of Birth ============= */}
        <div className="grid grid-cols-12 items-center  pb-4 ">
          <label
            htmlFor="birthday"
            className="col-span-10 flex  items-center   text-sm text-[#656262] dark:text-gray-400 md:col-span-4"
          >
            Date of birth
          </label>

          <div className="col-span-2 flex justify-end md:order-3 md:col-span-1">
            <div className="h-7 w-7 items-center justify-center rounded-full bg-[#DFDFDF] p-2">
              <ExclamationMarkIcon className="h-3 w-3" />
            </div>
          </div>

          <div className="col-span-12 md:col-span-7">
            <Input
              placeholder="DOB"
              className={`mt-2 rounded-none   bg-[#F9FBF4] 
              p-2 placeholder:text-[#BBBBBB] focus:outline focus:outline-gray-100/50  ${
                !birthdayBorder &&
                ErrorBorderHandler(
                  birthdayBorder,
                  setBirthdayBorder,
                  errors?.birthday?.message
                )
              }`}
              error={errors?.birthday?.message}
              inputConfig={{
                type: "date",
                ...register("birthday", {
                  required: "This field is required.",
                  onChange: () =>
                    ErrorBorderHandler(
                      birthdayBorder,
                      setBirthdayBorder,
                      errors?.birthday?.message
                    ),
                }),
              }}
            />
          </div>
        </div>

        {/* ============= Date of Birth ============= */}

        {/* =============Location ============= */}
        <div className="grid grid-cols-12 items-center  pb-4 ">
          <label
            htmlFor="location"
            className="col-span-10 flex  items-center   text-sm text-[#656262] dark:text-gray-400 md:col-span-4"
          >
            Location
          </label>

          <div className="col-span-2 flex justify-end md:order-3 md:col-span-1">
            <div className="h-7 w-7 items-center justify-center rounded-full bg-[#DFDFDF] p-2">
              <ExclamationMarkIcon className="h-3 w-3" />
            </div>
          </div>

          <div className="col-span-12 md:col-span-7">
            <Input
              placeholder="Abuja"
              className={`mt-2 rounded-none   bg-[#F9FBF4] 
              p-2 placeholder:text-[#BBBBBB] focus:outline focus:outline-gray-100/50  ${
                !locationBorder &&
                ErrorBorderHandler(
                  locationBorder,
                  setLocationBorder,
                  errors?.location?.message
                )
              }`}
              error={errors?.location?.message}
              inputConfig={{
                ...register("location", {
                  required: "This field is required.",
                  onChange: () =>
                    ErrorBorderHandler(
                      locationBorder,
                      setLocationBorder,
                      errors?.location?.message
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

export default PersonalInfomation;
