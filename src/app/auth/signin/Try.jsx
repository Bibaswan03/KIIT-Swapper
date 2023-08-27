// import React from "react";
import { getProviders } from "next-auth/react";
import Image from "next/image";
import Login from "./Login";
import img from "../../images/icons.png";

async function Try() {
  const providers = await getProviders();

  return (
    <>
      <div className="w-full lg:w-full flex flex-col -mt-32 justify-center">
        <div className="w-fit mx-auto">
          <h1 className="animate-pulse delay-100 px-2 text-2xl pt-4 lg:text-5xl font-semibold leading-9 text-center bg-gradient-to-r from-violet-300 to-indigo-700 bg-clip-text text-transparent pb-4">
            KIIT Swapper
          </h1>
          <hr className="w-full" />
        </div>
        <h1 className="text-lg pt-10 lg:text-2xl font-bold leading-9 text-center text-purple-300  pb-4">
          An interactive platform for swapping sections
        </h1>
      </div>
      <div className="flex flex-col mt-6">
        <div>
          <Image
            className="rounded-full mx-auto p-10 md:w-56 md:h-60 my-auto w-52 h-48"
            src={img}
            height={300}
            width={500}
            alt="profile img"
          />
        </div>
        <Login providers={providers} />
      </div>
    </>
  );
}

export default Try;
