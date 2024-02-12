import React from "react";
import academy from "./academy.jpg";

function Academy() {
  return (
    <div className="max-w-screen h-full flex flex-col justify-evenly items-center gap-y-10  py-10 bg-black text-white ">
      <h1 className="text-6xl font-bold mt-10">IEM DRONE ACADEMY</h1>

      <div className="flex flex-row gap-x-20 px-20 py-2 h-[90%] mx-4 my-10 max-w-[90%] ">
        <div>
          <img src={academy} alt="" width="1150px"  />
        </div>

        {/* right side */}
        <div className="flex flex-col gap-y-10 justify-start items-center w-[100%]">
          <div className="text-4xl">
            <p>
              DGCA Drone Pilot Training in Collaboration with WEBEL, Government
              of West Bengal
            </p>
          </div>

          <div className="text-2xl gap-y-3 flex flex-col">
            <p className="leading-[35px]">
              DGCA Certification Course :DGCA-Approved training program offering
              Small, Rotorcraft, VLOS Certification. Best in Class Flight
              Simulators & high quality, NPNT-Ready, Make in India Drones.
              Top-rated DGCA-approved Instructors offering 1-1 Flying Lessons &
              Individual attention.
            </p>
            <p>Get DGCA Certified from West Bengal's First Drone Academy</p>
            <p>Course Duration - 5 Days</p>
            <p>DGCA Certification Partner- Drone Acharya Udaan LLP</p>
          </div>

          <div className='text-start w-full mt-10'>
            <p className="text-4xl">For Registration Contact : 123456789</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Academy;
