import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { useAppContext } from '../context/AppContext'
import { Navigate, useNavigate } from 'react-router-dom'

const MainBanner = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const {products} = useAppContext();
 const navigate = useNavigate()
 
  const slides = [
    { id: 1, img: assets.main_banner_bg1, imgSm: assets.main_banner_bg_sm },
    { id: 2, img: assets.main_banner_bg, imgSm: assets.main_banner_bg_sm2 },
    { id: 3, img: assets.main_banner_bg2, imgSm: assets.main_banner_bg_sm3 },
    { id: 4, img: assets.main_banner_bg3, imgSm: assets.main_banner_bg_sm4 },
    { id: 5, img: assets.main_banner_bg4, imgSm: assets.main_banner_bg_sm2 },
  ]

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/products?query=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  return (
    <div className='relative w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[600px]'>
      <div className='absolute inset-0 bg-gradient-to-r from-black/40 to-black/60 z-10 rounded-3xl'></div>
      
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ 
          clickable: true,
          dynamicBullets: true,
          renderBullet: (index, className) => `<span class="${className} !w-2 !h-2 sm:!w-2.5 sm:!h-2.5 bg-white/50 hover:bg-white rounded-full transition-colors duration-200 !mx-1 opacity-70 hover:opacity-100"></span>`
        }}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        className="w-full h-full rounded-3xl"
      >
        {slides.map(slide => (
          <SwiperSlide key={slide.id}>
            <div className='relative w-full h-full'>
              <img 
                src={slide.img} 
                alt="banner" 
                className="w-full h-full object-cover hidden md:block rounded-3xl" 
              />
              <img 
                src={slide.imgSm} 
                alt="banner" 
                className="w-full h-full object-cover md:hidden rounded-3xl" 
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      
      <button className='swiper-button-prev-custom absolute left-2 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40 rounded-xl lg:rounded-2xl transition-all duration-300 hidden sm:flex items-center justify-center text-white shadow-xl hover:shadow-2xl hover:scale-105'>
        <svg className='w-4 h-4 lg:w-5 lg:h-5' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' d='M15 19l-7-7 7-7' />
        </svg>
      </button>
      <button className='swiper-button-next-custom absolute right-2 sm:right-4 lg:right-6 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40 rounded-xl lg:rounded-2xl transition-all duration-300 hidden sm:flex items-center justify-center text-white shadow-xl hover:shadow-2xl hover:scale-105'>
        <svg className='w-4 h-4 lg:w-5 lg:h-5' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' d='M9 5l7 7-7 7' />
        </svg>
      </button>

      
      <div className='absolute inset-0 z-20 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8'>
        <div className='w-full max-w-4xl text-center'>
          
          
          <div className='inline-block px-3 py-1 sm:px-4 sm:py-1.5 md:px-6 md:py-2 mb-3 sm:mb-4 md:mb-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg md:rounded-xl text-green-400 text-[10px] sm:text-xs md:text-sm font-medium tracking-wide uppercase'>
            Fresh Premium Quality
          </div>

          
          <div className='space-y-2 sm:space-y-3 md:space-y-4 mb-4 sm:mb-6 md:mb-8 max-w-3xl mx-auto'>
            <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight tracking-tight px-2'>
              Quality in Every Bite
            </h1>
            <p className='text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-100 font-medium max-w-2xl mx-auto leading-relaxed px-2'>
              Exceptional taste meets unbeatable value. Shop premium products at the best prices.
            </p>
          </div>

          
          <div className='w-full max-w-2xl mx-auto mb-4 sm:mb-6 md:mb-8'>
            <div className='relative'>
              <input
            type='text'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch(e)}
            placeholder='Search products...'
            className='w-full pl-9 sm:pl-10 md:pl-12 pr-20 sm:pr-24 md:pr-32 py-2.5 sm:py-3 md:py-4 lg:py-5 bg-white/10 backdrop-blur-md border border-white/20 hover:border-white/40 focus:border-emerald-400/60 rounded-xl md:rounded-2xl text-white placeholder-white/60 font-medium text-xs sm:text-sm md:text-base lg:text-lg focus:outline-none focus:ring-2 focus:ring-emerald-400/30 transition-all duration-300 shadow-lg hover:shadow-xl'
          />
              <svg className='absolute left-3 sm:left-4 md:left-5 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white/60 pointer-events-none' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
              </svg>
              <button 
            onClick={handleSearch}  
            className='absolute right-1.5 sm:right-2 top-1/2 -translate-y-1/2 bg-emerald-600 hover:bg-emerald-700 text-white px-3 sm:px-4 md:px-6 lg:px-8 py-1.5 sm:py-2 md:py-2.5 lg:py-3 rounded-lg md:rounded-xl font-semibold text-[10px] sm:text-xs md:text-sm shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap border border-emerald-500/50 hover:scale-105'
          >
            Search
          </button>
            </div>
          </div>

          
          <div className='flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center max-w-lg mx-auto mb-4 sm:mb-6 md:mb-8'>
            <button 
              onClick={() => window.location.href = '/products'}
              className='flex items-center justify-center gap-2 px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-2.5 md:py-3 lg:py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg md:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-500/50 hover:scale-105 whitespace-nowrap text-xs sm:text-sm md:text-base'
            >
              Shop Now
              <svg className='w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
              </svg>
            </button>

            <button 
              onClick={() => window.location.href = '/products'}
              className='flex items-center justify-center gap-2 px-4 sm:px-5 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 lg:py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 hover:border-white/40 text-white font-medium rounded-lg md:rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 text-xs sm:text-sm md:text-base'
            >
              View All Products
            </button>
          </div>

        
          <div className='flex items-center justify-center gap-4 sm:gap-6 md:gap-8 pt-4 sm:pt-6 border-t border-white/10 text-[10px] sm:text-xs md:text-sm text-gray-200 max-w-md mx-auto'>
            <div className='flex items-center gap-1.5 sm:gap-2'>
              <div className='w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-emerald-500/10 border-2 border-emerald-400/30 rounded-md md:rounded-lg flex items-center justify-center'>
                <span className='text-[8px] sm:text-[9px] md:text-xs font-bold text-emerald-400'>100%</span>
              </div>
              <span className='whitespace-nowrap'>Fresh Guarantee</span>
            </div>
            <div className='flex items-center gap-1.5 sm:gap-2'>
              <div className='w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-green-500/10 border-2 border-green-400/30 rounded-md md:rounded-lg flex items-center justify-center'>
                <span className='text-[8px] sm:text-[9px] md:text-xs font-bold text-green-400'>2h</span>
              </div>
              <span className='whitespace-nowrap'>Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainBanner