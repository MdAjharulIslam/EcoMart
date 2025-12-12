import React from "react";
import { assets, features } from "../assets/assets";

const BottomBanner = () => {
  return (
    <div className="mt-16 relative bg-gray-200 py-12  ">
      
      <div className="absolute inset-0">
        <div className="absolute top-10 left-4 w-20 h-20 bg-primary/10 rounded-xl blur-lg animate-float-slow" />
        <div className="absolute bottom-20 right-8 w-24 h-24 bg-gradient-to-r from-primary/5 to-blue-500/5 rounded-full blur-xl animate-pulse-slow" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 px-4">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Why Choose Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Trusted by thousands with proven excellence in quality and service
          </p>
          <div className="w-20 h-1 mx-auto mt-8 bg-gray-900 rounded-full shadow-sm " />
        </div>

        
        <div className="space-y-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-6 lg:gap-12 
                          ${index % 2 === 0 
                            ? "lg:flex-row-reverse" 
                            : "lg:flex-row"
                          }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              
              <div className="relative group">
                <div className="w-32 h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-primary/20 via-white to-primary/10 
                              rounded-xl p-4 shadow-lg border border-white/30 backdrop-blur-xl
                              flex items-center justify-center group-hover:scale-105 transition-all duration-500">
                 <img
                   src={feature.icon}
                   alt={feature.title}
                   className="w-12 h-12 lg:w-14 lg:h-14 object-contain filter drop-shadow-lg 
                            group-hover:rotate-6 group-hover:scale-110 transition-all duration-500"
                 />
                </div>
                <div
                  className={`absolute -top-2 ${index % 2 === 0 ? "-right-2 lg:-left-2" : "-left-2 lg:-right-2"} 
                            w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-lg`}>
                 <span className="text-sm font-bold text-white">{index + 1}</span>
                </div>
              </div>

              
              <div className="flex-1 lg:max-w-sm">
                <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-sm lg:text-base text-slate-600 leading-relaxed mb-3 font-medium">
                  {feature.description}
                </p>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent mb-3" />
                <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span>Trusted by 50K+ customers</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float-slow {
         0%, 100% { transform: translateY(0) rotate(0deg); }
         50% { transform: translateY(-10px) rotate(3deg); }
        }
        @keyframes pulse-slow {
         0%, 100% { opacity: 0.4; transform: scale(1); }
         50% { opacity: 0.7; transform: scale(1.02); }
        }
        @keyframes fade-in-up {
         from { opacity: 0; transform: translateY(30px); }
         to { opacity: 1; transform: translateY(0); }
        }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
        .animate-fade-in-up { animation: fade-in-up 0.7s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default BottomBanner;
