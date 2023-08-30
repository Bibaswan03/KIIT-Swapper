import React from 'react'
import UpdateData from './UpdateData'
import { getServerSession } from 'next-auth'


async function page() {
    const login=await getServerSession();
    const display = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/getname`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: login.user.email }),
    });
    const allowdisplay = await display.json();
  return (
    <div>
      {/* <UpdateData login={login}/> */}
        <UpdateData login={login} data_sec={allowdisplay}/>
    </div>
  )
}

export default page