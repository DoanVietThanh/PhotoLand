import React from 'react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../slider.css';
import CameraImg from '../img/camera.png';

const sliderData = [
  {
    img: CameraImg,
    pretitle: 'Special offer',
    titlePart1: 'Save 20%',
    titlePart2: 'On your',
    titlePart3: 'First order',
    btnText: 'Shop now',
  },
  {
    img: CameraImg,
    pretitle: 'Special offer',
    titlePart1: 'Save 20%',
    titlePart2: 'On your',
    titlePart3: 'First order',
    btnText: 'Shop now',
  },
  {
    img: CameraImg,
    pretitle: 'Special offer',
    titlePart1: 'Save 20%',
    titlePart2: 'On your',
    titlePart3: 'First order',
    btnText: 'Shop now',
  },
];

const MainSlider = () => {
  return (
    <>
      <Swiper
        modules={[Pagination, Autoplay]}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className='mainSlider h-full bg-primary bg-mainSlider xl:bg-no-repeat max-w-lg lg:max-w-none rounded-[16px] overflow-hidden drop-shadow-2x1'
      >
        {sliderData.map((slideItem, index) => (
          <SwiperSlide key={index}>
            <div className='sm:min-h-[500px] flex flex-col lg:flex-row h-full p-[20px] md:p-[60px]  '>
              <div className='w-ful lg:flex-1'>
                <div className='uppercase mb-1 text-center lg:text-left'>
                  {slideItem.pretitle}
                </div>
                <div className='text-3xl mb-8 md:text-[46px] font-semibold text-center lg:text-left flex flex-col gap-8 sm:gap-0 md:gap-2'>
                  <span>{slideItem.titlePart1}</span>
                  <span>{slideItem.titlePart2}</span>
                  <span>{slideItem.titlePart3}</span>
                </div>
                <button className='btn btn-accent mx-auto hover:cursor-pointer xl:float-left'>
                  shop now
                </button>
              </div>
              <div className='flex-1'>
                <img
                  src={slideItem.img}
                  alt='img'
                  className='xl:absolute xl:-right-20 md:pt-4 '
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default MainSlider;
