"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import Link from "next/link";

function ClientData({ login,response }) {
  const [fill, setfill] = useState(true);
  useEffect(() => {
    if (response.msg == "Found") {
      setfill(false);
    }
  }, []);

  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [roll, setroll] = useState("");
  const [branch, setbranch] = useState("");
  const [year, setyear] = useState("");
  const [semester, setsemester] = useState("");
  const [section, setsection] = useState("");
  const [disable, setdisable] = useState(true);

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.name === "name") {
      setname(e.target.value);
    }
    if (e.target.name === "phone") {
      setphone(e.target.value);
    }
    if (e.target.name === "roll") {
      setroll(e.target.value);
    }
    if (e.target.name === "year") {
      setyear(e.target.value);
    }
    if (e.target.name === "branch") {
      setbranch(e.target.value);
    }
    if (e.target.name === "semester") {
      setsemester(e.target.value);
    }
    if (e.target.name === "section") {
      setsection(e.target.value);
    }

    if (name && phone && roll && branch && year && semester && section) {
      setdisable(false);
    }
  };
  const submitres = async (e) => {
    let em = login.user.email;
    e.preventDefault();

    const data = {
      name: name,
      phone: phone,
      email: em,
      roll: roll,
      branch: branch,
      year: year,
      semester: semester,
      section: section,
    };

    let res = await fetch(`/api/addUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let response = await res.json();
    console.log(response.success);

    if (response.success === "true") {
      setname("");
      setroll("");
      setphone("");
      setbranch("");
      setsemester("");
      setyear("");
      setsection("");

      toast.success("Congrats! Your data is updated..", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
        // router.push("/");
        window.location.reload();
      }, 1500);
    }
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
      {fill && (
        <>
          <h1 className="my-10 text-center text-2xl font-semibold">
            Enter your details here
          </h1>
          <hr className="w-[40%] mx-auto border-2 border-blue-500" />
          <form className="w-[50vw] mx-auto my-10">
            <div className="relative z-0 w-full mb-6 group">
              <input
                value={name}
                onChange={handleChange}
                type="text"
                name="name"
                id="floating_name"
                className="block py-2.5 px-0 w-full text-[0.7rem] text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
              />
              <label
                htmlFor="floating_name"
                className="peer-focus:font-medium absolute text-[0.7rem] text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Name
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                value={phone}
                onChange={handleChange}
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                name="phone"
                id="floating_phone"
                className="block py-2.5 px-0 w-full text-[0.7rem] text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
              />
              <label
                htmlFor="floating_phone"
                className="peer-focus:font-medium absolute text-[0.7rem] text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Phone number (123-456-7890)
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                value={roll}
                onChange={handleChange}
                type="number"
                name="roll"
                id="floating_roll"
                className="block py-2.5 px-0 w-full text-[0.7rem] text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
              />
              <label
                htmlFor="floating_roll"
                className="peer-focus:font-medium absolute text-[0.7rem] text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Roll Number
              </label>
            </div>

            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <input
                  value={branch}
                  onChange={handleChange}
                  type="text"
                  name="branch"
                  id="floating_sem"
                  className="block py-2.5 px-0 w-full text-[0.7rem] text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  htmlFor="floating_sem"
                  className="peer-focus:font-medium absolute text-[0.7rem] text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Branch
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  value={year}
                  onChange={handleChange}
                  type="text"
                  name="year"
                  id="floating_last_name"
                  className="block py-2.5 px-0 w-full text-[0.7rem] text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  htmlFor="floating_last_name"
                  className="peer-focus:font-medium absolute text-[0.7rem] text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Year
                </label>
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <input
                  value={semester}
                  onChange={handleChange}
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  name="semester"
                  id="floating_phone"
                  className="block py-2.5 px-0 w-full text-[0.7rem] text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  htmlFor="floating_phone"
                  className="peer-focus:font-medium absolute text-[0.7rem] text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Semester
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  value={section}
                  onChange={handleChange}
                  type="text"
                  name="section"
                  id="floating_company"
                  className="block py-2.5 px-0 w-full text-[0.7rem] text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  htmlFor="floating_company"
                  className="peer-focus:font-medium absolute text-[0.7rem] text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Section (Format: Branch-Number)
                </label>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                disabled={disable}
                onClick={submitres}
                className="disabled:bg-blue-400 disabled:cursor-not-allowed text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-[0.7rem] w-full [0.7rem]:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </div>
            <p className="text-center text-[0.75rem] my-1 text-red-500">
              *All fields are required
            </p>
          </form>
        </>
      )}
      {!fill && (
        <div className="my-60">
          <h1 className="text-3xl font-bold text-black text-center">
            You have already filled your data
          </h1>
          <p className="text-[0.7rem] font-normal text-center text-slate-700 my-4">
            Now, if you want to apply for swapping section, then please click
            Continue or skip to visit Dashboard
          </p>
          <div className="flex justify-center items-center space-x-5">
            <Link href={"/SectionData"}>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-800 ">
                Continue &rarr;
              </button>
            </Link>
            <Link href={"/"}>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-800">
                Skip &rarr;
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default ClientData;