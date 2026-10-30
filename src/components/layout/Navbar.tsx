import React, { useState, useRef, useEffect } from 'react';
import { useCollege, ActiveView } from '../../context/CollegeContext';
import {
  Menu,
  X,
  ChevronDown,
  Search,
  BookOpen,
  Building2,
  Users,
  HelpCircle,
  GraduationCap,
  Sparkles,
  Info,
  Calendar,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

interface SubMenuOption {
  title: string;
  desc: string;
  view: ActiveView;
  targetId?: string;
}

interface NavItemConfig {
  label: string;
  view: ActiveView;
  badge?: string;
  subItems?: SubMenuOption[];
}

export const Navbar: React.FC = () => {
  const { activeView, setActiveView, departments, notices } = useCollege();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // The 7 requested core menus styled in UPenn's navigation architecture
  const navItems: NavItemConfig[] = [
    {
      label: 'Home',
      view: 'home',
      subItems: [
        { title: 'Campus Hero & Overview', desc: 'Top slide carousel and collegiate highlights', view: 'home' },
        { title: 'Principal Welcome Message', desc: 'Message from the leadership', view: 'home' },
        { title: 'Latest Circulars & Notices', desc: 'Recent collegiate announcements', view: 'home' },
      ],
    },
    {
      label: 'About Us',
      view: 'about',
      subItems: [
        { title: 'Vision, Mission & Motto', desc: 'Commitment to love, serve, and academic excellence', view: 'about' },
        { title: 'Diocese & Affiliation Heritage', desc: 'CSI Diocese of Madras and University of Madras', view: 'about' },
        { title: 'Governing Council & Leaders', desc: 'Board of management and administration', view: 'about' },
        { title: 'Campus Virtual Tour', desc: 'Melrosapuram scenic 15-acre green premises', view: 'campus' },
      ],
    },
    {
      label: 'Academics',
      view: 'academics',
      badge: 'UG & PG',
      subItems: [
        { title: 'Computer Science & BCA', desc: 'B.Sc CS, BCA with modern software laboratories', view: 'academics' },
        { title: 'Commerce & Accounting', desc: 'B.Com General and B.Com Corporate Secretaryship', view: 'academics' },
        { title: 'Business Administration (BBA)', desc: 'Leadership, finance, and entrepreneurial training', view: 'academics' },
        { title: 'Sciences & Humanities', desc: 'B.Sc Mathematics and B.A. English Literature', view: 'academics' },
        { title: 'Examinations & Marksheets', desc: 'Semester grade query and University results', view: 'examinations' },
      ],
    },
    {
      label: 'Student Life',
      view: 'student-life',
      subItems: [
        { title: 'Chapel & Spiritual Life', desc: 'Morning assemblies and Christian devotions', view: 'student-life' },
        { title: 'EWARTFEST Cultural Gala', desc: 'Annual intra- and inter-collegiate celebrations', view: 'student-life' },
        { title: 'National Service Scheme (NSS)', desc: 'Community outreach, YRC, and social service', view: 'student-life' },
        { title: 'Clubs & Student Council', desc: 'Debate, Fine Arts, Eco Club, and sports teams', view: 'student-life' },
      ],
    },
    {
      label: 'Facilities',
      view: 'facilities',
      subItems: [
        { title: 'Scholarly Central Library', desc: 'Over 25,000 volumes, e-journals, and reading hall', view: 'facilities' },
        { title: 'IT & Scientific Labs', desc: 'Air-conditioned computer bays and science labs', view: 'facilities' },
        { title: 'Auditorium & Seminar Halls', desc: 'Acoustically treated multi-purpose convention hall', view: 'facilities' },
        { title: 'Transportation & College Buses', desc: 'Safe fleet connecting Chengalpattu & suburbs', view: 'facilities' },
      ],
    },
    {
      label: 'Faculty',
      view: 'faculty',
      subItems: [
        { title: 'Faculty Directory', desc: 'Complete roster of dedicated professors & lecturers', view: 'faculty' },
        { title: 'Department Heads (HODs)', desc: 'Leadership across arts, science, and commerce', view: 'faculty' },
        { title: 'Research & Scholarly Work', desc: 'Conferences, publications, and seminars', view: 'faculty' },
      ],
    },
    {
      label: 'Help Desk',
      view: 'helpdesk',
      badge: 'Support',
      subItems: [
        { title: 'Submit Online Query / Ticket', desc: 'Admissions, examinations, fee, and bus queries', view: 'helpdesk' },
        { title: 'Track Ticket by Token', desc: 'Real-time status tracking for existing inquiries', view: 'helpdesk' },
        { title: 'Admissions 2026-27 Desk', desc: 'Online application procedure and fee schedule', view: 'admissions' },
        { title: 'Grievance Redressal Committee', desc: 'Confidential student and parent support cell', view: 'helpdesk' },
      ],
    },
  ];

  const handleNavClick = (view: ActiveView) => {
    setActiveView(view);
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMouseEnter = (label: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  // Quick search results
  const searchResults = searchQuery.trim()
    ? [
        ...departments
          .filter((d) => d.name.toLowerCase().includes(searchQuery.toLowerCase()))
          .map((d) => ({ title: d.name, category: 'Academic Department', view: 'academics' as ActiveView })),
        ...notices
          .filter((n) => n.title.toLowerCase().includes(searchQuery.toLowerCase()))
          .map((n) => ({ title: n.title, category: 'Notice & Circular', view: 'notices' as ActiveView })),
        { title: 'Online Admission Application', category: 'Admissions', view: 'admissions' as ActiveView },
        { title: 'Student Help Desk & Grievance', category: 'Support', view: 'helpdesk' as ActiveView },
        { title: 'Semester Marks & Grade Cards', category: 'Examinations', view: 'examinations' as ActiveView },
        { title: 'Central Library Catalog', category: 'Facilities', view: 'facilities' as ActiveView },
      ].slice(0, 5)
    : [];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#011F5B] text-white shadow-md">
      {/* ======================================================== */}
      {/* MAIN MASTHEAD (Logo + College Name + Subtitles)          */}
      {/* ======================================================== */}
      <div className="border-b border-blue-900/40">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between min-h-[3.75rem] sm:min-h-[4.75rem] py-1.5 sm:py-2 gap-2 sm:gap-4">
            
            {/* Logo and College Identity Lockup */}
            <button
              onClick={() => handleNavClick('home')}
              className="group flex items-center gap-2.5 sm:gap-4 text-left transition-all hover:opacity-95 flex-1 min-w-0"
              aria-label="CSI Ewart Women's Christian College Home"
            >
              {/* Crest embedded in crisp white shield badge */}
              <div className="w-10 h-10 sm:w-16 sm:h-16 md:w-18 md:h-18 bg-white rounded-md p-1 sm:p-1.5 shadow-md border border-white/40 flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105">
                <img
                  src="/assets/aistudio/College_LOGO_66bb4b67.jpg"
                  alt="CSI Ewart Women's Christian College Crest"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex flex-col justify-center min-w-0 flex-1">
                <span className="font-crest text-[12.5px] xs:text-sm sm:text-base md:text-lg lg:text-xl font-bold tracking-tight text-white uppercase leading-snug truncate sm:whitespace-normal drop-shadow-xs">
                  CSI Ewart Women's Christian College
                </span>
                <span className="text-[10px] sm:text-xs text-blue-200/95 font-serif italic tracking-wide mt-0.5 leading-tight truncate">
                  (Affiliated to the University of Madras)
                </span>
                <span className="hidden xs:block text-[9px] sm:text-[11px] text-blue-200/80 font-sans tracking-tight sm:tracking-normal mt-0.5 leading-tight truncate">
                  Melrosapuram, Via-Singaperumal Koil, Chengalpattu District – 603 204
                </span>
              </div>
            </button>

            {/* Quick Action Buttons on Desktop */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <button
                onClick={() => handleNavClick('admissions')}
                className="px-3.5 py-1.5 bg-[#990000] hover:bg-[#b00000] text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors shadow-xs"
              >
                Apply Online
              </button>
              <button
                onClick={() => handleNavClick('helpdesk')}
                className="px-3.5 py-1.5 bg-blue-900/80 hover:bg-blue-800 border border-blue-700/60 text-blue-100 hover:text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors"
              >
                Help Desk
              </button>
            </div>

            {/* Mobile / Tablet Menu & Search Actions */}
            <div className="flex items-center gap-1 lg:hidden shrink-0">
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 min-w-[40px] min-h-[40px] text-blue-100 hover:text-white hover:bg-white/10 rounded-md transition-colors flex items-center justify-center"
                aria-label="Search College"
              >
                <Search className="w-5 h-5 text-[#f2a900]" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 min-w-[40px] min-h-[40px] text-blue-100 hover:text-white hover:bg-white/10 rounded-md transition-colors flex items-center justify-center"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* RED DIVIDING LINE (Penn Crimson) between Masthead & Menus */}
      {/* ======================================================== */}
      <div
        className="w-full h-1 sm:h-1.5 bg-[#990000] shadow-sm relative z-20"
        role="separator"
        aria-hidden="true"
      />

      {/* ======================================================== */}
      {/* PRIMARY NAVIGATION MENUS (Placed after the Red Line)     */}
      {/* ======================================================== */}
      <nav className="hidden lg:block bg-[#001744] border-b border-blue-950/80 shadow-xs relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* The 7 Core Requested Menus */}
            <div className="flex items-center">
              {navItems.map((item) => {
                const isActive = activeView === item.view;
                const isDropdownOpen = activeDropdown === item.label;

                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      onClick={() => handleNavClick(item.view)}
                      className={`flex items-center gap-1.5 px-3.5 py-2.5 text-xs xl:text-[13px] font-bold uppercase tracking-wider transition-all duration-150 relative ${
                        isActive
                          ? 'text-white bg-[#011F5B] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:bg-[#f2a900]'
                          : 'text-blue-100 hover:text-white hover:bg-[#011F5B]'
                      }`}
                    >
                      <span>{item.label}</span>
                      {item.badge && (
                        <span className="text-[9px] px-1.5 py-0.2 bg-[#990000] text-white rounded font-sans uppercase">
                          {item.badge}
                        </span>
                      )}
                      {item.subItems && (
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 text-blue-300 ${
                            isDropdownOpen ? 'rotate-180 text-[#f2a900]' : ''
                          }`}
                        />
                      )}
                    </button>

                    {/* UPenn-Style Interactive Dropdown Megamenu */}
                    {isDropdownOpen && item.subItems && (
                      <div
                        className="absolute top-full left-0 w-80 bg-white text-stone-900 rounded-b-md shadow-2xl border-t-2 border-[#990000] py-3 px-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                        onMouseEnter={() => handleMouseEnter(item.label)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="px-3 pb-2 mb-2 border-b border-stone-100 flex items-center justify-between">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-blue-950 font-serif">
                            {item.label} Quick Links
                          </span>
                          <span
                            onClick={() => handleNavClick(item.view)}
                            className="text-[10px] text-blue-800 hover:underline font-semibold cursor-pointer"
                          >
                            View Overview →
                          </span>
                        </div>

                        <div className="space-y-1">
                          {item.subItems.map((sub, sIdx) => (
                            <button
                              key={sIdx}
                              onClick={() => handleNavClick(sub.view)}
                              className="w-full text-left p-2.5 rounded-md hover:bg-blue-50/80 transition-colors group flex items-start gap-2.5"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-900 mt-1.5 shrink-0 group-hover:scale-125 transition-transform" />
                              <div>
                                <div className="text-xs font-bold text-blue-950 group-hover:text-blue-900 transition-colors">
                                  {sub.title}
                                </div>
                                <div className="text-[11px] text-stone-500 leading-snug mt-0.5 font-normal">
                                  {sub.desc}
                                </div>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Quick Search trigger on Menu Bar */}
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 text-xs text-blue-200 hover:text-white hover:bg-[#011F5B] rounded transition-colors"
            >
              <Search className="w-3.5 h-3.5 text-[#f2a900]" />
              <span className="hidden xl:inline text-[11px] uppercase tracking-wider">Search College</span>
            </button>
          </div>
        </div>
      </nav>

      {/* ======================================================== */}
      {/* 4. UPENN MOBILE MENU ACCORDION                           */}
      {/* ======================================================== */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-blue-900/60 bg-[#001744] shadow-2xl animate-in fade-in duration-200 max-h-[calc(100vh-4.25rem)] overflow-y-auto">
          <div className="max-w-7xl mx-auto px-4 py-3 space-y-1">
            {navItems.map((item) => {
              const isActive = activeView === item.view;
              const isExpanded = mobileExpandedSection === item.label;

              return (
                <div key={item.label} className="border-b border-blue-950/80 last:border-0 pb-1">
                  <div className="flex items-center justify-between min-h-[44px]">
                    <button
                      onClick={() => handleNavClick(item.view)}
                      className={`text-left px-3 py-2.5 text-sm font-semibold uppercase tracking-wider transition-colors flex-1 ${
                        isActive ? 'text-[#f2a900] font-bold' : 'text-blue-100 hover:text-white'
                      }`}
                    >
                      <span>{item.label}</span>
                      {item.badge && (
                        <span className="ml-2 text-[9px] px-1.5 py-0.5 bg-[#990000] text-white rounded font-sans uppercase">
                          {item.badge}
                        </span>
                      )}
                    </button>
                    {item.subItems && (
                      <button
                        onClick={() =>
                          setMobileExpandedSection(isExpanded ? null : item.label)
                        }
                        className="p-3 text-blue-300 hover:text-white min-w-[44px] min-h-[44px] flex items-center justify-center"
                        aria-label="Expand submenu"
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180 text-[#f2a900]' : ''}`}
                        />
                      </button>
                    )}
                  </div>

                  {isExpanded && item.subItems && (
                    <div className="pl-3 pr-2 pb-2 space-y-1 bg-[#011F5B]/60 rounded-md my-1 border-l-2 border-[#990000]">
                      {item.subItems.map((sub, sIdx) => (
                        <button
                          key={sIdx}
                          onClick={() => handleNavClick(sub.view)}
                          className="w-full text-left py-2 px-3 rounded text-xs text-blue-200 hover:text-white hover:bg-blue-900/80 transition-colors flex items-center gap-2 min-h-[38px]"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                          <span className="font-medium">{sub.title}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Mobile Utility Actions */}
            <div className="pt-3 mt-2 border-t border-blue-900/60 flex items-center justify-between gap-2">
              <button
                onClick={() => handleNavClick('admissions')}
                className="flex-1 min-h-[42px] py-2.5 px-3 bg-[#990000] hover:bg-[#b00000] text-white text-xs font-semibold uppercase tracking-wider rounded text-center transition-colors shadow-sm"
              >
                Admissions 2026
              </button>
              <button
                onClick={() => handleNavClick('helpdesk')}
                className="flex-1 min-h-[42px] py-2.5 px-3 bg-blue-900/90 hover:bg-blue-800 text-blue-100 hover:text-white text-xs font-semibold uppercase tracking-wider rounded text-center border border-blue-700/60 transition-colors"
              >
                Help Desk
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* 4. SEARCH MODAL OVERLAY (UPenn style quick finder)       */}
      {/* ======================================================== */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-stone-950/70 backdrop-blur-xs flex items-start justify-center pt-14 sm:pt-20 px-3 sm:px-4">
          <div className="bg-white text-stone-900 rounded-xl shadow-2xl max-w-xl w-full border border-stone-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150 max-h-[85vh] flex flex-col">
            <div className="p-3 sm:p-4 border-b border-stone-200 flex items-center gap-2.5 sm:gap-3 shrink-0">
              <Search className="w-5 h-5 text-blue-900 shrink-0" />
              <input
                type="text"
                autoFocus
                placeholder="Search departments, circulars, facilities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 text-xs sm:text-sm bg-transparent border-0 outline-hidden focus:ring-0 text-stone-900 placeholder:text-stone-400"
              />
              <button
                onClick={() => {
                  setSearchOpen(false);
                  setSearchQuery('');
                }}
                className="p-1.5 text-stone-400 hover:text-stone-700 rounded min-w-[36px] min-h-[36px] flex items-center justify-center"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 max-h-80 overflow-y-auto">
              {searchResults.length > 0 ? (
                <div className="space-y-1.5">
                  <div className="text-[11px] uppercase tracking-wider font-bold text-stone-400 px-2">
                    Search Results
                  </div>
                  {searchResults.map((res, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        handleNavClick(res.view);
                        setSearchOpen(false);
                        setSearchQuery('');
                      }}
                      className="w-full text-left p-2.5 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-between group"
                    >
                      <div>
                        <div className="text-xs font-bold text-blue-950 group-hover:text-blue-900">
                          {res.title}
                        </div>
                        <div className="text-[11px] text-stone-500">{res.category}</div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-blue-900 group-hover:translate-x-0.5 transition-all" />
                    </button>
                  ))}
                </div>
              ) : searchQuery.trim() ? (
                <div className="text-center py-6 text-xs text-stone-500">
                  No matching collegiate resources found for "{searchQuery}".
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="text-[11px] uppercase tracking-wider font-bold text-stone-400 px-2">
                    Popular Quick Searches
                  </div>
                  <div className="flex flex-wrap gap-2 px-2">
                    {['Admissions 2026', 'Computer Science B.Sc', 'Exam Marksheets', 'Central Library', 'Hostel Facility', 'Help Desk Ticket'].map((term) => (
                      <button
                        key={term}
                        onClick={() => setSearchQuery(term)}
                        className="px-2.5 py-1 text-xs bg-stone-100 hover:bg-blue-50 text-stone-700 hover:text-blue-900 rounded-full border border-stone-200 transition-colors"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};



