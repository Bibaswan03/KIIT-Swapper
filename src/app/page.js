// import { getServerSession } from "next-auth";
// import Try from "./auth/signin/Try";
// import Dashboard from "./Dashboard";
// import ClientData from "./Filldata/ClientData";


// export default async function Home() {
//   const login = await getServerSession();

//   let dataSwap, data1, allowdisplay;
//   let response22;
  
//   if (login) {
//     const passparam={email: login.user.email}
//     let res2 = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/getFillConfirm`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body:JSON.stringify(passparam),
//     });
//     response22 = await res2.json();
//     let ds = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/getSwapDetails`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body:JSON.stringify(passparam),
//     });
//     dataSwap = await ds.json();
//     const data = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/getUsers`);
//     const res = await data.json();
//     data1 = res.data;
//     const display = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/getname`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(passparam),
//     });
//     allowdisplay = await display.json();
//   }

//   if (!login) {
//     return (
//       <div className="pt-40 min-h-screen">
//         <Try />
//       </div>
//     );
//   }
//   if (response22!=undefined) {
//     return (
//       <>
//         <div className="min-h-screen">
//           <Dashboard
//             data={data1}
//             swap={dataSwap}
//             login={login}
//             logindetails={allowdisplay}
//           />
//         </div>
//       </>
//     );
//   } else {
//     return (
//       <div className="min-h-screen">
//         <ClientData login={login} response={response22} />
//       </div>
//     );
//   }
// }




import { getServerSession } from "next-auth";
import Try from "./auth/signin/Try";
import Dashboard from "./Dashboard";
import ClientData from "./Filldata/ClientData";

export default async function Home() {
  const login = await getServerSession();

  let dataSwap, data1, allowdisplay;
  let response22;
  if (login) {
    const email = login.user.email;
    let res2 = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/getFillConfirm`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    });
    response22 = await res2.json();
    let ds = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/getSwapDetails`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    });
    dataSwap = await ds.json();
    const data = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/getUsers`);
    const res = await data.json();
    data1 = res.data;
    const display = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/getname`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: login.user.email }),
    });
    allowdisplay = await display.json();
  }

  if (!login) {
    return (
      <div className="pt-40 min-h-screen">
        <Try />
      </div>
    );
  }
  if (response22.success) {
    return (
      <>
        <div className="min-h-screen">
          <Dashboard
            data={data1}
            swap={dataSwap}
            login={login}
            logindetails={allowdisplay}
          />
        </div>
      </>
    );
  } else {
    return (
      <div className="min-h-screen">
        <ClientData login={login} response={response22} />
      </div>
    );
  }
}

