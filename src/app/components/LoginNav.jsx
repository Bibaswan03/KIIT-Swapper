"use client";
import React from "react";
import { BiSearch } from "react-icons/bi";
import { BsBell, BsFillBellFill } from "react-icons/bs";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function LoginNav({ login, data }) {
  console.log(data.data);
  const [dropdown, setdropdown] = useState(false);
  const [open, setopen] = useState(false);

  const logout = () => {
    toast.success("Logging you out!!", {
      position: "bottom-left",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setTimeout(() => {
      signOut({
        callbackUrl: process.env.VERCEL_URL || "http://localhost:3000",
      });
    }, 500);
  };

  return (
    <>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {open &&<div className="absolute z-30 top-14 right-16 bg-slate-200 text-blue-500 p-3 rounded">
        <span>{data.data.message}</span>
      </div>}
      <nav className="relative flex flex-wrap items-center justify-between bg-[#FBFBFB] py-2 text-neutral-500 shadow-lg focus:text-neutral-700 dark:bg-neutral-600 lg:py-4">
        <div className="md:flex w-full flex-wrap items-center justify-between px-3">
          <Link className="ml-2 text-xl text-neutral-800 " href={"/"}>
            KIIT-Swapper
          </Link>
          <div className="ml-5 flex w-[90%] md:w-[30%] items-center justify-between">
            <input
              type="search"
              className="relative m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none motion-reduce:transition-none "
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon2"
            />
            {/*Search icon*/}
            <div className="flex items-center justify-center space-x-3">
              <span
                className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center font-normal text-2xl text-neutral-700 dark:text-neutral-200"
                id="basic-addon2"
              >
                <BiSearch />
              </span>
              {open && (
                <span
                  className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center font-normal text-2xl text-neutral-700 dark:text-neutral-200"
                  id="basic-addon2"
                  onClick={() => {setopen(false)}}
                >
                  <BsBell />
                </span>
              )}
              {!open && (
                <span
                  className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center font-normal text-2xl text-neutral-700 dark:text-neutral-200"
                  id="basic-addon2"
                  onClick={() =>{ setopen(true);setdropdown(false)}}
                >
                  <BsFillBellFill />
                </span>
              )}

              {/* <span className='text-3xl'>
                        <MdAccountCircle/>
                        </span> */}
              {/* <Signout/> */}
              {/* <VscAccount className='text-2xl' onMouseOver={()=>setdropdown(true)}/> */}
              <img
                src={login.user.image}
                className="rounded-full w-8 h-8 whitespace-nowrap  "
                onMouseOver={() => {setdropdown(true) ; setopen(false)}}
              />
            </div>
            {dropdown && (
              <div
                onMouseLeave={() => setdropdown(false)}
                className="w-30 p-2 bg-slate-200 z-30 h-fit absolute top-[49px] right-5 text-[0.8rem] font-semibold rounded-md"
              >
                <ul>
                  <Link href={"/Accounts"}>
                    <li className=" hover:text-blue-700 cursor-pointer">
                      My Account
                    </li>
                  </Link>
                  <li
                    className="mt-2  hover:text-blue-700 cursor-pointer"
                    onClick={logout}
                  >
                    Log Out
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default LoginNav;
