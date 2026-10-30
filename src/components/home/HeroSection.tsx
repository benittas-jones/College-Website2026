import React from 'react';
import { useCollege } from '../../context/CollegeContext';
import { ArrowRight, BookOpen, GraduationCap, FileCheck2 } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { setActiveView } = useCollege();

  return (
    <section className="relative bg-stone-900 text-white overflow-hidden border-b border-stone-800">
      {/* Background Campus Photo with measured scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_college_campus_1793333913601.jpg"
          alt="Apex Institute Campus Quadrangle and Academic Hall"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-35 object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/80 to-stone-950/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-16 lg:pt-28 lg:pb-24">
        <div className="max-w-3xl space-y-6">
          {/* Institutional Kicker (unboxed metadata, no static pills) */}
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400">
            <span>Apex Institute of Science & Technology</span>
            <span aria-hidden="true" className="text-stone-500">·</span>
            <span>Est. 1968</span>
            <span aria-hidden="true" className="text-stone-500">·</span>
            <span>NAAC A++ & ABET Accredited</span>
          </div>

          {/* Headline with balanced wrap */}
          <h1 className="font-serif-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.15] text-balance">
            Shaping intellectual courage, engineering rigor, and global discovery.
          </h1>

          {/* Subtitle */}
          <p className="text-stone-300 text-base md:text-lg leading-relaxed max-w-2xl font-normal">
            A premier autonomous collegiate institution dedicated to breakthrough research in computing, advanced robotics, applied sciences, and ethical management.
          </p>

          {/* Primary Action Buttons */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={() => setActiveView('admissions')}
              className="flex items-center gap-2.5 px-6 py-3 text-sm font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 transition-colors rounded shadow-md whitespace-nowrap"
            >
              <span>Apply for Admissions 2026-27</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setActiveView('examinations')}
              className="flex items-center gap-2 px-5 py-3 text-sm font-medium text-stone-200 bg-stone-800/80 hover:bg-stone-800 border border-stone-700 hover:text-white transition-colors rounded whitespace-nowrap"
            >
              <FileCheck2 className="w-4 h-4 text-amber-400" />
              <span>Check Grade Cards</span>
            </button>

            <button
              onClick={() => setActiveView('php-studio')}
              className="flex items-center gap-2 px-5 py-3 text-sm font-medium text-stone-300 hover:text-amber-300 transition-colors whitespace-nowrap"
            >
              <BookOpen className="w-4 h-4 text-amber-400" />
              <span>Explore PHP & Database Suite</span>
            </button>
          </div>
        </div>

        {/* 4-Column Metric Ribbon below hero */}
        <div className="mt-16 pt-8 border-t border-stone-800 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-1">
            <div className="text-2xl lg:text-3xl font-serif-title font-bold text-amber-400 tabular-nums">
              98.4%
            </div>
            <div className="text-xs text-stone-400 uppercase tracking-wider font-medium">
              Career Placement Rate
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl lg:text-3xl font-serif-title font-bold text-amber-400 tabular-nums">
              15 : 1
            </div>
            <div className="text-xs text-stone-400 uppercase tracking-wider font-medium">
              Student to Faculty Ratio
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl lg:text-3xl font-serif-title font-bold text-amber-400 tabular-nums">
              45+
            </div>
            <div className="text-xs text-stone-400 uppercase tracking-wider font-medium">
              Advanced Research Labs
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl lg:text-3xl font-serif-title font-bold text-amber-400 tabular-nums">
              12,400+
            </div>
            <div className="text-xs text-stone-400 uppercase tracking-wider font-medium">
              Distinguished Alumni
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
