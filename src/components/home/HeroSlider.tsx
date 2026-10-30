import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      id: 1,
      image: '/assets/aistudio/tp2_c9df24e5.jpeg',
      alt: "Lush Green Campus Quad and Palm Trees, Melrosapuram (tp2)",
      position: 'object-center',
    },
    {
      id: 2,
      image: '/assets/aistudio/CH_2_44f45d03.JPG',
      alt: "Lush Green Courtyard and Palm Trees at CSI Ewart Women's Christian College",
      position: 'object-center',
    },
    {
      id: 3,
      image: '/assets/aistudio/tp1_2f10a6e2.jpeg',
      alt: "CSI Ewart Women's Christian College Main Campus Building and Fleet",
      position: 'object-center',
    },
    {
      id: 4,
      image: '/assets/aistudio/5_2e830798.jpg',
      alt: "Campus Building and College Buses at CSI Ewart Women's Christian College",
      position: 'object-center',
    },
  ];

  // Auto-play timer
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section
      className="relative bg-stone-950 text-white overflow-hidden border-b border-stone-800"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Clean Full-Bleed Slider Viewport */}
      <div className="relative h-[220px] xs:h-[260px] sm:h-[360px] md:h-[440px] lg:h-[500px] w-full overflow-hidden flex items-center">
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* Photo Background */}
              <img
                src={slide.image}
                alt={slide.alt}
                referrerPolicy="no-referrer"
                className={`w-full h-full object-cover ${slide.position || 'object-center'}`}
              />
              {/* Subtle bottom gradient to ensure slide indicators stand out */}
              <div className="absolute inset-x-0 bottom-0 h-16 sm:h-20 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            </div>
          );
        })}

        {/* Previous / Next Arrow Controls */}
        <button
          onClick={handlePrev}
          aria-label="Previous Slide"
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-black/70 text-white border border-white/30 flex items-center justify-center transition-colors shadow-lg backdrop-blur-xs cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={handleNext}
          aria-label="Next Slide"
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-black/70 text-white border border-white/30 flex items-center justify-center transition-colors shadow-lg backdrop-blur-xs cursor-pointer"
        >
          <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 sm:gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentSlide ? 'w-6 sm:w-8 bg-white shadow-md' : 'w-1.5 sm:w-2 bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>

      {/* 4-Stat collegiate banner below slider */}
      <div className="bg-[#0b1320] border-t border-slate-900 py-2.5 sm:py-5 px-2.5 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-6 text-center">
          <div className="space-y-0.5 sm:space-y-1 p-1 bg-white/5 md:bg-transparent rounded-sm">
            <div className="text-sm xs:text-base sm:text-xl md:text-2xl font-serif-title font-bold text-blue-200">
              100% Women
            </div>
            <div className="text-[9.5px] sm:text-[11px] text-slate-400 uppercase tracking-wider font-medium">
              Empowerment
            </div>
          </div>

          <div className="space-y-0.5 sm:space-y-1 p-1 bg-white/5 md:bg-transparent rounded-sm">
            <div className="text-sm xs:text-base sm:text-xl md:text-2xl font-serif-title font-bold text-blue-200 leading-tight">
              University of Madras
            </div>
            <div className="text-[9.5px] sm:text-[11px] text-slate-400 uppercase tracking-wider font-medium">
              Official Affiliation
            </div>
          </div>

          <div className="space-y-0.5 sm:space-y-1 p-1 bg-white/5 md:bg-transparent rounded-sm">
            <div className="text-sm xs:text-base sm:text-xl md:text-2xl font-serif-title font-bold text-blue-200 leading-tight">
              CSI Diocese of Madras
            </div>
            <div className="text-[9.5px] sm:text-[11px] text-slate-400 uppercase tracking-wider font-medium">
              College Management
            </div>
          </div>

          <div className="space-y-0.5 sm:space-y-1 p-1 bg-white/5 md:bg-transparent rounded-sm">
            <div className="text-sm xs:text-base sm:text-xl md:text-2xl font-serif-title font-bold text-blue-200">
              Love & Serve
            </div>
            <div className="text-[9.5px] sm:text-[11px] text-slate-400 uppercase tracking-wider font-medium">
              College Motto
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
