"use client";
import React from "react";
import { BsInstagram,BsLinkedin } from "react-icons/bs";
import img from "../images/IMG_20221229_220623.jpg";
import Image from "next/image";
import img2 from "../images/prof1.jpg";

function page() {
  return (
    <div className="p-10 ">
      <div className="2xl:container  2xl:mx-auto kjgciuguig lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="w-full lg:w-full flex flex-col justify-center">
            <div className="w-fit mx-auto">
              <h1 className="animate-pulse delay-100 px-2 text-2xl pt-4 lg:text-5xl font-semibold leading-9 text-center bg-gradient-to-r from-violet-300 to-indigo-700 bg-clip-text text-transparent pb-4">
                Welcome to KIIT Swapper
              </h1>
              <hr className="w-full" />
            </div>
            <h1 className="text-xl pt-10 lg:text-3xl font-bold leading-9 text-center text-purple-300  pb-4">
              An interactive platform for swapping sections
            </h1>
            <p className="font-normal text-base py-2 lg:text-xl leading-6 text-center px-20  text-gray-200 ">
              Frustated from hundreds of mails for swapping sections? Tired of
              finding your swapbuddy from a pool of emails and messages? We
              heard you and here is what we can deliver to ease your struggle.
            </p>
          </div>
        </div>
      </div>
      <h1 className="text-xl pt-10 lg:text-3xl font-bold leading-9 text-center capitalize text-purple-300  pb-4">
        Meet our team
      </h1>
      <div className="flex justify-center items-center space-x-10">
        <div className="h-64 w-64">
          <Image src={img} alt="bibu" width={500} height={500} />
          <p className="text-purple-200 text-center mt-1">Bibaswan Nandi</p>
          <div className="flex items-center justify-center space-x-4 mt-2  text-purple-100">
            
            <a href="https://www.instagram.com/bibaswan_._19/" target="_blank">
            <BsInstagram />
            </a>
            <a href="https://www.linkedin.com/in/bibaswan-nandi-60591a227/" target="_blank">
            <BsLinkedin />
            </a>
          </div>
        </div>
        <div className="h-64 w-64">
          <Image
            className="mix-blend-screen "
            alt="debu"
            width={500}
            height={500}
            src={img2}
          />
          <p className="text-purple-200 text-center mt-1">
            Debangan Bhattacharyya
          </p>
          <div className="flex items-center justify-center space-x-4 mt-2  text-purple-100">
            
            <a href="https://www.instagram.com/debangan21/" target="_blank">
            <BsInstagram />
            </a>
            <a href="https://www.linkedin.com/in/debangan-bhattacharyya-a71523252/" target="_blank">
            <BsLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
