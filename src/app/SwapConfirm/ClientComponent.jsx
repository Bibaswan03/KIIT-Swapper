"use client";
import React from "react";

function ClientComponent({ data, data2 }) {
  return (
    <div>
      <div className="min-h-screen flex justify-center items-center">
        <div className="bg-slate-700 md:w-[50vw]  md:h-[50vh] w-fit h-fit rounded-xl text-purple-300 p-4">
          <p className="text-center hidden lg:block text-purple-500 font-semibold mb-2 capitalize">
            Your swap details
          </p>
          <div className="flex md:flex-row flex-col justify-evenly">
            <div className="">
              <span className="text-center font-semibold text-purple-600">
                Your Details
              </span>
              <p className="text-justify">Email: {data.email}</p>
              <p className="text-justify">Name : {data.name}</p>
              <p className="text-justify">Roll : {data.roll}</p>
              <p className="text-justify">Old section : {data.oldsection}</p>
              <p className="text-justify">New section : {data.newsection}</p>
            </div>
            <div className="">
              <span className="text-center font-semibold text-purple-600">
                Your SwapBuddy Details
              </span>
              <p className="text-justify">Email: {data2.email}</p>
              <p className="text-justify">Name : {data2.name}</p>
              <p className="text-justify">Roll : {data2.roll}</p>
              <p className="text-justify">Old section : {data2.oldsection}</p>
              <p className="text-justify">New section : {data2.newsection}</p>
            </div>
          </div>

          {/* <div className="flex items-center  justify-center space-x-10 mt-2">
            <button
              onClick={() => setgetsure(true)}
              className="text-green-500  capitalize bg-black/20 rounded-md hover:text-green-400 px-3 py-1"
            >
              Swap
            </button>
            <button
              onClick={() => reject(swapemail, swapreciever)}
              className="text-red-600 capitalize bg-black/20 rounded-md hover:text-red-500 px-3 py-1"
            >
              reject
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default ClientComponent;
