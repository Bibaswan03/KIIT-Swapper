import React from "react";
import { getServerSession } from "next-auth";
import History from "./History";

async function page() {
  const login = await getServerSession();
  let response1,data1;
  if (login) {
    let res = await fetch(
      `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/showmessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: login.user.email }),
      }
    );
    response1 = await res.json();
    
    const data = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/getUsers`);
    const res1 = await data.json();
    data1 = res1.data;

      return (
        <>
          <History data={response1} userss={res1} />
        </>
      );
  } else {
    window.location = process.env.NEXT_PUBLIC_VERCEL_URL;
  }
}

export default page;
