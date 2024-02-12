import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';


import image1 from './images/img_1.jpg';
import image2 from './images/img_2.jpg';
import image3 from './images/img_3.jpg';
import image4 from './images/img_4.jpg';
import image5 from './images/img_5.jpg';
import image6 from './images/img_6.jpg';

const images = [image1, image2, image3, image4, image5, image6];

function Media() {
  return (
    <div className="container w-full flex flex-col mx-auto my-24 gap-y-4 pb-14 ">
      <h1 className="heading text-center py-4 text-6xl my-2 font-bold text-black">Media</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        autoplay={true}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className=" w-[100%] "
        
      >

        <div className='flex flex-row   '>
          {
            images.map((image,i ) => {
              return (
                <SwiperSlide className='flex flex-col justify-center items-center w-[50%] '>
                <div className='w-[100%] h-[400px]'>

                <img src={image}  alt="slide_image" className='w-[100%] h-[100%] object-cover'   />
                </div>
                <p className='text-center pb-8 pt-2 text-[18px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, voluptatum.</p>
                </SwiperSlide>
              )
            })
          }
        </div>
        

       

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Media;