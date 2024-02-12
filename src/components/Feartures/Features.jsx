import React from "react";
import FeaturesCard from "./FeaturesCard";


const features = [
  {
    image: "https://images.unsplash.com/photo-1482057207639-c21a35e2a151?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fGRyb25lfGVufDB8fDB8fHww",
    title:"The Firefighter Drone Prototype AB001 at West Bengal Fire & Emergency Services ",
  },
  {
    image: "https://images.unsplash.com/photo-1482057207639-c21a35e2a151?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fGRyb25lfGVufDB8fDB8fHww",
    title: "PROTOTYPE AB001 ",
  },
  {
    image: "https://images.unsplash.com/photo-1482057207639-c21a35e2a151?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fGRyb25lfGVufDB8fDB8fHww",
    title: "PROTOTYPE AB001 ",
  },
];

const features2 = [
    {
        image : "https://images.unsplash.com/photo-1482057207639-c21a35e2a151?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fGRyb25lfGVufDB8fDB8fHww",
        title : "PROTOTYPE"
    },
     {
        image : "https://images.unsplash.com/photo-1482057207639-c21a35e2a151?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fGRyb25lfGVufDB8fDB8fHww",
        title : "PROTOTYPE"
     },
      {
        image : "https://images.unsplash.com/photo-1482057207639-c21a35e2a151?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fGRyb25lfGVufDB8fDB8fHww",
        title : "PROTOTYPE"
      }
    ];



function Features() {
  return (
    <div className="w-full h-auto flex flex-col gap-y-20 px-14 py-4 my-20 " >

      {/* features1 */}
      <div className=" flex flex-col justify-center items-center p-5 gap-y-5  ">
        <h1 className="text-5xl my-4 font-semibold">FIREFIGHTER DRONE PROTOTYPE AB001</h1>
        <div className="flex  flex-col sm:flex-row gap-x-14">
          {features.map((feature, index) => {
            return <FeaturesCard feature={feature} index={index} />;
          })}
        </div>
      </div>

      {/* feature2  */}
      <div className="flex flex-col justify-center items-center p-5 gap-y-5 ">
        <h1 className="text-5xl my-4 font-semibold">DESIGNED TO EXTINGUISH FIRE IN HIGH RISE BUILDINGS</h1>
        <div className="flex flex-col sm:flex-row gap-x-14">
          {features2.map((feature, index) => {
            return <FeaturesCard feature={feature} index={index} />;
          })}
        </div>
      </div>

    </div>
  );
}

export default Features;
