import React, { useState } from 'react';
import { useCollege } from '../../context/CollegeContext';
import { Notice } from '../../types/college';
import { Search, FileText, Download, Calendar, User, ChevronDown, ChevronUp, Bell } from 'lucide-react';

export const NoticesView: React.FC = () => {
  const { notices } = useCollege();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedNoticeId, setExpandedNoticeId] = useState<string | null>(notices[0]?.id || null);

  const categories = ['All', 'Academic', 'Examinations', 'Admissions', 'Placement', 'Events', 'Administrative'];

  const filteredNotices = notices.filter((n) => {
    const matchesCategory = selectedCategory === 'All' || n.category === selectedCategory;
    const matchesSearch =
      n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.referenceNumber.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleExpand = (id: string) => {
    setExpandedNoticeId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="py-12 bg-stone-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="pb-6 sm:pb-8 border-b border-stone-200">
          <div className="text-xs uppercase tracking-widest font-semibold text-amber-700">
            Registrar & Academic Secretariat
          </div>
          <h1 className="mt-1 font-serif-title text-2xl xs:text-3xl md:text-4xl font-medium text-stone-900 tracking-tight">
            Collegiate Circulars & Official Notices
          </h1>
          <p className="mt-2 text-stone-600 text-xs sm:text-sm max-w-2xl leading-relaxed">
            Official announcements, examination notifications, academic schedules, and institutional memorandums.
          </p>
        </div>

        {/* Filters and Search Bar */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
          {/* Category Tabs (Horizontal scroll on mobile) */}
          <div className="flex overflow-x-auto no-scrollbar gap-1.5 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded whitespace-nowrap transition-colors shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-stone-900 text-amber-300'
                    : 'bg-white text-stone-600 hover:text-stone-900 border border-stone-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="w-full sm:w-72 relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search notices..."
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-stone-300 rounded focus:outline-none focus:ring-1 focus:ring-amber-500"
            />
            <Search className="w-4 h-4 text-stone-400 absolute left-2.5 top-2" />
          </div>
        </div>

        {/* Notices List */}
        <div className="mt-8 space-y-4">
          {filteredNotices.map((n) => {
            const isExpanded = expandedNoticeId === n.id;
            return (
              <div
                key={n.id}
                className="bg-white border border-stone-200 rounded-lg p-5 sm:p-6 shadow-sm hover:border-stone-300 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div className="space-y-1.5 flex-1">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500 font-mono">
                      <span className="font-semibold text-stone-800">{n.referenceNumber}</span>
                      <span>·</span>
                      <span className="text-amber-800 font-sans font-medium">{n.category}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-stone-400" />
                        <span>{n.publishDate}</span>
                      </span>
                    </div>

                    <h2
                      onClick={() => toggleExpand(n.id)}
                      className="font-serif-title text-lg font-bold text-stone-900 cursor-pointer hover:text-amber-800 transition-colors"
                    >
                      {n.title}
                    </h2>

                    <p className="text-xs text-stone-600 leading-relaxed">
                      {n.summary}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 pt-2 sm:pt-0">
                    <button
                      onClick={() => toggleExpand(n.id)}
                      className="p-1.5 text-stone-500 hover:text-stone-900 bg-stone-50 rounded border border-stone-200 text-xs flex items-center gap-1"
                    >
                      <span>{isExpanded ? 'Collapse' : 'Details'}</span>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Expanded Full Notice Content */}
                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-stone-100 space-y-4">
                    <div className="text-xs text-stone-700 leading-relaxed p-4 bg-stone-50 border border-stone-200 rounded">
                      {n.content}
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-stone-500">
                      <div className="flex items-center gap-1.5 font-medium text-stone-700">
                        <User className="w-3.5 h-3.5 text-stone-400" />
                        <span>Issued by: {n.issuedBy}</span>
                      </div>

                      {n.attachmentName && (
                        <button
                          onClick={() => alert(`Downloading attachment: ${n.attachmentName}`)}
                          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-900 bg-amber-400 hover:bg-amber-300 rounded transition-colors"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>Download {n.attachmentName}</span>
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {filteredNotices.length === 0 && (
            <div className="p-8 bg-white border border-stone-200 rounded text-center text-xs text-stone-500">
              No circulars found matching the filter criteria.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
