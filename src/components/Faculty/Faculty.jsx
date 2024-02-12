import React from "react";

function Faculty() {
  const faculties = [
    {
      image:
        "https://img1.wsimg.com/isteam/ip/428ecfa1-08f5-4a8c-bf19-e03593d0f016/Sayan.jpeg/:/cr=t:0.88%25,l:0%25,w:100%25,h:98.24%25/rs=w:365,h:365,cg:true",
      name: "SAYAN NASKAR",
      degree: "AEROSPACE ENGINEER",
      experience: "",
      college: "M-TECH,IIT KHARAGPUR",
    },
    {
      image:
        "https://img1.wsimg.com/isteam/ip/428ecfa1-08f5-4a8c-bf19-e03593d0f016/Sayan.jpeg/:/cr=t:0.88%25,l:0%25,w:100%25,h:98.24%25/rs=w:365,h:365,cg:true",
      name: "SAYAN NASKAR",
      degree: "CIVIL Engineering",
      experience: "CHIEF UAV INSTRUCTOR DGCA PILOT",
      college: "M-TECH,IIT KHARAGPUR",
    },
    {
      image:
        "https://img1.wsimg.com/isteam/ip/428ecfa1-08f5-4a8c-bf19-e03593d0f016/Sayan.jpeg/:/cr=t:0.88%25,l:0%25,w:100%25,h:98.24%25/rs=w:365,h:365,cg:true",
      name: "SAYAN NASKAR",
      degree: "AEROSPACE ENGINEER",
      experience: "",
      college: "M-TECH,IIT KHARAGPUR",
    },
    {
      image:
        "https://img1.wsimg.com/isteam/ip/428ecfa1-08f5-4a8c-bf19-e03593d0f016/Sayan.jpeg/:/cr=t:0.88%25,l:0%25,w:100%25,h:98.24%25/rs=w:365,h:365,cg:true",
      name: "SAYAN NASKAR",
      degree: "AEROSPACE ENGINEER",
      experience: "",
      college: "M-TECH,IIT KHARAGPUR",
    },
    {
      image:
        "https://img1.wsimg.com/isteam/ip/428ecfa1-08f5-4a8c-bf19-e03593d0f016/Sayan.jpeg/:/cr=t:0.88%25,l:0%25,w:100%25,h:98.24%25/rs=w:365,h:365,cg:true",
      name: "SAYAN NASKAR",
      degree: "AEROSPACE ENGINEER",
      experience: "",
      college: "M-TECH,IIT KHARAGPUR",
    },
    {
      image:
        "https://img1.wsimg.com/isteam/ip/428ecfa1-08f5-4a8c-bf19-e03593d0f016/Sayan.jpeg/:/cr=t:0.88%25,l:0%25,w:100%25,h:98.24%25/rs=w:365,h:365,cg:true",
      name: "SAYAN NASKAR",
      degree: "AEROSPACE ENGINEER",
      experience:
        "18 years experience in UAV M-Tech,Advanced Robotics & Mechatronics,Germany",
      college: "M-TECH,IIT KHARAGPUR",
    },
  ];

  return (
    <div className="flex  flex-col max-w-screen max-h-full justify-center items-center my-24 mb-40">
      <div className="text-center mt-10 ">
        <h1 className="text-6xl font-bold">DRONE ACADEMY FACULTY TEAM</h1>
      </div>

      <div className="grid sm:grid-cols-2  md:grid-cols-3 mt-20 p-4 gap-x-10  w-full md:w-[90%]   gap-y-14">
        {faculties.map((faculty) => {
          return (
            <div className="flex flex-col justify-center items-center gap-y-4 p-2 h-full  bg-cover  rounded-md  shadow-2xl hover:scale-105  hover:shadow-black transistion-all duration-200  ">
              <div className="w-[80%] h-[400px]  ">
                <img
                  src={faculty.image}
                  alt=""
                  loading="lazy"
                  className="w-[100%] h-[100%] object-cover" 
                />
              </div>

              <p className="text-3xl font-medium">{faculty.name}</p>
              <p className="text-xl capitalize text-center ">
                {faculty.degree}
              </p>
              <p className="text-xl capitalize text-center  leading-relaxed">
                {faculty.experience}
              </p>
              <p className="text-xl capitalize text-center ">
                {faculty.college}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Faculty;
