import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper';
import Product from './Product';
import '../slider.css';

const ProductSlider = ({ data }) => {
  return (
    <Swiper
      modules={[Pagination, Navigation, Autoplay]}
      loop={true}
      navigation={true}
      breakpoints={{
        550: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        800: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1440: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
      }}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      className='productSlider mx-auto max-w-[360px] md:max-w-lg xl:max-w-[1410px]'
    >
      <>
        {data?.map((product) => (
          <SwiperSlide key={product.id}>
            <Product product={product} />
          </SwiperSlide>
        ))}
      </>
    </Swiper>
  );
};

export default ProductSlider;
