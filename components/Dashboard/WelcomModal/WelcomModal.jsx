import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Button from "../UI/Button/Button"

function WelcomModal() {
  return (
    <div className="max-w-screen-xlg mt-44 flex justify-between rounded-xl bg-[#f7e5e9] px-20 py-12 shadow-sm">
      <div className="max-w-screen-md">
        <h1 className="text-5xl font-semibold text-[#ff808b]">
          Welcome Back John
        </h1>
        <p className="py-8 text-xl">
          We hope you are making progress on your project! Feel free to read the
          latest news about Strapi. We are givings ours best to improve the
          product based on yours feedback.
        </p>

        <Link href="/dashboard">
          <button className="rounded-md border border-none bg-white p-3 px-6 transition-all hover:bg-gray-100 ">
            Go To Dashboard
          </button>
        </Link>
      </div>

      <div className="-mt-32 w-[250px]">
        <img src="/img/user.png" alt="user" />
      </div>
    </div>
  );
}

export default WelcomModal