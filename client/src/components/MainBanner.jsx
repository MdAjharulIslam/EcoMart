import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const MainBanner = () => {
  const slides = [
    { id: 1, img: assets.main_banner_bg1, imgSm: assets.main_banner_bg_sm },
    { id: 2, img: assets.main_banner_bg,  imgSm: assets.main_banner_bg_sm },
    { id: 3, img: assets.main_banner_bg2, imgSm: assets.main_banner_bg_sm },
    { id: 4, img: assets.main_banner_bg3, imgSm: assets.main_banner_bg_sm },
  ]

  return (
    <div className='relative w-full'>
      {/* 🔹 Background Slider */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        
        loop
        autoplay={{ delay: 2000 }}
        pagination={{ clickable: true }}
        navigation
        className="w-full h-full "
      >
        {slides.map(slide => (
          <SwiperSlide key={slide.id}>
            <img src={slide.img} alt="banner" className="w-full hidden md:block rounded-4xl" />
            <img src={slide.imgSm} alt="banner" className="w-full md:hidden" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 🔹 Overlay (always on top) */}
      <div className='absolute inset-0 z-20 flex flex-col items-center md:items-start justify-end md:justify-center pb-24 md:pb-0 px-4 md:pl-18 lg:pl-24'>
        <h1 className='text-3xl text-white md:text-4xl lg:text-5xl font-bold text-center md:text-left max-w-72 md:max-w-80 lg:max-w-105 leading-tight lg:leading-15'>
          Quality in every bite, savings in every cart
        </h1>

        <div className='flex items-center mt-6 font-medium'>
          <Link to={"/products"} className='group flex items-center gap-2 px-7 md:px-9 py-3 bg-primary hover:bg-primary-dull transition rounded text-white cursor-pointer'>
            Shop Now
            <img className='md:hidden transition group-focus:translate-x-1' src={assets.white_arrow_icon} alt="arrow" />
          </Link>

          <Link to={"/products"} className='group hidden md:flex items-center gap-2 px-9 py-3 cursor-pointer'>
            Explore deals
            <img className='transition group-hover:translate-x-1' src={assets.black_arrow_icon} alt="arrow" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MainBanner
