import React, { useState } from 'react';
import { useCollege } from '../../context/CollegeContext';
import {
  BookOpen,
  Cpu,
  Bus,
  Home,
  Coffee,
  Church,
  Search,
  Wifi,
  Monitor,
  CheckCircle2,
} from 'lucide-react';

export const FacilitiesView: React.FC = () => {
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

  const facilityHighlights = [
    {
      title: 'Advanced Computer & Web Technology Labs',
      description: 'Air-conditioned computing laboratories with high-speed internet, modern desktop systems, Linux and Windows platforms, and dedicated suites for PHP-MySQL, Python, and Java programming.',
      icon: Cpu,
    },
    {
      title: 'Smart Multimedia Audio-Visual Classrooms',
      description: 'Equipped with interactive projectors, ergonomic seating, Wi-Fi 6 access, and acoustic panels to enrich pedagogical delivery.',
      icon: Monitor,
    },
    {
      title: 'The College Chapel',
      description: 'A serene spiritual sanctuary on campus providing an atmosphere of prayer, morning worship, thanksgiving, and quiet contemplation.',
      icon: Church,
    },
    {
      title: 'Dedicated College Bus Fleet',
      description: 'Safe and punctual transportation across major routes covering Tambaram, Chengalpattu, Guduvanchery, Maraimalai Nagar, and Kanchipuram.',
      icon: Bus,
    },
    {
      title: 'Secure Women’s Residential Hostel',
      description: 'Comfortable living with wholesome hygienic vegetarian & non-vegetarian dining, 24/7 security, warden supervision, and study halls.',
      icon: Home,
    },
    {
      title: 'Hygienic Cafeteria & RO Water Plants',
      description: 'Wholesome breakfast, lunch, and snacks prepared under strict food safety norms with continuous reverse osmosis purified drinking water across all blocks.',
      icon: Coffee,
    },
  ];

  const busRoutes = [
    { routeNo: 'Route 1', from: 'Tambaram East / West', via: 'Perungalathur, Vandalur, Guduvanchery', time: '07:30 AM' },
    { routeNo: 'Route 2', from: 'Chengalpattu Old Bus Stand', via: 'Singaperumal Koil, Paranur', time: '07:50 AM' },
    { routeNo: 'Route 3', from: 'Kanchipuram Bus Terminal', via: 'Walajabad, Oragadam Junction', time: '07:15 AM' },
    { routeNo: 'Route 4', from: 'Pallavaram / Chromepet', via: 'Sanatorium, MEPZ, Tambaram', time: '07:20 AM' },
  ];

  return (
    <div className="py-12 bg-stone-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10 sm:space-y-12">
        {/* Header */}
        <div className="pb-6 sm:pb-8 border-b border-stone-200">
          <div className="text-xs uppercase tracking-widest font-semibold text-amber-700">
            Infrastructure & Amenities
          </div>
          <h1 className="mt-1 font-serif-title text-2xl xs:text-3xl md:text-4xl font-medium text-stone-900 tracking-tight">
            Campus Facilities at CSI Ewart
          </h1>
          <p className="mt-2 text-stone-600 text-xs sm:text-sm max-w-2xl leading-relaxed">
            Sprawling, secure, and thoughtfully designed campus amenities tailored to foster women’s safety, intellectual curiosity, and holistic development.
          </p>
        </div>

        {/* 6 Grid Facilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {facilityHighlights.map((fac, idx) => {
            const Icon = fac.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-stone-200 rounded-lg p-5 sm:p-6 shadow-sm hover:border-amber-400 transition-colors space-y-3"
              >
                <div className="w-10 h-10 rounded bg-stone-100 flex items-center justify-center text-amber-800">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif-title text-base font-bold text-stone-900">
                  {fac.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {fac.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Central Library Interactive Catalog Explorer */}
        <div className="bg-white border border-stone-200 rounded-lg p-4 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 pb-4 border-b border-stone-100">
            <div>
              <div className="flex items-center gap-2 text-amber-700 text-xs font-semibold uppercase tracking-wider">
                <BookOpen className="w-4 h-4" />
                <span>Central Archival Library</span>
              </div>
              <h2 className="font-serif-title text-lg sm:text-xl font-bold text-stone-900 mt-1">
                Library Stack & Textbooks Directory
              </h2>
            </div>
            <div className="text-xs font-mono text-stone-500">
              Holding: 25,000+ Printed Titles & National Digital Library Access
            </div>
          </div>

          {/* Search Inputs */}
          <div className="mt-5 sm:mt-6 grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4">
            <div className="sm:col-span-8 relative">
              <input
                type="text"
                value={bookQuery}
                onChange={(e) => setBookQuery(e.target.value)}
                placeholder="Search catalog by title, author, or ISBN..."
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
                <option value="All">All Subject Disciplines</option>
                <option value="Computer Science">Computer Science & Applications</option>
                <option value="Web Systems">Web Systems & PHP</option>
                <option value="Commerce">Commerce & Corporate Secretaryship</option>
                <option value="English">English Literature</option>
              </select>
            </div>
          </div>

          {/* Table */}
          <div className="mt-6 overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
            <table className="w-full min-w-[550px] text-xs text-left border-collapse border border-stone-200">
              <thead className="bg-stone-100 text-stone-800 font-medium">
                <tr>
                  <th className="p-3 border border-stone-200">Book Title</th>
                  <th className="p-3 border border-stone-200">Author</th>
                  <th className="p-3 border border-stone-200">Discipline</th>
                  <th className="p-3 border border-stone-200">Shelf Reference</th>
                  <th className="p-3 border border-stone-200 text-center">Availability</th>
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
                    <td className="p-3 font-mono text-amber-800 border border-stone-200">
                      {b.shelfLocation}
                    </td>
                    <td className="p-3 text-center border border-stone-200">
                      <span className="font-mono font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                        {b.availableCopies} Available
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Transportation Fleet Details */}
        <div className="bg-white border border-stone-200 rounded-lg p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-amber-700 text-xs font-semibold uppercase tracking-wider">
            <Bus className="w-4 h-4" />
            <span>Transport Logistics</span>
          </div>
          <h3 className="font-serif-title text-xl font-bold text-stone-900">
            College Bus Transport Network
          </h3>
          <p className="text-xs text-stone-600 leading-relaxed max-w-3xl">
            To ensure safe, convenient, and reliable transit for day scholars, CSI Ewart operates dedicated college buses fitted with speed governors and GPS trackers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {busRoutes.map((route, i) => (
              <div key={i} className="p-4 bg-stone-50 border border-stone-200 rounded text-xs space-y-1">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-stone-900 text-sm font-serif-title">{route.routeNo}</span>
                  <span className="font-mono text-amber-800 font-semibold">{route.time}</span>
                </div>
                <div className="text-stone-700"><strong>Origin:</strong> {route.from}</div>
                <div className="text-stone-500"><strong>Via:</strong> {route.via}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
