"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

function UpdateData({ login,data_sec }) {
  const router = useRouter();
  const [section, setsection] = useState(data_sec.user.section);
  const [section1, setsection1] = useState("");
  const [section2, setsection2] = useState("EMPTY");
  const [section3, setsection3] = useState("EMPTY");
  const [section4, setsection4] = useState("EMPTY");
  const [disable, setdisable] = useState(true);
  const [getsure, setgetsure] = useState(false);
  const [sec, setsec] = useState(false)
  const [sec1, setsec1] = useState(false)
  const [sec2, setsec2] = useState(false)
  const [sec3, setsec3] = useState(false)
  const [sec4, setsec4] = useState(false)

  let dropdown_count ={
    "CSE": { "2": { "3": [], "4": [] }, "3": { "5": [], "6": [] }, "4": { "7": [], "8": [] } },
    "IT": { 2: { 3: [], 4: [] }, 3: { 5: [], 6: [] }, 4: { 7: [], 8: [] } },
    "CSSE": { 2: { 3: [], 4: [] }, 3: { 5: [], 6: [] }, 4: { 7: [], 8: [] } },
    "CSCE": { 2: { 3: [], 4: [] }, 3: { 5: [], 6: [] }, 4: { 7: [], 8: [] } },
  };
  
  for (let a = 1; a < 56; a++) {
    dropdown_count["CSE"]["2"]["3"].push("CSE-" + a);
    dropdown_count["CSE"]["2"]["4"].push("CSE-" + a);
    if(a<40){
      dropdown_count["CSE"]["3"]["5"].push("CSE-" + a);
      dropdown_count["CSE"]["3"]["6"].push("CSE-" + a);
    }
    if(a<30){
      dropdown_count["CSE"]["4"]["7"].push("CSE-" + a);
      dropdown_count["CSE"]["4"]["8"].push("CSE-" + a);
    }
    if(a<5){
      dropdown_count["IT"]["3"]["5"].push("IT-" + a);
      dropdown_count["IT"]["3"]["6"].push("IT-" + a);
      dropdown_count["IT"]["2"]["3"].push("IT-" + a);
      dropdown_count["IT"]["2"]["4"].push("IT-" + a);
      dropdown_count["IT"]["4"]["7"].push("IT-" + a);
      dropdown_count["IT"]["4"]["8"].push("IT-" + a);
    }
    if(a<3){
      dropdown_count["CSCE"]["3"]["5"].push("CSCE-" + a);
      dropdown_count["CSCE"]["3"]["6"].push("CSCE-" + a);
      dropdown_count["CSSE"]["3"]["5"].push("CSSE-" + a);
      dropdown_count["CSSE"]["3"]["6"].push("CSSE-" + a);
      dropdown_count["CSCE"]["2"]["3"].push("CSCE-" + a);
      dropdown_count["CSCE"]["2"]["4"].push("CSCE-" + a);
      dropdown_count["CSSE"]["2"]["3"].push("CSSE-" + a);
      dropdown_count["CSSE"]["2"]["4"].push("CSSE-" + a);
      dropdown_count["CSCE"]["4"]["7"].push("CSCE-" + a);
      dropdown_count["CSCE"]["4"]["8"].push("CSCE-" + a);
      dropdown_count["CSSE"]["4"]["7"].push("CSSE-" + a);
      dropdown_count["CSSE"]["4"]["8"].push("CSSE-" + a);
    }
  }

  

  const submitupdate = async (e) => {
    e.preventDefault();
    let email = login.user.email;

    if (!section2) {
      setsection2("EMPTY");
    }
    if (!section3) {
      setsection3("EMPTY");
    }
    if (!section4) {
      setsection4("EMPTY");
    }
    const data = {
      email: email,
      section: section.toUpperCase(),
      section1: section1.toUpperCase(),
      section2: section2.toUpperCase(),
      section3: section3.toUpperCase(),
      section4: section4.toUpperCase(),
    };

    let res = await fetch(`/api/updatedata`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let response = await res.json();

    if (response.success === "true") {
      setsection("");
      setsection1("");
      setsection2("EMPTY");
      setsection3("EMPTY");
      setsection4("EMPTY");

      toast.success("Data updated..", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setTimeout(() => {
        window.location = `${process.env.NEXT_PUBLIC_VERCEL_URL}`;
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
      <div>
        <h1 className="mb-4 text-center mt-20 text-2xl font-bold text-cente capitalize text-purple-200">
          Enter Your Section Details
        </h1>
        <hr className="w-[30%] border-2 border-purple-500 mx-auto px-10 mb-10" />
        <div className="flex justify-center items-center">
          <div>
          <p className="text-center text-[0.90rem] my-1 text-white">Note:</p>
          <p className="text-justify text-[0.85rem] my-1 text-white">
            Details once filled, cannot be changed later
          </p>
      </div>
        </div>

        <form
          className="w-[50vw] md:px-[100px] mx-auto my-10 mt-4"
          onSubmit={(e) => submitupdate(e)}
        >
          <div className="relative z-50 w-full mb-6 group">
                <button
                  
                  className="flex py-2.5 px-0 w-full disabled:cursor-not-allowed text-[0.7rem] text-gray-50  bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                  type="button"
                  onClick={() => {
                    setsec(!sec);setsec1(false)
                    
                  }}
                  id="dropdownMenuButton1"
                  data-te-dropdown-toggle-ref=""
                  aria-expanded="false"
                  data-te-ripple-init=""
                  data-te-ripple-color="light"
                >
                  {section}{" "}
                  {section == "Section" && (
                    <span className="text-red-500 ml-1"> *</span>
                  )}
                  {section != "Section" && (
                    <label
                      htmlFor="floating_last_name"
                      className="peer-focus:font-medium absolute text-[0.7rem] text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Current Section<span className="text-red-500 "> *</span>
                    </label>
                  )}
                  <span className="w-2 ml-auto mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </button>
                {sec && (
                  <div className="absolute z-50 top-12 left-0 border-white border rounded text-white text-[0.7rem] bg-slate-900 shadow-xl w-full  max-h-28 overflow-y-scroll scrollbar overflow-x-hidden">
                    <ul className="">
                   
                      {dropdown_count[data_sec.user.branch][data_sec.user.year][data_sec.user.semester].map((item,i)=>
                        (
                          <li
                            onClick={() => {
                              setsection(item); setsec(false);
                            }}
                            key={i}
                            className="cursor-pointer  p-1 px-2 hover:bg-slate-700 "
                          >
                            {item}
                          </li>
                        )
                        
                      )}
                    </ul>
                  </div>
                )}
              </div>
              <div className="relative z-40 w-full mb-6 group">
                <button
                  
                  className="flex py-2.5 px-0 w-full disabled:cursor-not-allowed text-[0.7rem] text-gray-50  bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                  type="button"
                  onClick={() => {
                    setsec1(!sec1)
                    
                  }}
                  id="dropdownMenuButton1"
                  data-te-dropdown-toggle-ref=""
                  aria-expanded="false"
                  data-te-ripple-init=""
                  data-te-ripple-color="light"
                >
                  {section1}{" "}
                  {section1 == "" && (
                    <><p>Section Preference 1</p><span className="text-red-500 ml-1"> *</span></>
                  )}
                  {section1 != "" && (
                    <label
                      htmlFor="floating_last_name"
                      className="peer-focus:font-medium absolute text-[0.7rem] text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Section Preference 1<span className="text-red-500 "> *</span>
                    </label>
                  )}
                  <span className="w-2 ml-auto mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </button>
                {sec1 && (
                  <div className="absolute z-50 top-12 left-0 border-white border rounded text-white text-[0.7rem] bg-slate-900 shadow-xl w-full  max-h-28 overflow-y-scroll scrollbar overflow-x-hidden">
                    <ul className="">
                    
                      {dropdown_count[data_sec.user.branch][data_sec.user.year][data_sec.user.semester].map((item,i)=>
                        (
                          <li
                            onClick={() => {
                              setsection1(item); setsec1(false);
                            }}
                            key={i}
                            className="cursor-pointer  p-1 px-2 hover:bg-slate-700 "
                          >
                            {item}
                          </li>
                        )
                        
                      )}
                    </ul>
                  </div>
                )}
              </div>

          <div className="grid md:grid-cols-3 md:gap-6">
            <div className="relative z-30 w-full mb-6 group">
                <button
                  
                  className="flex py-2.5 px-0 w-full disabled:cursor-not-allowed text-[0.7rem] text-gray-50  bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                  type="button"
                  onClick={() => {
                    setsec2(!sec2)
                    
                  }}
                  id="dropdownMenuButton1"
                  data-te-dropdown-toggle-ref=""
                  aria-expanded="false"
                  data-te-ripple-init=""
                  data-te-ripple-color="light"
                >
                  {section2 != "EMPTY" &&(<p>{section2}</p>)}
                  {section2 == "EMPTY" && (
                    <p>Section Preference 2</p>
                  )}
                  {section2 != "EMPTY" && (
                    <label
                      htmlFor="floating_last_name"
                      className="peer-focus:font-medium absolute text-[0.7rem] text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Section Preference 2
                    </label>
                  )}
                  <span className="w-2 ml-auto mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </button>
                {sec2 && (
                  <div className="absolute z-50 top-12 left-0 border-white border rounded text-white text-[0.7rem] bg-slate-900 shadow-xl w-full  max-h-28 overflow-y-scroll scrollbar overflow-x-hidden">
                    <ul className="">
                   
                      {dropdown_count[data_sec.user.branch][data_sec.user.year][data_sec.user.semester].map((item,i)=>
                        (
                          <li
                            onClick={() => {
                              setsection2(item); setsec2(false);
                            }}
                            key={i}
                            className="cursor-pointer  p-1 px-2 hover:bg-slate-700 "
                          >
                            {item}
                          </li>
                        )
                        
                      )}
                    </ul>
                  </div>
                )}
            </div>
              <div className="relative z-20 w-full mb-6 group">
                <button
                  
                  className="flex py-2.5 px-0 w-full disabled:cursor-not-allowed text-[0.7rem] text-gray-50  bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                  type="button"
                  onClick={() => {
                    setsec3(!sec3)
                    
                  }}
                  id="dropdownMenuButton1"
                  data-te-dropdown-toggle-ref=""
                  aria-expanded="false"
                  data-te-ripple-init=""
                  data-te-ripple-color="light"
                >
                  {section3 != "EMPTY" &&(<p>{section3}</p>)}
                  {section3 == "EMPTY" && (
                    <p>Section Preference 3</p>
                  )}
                  {section3 != "EMPTY" && (
                    <label
                      htmlFor="floating_last_name"
                      className="peer-focus:font-medium absolute text-[0.7rem] text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Section Preference 3
                    </label>
                  )}
                  <span className="w-2 ml-auto mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </button>
                {sec3 && (
                  <div className="absolute z-50 top-12 left-0 border-white border rounded text-white text-[0.7rem] bg-slate-900 shadow-xl w-full  max-h-28 overflow-y-scroll scrollbar overflow-x-hidden">
                    <ul className="">
                  
                      {dropdown_count[data_sec.user.branch][data_sec.user.year][data_sec.user.semester].map((item,i)=>
                        (
                          <li
                            onClick={() => {
                              setsection3(item); setsec3(false);
                            }}
                            key={i}
                            className="cursor-pointer  p-1 px-2 hover:bg-slate-700 "
                          >
                            {item}
                          </li>
                        )
                        
                      )}
                    </ul>
                  </div>
                )}
              </div>
              <div className="relative z-10 w-full mb-6 group">
                <button
                  
                  className="flex py-2.5 px-0 w-full disabled:cursor-not-allowed text-[0.7rem] text-gray-50  bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                  type="button"
                  onClick={() => {
                    setsec4(!sec4)
                    
                  }}
                  id="dropdownMenuButton1"
                  data-te-dropdown-toggle-ref=""
                  aria-expanded="false"
                  data-te-ripple-init=""
                  data-te-ripple-color="light"
                >
                  {section4 != "EMPTY" &&(<p>{section4}</p>)}
                  {section4 == "EMPTY" && (
                    <p>Section Preference 4</p>
                  )}
                  {section4 != "EMPTY" && (
                    <label
                      htmlFor="floating_last_name"
                      className="peer-focus:font-medium absolute text-[0.7rem] text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Section Preference 4
                    </label>
                  )}
                  <span className="w-2 ml-auto mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </button>
                {sec4 && (
                  <div className="absolute z-50 top-12 left-0 border-white border rounded text-white text-[0.7rem] bg-slate-900 shadow-xl w-full  max-h-28 overflow-y-scroll scrollbar overflow-x-hidden">
                    <ul className="">
                 
                      {dropdown_count[data_sec.user.branch][data_sec.user.year][data_sec.user.semester].map((item,i)=>
                        (
                          <li
                            onClick={() => {
                              setsection4(item); setsec4(false);
                            }}
                            key={i}
                            className="cursor-pointer  p-1 px-2 hover:bg-slate-700 "
                          >
                            {item}
                          </li>
                        )
                        
                      )}
                    </ul>
                  </div>
                )}
              </div>
          </div>
          <div className="flex items-center mt-1">
            <input
              id="link-checkbox"
              onChange={() => setgetsure(!getsure)}
              type="checkbox"
              defaultValue=""
              className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500"
            />
            <label
              htmlFor="link-checkbox"
              className="ml-2 text-sm font-medium text-white "
            >
              I hereby declare that all the details provided are as per requirements
              mentioned below
            </label>
          </div>
          <div className="flex items-center justify-center mt-4">
            <button
              disabled={!section ||!section1|| !getsure}
              type="submit"
              className=" text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 disabled:cursor-not-allowed disabled:bg-purple-400 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
            >
              Submit
            </button>
          </div>
          <p className="text-center text-[0.75rem] my-2 text-red-500">
            *Fields are required
          </p>
        </form>
      </div>
    </>
  );
}

export default UpdateData;
