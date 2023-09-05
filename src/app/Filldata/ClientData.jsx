"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ClientData({ login, response }) {
  const router = useRouter();
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [roll, setroll] = useState("");
  const [branch, setbranch] = useState("Branch");
  const [year, setyear] = useState("Year");
  const [semester, setsemester] = useState("Semester");
  const [section, setsection] = useState("Section");
  const [disable, setdisable] = useState(true);
  const [disp, setdisp] = useState(false);
  const [getsure, setgetsure] = useState(false);
  const [brn, setbrn] = useState(false);
  const [sec, setsec] = useState(false);
  const [yr, setyr] = useState(false);
  const [sm, setsm] = useState(false);

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
 


  useEffect(() => {
    if (response.success) {
      router.push(process.env.NEXT_PUBLIC_VERCEL_URL);
    } else {
      setdisp(true);
    }
  }, []);
  const yearss = ["2", "3", "4"];

  const semesterss = {
    2: ["3", "4"],
    3: ["5", "6"],
    4: ["7", "8"],
  };
  const branches = ["CSE", "IT", "CSSE", "CSCE"];
  const sectionss = {
    CSE: [],
    IT: [],
    CSSE: [],
    CSCE: [],
  };

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
    setdisable(true);
    toast.info("Please wait while your form is being submitted..", {
      position: "bottom-left",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    let em = login.user.email;
    e.preventDefault();

    const data = {
      name: name,
      phone: phone,
      email: em,
      roll: roll,
      branch: branch.toUpperCase(),
      year: year,
      semester: semester,
      section: section.toUpperCase(),
    };

    let res = await fetch(`/api/addUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let response = await res.json();

    if (response.success === "true") {
      setname("");
      setroll("");
      setphone("");
      setbranch("");
      setsemester("");
      setyear("");
      setsection("");

      toast.success("Data updated..", {
        position: "bottom-left",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setTimeout(() => {
        window.location = `${process.env.NEXT_PUBLIC_VERCEL_URL}/SectionData`;
      }, 500);
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
      {disp && (
        <>
          <h1 className="mt-10 text-center text-2xl font-bold text-cente capitalize text-purple-200">
            Enter Your Details
          </h1>
          <hr className="w-[30%] border-2 border-purple-500 mt-4 mx-auto px-10 mb-10" />
          <form className="w-[50vw] mx-auto my-10" onSubmit={submitres}>
            <div className="relative z-0 w-full mb-6 group">
              <input
                value={name}
                onChange={handleChange}
                type="text"
                name="name"
                id="floating_name"
                className="block py-2.5 px-0 w-full text-[0.7rem] text-gray-50  bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                placeholder=" "
                required=""
              />
              <label
                htmlFor="floating_name"
                className="peer-focus:font-medium absolute text-[0.7rem] text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Name
                <span className="text-red-500 "> *</span>
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                value={phone}
                onChange={handleChange}
                type="tel"
                name="phone"
                id="floating_phone"
                className="block py-2.5 px-0 w-full text-[0.7rem] text-gray-50  bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                placeholder=""
                required=""
              />
              <label
                htmlFor="floating_phone"
                className="peer-focus:font-medium absolute text-[0.7rem] text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Whatsapp Number <span className="text-red-500 "> *</span>
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                value={roll}
                onChange={handleChange}
                type="text"
                name="roll"
                className="block py-2.5 px-0 w-full text-[0.7rem] text-gray-50  bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                placeholder=" "
                required=""
              />
              <label
                htmlFor="floating_roll"
                className="peer-focus:font-medium absolute text-[0.7rem] text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Roll Number <span className="text-red-500 "> *</span>
              </label>
            </div>

            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-50 w-full mb-6 group">
                <button
                  className="flex py-2.5 px-0 w-full text-[0.7rem] text-gray-50  bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                  type="button"
                  onClick={() => setbrn(!brn)}
                  id="dropdownMenuButton1"
                  data-te-dropdown-toggle-ref=""
                  aria-expanded="false"
                  data-te-ripple-init=""
                  data-te-ripple-color="light"
                >
                  {branch}{" "}
                  {branch == "Branch" && (
                    <span className="text-red-500 ml-1"> *</span>
                  )}
                  {branch != "Branch" && (
                    <label
                      htmlFor="floating_last_name"
                      className="peer-focus:font-medium absolute text-[0.7rem] text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Branch<span className="text-red-500 "> *</span>
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
                {brn && (
                  <div className="absolute top-12 left-0 border-white border rounded text-white text-[0.7rem] bg-slate-900 shadow-xl w-full z-30 max-h-28 overflow-y-scroll scrollbar overflow-x-hidden">
                    <ul className="">
                      {branches.map((item, i) => (
                        <li
                          onClick={() => {
                            setbranch(item);
                            setbrn(false);
                            setsection("Section");
                            setyear("Year");
                            setsemester("Semester");setsec(false);setsm(false);setyr(false);
                          }}
                          key={i}
                          className="cursor-pointer disabled:cursor-not-allowed p-1 px-2 hover:bg-slate-700 "
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="relative z-40 w-full mb-6 group">
                <button
                  disabled={branch == "Branch"}
                  className="flex py-2.5 px-0 w-full disabled:cursor-not-allowed text-[0.7rem] text-gray-50  bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                  type="button"
                  onClick={() => setyr(!yr)}
                  id="dropdownMenuButton1"
                  data-te-dropdown-toggle-ref=""
                  aria-expanded="false"
                  data-te-ripple-init=""
                  data-te-ripple-color="light"
                >
                  {year}{" "}
                  {year == "Year" && (
                    <span className="text-red-500 ml-1"> *</span>
                  )}
                  {year != "Year" && (
                    <label
                      htmlFor="floating_last_name"
                      className="peer-focus:font-medium absolute text-[0.7rem] text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Year<span className="text-red-500 "> *</span>
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
                {yr && (
                  <div className="absolute top-12 left-0 border-white border rounded text-white text-[0.7rem] bg-slate-900 shadow-xl w-full z-30 max-h-28 overflow-y-scroll scrollbar overflow-x-hidden">
                    <ul className="">
                      {yearss.map((item, i) => (
                        <li
                          onClick={() => {
                            setyear(item); setyr(false);setsection("Section");
                            setsemester("Semester");setsec(false);setsm(false);
                          }}
                          key={i}
                          className="cursor-pointer  p-1 px-2 hover:bg-slate-700 "
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-30 w-full mb-6 group">
                <button
                  disabled={branch == "Branch" || year == "Year"}
                  className="flex py-2.5 px-0 w-full disabled:cursor-not-allowed text-[0.7rem] text-gray-50  bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                  type="button"
                  onClick={() => setsm(!sm)}
                  id="dropdownMenuButton1"
                  data-te-dropdown-toggle-ref=""
                  aria-expanded="false"
                  data-te-ripple-init=""
                  data-te-ripple-color="light"
                >
                  {semester}{" "}
                  {semester == "Semester" && (
                    <span className="text-red-500 ml-1"> *</span>
                  )}
                  {semester != "Semester" && (
                    <label
                      htmlFor="floating_last_name"
                      className="peer-focus:font-medium absolute text-[0.7rem] text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Semester<span className="text-red-500 "> *</span>
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
                {sm && (
                  <div className="absolute top-12 left-0 border-white border rounded text-white text-[0.7rem] bg-slate-900 shadow-xl w-full z-30 max-h-28 overflow-y-scroll scrollbar overflow-x-hidden">
                    <ul className="">
                      {semesterss[year].map((item, i) => (
                        <li
                          onClick={() => {
                            setsemester(item); setsm(false);setsection("Section");setsec(false) ;
                          }}
                          key={i}
                          className="cursor-pointer  p-1 px-2 hover:bg-slate-700 "
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="relative z-20 w-full mb-6 group">
                <button
                  disabled={
                    branch == "Branch" ||
                    year == "Year" ||
                    semester == "Semester"
                  }
                  className="flex py-2.5 px-0 w-full disabled:cursor-not-allowed text-[0.7rem] text-gray-50  bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                  type="button"
                  onClick={() => {
                    setsec(!sec)
                    
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
                      Section<span className="text-red-500 "> *</span>
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
              
                      {dropdown_count[branch][year][semester].map((item,i)=>
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
                I hereby declare that all the details provided are true and are
                as per requirements
              </label>
            </div>

            <div className="flex justify-center pt-6">
              <button
                type="submit"
                disabled={
                  disable ||
                  !getsure ||
                  section == "Section" ||
                  branch == "Branch" || year=="Year" || semester=="Semester"
                }
                className="disabled:bg-purple-400 disabled:cursor-not-allowed text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-[0.7rem] w-full [0.7rem]:w-auto px-5 py-2.5 text-center"
              >
                Submit
              </button>
            </div>
            <p className="text-center text-[0.75rem] my-1 pt-2 text-red-500">
              *All fields are required
            </p>
            <p className="text-center text-[0.75rem] my-1 text-white">
              Details other than whatsapp number once filled, cannot be changed
              for the rest of the semester
            </p>
          </form>
        </>
      )}
    </>
  );
}

export default ClientData;
