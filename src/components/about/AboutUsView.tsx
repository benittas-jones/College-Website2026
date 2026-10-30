import React from 'react';
import { useCollege } from '../../context/CollegeContext';
import { CheckCircle2, Award, HeartHandshake, BookOpen, ShieldCheck, ArrowRight } from 'lucide-react';

export const AboutUsView: React.FC = () => {
  const { setActiveView } = useCollege();

  return (
    <div className="py-12 bg-stone-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10 sm:space-y-12">
        {/* Page Header */}
        <div className="pb-6 sm:pb-8 border-b border-stone-200">
          <div className="text-xs uppercase tracking-widest font-semibold text-amber-700">
            About the Institution
          </div>
          <h1 className="mt-1 font-serif-title text-2xl xs:text-3xl md:text-4xl font-medium text-stone-900 tracking-tight">
            CSI Ewart Women's Christian College
          </h1>
          <p className="mt-2 text-stone-600 text-xs sm:text-sm max-w-2xl leading-relaxed">
            Founded with a sacred commitment to women’s higher education, moral enlightenment, and spiritual growth under the auspices of the Church of South India (CSI) Diocese of Madras.
          </p>
        </div>

        {/* College Crest & Motto Deep-Dive */}
        <div className="bg-white border border-stone-200 rounded-lg p-4 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            {/* Logo image column */}
            <div className="lg:col-span-4 flex flex-col items-center text-center p-4 sm:p-6 bg-stone-50 border border-stone-200 rounded-lg">
              <img
                src="/assets/aistudio/College_LOGO_66bb4b67.jpg"
                alt="CSI Ewart Women's Christian College Official Crest"
                className="w-48 h-48 object-contain drop-shadow-sm"
              />
              <div className="mt-4 font-crest font-bold text-lg text-stone-900 tracking-wider uppercase">
                "LOVE AND SERVE"
              </div>
              <div className="text-xs text-amber-800 font-semibold tracking-widest uppercase mt-0.5">
                The Sacred College Motto
              </div>
            </div>

            {/* Symbolism breakdown */}
            <div className="lg:col-span-8 space-y-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-amber-700">
                Insignia & Heraldry Symbolism
              </div>
              <h2 className="font-serif-title text-2xl font-bold text-stone-900">
                The Heritage of the CSI Ewart Crest
              </h2>
              <p className="text-xs text-stone-600 leading-relaxed">
                The college crest encapsulates the theological, moral, and cultural bedrock on which CSI Ewart Women's Christian College stands:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 bg-stone-50 border border-stone-200 rounded space-y-1.5">
                  <div className="font-serif-title font-bold text-stone-900 text-sm flex items-center gap-1.5">
                    <span className="text-amber-700 font-bold">†</span>
                    <span>The Cross</span>
                  </div>
                  <p className="text-[11px] text-stone-600 leading-relaxed">
                    The supreme emblem of Christian faith, divine redemption, sacrificial love, and moral righteousness guiding every scholar.
                  </p>
                </div>

                <div className="p-4 bg-stone-50 border border-stone-200 rounded space-y-1.5">
                  <div className="font-serif-title font-bold text-stone-900 text-sm">
                    The Lotus
                  </div>
                  <p className="text-[11px] text-stone-600 leading-relaxed">
                    Symbolizing unsullied purity, spiritual awakening, and indigenous cultural dignity blossoming resiliently amidst life.
                  </p>
                </div>

                <div className="p-4 bg-stone-50 border border-stone-200 rounded space-y-1.5">
                  <div className="font-serif-title font-bold text-stone-900 text-sm">
                    The Kuthuvilakku
                  </div>
                  <p className="text-[11px] text-stone-600 leading-relaxed">
                    The radiant traditional Indian oil lamp dispelling the darkness of ignorance through the perpetual illumination of knowledge and truth.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-amber-50/70 border border-amber-200 rounded text-xs text-amber-950 font-medium">
                <strong>Our Motto: "LOVE AND SERVE"</strong> — Inspired by the teachings of Jesus Christ, calling every student to love unconditionally and dedicate her intellectual talents to selfless service for humanity.
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-stone-200 rounded-lg p-6 sm:p-8 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-amber-700 text-xs font-semibold uppercase tracking-wider">
              <Award className="w-4 h-4" />
              <span>Institutional Vision</span>
            </div>
            <h3 className="font-serif-title text-xl font-bold text-stone-900">
              Our Vision
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              To be a premier institution of higher learning that empowers young women with academic distinction, ethical integrity, scientific aptitude, and Christian virtues, creating visionary leaders who transform society through compassionate service.
            </p>
          </div>

          <div className="bg-white border border-stone-200 rounded-lg p-6 sm:p-8 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-amber-700 text-xs font-semibold uppercase tracking-wider">
              <HeartHandshake className="w-4 h-4" />
              <span>Core Mission</span>
            </div>
            <h3 className="font-serif-title text-xl font-bold text-stone-900">
              Our Mission
            </h3>
            <ul className="text-xs text-stone-600 space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>To impart holistic, value-based education accessible to women from all socio-economic strata.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>To foster scientific temper, digital proficiency in computer science, and corporate business skills.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>To inculcate spiritual grounding, social accountability, and environmental stewardship.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Principal's Message & Leadership */}
        <div className="bg-stone-900 text-white rounded-lg p-6 sm:p-10 border border-stone-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="text-xs uppercase tracking-wider text-amber-400 font-mono">
                Message from the Principal
              </div>
              <h3 className="font-serif-title text-2xl font-bold">
                "Welcome to a transformative fellowship of women scholars."
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                At CSI Ewart Women's Christian College, we believe that when you educate a woman, you enlighten an entire family and uplift the nation. Our committed faculty, vibrant campus life, modern computing labs, and devotional chapel services ensure our students graduate not only with stellar degrees from the University of Madras, but with deep moral conviction to Love and Serve.
              </p>
              <div className="pt-2">
                <div className="font-bold text-sm text-white">Dr. S. Jeyanthi, M.Sc., M.Phil., Ph.D.</div>
                <div className="text-xs text-amber-400">Principal, CSI Ewart Women's Christian College</div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-stone-800/80 border border-stone-700 p-5 rounded-lg space-y-3 text-xs">
              <div className="font-semibold text-amber-400 uppercase tracking-wider text-[11px]">
                Governance & Affiliation
              </div>
              <div className="space-y-1.5 text-stone-300">
                <div><strong>Governing Body:</strong> CSI Diocese of Madras</div>
                <div><strong>University Affiliation:</strong> University of Madras</div>
                <div><strong>Campus:</strong> Melrosapuram, Chengalpattu / Chennai</div>
                <div><strong>Patron:</strong> The Rt. Rev. Bishop in Madras, CSI</div>
              </div>
              <button
                onClick={() => setActiveView('academics')}
                className="w-full mt-2 py-2 px-3 text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Explore Academic Programs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
