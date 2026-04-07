import React, { useEffect, useState } from "react";
import { BsArrowBarRight } from "react-icons/bs";

const DealContent = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 12,
    minutes: 60,
    seconds: 32,
  });

  // Basic countdown simulation
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0)
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0)
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0)
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="text-center md:text-left max-w-md">
      <h6 className="text-[#e53637] text-sm font-bold tracking-[.25em] mb-4 uppercase">
        Deal Of The Week
      </h6>
      <h2 className="text-3xl md:text-5xl font-bold text-[#111111] leading-tight mb-8">
        Multi-pocket Chest Bag Black
      </h2>

      {/* Countdown Grid */}
      <div className="flex items-center justify-center md:justify-start space-x-4 md:space-x-4 mb-10">
        <div className="flex flex-col">
          <span className="text-3xl md:text-4xl font-bold text-[#111111]">
            {String(timeLeft.days).padStart(2, "0")}
          </span>
          <span className="text-[#b7b7b7] text-xs md:text-sm mt-1">Days</span>
        </div>
        <span className="text-3xl font-light text-[#b7b7b7] pb-4">:</span>
        <div className="flex flex-col">
          <span className="text-3xl md:text-4xl font-bold text-[#111111]">
            {String(timeLeft.hours).padStart(2, "0")}
          </span>
          <span className="text-[#b7b7b7] text-xs md:text-sm mt-1">Hours</span>
        </div>
        <span className="text-3xl font-light text-[#b7b7b7] pb-4">:</span>
        <div className="flex flex-col">
          <span className="text-3xl md:text-4xl font-bold text-[#111111]">
            {String(timeLeft.minutes).padStart(2, "0")}
          </span>
          <span className="text-[#b7b7b7] text-xs md:text-sm mt-1">
            Minutes
          </span>
        </div>
        <span className="text-3xl font-light text-[#b7b7b7] pb-4">:</span>
        <div className="flex flex-col">
          <span className="text-3xl md:text-4xl font-bold text-[#111111]">
            {String(timeLeft.seconds).padStart(2, "0")}
          </span>
          <span className="text-[#b7b7b7] text-xs md:text-sm mt-1">
            Seconds
          </span>
        </div>
      </div>

      <button className="bg-[#111111] text-white text-xs md:text-sm font-bold tracking-[.3em] px-8 md:px-10 py-4 md:py-5 uppercase transition-all duration-300 hover:bg-red-600 active:scale-90 shadow-lg flex items-center justify-center mx-auto md:mx-0 group">
        Shop Now <BsArrowBarRight size={20}/>
      </button>
    </div>
  );
};

export default DealContent;
