import React, { useState } from "react";

import { useForm } from "react-hook-form";
import Input from "../../Dashboard/Forms/Input/Input";
import ExclamationMarkIcon from "../../Dashboard/icons/Svg/ExclamationMarkIcon";

export default function ContactInformation() {
  const [residenceBorder, setResidenceBorder] = useState(true);
  const [businessResidenceBorder, setBusinessResidenceBorder] = useState(true);
  const [phoneNumberBorder, setPhoneNumberBorder] = useState(true);
  const [emailBorder, setEmailBorder] = useState(true);
  const [stateBorder, setStateBorder] = useState(true);


 const ErrorBorderHandler = (defaultBorder, setDefaultBorder, errroMessage) => {
   return defaultBorder
     ? setDefaultBorder(false)
     : errroMessage
     ? "border-b border-[#FA3D13]"
     : "border-b border-[#1786A8]  text-[#1786A8]";
 };



  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      residence: "Atani",
      businessResidence: "Ekwulobia",
      phoneNumber: "1234455433456",
      email: "example@gmailc.om",
      state: "Abuja",
    },
  });

  const onSubmit = (data) => console.log(data);

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
        {/* =============  Residence ============= */}
        <div className="grid grid-cols-12 items-center  pb-4 ">
          <label
            htmlFor="residence"
            className="col-span-10 flex  items-center   text-sm text-[#656262] dark:text-gray-400 md:col-span-4"
          >
            Residence
          </label>

          <div className="col-span-2 flex justify-end md:order-3 md:col-span-1">
            <div className="h-7 w-7 items-center justify-center rounded-full bg-[#DFDFDF] p-2">
              <ExclamationMarkIcon className="h-3 w-3" />
            </div>
          </div>

          <div className="col-span-12 md:col-span-7">
            <Input
              placeholder="Atani"
              className={`mt-2 rounded-none    bg-[#F9FBF4] 
              p-2 placeholder:text-[rgb(187,187,187)] focus:outline focus:outline-gray-100/50  ${
                !residenceBorder &&
                ErrorBorderHandler(
                  residenceBorder,
                  setResidenceBorder,
                  errors?.residence?.message
                )
              }`}
              error={errors?.residence?.message}
              inputConfig={{
                ...register("residence", {
                  required: "This field is required.",
                  onChange: () =>
                    ErrorBorderHandler(
                      residenceBorder,
                      setResidenceBorder,
                      errors?.residence?.message
                    ),
                }),
              }}
            />
          </div>
        </div>

        {/* ============= Residence ============= */}

        {/* ============= Business residence ============= */}
        <div className="grid grid-cols-12 items-center  pb-4 ">
          <label
            htmlFor="businessResidence"
            className="col-span-10 flex  items-center   text-sm text-[#656262] dark:text-gray-400 md:col-span-4"
          >
            Business residence
          </label>

          <div className="col-span-2 flex justify-end md:order-3 md:col-span-1">
            <div className="h-7 w-7 items-center justify-center rounded-full bg-[#DFDFDF] p-2">
              <ExclamationMarkIcon className="h-3 w-3" />
            </div>
          </div>

          <div className="col-span-12 md:col-span-7">
            <Input
              placeholder="Yes"
              className={`mt-2 rounded-none    bg-[#F9FBF4] 
              p-2 placeholder:text-[rgb(187,187,187)] focus:outline focus:outline-gray-100/50  ${
                !businessResidenceBorder &&
                ErrorBorderHandler(
                  businessResidenceBorder,
                  setBusinessResidenceBorder,
                  errors?.businessResidence?.message
                )
              }`}
              error={errors?.businessResidence?.message}
              inputConfig={{
                ...register("businessResidence", {
                  required: "This field is required.",
                  onChange: () =>
                    ErrorBorderHandler(
                      businessResidenceBorder,
                      setBusinessResidenceBorder,
                      errors?.businessResidence?.message
                    ),
                }),
              }}
            />
          </div>
        </div>

        {/* ============= Business residence ============= */}

        {/* =============   Phone number ============= */}
        <div className="grid grid-cols-12 items-center  pb-4 ">
          <label
            htmlFor="phoneNumber"
            className="col-span-10 flex  items-center   text-sm text-[#656262] dark:text-gray-400 md:col-span-4"
          >
            Phone number
          </label>

          <div className="col-span-2 flex justify-end md:order-3 md:col-span-1">
            <div className="h-7 w-7 items-center justify-center rounded-full bg-[#DFDFDF] p-2">
              <ExclamationMarkIcon className="h-3 w-3" />
            </div>
          </div>

          <div className="col-span-12 md:col-span-7">
            <Input
              placeholder="+123 443 3233 122"
              className={`mt-2 rounded-none    bg-[#F9FBF4] 
              p-2 placeholder:text-[rgb(187,187,187)] focus:outline focus:outline-gray-100/50  ${
                !phoneNumberBorder &&
                ErrorBorderHandler(
                  phoneNumberBorder,
                  setPhoneNumberBorder,
                  errors?.phoneNumber?.message
                )
              }`}
              error={errors?.phoneNumber?.message}
              inputConfig={{
                type: "number",
                ...register("phoneNumber", {
                  required: "This field is required.",
                  onChange: () =>
                    ErrorBorderHandler(
                      phoneNumberBorder,
                      setPhoneNumberBorder,
                      errors?.phoneNumber?.message
                    ),
                }),
              }}
            />
          </div>
        </div>

        {/* =============  Phone number ============= */}

        {/* ============= Email Address ============= */}
        <div className="grid grid-cols-12 items-center  pb-4 ">
          <label
            htmlFor="email"
            className="col-span-10 flex  items-center   text-sm text-[#656262] dark:text-gray-400 md:col-span-4"
          >
            Email
          </label>

          <div className="col-span-2 flex justify-end md:order-3 md:col-span-1">
            <div className="h-7 w-7 items-center justify-center rounded-full bg-[#DFDFDF] p-2">
              <ExclamationMarkIcon className="h-3 w-3" />
            </div>
          </div>

          <div className="col-span-12 md:col-span-7">
            <Input
              placeholder="Example@gmail.com"
              className={`mt-2 rounded-none    bg-[#F9FBF4] 
              p-2 placeholder:text-[rgb(187,187,187)] focus:outline focus:outline-gray-100/50  ${
                !emailBorder &&
                ErrorBorderHandler(
                  emailBorder,
                  setEmailBorder,
                  errors?.email?.message
                )
              }`}
              error={errors?.email?.message}
              inputConfig={{
                type: "email",
                ...register("email", {
                  required: "This field is required.",
                  onChange: () =>
                    ErrorBorderHandler(
                      emailBorder,
                      setEmailBorder,
                      errors?.email?.message
                    ),
                }),
              }}
            />
          </div>
        </div>

        {/* ============= Email Address ============= */}

        {/* ============= State ============= */}
        <div className="grid grid-cols-12 items-center  pb-4 ">
          <label
            htmlFor="state"
            className="col-span-10 flex  items-center   text-sm text-[#656262] dark:text-gray-400 md:col-span-4"
          >
            State
          </label>

          <div className="col-span-2 flex justify-end md:order-3 md:col-span-1">
            <div className="h-7 w-7 items-center justify-center rounded-full bg-[#DFDFDF] p-2">
              <ExclamationMarkIcon className="h-3 w-3" />
            </div>
          </div>

          <div className="col-span-12 md:col-span-7">
            <Input
              placeholder="Anambra"
              className={`mt-2 rounded-none    bg-[#F9FBF4] 
              p-2 placeholder:text-[rgb(187,187,187)] focus:outline focus:outline-gray-100/50  ${
                !stateBorder &&
                ErrorBorderHandler(
                  stateBorder,
                  setStateBorder,
                  errors?.state?.message
                )
              }`}
              error={errors?.state?.message}
              inputConfig={{
                ...register("state", {
                  required: "This field is required.",
                  onChange: () =>
                    ErrorBorderHandler(
                      stateBorder,
                      setStateBorder,
                      errors?.state?.message
                    ),
                }),
              }}
            />
          </div>
        </div>

        {/* ============= State  ============= */}
      </form>
    </div>
  );
}
