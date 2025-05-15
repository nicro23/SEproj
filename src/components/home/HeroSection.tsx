
import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-primary to-primary-dark">
      <div className="absolute inset-0 islamic-pattern opacity-10"></div>
      <div className="relative container mx-auto px-4 py-20 md:py-24 flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 text-white mb-10 lg:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="block mb-2">بسم الله الرحمن الرحيم</span>
            ساهم معنا في بناء مستقبل أفضل
          </h1>
          <p className="text-xl mb-8 leading-relaxed opacity-90">
            {"\"وَمَا تُقَدِّمُوا لِأَنفُسِكُم مِّنْ خَيْرٍ تَجِدُوهُ عِندَ اللَّهِ\""}
            <br />
            تبرعك اليوم يصنع الفرق في حياة الآخرين ويبني مستقبلاً أكثر إشراقاً للجميع
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/donate" className="donate-button">
              تبرع الآن
            </Link>
            <Link to="/volunteer" className="bg-white text-primary px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
              تطوع معنا
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative">
            <div className="absolute -top-4 -right-4 bg-accent w-24 h-24 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 bg-secondary w-16 h-16 rounded-full opacity-20"></div>
            <img 
              src="https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="صورة رمزية للعطاء والخير"
              className="rounded-lg shadow-xl w-full max-w-md h-auto z-10 relative"
            />
          </div>
        </div>
      </div>
      <div className="section-divider"></div>
    </div>
  );
};

export default HeroSection;
