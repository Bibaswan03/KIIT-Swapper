import React from "react";
import { getServerSession } from "next-auth";

import LogoutNav from "./LogoutNav";
import LoginNav from "./LoginNav";

async function Navbar() {
  const login = await getServerSession();
  let response1;
  if (login) {
    const param = { reciever: login.user.email };
    let res = await fetch(
      `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/getmessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(param),
      }
    );
    response1 = await res.json();
  }

  if (login) {
    return <LoginNav login={login} data={response1} />;
  } else {
    return <LogoutNav />;
  }
}

export default Navbar;
