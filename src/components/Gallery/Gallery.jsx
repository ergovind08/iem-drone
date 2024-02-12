import React from "react";
import img1 from "./images/img_1.jpg";
import img2 from "./images/img_2.jpg";
import img3 from "./images/img_3.jpg";
import img4 from "./images/img_4.jpg";
import img5 from "./images/img_5.jpg";
import img6 from "./images/img_6.jpg";

function Gallery() {
  const images = [img1, img2, img3, img4, img5, img6,img1, img2];

  return (
    <div className="flex flex-col w-screen h-fit justify-center items-center my-24 mb-40">
      <h1 className="text-6xl text-center mt-10 font-bold">Gallery</h1>
      <div className="grid sm:grid-cols-2  md:grid-cols-4 mt-20 p-4 gap-x-4 w-full md:w-[90%]  gap-y-14">
        {
          images.map((image,i) => {
            return (
              <div className="w-[100%] h-[400px]  hover:-translate-y-6 hover:scale-105 shadow-2xl hover:shadow-black transistion-all duration-300 rounded-md overflow-hidden ">
                <img src={image} alt=""  className="w-[100%] h-[100%] object-cover"  />
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default Gallery;
