import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { assets } from "../assets/assets";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Maria",
      location: "Kishoregonj, Dhaka",
      image: assets.testimonial_image_1,
      testimonial:
        "EcoMart makes grocery shopping so easy! The fresh produce and fast delivery always impress me.",
    },
    {
      name: "Shanaz",
      location: "Mymenshingh, Bangladesh",
      image: assets.testimonial_image_2,
      testimonial:
        "I love EcoMart! Ordering groceries online has never been simpler, and the quality is always top-notch.",
    },
    {
      name: "Shila Islam",
      location: "Dhaka, Bangladesh",
      image: assets.testimonial_image_1,
      testimonial:
        "Highly recommend EcoMart! Their organic selection is fantastic and the delivery service is super reliable.",
    },
    {
      name: "Rahim Khan",
      location: "Chittagong, Bangladesh",
      image: assets.testimonial_image_3,
      testimonial:
        "Best grocery delivery in town! Fresh vegetables and fruits delivered within hours. Highly satisfied!",
    },
    {
      name: "Fatema Begum",
      location: "Sylhet, Bangladesh",
      image: assets.testimonial_image_2,
      testimonial:
        "EcoMart saved my busy schedule. Quality products at great prices with lightning-fast delivery.",
    },
    {
      name: "Karim Ahmed",
      location: "Rajshahi, Bangladesh",
      image: assets.testimonial_image_1,
      testimonial:
        "Organic produce is genuinely fresh! Customer service is excellent too. Will keep ordering.",
    },
    {
      name: "Ayesha Siddiqua",
      location: "Khulna, Bangladesh",
      image: assets.testimonial_image_3,
      testimonial:
        "Perfect for weekly grocery needs. Wide variety and consistent quality every single time.",
    },
    {
      name: "Mohammed Ali",
      location: "Barisal, Bangladesh",
      image: assets.testimonial_image_2,
      testimonial:
        "EcoMart is my go-to for all grocery needs. Affordable prices and premium quality guaranteed.",
    },
    {
      name: "Nusrat Jahan",
      location: "Rangpur, Bangladesh",
      image: assets.testimonial_image_1,
      testimonial:
        "Exceptional service! From ordering to doorstep, everything is seamless and professional.",
    },
  ];

  return (
    <>
    <div className="py-20 px-6 md:px-16 lg:px-24 xl:px-44 relative overflow-hidden">
      
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 hover:text-green-400 hover:scale-110 transition">
          What Our Customers Say
        </h2>
        <p className="text-gray-500 text-lg hover:text-green-400">
          See why thousands trust EcoMart for fresh groceries delivered straight to their door.
        </p>
      </div>

      
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-400/10 rounded-3xl blur-3xl animate-float-slow" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-emerald-500/5 rounded-2xl blur-2xl animate-pulse-slow" />
      </div>

    
      <div className="relative -mt-8">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={32}
          slidesPerView={1}
          slidesPerGroup={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 24,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 32,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 32,
            },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
            renderBullet: (index, className) => {
              return `<span class="${className} bg-gradient-to-r from-green-400 to-emerald-500 w-3 h-3 rounded-full opacity-60 hover:opacity-100 transition-all duration-300 shadow-lg"></span>`;
            },
          }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          loop={true}
          speed={800}
          className="testimonial-swiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="group relative h-full">
           
                <div className="relative bg-gradient-to-br from-white to-green-50/50 backdrop-blur-xl rounded-3xl p-8 h-[360px] border border-green-100/50 shadow-2xl hover:shadow-3xl hover:shadow-green-500/20 transition-all duration-700 group-hover:scale-[1.03] group-hover:-rotate-1 overflow-hidden">
                  
                  
                  <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-2xl -rotate-12 blur-sm animate-pulse" />
                  <div className="absolute bottom-6 left-6 w-16 h-16 bg-gradient-to-tr from-emerald-500/10 to-green-400/10 rounded-xl rotate-12 blur-sm" />
                  
                  
                  <div className="relative z-10 h-full flex flex-col pt-12">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="relative">
                        <img
                          className="w-20 h-20 rounded-3xl ring-4 ring-white/50 shadow-2xl group-hover:scale-110 transition-transform duration-500"
                          src={testimonial.image}
                          alt={testimonial.name}
                        />
                        <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976c.419-.491.672-1.102.723-1.745a3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors mb-1 leading-tight">
                          {testimonial.name}
                        </h4>
                        <p className="text-green-600 font-semibold text-sm tracking-wide uppercase">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 mb-6">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <div
                            key={i}
                            className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg shadow-lg animate-pulse group-hover:scale-110 transition-all duration-300"
                          />
                        ))}
                    </div>

                    <p className="text-gray-700 leading-relaxed text-lg flex-1 font-medium italic">
                      "{testimonial.testimonial}"
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        
        <button className="swiper-button-prev-custom absolute -left-16 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white/90 hover:bg-white backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 flex items-center justify-center text-gray-700 hover:text-green-600 hover:scale-110 transition-all duration-300 active:scale-95 group/nav">
          <svg className="w-6 h-6 group-hover/nav:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="swiper-button-next-custom absolute -right-16 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white/90 hover:bg-white backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 flex items-center justify-center text-gray-700 hover:text-green-600 hover:scale-110 transition-all duration-300 active:scale-95 group/nav">
          <svg className="w-6 h-6 group-hover/nav:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>

    <style jsx>{`
      .swiper-pagination-bullet-active {
        transform: scale(1.3) !important;
        box-shadow: 0 0 12px rgba(34, 197, 94, 0.6) !important;
      }
      @keyframes float-slow {
        0%, 100% { transform: translateY(0) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(5deg); }
      }
      @keyframes pulse-slow {
        0%, 100% { opacity: 0.4; transform: scale(1); }
        50% { opacity: 0.8; transform: scale(1.1); }
      }
      .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
      .animate-pulse-slow { animation: pulse-slow 6s ease-in-out infinite; }
      .testimonial-swiper .swiper-slide {
        height: auto;
      }
    `}</style>
    </>
  );
};

export default Testimonial;
