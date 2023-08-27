import React from "react";

function page() {
  return (
    <>
      <div className="min-h-[100vh] overflow-x-hidden text-4xl text-center text-white mt-10 ">
        <p>Share your valuable feedback and help us improve..</p>
        <div className="flex justify-center items-center">
        
        <iframe
        className="mt-6 text-purple-500 bg-transparent"
            width={2500}
            height={1200}
            src="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAMAAF8Dov9UQUlDMTVBQjBQU0JZTFNJRlFWNzdPWElEMy4u&embed=true"
            style={{ border: "none", maxWidth: "100%", maxHeight: "100vh" }}
            allowFullScreen=""
            webkitallowfullscreen=""
            mozallowfullscreen=""
            msallowfullscreen=""
          >
            &nbsp;
          </iframe>
        </div>
        {/* <p className="text-[1rem] text-purple-300">Coming soon....</p> */}
      </div>
      
    </>
  );
}

export default page;
