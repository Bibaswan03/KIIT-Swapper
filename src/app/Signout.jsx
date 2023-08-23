"use client";
import React from "react";
import { signOut } from "next-auth/react";
import { VscAccount } from 'react-icons/vsc'

function Logout() {
  return (
    <div>
      <VscAccount className="text-2xl font-semibold" onClick={() => signOut({
        callbackUrl:
        `${process.env.NEXT_PUBLIC_VERCEL_URL}`,
      })} />

    </div>
  );
}

export default Logout;