import React, { useState } from 'react';
import { useCollege } from '../../context/CollegeContext';
import { Search, BookOpen, Briefcase, Trophy, Home, CheckCircle2, Building2 } from 'lucide-react';

export const CampusView: React.FC = () => {
  const { libraryBooks } = useCollege();
  const [bookQuery, setBookQuery] = useState('');
  const [selectedDeptFilter, setSelectedDeptFilter] = useState('All');

  const filteredBooks = libraryBooks.filter((book) => {
    const matchesQuery =
      book.title.toLowerCase().includes(bookQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(bookQuery.toLowerCase()) ||
      book.isbn.toLowerCase().includes(bookQuery.toLowerCase());
    const matchesDept = selectedDeptFilter === 'All' || book.department === selectedDeptFilter;
    return matchesQuery && matchesDept;
  });

  const recruiters = [
    'Google DeepMind',
    'Microsoft Research',
    'Amazon Web Services',
    'Intel Microelectronics',
    'Qualcomm Wireless',
    'Larsen & Toubro',
    'Siemens Energy',
    'Deloitte Consulting',
    'Goldman Sachs',
    'Cisco Systems',
  ];

  return (
    <div className="py-12 bg-stone-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10 sm:space-y-12">
        {/* Header */}
        <div className="pb-6 sm:pb-8 border-b border-stone-200">
          <div className="text-xs uppercase tracking-widest font-semibold text-amber-700">
            Campus Ecosystem & Amenities
          </div>
          <h1 className="mt-1 font-serif-title text-2xl xs:text-3xl md:text-4xl font-medium text-stone-900 tracking-tight">
            Facilities, Library & Career Placement
          </h1>
          <p className="mt-2 text-stone-600 text-xs sm:text-sm max-w-2xl leading-relaxed">
            A comprehensive collegiate environment engineered for scholarly concentration, collegiate athletics, residential fellowship, and premier career placement.
          </p>
        </div>

        {/* 1. Central Library Catalog Explorer */}
        <div className="bg-white border border-stone-200 rounded-lg p-4 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-100">
            <div>
              <div className="flex items-center gap-2 text-amber-700 text-xs font-semibold uppercase tracking-wider">
                <BookOpen className="w-4 h-4" />
                <span>Central Archival Library</span>
              </div>
              <h2 className="font-serif-title text-xl font-bold text-stone-900 mt-1">
                Collegiate Book & Manuscript Search
              </h2>
            </div>
            <div className="text-xs font-mono text-stone-500">
              Stack Availability: 250,000+ Printed & Digital Titles
            </div>
          </div>

          {/* Search Inputs */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-12 gap-4">
            <div className="sm:col-span-8 relative">
              <input
                type="text"
                value={bookQuery}
                onChange={(e) => setBookQuery(e.target.value)}
                placeholder="Search by Title, Author, or ISBN..."
                className="w-full pl-9 pr-4 py-2.5 text-xs bg-stone-50 border border-stone-300 rounded focus:bg-white focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
            </div>

            <div className="sm:col-span-4">
              <select
                value={selectedDeptFilter}
                onChange={(e) => setSelectedDeptFilter(e.target.value)}
                className="w-full px-3 py-2.5 text-xs bg-stone-50 border border-stone-300 rounded focus:bg-white focus:outline-none focus:ring-1 focus:ring-amber-500"
              >
                <option value="All">All Disciplines</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Web Systems">Web Systems & PHP</option>
                <option value="Electronics">Electronics</option>
              </select>
            </div>
          </div>

          {/* Books Table */}
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse border border-stone-200">
              <thead className="bg-stone-100 text-stone-800 font-medium">
                <tr>
                  <th className="p-3 border border-stone-200">Book Title</th>
                  <th className="p-3 border border-stone-200">Author(s)</th>
                  <th className="p-3 border border-stone-200">Discipline</th>
                  <th className="p-3 border border-stone-200">ISBN</th>
                  <th className="p-3 border border-stone-200">Shelf Location</th>
                  <th className="p-3 border border-stone-200 text-center">Copies</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                {filteredBooks.map((b) => (
                  <tr key={b.id} className="hover:bg-stone-50">
                    <td className="p-3 font-semibold text-stone-900 border border-stone-200">
                      {b.title}
                    </td>
                    <td className="p-3 text-stone-700 border border-stone-200">
                      {b.author}
                    </td>
                    <td className="p-3 text-stone-600 border border-stone-200">
                      {b.department}
                    </td>
                    <td className="p-3 font-mono text-stone-500 border border-stone-200">
                      {b.isbn}
                    </td>
                    <td className="p-3 font-mono text-amber-800 border border-stone-200">
                      {b.shelfLocation}
                    </td>
                    <td className="p-3 text-center border border-stone-200">
                      <span className="font-mono font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                        {b.availableCopies} / {b.totalCopies} Available
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 2. Training & Placement Cell */}
        <div className="bg-white border border-stone-200 rounded-lg p-6 sm:p-8 shadow-sm">
          <div className="flex items-center justify-between pb-4 border-b border-stone-100">
            <div>
              <div className="flex items-center gap-2 text-amber-700 text-xs font-semibold uppercase tracking-wider">
                <Briefcase className="w-4 h-4" />
                <span>Career Progression</span>
              </div>
              <h2 className="font-serif-title text-xl font-bold text-stone-900 mt-1">
                Corporate Training & Campus Placements
              </h2>
            </div>
            <div className="text-xs font-mono text-emerald-700 font-semibold">
              Season 2025-26 Placement: 98.4%
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 bg-stone-50 border border-stone-200 rounded text-center">
              <div className="text-2xl font-serif-title font-bold text-stone-900 tabular-nums">$115,000</div>
              <div className="text-[11px] text-stone-500 uppercase mt-0.5">Average Starting Package</div>
            </div>
            <div className="p-4 bg-stone-50 border border-stone-200 rounded text-center">
              <div className="text-2xl font-serif-title font-bold text-amber-700 tabular-nums">$240,000</div>
              <div className="text-[11px] text-stone-500 uppercase mt-0.5">Highest International Offer</div>
            </div>
            <div className="p-4 bg-stone-50 border border-stone-200 rounded text-center">
              <div className="text-2xl font-serif-title font-bold text-stone-900 tabular-nums">140+</div>
              <div className="text-[11px] text-stone-500 uppercase mt-0.5">Recruiting Corporate Partners</div>
            </div>
            <div className="p-4 bg-stone-50 border border-stone-200 rounded text-center">
              <div className="text-2xl font-serif-title font-bold text-stone-900 tabular-nums">480+</div>
              <div className="text-[11px] text-stone-500 uppercase mt-0.5">Pre-Placement Offers</div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-900 mb-3">
              Key Campus Recruiting Partners
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {recruiters.map((rec, i) => (
                <div
                  key={i}
                  className="px-3.5 py-1.5 bg-stone-50 border border-stone-200 rounded text-xs text-stone-800 font-medium"
                >
                  {rec}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3. Hostels & Athletic Amenities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-stone-200 rounded-lg p-6 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-amber-700 text-xs font-semibold uppercase tracking-wider">
              <Home className="w-4 h-4" />
              <span>Campus Residence</span>
            </div>
            <h3 className="font-serif-title text-lg font-bold text-stone-900">
              Hostels & Student Residences
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Modern air-conditioned suites with Wi-Fi 6 connectivity, common lounges, study bays, and dining halls serving balanced nutritional cuisine under strict hygiene standards.
            </p>
            <ul className="text-xs text-stone-600 space-y-1.5">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Block A (Men's Hall) & Block B (Women's Hall)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>24/7 Security Patrol & CCTV Surveillance</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Resident Medical Center & Ambulance Facility</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-stone-200 rounded-lg p-6 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-amber-700 text-xs font-semibold uppercase tracking-wider">
              <Trophy className="w-4 h-4" />
              <span>Athletics & Recreation</span>
            </div>
            <h3 className="font-serif-title text-lg font-bold text-stone-900">
              Sports Complex & Gymnasium
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Olympic-standard 8-lane running track, indoor badminton & basketball courts, heated swimming pavilion, and certified fitness trainers for all students.
            </p>
            <ul className="text-xs text-stone-600 space-y-1.5">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Inter-Collegiate Athletic Championships Team</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Full-size Football & Cricket Pavilions</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Student Yoga, Mindfulness & Wellness Center</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
