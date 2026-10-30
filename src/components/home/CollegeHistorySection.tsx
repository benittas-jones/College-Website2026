import React from 'react';
import { useCollege } from '../../context/CollegeContext';
import { Landmark, Calendar, MapPin, GraduationCap, ChevronRight } from 'lucide-react';

export const CollegeHistorySection: React.FC = () => {
  const { setActiveView } = useCollege();

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white via-amber-50/20 to-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Elegant Heading Section */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-red-50 text-red-700 text-[11px] sm:text-xs font-semibold tracking-widest uppercase rounded-full border border-red-200/80 mb-3 sm:mb-4 shadow-sm">
            <Landmark className="w-3.5 h-3.5 text-red-600" />
            <span>Legacy of Faith & Women Empowerment</span>
          </div>
          
          <h2 className="font-serif-title text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            College History
          </h2>

          <div className="flex items-center justify-center gap-3 mt-3 sm:mt-4">
            <span className="h-[2px] w-12 bg-gradient-to-r from-transparent to-red-600 rounded"></span>
            <span className="w-2 h-2 rotate-45 bg-red-600"></span>
            <span className="h-[2px] w-12 bg-gradient-to-l from-transparent to-red-600 rounded"></span>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Main Narrative */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            <div className="border-l-4 border-red-600 pl-3.5 sm:pl-4 py-1">
              <h3 className="font-serif-title text-lg sm:text-2xl font-bold text-slate-900 leading-snug">
                Welcome to CSI Ewart Women's Christian College
              </h3>
              <p className="text-[11px] sm:text-xs uppercase tracking-wider text-red-700 font-semibold mt-1">
                A Mission of Holistic Education & Upliftment
              </p>
            </div>

            <div className="space-y-3.5 sm:space-y-4 text-slate-700 text-xs sm:text-base leading-relaxed">
              <p>
                The Madras Diocese of the Church of South India founded the C.S.I. Ewart Women’s Christian College in 1997. Rev. Sandy MacDonald, Moderator of the Church of Scotland, declared the College open on 29th September 1997. The Rt. Rev. Dr. Masilamani Azariah, Bishop of Madras, inaugurated the College in its first location at CSI Ewart Girl’s Higher Secondary School, Purasawalkam, on 31st October 1997.
              </p>
              <p>
                Inspired by a mission to provide higher education for rural young women, especially from the villages in the Madras Diocese, Bishop Azariah envisioned a college that would embody inclusive, accessible, and value-based education. In June 2001, the College moved to its present campus at Melrosapuram — an 11-acre haven of learning and serenity.
              </p>
              <p>
                The institution now offers 7 Undergraduate and 3 Postgraduate programmes, nurturing academic excellence, leadership, and holistic growth. Students are encouraged to engage in experiential learning, career preparation, and community service to emerge as empowered women leaders.
              </p>
            </div>

            <div className="pt-2 flex flex-col xs:flex-row items-stretch xs:items-center gap-3 sm:gap-4">
              <button
                onClick={() => {
                  setActiveView('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 bg-[#0e1828] hover:bg-red-700 text-white px-5 py-2.5 rounded text-xs sm:text-sm font-medium transition-colors shadow-sm"
              >
                <span>Read About Us</span>
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  setActiveView('academics');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 border border-slate-300 hover:border-red-600 hover:text-red-700 text-slate-700 px-5 py-2.5 rounded text-xs sm:text-sm font-medium transition-colors bg-white"
              >
                <span>Explore Degree Programmes</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Feature Card & Key Milestones */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-xl overflow-hidden border border-stone-300/80 shadow-md">
              <div className="relative aspect-[16/10] overflow-hidden group">
                <img
                  src="/assets/aistudio/tp1_2f10a6e2.jpeg"
                  alt="CSI Ewart Women's Christian College Main Campus"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-amber-300 bg-black/40 px-2 py-0.5 rounded border border-amber-300/30">
                    Melrosapuram Campus
                  </span>
                  <p className="text-sm font-serif-title font-semibold mt-1 drop-shadow">
                    11-Acre Haven of Learning & Serenity
                  </p>
                </div>
              </div>

              {/* Milestones timeline badges */}
              <div className="p-5 bg-stone-50/70 divide-y divide-stone-200">
                <div className="flex items-start gap-3.5 pb-3.5">
                  <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center shrink-0 text-red-700 font-bold text-xs mt-0.5">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-900">
                      1997 · Founded & Inaugurated
                    </div>
                    <div className="text-xs text-slate-600 leading-snug">
                      Started under CSI Madras Diocese at CSI Ewart School, Purasawalkam.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 py-3.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center shrink-0 text-blue-700 font-bold text-xs mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-900">
                      2001 · Relocation to Melrosapuram
                    </div>
                    <div className="text-xs text-slate-600 leading-snug">
                      Moved to expansive 11-acre natural green campus to serve rural women.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-3.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0 text-emerald-700 font-bold text-xs mt-0.5">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-900">
                      Present · Academic Expansion
                    </div>
                    <div className="text-xs text-slate-600 leading-snug">
                      Offering 7 Undergraduate & 3 Postgraduate degree programmes.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
