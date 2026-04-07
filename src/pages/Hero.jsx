import React, { useEffect, useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { BsArrowRight, BsInstagram, BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaPinterestP } from "react-icons/fa";
import model2 from '../assets/images/hero/pexels-kalistro666-27969128.jpg'
import model3 from '../assets/images/hero/malen-almonacid-trossi-qmwIvvIb31I-unsplash.jpg'
const slides = [
  {
    subtitle: "Summer Collection",
    title: "Fall - Winter Collections 2030",
    description:
      "A specialist label creating luxury essentials. Ethically crafted with an unwavering commitment to exceptional quality.",
    image:model3,
    circleColor: "#f0e4e4",
  },
  {
    subtitle: "New Arrivals",
    title: "Classic Modern Essentials",
    description:
      "Discover the perfect balance of comfort and style with our latest range of versatile menswear for the modern explorer.",
    image:model2,
    circleColor: "#e4eaf0",
  },
  {
    subtitle: "Special Edition",
    title: "Urban Street Style 2030",
    description:
      "Designed for the city. Built for the street. Our urban collection combines rugged durability with cutting-edge fashion.",
    image:
      "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=800&auto=format&fit=crop",
    circleColor: "#e8f0e4",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 600);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 600);
  };

  // Auto-play every 8 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, []);
  return (
    <section className="relative h-200 sm:h-200 lg:h-200 w-full bg-[#f3f2ee] overflow-hidden flex items-center">
      {/* Background Vertical Lines (Subtle Grid) */}
      <div className="absolute inset-0 flex justify-evenly pointer-events-none opacity-[0.03]">
        <div className="w-px h-full bg-black"></div>
        <div className="w-px h-full bg-black"></div>
        <div className="w-px h-full bg-black"></div>
        <div className="w-px h-full bg-black"></div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 sm:left-10 top-1/2 -translate-y-1/2 z-30 text-black hover:text-red-600 transition-colors p-2 cursor-pointer"
        aria-label="Previous slide"
      >
        <BiChevronLeft className="w-8 h-8 font-thin" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-10 top-1/2 -translate-y-1/2 z-30 text-black hover:text-red-600 transition-colors p-2 cursor-pointer"
        aria-label="Next slide"
      >
        <BiChevronRight className="w-8 h-8" />
      </button>

      {/* Slide Content Container */}
      <div className="container mx-auto px-6 sm:px-12 lg:px-20 relative z-10 flex h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 px-6 sm:px-12 lg:px-20 flex flex-col lg:flex-row items-center justify-between transition-all duration-700 ease-in-out ${
              index === currentSlide
                ? "opacity-100 translate-x-0"
                : index < currentSlide
                  ? "opacity-0 -translate-x-full"
                  : "opacity-0 translate-x-full"
            }`}
          >
            {/* Left Side: Content */}
            <div
              className={`max-w-2xl pt-20 lg:pt-0 text-center lg:text-left transition-all duration-700 delay-200 ${index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <h4 className="text-red-600 font-bold uppercase tracking-[0.3em] mb-4 text-xs sm:text-sm">
                {slide.subtitle}
              </h4>
              <h1 className="text-4xl sm:text-6xl lg:text-[76px] font-bold leading-[1.1] mb-8 text-[#111111]">
                {slide.title.split("<br />").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i === 0 && <br className="hidden lg:block" />}
                  </React.Fragment>
                ))}
              </h1>
              <p className="text-[#3d3d3d] text-sm sm:text-base mb-10 leading-relaxed max-w-sm mx-auto lg:mx-0">
                {slide.description}
              </p>
              <button className="bg-black text-white px-8 py-4 flex items-center justify-center group transition-all hover:bg-gray-800 rounded-none mx-auto lg:mx-0">
                <span className="font-bold tracking-[2px] uppercase text-xs">
                  Shop Now
                </span>
                <BsArrowRight className="ml-3 w-4 h-4 transition-transform duration-500 group-hover:translate-x-2" />
              </button>
            </div>

            {/* Right Side: Visuals */}
            <div className="relative flex-1 h-full w-full lg:w-auto mt-10 lg:mt-0 flex items-end justify-center lg:justify-end">
              {/* Decorative Circle */}
              <div
                className="absolute top-1/2 left-1/2 lg:left-2/3 -translate-x-1/2 -translate-y-1/2 w-75 h-75 sm:w-112.5 sm:h-112.5 lg:w-137.5 lg:h-137.5 rounded-full opacity-60 z-0 transition-colors duration-1000"
                style={{ backgroundColor: slide.circleColor }}
              ></div>

              {/* Decorative Dot Patterns (Common across all slides but could be unique) */}
              <div className="absolute top-[20%] right-[40%] hidden lg:block opacity-20">
                <div className="grid grid-cols-6 gap-2">
                  {[...Array(30)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1.5 h-1.5 bg-gray-400 rounded-full"
                    ></div>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-[20%] right-[-5%] hidden lg:block opacity-20">
                <div className="grid grid-cols-6 gap-2">
                  {[...Array(30)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1.5 h-1.5 bg-gray-400 rounded-full"
                    ></div>
                  ))}
                </div>
              </div>

              {/* Model Image */}
              <div
                className={`relative z-10 h-[80%] lg:h-[90%] w-auto select-none transition-all duration-1000 delay-300 ${index === currentSlide ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
              >
                <img
                  src={slide.image}
                  alt={slide.subtitle}
                  className="h-full w-auto object-contain object-bottom"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slide Indicators (Dots) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-3 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentSlide ? "bg-black w-6" : "bg-gray-300"}`}
            aria-label={`Go to slide ${i + 1}`}
          ></button>
        ))}
      </div>

      {/* Social Links (Bottom Left) */}
      <div className="absolute left-6 sm:left-12 lg:left-20 bottom-10 flex items-center space-x-8 text-[#111111] z-20">
        <a href="#" className="hover:text-blue-500 transition-colors">
          <FaFacebook className="w-5 h-5" />
        </a>
        <a href="#" className="hover:text-white transition-colors">
          <BsTwitterX className="w-5 h-5" />
        </a>
        <a href="#" className="hover:text-red-600 transition-colors">
            <FaPinterestP className="w-5 h-5"/>
        </a>
        <a href="#" className="hover:text-purple-500 transition-colors">
          <BsInstagram className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
