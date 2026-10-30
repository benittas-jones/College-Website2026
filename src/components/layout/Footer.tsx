import React from 'react';
import { useCollege } from '../../context/CollegeContext';
import {
  BookOpen,
  MapPin,
  Phone,
  Mail,
  Church,
  ArrowRight,
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { setActiveView } = useCollege();

  return (
    <footer className="bg-[#0b1320] text-stone-300 border-t border-slate-900 pt-10 sm:pt-12 pb-10 sm:pb-12 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10 sm:space-y-12">
        {/* ======================================================== */}
        {/* INSTITUTIONAL FOOTER LINKS & CONTACT                     */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 pb-8 border-b border-slate-800/80">
          {/* Col 1: Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/aistudio/College_LOGO_66bb4b67.jpg"
                alt="CSI Ewart Women's Christian College Logo"
                className="w-12 h-12 rounded bg-white p-0.5 object-contain shadow-xs shrink-0"
              />
              <div>
                <div className="text-[10px] text-slate-400 uppercase tracking-widest font-serif font-bold">
                  CSI DIOCESE OF MADRAS
                </div>
                <h3 className="font-crest text-base font-bold text-white tracking-wide">
                  CSI Ewart Women's Christian College
                </h3>
                <div className="text-[11px] text-blue-300 italic">
                  (Affiliated to The University of Madras)
                </div>
              </div>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Empowering young women with academic distinction, ethical integrity, and Christian virtues. Motto: "Love and Serve".
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-slate-400">
              <div className="flex items-center gap-1.5 bg-[#0c1626] border border-slate-800 px-2.5 py-1 rounded">
                <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                <span>Univ. of Madras Affiliated</span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#0c1626] border border-slate-800 px-2.5 py-1 rounded">
                <Church className="w-3.5 h-3.5 text-blue-400" />
                <span>CSI Diocese of Madras</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation (The 7 Menus) */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Quick Menu
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => {
                    setActiveView('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveView('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveView('academics');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors"
                >
                  Academics
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveView('student-life');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors"
                >
                  Student Life
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveView('facilities');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors"
                >
                  Facilities
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveView('faculty');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors"
                >
                  Faculty Directory
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveView('helpdesk');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors"
                >
                  Help Desk & Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Academic Programs */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Academic Divisions
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Computer Science (B.Sc CS, BCA)</li>
              <li>Commerce (B.Com General)</li>
              <li>Corporate Secretaryship (B.Com CS)</li>
              <li>Business Administration (BBA)</li>
              <li>English Literature (B.A. English)</li>
              <li>Mathematics (B.Sc Maths)</li>
              <li>3 Postgraduate Programs (M.Sc, M.Com, M.A)</li>
            </ul>
          </div>

          {/* Col 4: Help Desk & Inquiries */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Student Help Desk
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Have questions regarding admissions, examination marksheets, or bus transportation?
            </p>
            <button
              onClick={() => {
                setActiveView('helpdesk');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="mt-2 inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium text-white bg-blue-900 hover:bg-blue-800 rounded transition-colors shadow-xs"
            >
              <span>Submit Ticket / Query</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <div className="pt-2 text-[11px] text-slate-500">
              Online grievance redressal & ticket tracking
            </div>
          </div>
        </div>

        {/* Address and Copyright Bar */}
        <div className="pt-2 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 sm:gap-6 w-full md:w-auto">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span>Melrosapuram, Via-Singaperumal Koil, Chengalpattu District – 603 204</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span>+91 44 2746 4123 / 2746 4124</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span>principal@csiewartcollege.edu.in</span>
            </div>
          </div>
          <div className="text-slate-500 text-xs w-full md:w-auto text-left md:text-right">
            © {new Date().getFullYear()} CSI Ewart Women's Christian College. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
