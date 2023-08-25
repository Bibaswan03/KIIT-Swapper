import React from 'react'

function Footer() {
  return (
    <footer className="bg-slate-950 shadow-2xl shadow-slate-200">
  <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
    
    <hr className="my-6 border-purple-500 sm:mx-auto lg:my-8" />
    <div className="sm:flex sm:items-center mx-auto justify-center ">
      <span className="text-sm text-gray-500 sm:text-center">
        © 2023{" "}
        <a href="https://flowbite.com/" className="hover:underline">
          KIIT Swapper™
        </a>
        . All Rights Reserved.
      </span>
    </div>
  </div>
</footer>


  )
}

export default Footer