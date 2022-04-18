import Head from "next/head";
import Link from "next/link";
import React from "react";
import Label from "../components/Element/Label";
import Logo from "../components/Logo/Logo";

function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <div className="grid h-screen w-full place-content-center bg-zinc-100">
        <div className="h-auto w-[600px] rounded-md bg-white py-12 px-12 shadow-lg ">
          <div className="text-center">
            <span className="mx-auto mb-6 flex w-12 rounded-md">
              <Logo />
            </span>
            <h2 className="text-4xl font-semibold">Welcome</h2>
            <p className="mt-1 text-lg text-gray-400">
              Login to your Dashboard
            </p>
          </div>
          <form htmFor="useLogin" className="mt-12">
            <Label>Email*</Label>
            <div className="mt-2 rounded-md border p-2">
              <input type="text" className=" w-full" />
            </div>
            <div className="mt-4">
              <Label>Password*</Label>
              <div className="mt-2 rounded-md border p-2">
                <input type="password" className=" w-full" />
              </div>
            </div>
            <div className="mt-4 space-x-3 text-base">
              <input type="checkbox" /> <span>Remember me</span>
            </div>
            <button className="bg-lightBlue  mt-4 w-full rounded-md p-2 text-white transition-all hover:bg-blue-500/70">
              Login
            </button>
            <div className="mt-4 text-blue-500">
              <Link href="auth/register">
                <a className=" hover:underline">Don`t have an account? </a>
              </Link>
            </div>
          </form>
        </div>
        <Link href="/">
          <a className="mt-6 text-center text-blue-500">
            Forgot Your Password?
          </a>
        </Link>
      </div>
    </>
  );
}

export default Login;
