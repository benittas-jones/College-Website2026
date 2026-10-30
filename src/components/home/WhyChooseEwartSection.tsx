import React, { useState, useEffect, useRef } from 'react';
import { useCollege } from '../../context/CollegeContext';
import {
  GraduationCap,
  Sparkles,
  Briefcase,
  HeartHandshake,
  Compass,
  ChevronLeft,
  ChevronRight,
  ArrowRight
} from 'lucide-react';

interface PillarItem {
  id: number;
  title: string;
  image: string;
  icon: React.FC<{ className?: string }>;
  glowGradient: string;
  borderColor: string;
  ringColor: string;
  iconBg: string;
  activeTextColor: string;
  badgeLabel: string;
}

export const WhyChooseEwartSection: React.FC = () => {
  const { setActiveView } = useCollege();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const carouselTrackRef = useRef<HTMLDivElement>(null);

  // 5 Pillars with User's collegiate pictures and distinct vibrant color styling
  const pillars: PillarItem[] = [
    {
      id: 1,
      title: 'Quality Education',
      image: '/assets/aistudio/2_09e0166a.jpeg',
      icon: GraduationCap,
      glowGradient: 'from-blue-600 via-indigo-600 to-cyan-400',
      borderColor: 'border-blue-600',
      ringColor: 'ring-blue-400/50',
      iconBg: 'bg-gradient-to-br from-blue-600 to-indigo-700 text-white',
      activeTextColor: 'text-blue-900',
      badgeLabel: 'Academic Excellence'
    },
    {
      id: 2,
      title: 'Holistic Development',
      image: '/assets/aistudio/event5-1_9050283d.JPG',
      icon: Sparkles,
      glowGradient: 'from-rose-600 via-red-500 to-pink-500',
      borderColor: 'border-rose-600',
      ringColor: 'ring-rose-400/50',
      iconBg: 'bg-gradient-to-br from-rose-600 to-pink-600 text-white',
      activeTextColor: 'text-rose-900',
      badgeLabel: 'Arts & Sports'
    },
    {
      id: 3,
      title: 'Career and Skill Development',
      image: '/assets/aistudio/CC_1_6343b606.JPG',
      icon: Briefcase,
      glowGradient: 'from-emerald-600 via-teal-500 to-cyan-500',
      borderColor: 'border-emerald-600',
      ringColor: 'ring-emerald-400/50',
      iconBg: 'bg-gradient-to-br from-emerald-600 to-teal-700 text-white',
      activeTextColor: 'text-emerald-900',
      badgeLabel: 'Industry Readiness'
    },
    {
      id: 4,
      title: 'A Supportive Learning Environment',
      image: '/assets/aistudio/7_aa4b222d.jpeg',
      icon: HeartHandshake,
      glowGradient: 'from-amber-500 via-yellow-500 to-orange-400',
      borderColor: 'border-amber-500',
      ringColor: 'ring-amber-400/50',
      iconBg: 'bg-gradient-to-br from-amber-500 to-amber-600 text-slate-950',
      activeTextColor: 'text-amber-900',
      badgeLabel: 'Mentorship & Serenity'
    },
    {
      id: 5,
      title: 'Education with a Purpose',
      image: '/assets/aistudio/event4-5_336b7409.JPG',
      icon: Compass,
      glowGradient: 'from-purple-600 via-violet-600 to-indigo-500',
      borderColor: 'border-purple-600',
      ringColor: 'ring-purple-400/50',
      iconBg: 'bg-gradient-to-br from-purple-600 to-indigo-700 text-white',
      activeTextColor: 'text-purple-900',
      badgeLabel: 'Love and Serve'
    }
  ];

  // Scroll active circle into view smoothly
  useEffect(() => {
    if (carouselTrackRef.current) {
      const activeEl = carouselTrackRef.current.children[activeIndex] as HTMLElement;
      if (activeEl) {
        activeEl.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
  }, [activeIndex]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? pillars.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % pillars.length);
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-24 bg-gradient-to-b from-amber-50/70 via-rose-50/30 to-amber-50/40 border-b border-amber-200/80 overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-0 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-amber-300/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-rose-400/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-3 sm:px-6">
        {/* Section Header with Vibrant Rich Colors */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1 sm:py-1.5 bg-gradient-to-r from-[#990000] via-[#c4122d] to-[#d97706] text-white text-[11px] sm:text-xs font-bold tracking-widest uppercase rounded-full shadow-md mb-3 sm:mb-4 border border-white/30">
            <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
            <span>The Ewart Advantage</span>
          </div>

          <h2 className="font-serif-title text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#990000] via-[#c4122d] to-[#d97706] drop-shadow-xs">
              Why Choose Ewart ?
            </span>
          </h2>

          <div className="flex items-center justify-center gap-2.5 sm:gap-3 mt-3 sm:mt-4 mb-4 sm:mb-5">
            <span className="h-[3px] w-10 sm:w-14 bg-gradient-to-r from-transparent via-[#990000] to-[#c4122d] rounded-full"></span>
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rotate-45 bg-[#d97706] shadow-xs"></span>
            <span className="h-[3px] w-10 sm:w-14 bg-gradient-to-l from-transparent via-[#990000] to-[#c4122d] rounded-full"></span>
          </div>

          <p className="text-slate-700 text-xs sm:text-base leading-relaxed font-medium px-2 sm:px-0">
            Founded on enduring values of love, service, and academic distinction, CSI Ewart Women's Christian College provides an empowering ecosystem where young women discover their potential, master skills, and become transformative leaders.
          </p>
        </div>

        {/* Clean Manual Navigation Controls */}
        <div className="flex items-center justify-end mb-3 sm:mb-4 px-2">
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              aria-label="Previous Circle"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white hover:bg-gradient-to-r hover:from-[#990000] hover:to-[#d97706] hover:text-white text-slate-700 border border-amber-300/80 shadow-md flex items-center justify-center transition-all cursor-pointer hover:scale-105"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Circle"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white hover:bg-gradient-to-r hover:from-[#990000] hover:to-[#d97706] hover:text-white text-slate-700 border border-amber-300/80 shadow-md flex items-center justify-center transition-all cursor-pointer hover:scale-105"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Sliding Circles Track */}
        <div className="relative pb-2">
          <div
            ref={carouselTrackRef}
            className="flex items-center justify-start lg:justify-between gap-4 sm:gap-6 overflow-x-auto no-scrollbar scroll-smooth py-4 sm:py-5 px-2 sm:px-3 touch-pan-x"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {pillars.map((pillar, index) => {
              const isActive = index === activeIndex;
              const IconComp = pillar.icon;

              return (
                <div
                  key={pillar.id}
                  onClick={() => setActiveIndex(index)}
                  style={{ scrollSnapAlign: 'center' }}
                  className="flex flex-col items-center cursor-pointer shrink-0 group focus:outline-hidden"
                >
                  {/* Sliding Circle Frame */}
                  <div className="relative mb-3 sm:mb-4">
                    {/* Outer Vibrant Glow Ring for Active/Hover Circle */}
                    <div
                      className={`absolute -inset-2 sm:-inset-2.5 rounded-full transition-all duration-500 ${
                        isActive
                          ? `bg-gradient-to-tr ${pillar.glowGradient} opacity-90 blur-sm scale-105`
                          : `opacity-0 scale-95 group-hover:opacity-60 group-hover:scale-100 bg-gradient-to-tr ${pillar.glowGradient}`
                      }`}
                    />

                    {/* Circle Container */}
                    <div
                      className={`relative w-24 h-24 xs:w-28 xs:h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full overflow-hidden transition-all duration-300 shadow-xl ${
                        isActive
                          ? `border-3 sm:border-4 ${pillar.borderColor} ring-2 sm:ring-4 ring-white scale-105`
                          : `border-2 sm:border-3 border-stone-300 group-hover:${pillar.borderColor} group-hover:scale-100`
                      }`}
                    >
                      <img
                        src={pillar.image}
                        alt={pillar.title}
                        className={`w-full h-full object-cover transition-transform duration-700 ${
                          isActive ? 'scale-110' : 'group-hover:scale-110'
                        }`}
                      />

                      {/* Image Overlay */}
                      <div
                        className={`absolute inset-0 transition-opacity duration-300 ${
                          isActive
                            ? 'bg-gradient-to-t from-black/45 via-transparent to-black/10'
                            : 'bg-black/15 group-hover:bg-transparent'
                        }`}
                      />

                      {/* Vibrant Icon badge inside circle */}
                      <div className="absolute top-1.5 right-1.5 sm:top-3 sm:right-3">
                        <div
                          className={`w-6 h-6 sm:w-9 sm:h-9 rounded-full flex items-center justify-center shadow-lg backdrop-blur-xs transition-transform duration-300 ${
                            isActive
                              ? `${pillar.iconBg} scale-110 ring-1 sm:ring-2 ring-white`
                              : `${pillar.iconBg} opacity-90 group-hover:opacity-100 group-hover:scale-105`
                          }`}
                        >
                          <IconComp className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Circle Title Label */}
                  <div className="text-center max-w-[110px] xs:max-w-[125px] sm:max-w-[160px] md:max-w-[180px]">
                    <h3
                      className={`font-serif-title text-[11px] xs:text-xs sm:text-sm md:text-base font-bold leading-tight transition-colors duration-200 ${
                        isActive ? `${pillar.activeTextColor} font-extrabold scale-105` : 'text-slate-800 group-hover:text-red-700'
                      }`}
                    >
                      {pillar.title}
                    </h3>
                    <span className="inline-block text-[9.5px] sm:text-[11px] font-semibold text-slate-500 mt-0.5 sm:mt-1">
                      {pillar.badgeLabel}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Vibrant Dots Indicator */}
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-4">
            {pillars.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Select circle ${idx + 1}`}
                className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === activeIndex
                    ? 'w-6 sm:w-8 bg-gradient-to-r from-[#990000] to-[#d97706] shadow-sm'
                    : 'w-2 sm:w-2.5 bg-amber-200 hover:bg-amber-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Link to Student Life Menu directly under Why Choose Ewart images */}
        <div className="mt-8 sm:mt-12 text-center flex flex-col items-center justify-center px-3">
          <button
            onClick={() => {
              setActiveView('student-life');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full xs:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#990000] via-[#c4122d] to-[#d97706] hover:from-[#7a0000] hover:to-[#b45309] text-white px-6 sm:px-9 py-3 sm:py-3.5 rounded-lg text-xs sm:text-base font-bold transition-all shadow-lg shadow-red-900/25 hover:shadow-xl hover:scale-[1.02] group cursor-pointer"
          >
            <span>Discover Student Life</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
          </button>
          <p className="text-[11px] sm:text-xs text-slate-600 font-medium mt-2.5 sm:mt-3 max-w-md">
            Explore cultural fests, clubs, sports, youth leadership, and campus community at CSI Ewart
          </p>
        </div>
      </div>
    </section>
  );
};
