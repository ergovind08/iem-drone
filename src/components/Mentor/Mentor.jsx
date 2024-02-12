import React from "react";

function Mentor() {

  const mentors = [
    {
      name: "Prof.Dr.Siddhartha Das",
      image: "https://img1.wsimg.com/isteam/ip/428ecfa1-08f5-4a8c-bf19-e03593d0f016/Siddhartha%20Sir.jpeg/:/cr=t:0%25,l:0.88%25,w:98.25%25,h:100%25/rs=w:730,h:730,cg:true",
      designation: "MANAGING DIRECTOR,STEP IIT KHARAGPUR",
    },
    {
      name: "Prof.Dr.Siddhartha Das",
      image: "https://img1.wsimg.com/isteam/ip/428ecfa1-08f5-4a8c-bf19-e03593d0f016/Siddhartha%20Sir.jpeg/:/cr=t:0%25,l:0.88%25,w:98.25%25,h:100%25/rs=w:730,h:730,cg:true",
      designation: "MANAGING DIRECTOR,STEP IIT KHARAGPUR",
    },
    {
      name: "Prof.Dr.Siddhartha Das",
      image: "https://img1.wsimg.com/isteam/ip/428ecfa1-08f5-4a8c-bf19-e03593d0f016/Siddhartha%20Sir.jpeg/:/cr=t:0%25,l:0.88%25,w:98.25%25,h:100%25/rs=w:730,h:730,cg:true",
      designation: "MANAGING DIRECTOR,STEP IIT KHARAGPUR",
    }
     
    
  ];


  return (
    <div className="flex flex-col max-w-screen max-h-full justify-center items-center my-24 mb-40">
      <div className="text-center mt-10 ">
        <h1 className="text-6xl font-bold">OUR MENTORS</h1>
      </div>

      <div className="grid sm:grid-cols-2  md:grid-cols-3 mt-20 p-4 space-x-8 w-full md:w-[90%] h-fit space-y-10">
        {
            mentors.map((mentor) => {
          return (
            <div className="flex flex-col justify-center items-center gap-y-6 p-2  rounded-md  shadow-2xl  hover:scale-105  hover:shadow-black transistion-all duration-200  ">
            <div className="w-[90%] h-[400px]">
              <img src={mentor.image} alt=""  loading="lazy" className="w-full h-full object-cover"/>
            </div>
              <div className="text-3xl font-medium">{mentor.name}</div>
              <div className="text-2xl capitalize text-center ">{mentor.designation}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Mentor;
