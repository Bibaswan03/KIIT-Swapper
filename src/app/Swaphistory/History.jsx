"use client";
import React, { useEffect, useState } from "react";

function History({ data, userss }) {
  let user_array = [],
    i;
  if (data) {
    for (i in data.data) {
      user_array.push(data.data[i]);
    }
  }

  let msg_list = [],
    j,
    k;
  if (user_array.length > 0) {
    for (j of user_array) {
      for (k of userss.data) {
        if (j.reciever == k.email) {
          msg_list.push(k);
        }
      }
    }
  }

  const [show, setshow] = useState(true);
  useEffect(() => {
    if (data.success != true) {
      setshow(false);
    }
  }, []);

  return (
    <div className="min-h-screen px-10">
      {user_array.length > 0 && (
        <div>
          <h1 className="mt-10 mb-4 text-center text-3xl font-bold text-cente capitalize text-purple-200">
            Swap History
          </h1>
          <p className="text-[1.2rem] mb-1 text-center text-purple-300">Keep a record of all your sent swap requests</p>
          <p className="text-[0.75rem] mb-10 text-center text-white">(Note : Rejected swap requests will automatically be deleted)</p>
          <hr className="w-[30%] border-2 border-purple-500 mx-auto mb-10" />
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full  mx-auto rounded-xl text-sm text-left text-gray-500 ">
              <thead className="text-xs text-gray-100 uppercase bg-purple-700 ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Roll No
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Whatsapp No.
                  </th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(msg_list).map((item) => {
                  return (
                    <tr
                      key={item}
                      className="bg-slate-800 border-b-[1px] rounded-b-sm border-purple-400"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-50 whitespace-nowrap "
                      >
                        {msg_list[item].name}
                      </th>
                      <td className="px-6 py-4 text-gray-50 ">
                        {msg_list[item].roll}
                      </td>
                      <td className="px-6 py-4 text-gray-50 ">
                        {msg_list[item].email}
                      </td>
                      <td className="px-6 py-4 text-gray-50 ">
                        {msg_list[item].phone}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}{" "}
      {msg_list.length == 0 && (
        <div className="h-[20vh] overflow-x-hidden text-4xl capitalize text-center text-white mt-64">
          <p>No Swap Requests sent yet</p>
          <p className="text-[1rem] text-purple-300">
            Try sending swap requests
          </p>
        </div>
      )}
    </div>
  );
}

export default History;
