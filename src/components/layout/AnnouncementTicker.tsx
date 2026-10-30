import React from 'react';
import { useCollege } from '../../context/CollegeContext';
import { Megaphone, ArrowRight } from 'lucide-react';

export const AnnouncementTicker: React.FC = () => {
  const { notices, setActiveView } = useCollege();
  const latestNotice = notices[0];

  if (!latestNotice) return null;

  return (
    <div className="bg-[#0e1828] text-slate-300 border-b border-slate-800 text-xs py-2 px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="flex items-center gap-1.5 text-blue-300 font-semibold tracking-wider uppercase text-[11px] shrink-0">
            <Megaphone className="w-3.5 h-3.5 text-blue-400" />
            <span>Collegiate Circular</span>
          </div>
          <span className="text-slate-600 shrink-0">|</span>
          <p className="truncate text-slate-200 text-xs font-normal">
            <span className="font-medium text-white">{latestNotice.title}</span>
            <span className="text-slate-400 ml-2 hidden md:inline">({latestNotice.publishDate})</span>
          </p>
        </div>

        <button
          onClick={() => setActiveView('notices')}
          className="flex items-center gap-1 text-blue-300 hover:text-white text-xs font-medium shrink-0 ml-auto transition-colors"
        >
          <span>View All Notices</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
