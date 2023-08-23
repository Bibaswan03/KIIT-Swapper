import React from "react";
import ClientComponent from "./ClientComponent";
import { getServerSession } from "next-auth";
async function page() {
  const session = await getServerSession();
  let dataSwap;
  if (session) {
    let ds = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/getswapers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: session.user.email }),
    });
    dataSwap = await ds.json();
  }
  return (
    <>
      <div className="min-h-screen">
        {dataSwap.success && (
          <ClientComponent data={dataSwap.data} data2={dataSwap.data2} />
        )}
      </div>
    </>
  );
}

export default page;
