import React from "react";
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
      name: "Shanaz ",
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
  ];

  return (
    <div className="py-20 px-6 md:px-16 lg:px-24 xl:px-44 ">
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 hover:text-green-400 hover:scale-110 transition">
          What Our Customers Say
        </h2>
        <p className="text-gray-500 text-lg hover:text-green-400">
          See why thousands trust EcoMart for fresh groceries delivered straight to their door.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-xl hover:scale-110 transition-all duration-500 shadow-xl shadow-green-300"
          >
            <div className="flex items-center gap-3">
              <img
                className="w-12 h-12 rounded-full"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div>
                <p className="text-xl font-medium">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-1 mt-4">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <img key={index} src={assets.star_icon} alt="star-icon" />
                ))}
            </div>
            <p className="text-gray-600 mt-4">
              "{testimonial.testimonial}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
