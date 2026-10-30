import React, { useState } from 'react';
import { useCollege } from '../../context/CollegeContext';
import { Award, Mail, BookOpen, GraduationCap, Briefcase, Search } from 'lucide-react';

export const FacultyView: React.FC = () => {
  const { faculty, departments } = useCollege();
  const [selectedDeptId, setSelectedDeptId] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredFaculty = faculty.filter((f) => {
    const matchesDept = selectedDeptId === 'All' || f.departmentId === selectedDeptId;
    const matchesSearch =
      f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.specialization.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.qualification.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDept && matchesSearch;
  });

  return (
    <div className="py-12 bg-stone-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8 sm:space-y-10">
        {/* Header */}
        <div className="pb-6 sm:pb-8 border-b border-stone-200">
          <div className="text-xs uppercase tracking-widest font-semibold text-amber-700">
            Scholarly Mentorship & Pedagogy
          </div>
          <h1 className="mt-1 font-serif-title text-2xl xs:text-3xl md:text-4xl font-medium text-stone-900 tracking-tight">
            Academic Faculty Directory
          </h1>
          <p className="mt-2 text-stone-600 text-xs sm:text-sm max-w-2xl leading-relaxed">
            Distinguished women educators, researchers, and doctoral scholars dedicated to nurturing young minds with intellectual vigor and Christian moral values.
          </p>
        </div>

        {/* Filter controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
          {/* Department filter tabs (Horizontal scroll on mobile) */}
          <div className="flex overflow-x-auto no-scrollbar gap-1.5 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap pb-1">
            <button
              onClick={() => setSelectedDeptId('All')}
              className={`px-3 py-1.5 text-xs font-semibold rounded whitespace-nowrap transition-colors shrink-0 ${
                selectedDeptId === 'All'
                  ? 'bg-stone-900 text-amber-300'
                  : 'bg-white text-stone-600 hover:text-stone-900 border border-stone-200'
              }`}
            >
              All Departments
            </button>
            {departments.map((d) => (
              <button
                key={d.id}
                onClick={() => setSelectedDeptId(d.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded whitespace-nowrap transition-colors shrink-0 ${
                  selectedDeptId === d.id
                    ? 'bg-stone-900 text-amber-300'
                    : 'bg-white text-stone-600 hover:text-stone-900 border border-stone-200'
                }`}
              >
                {d.shortName}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="w-full sm:w-72 relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search faculty by name or field..."
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-stone-300 rounded focus:outline-none focus:ring-1 focus:ring-amber-500"
            />
            <Search className="w-4 h-4 text-stone-400 absolute left-2.5 top-2" />
          </div>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFaculty.map((f) => {
            const dept = departments.find((d) => d.id === f.departmentId);
            return (
              <div
                key={f.id}
                className="bg-white border border-stone-200 rounded-lg p-6 shadow-sm hover:border-amber-400 transition-colors flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Top card metadata */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center font-serif text-lg font-bold shrink-0">
                      {f.name.replace('Dr. ', '').replace('Prof. ', '').charAt(0)}
                    </div>
                    <div className="text-right">
                      <span className="font-mono text-[10px] text-stone-400 uppercase tracking-wider block">
                        {f.employeeId}
                      </span>
                      <span className="text-[11px] font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                        {dept?.shortName}
                      </span>
                    </div>
                  </div>

                  {/* Profile info */}
                  <div>
                    <h3 className="font-serif-title text-base font-bold text-stone-900">
                      {f.name}
                    </h3>
                    <div className="text-xs text-stone-600 font-medium mt-0.5">
                      {f.designation}
                    </div>
                    <div className="text-xs text-amber-900 font-medium mt-1">
                      {f.qualification}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-stone-100 space-y-1.5 text-xs text-stone-600">
                    <div>
                      <span className="text-stone-400 block text-[11px]">Specialization:</span>
                      <span className="font-medium text-stone-800">{f.specialization}</span>
                    </div>
                    <div className="flex justify-between items-center pt-1 text-[11px]">
                      <span className="text-stone-500">Academic Experience:</span>
                      <span className="font-mono font-semibold text-stone-800">{f.experienceYears} Years</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-stone-500 font-mono text-[11px] truncate">
                    <Mail className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                    <span className="truncate">{f.email}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Institutional Academic Credentials Strip */}
        <div className="bg-stone-900 text-white rounded-lg p-6 sm:p-8 border border-stone-800 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-2xl font-serif-title font-bold text-amber-400">100%</div>
            <div className="text-xs text-stone-400 uppercase tracking-wider mt-1">
              Qualified NET / SET / Ph.D. Faculty
            </div>
          </div>
          <div>
            <div className="text-2xl font-serif-title font-bold text-amber-400">15 : 1</div>
            <div className="text-xs text-stone-400 uppercase tracking-wider mt-1">
              Personalized Student-Faculty Ratio
            </div>
          </div>
          <div>
            <div className="text-2xl font-serif-title font-bold text-amber-400">40+</div>
            <div className="text-xs text-stone-400 uppercase tracking-wider mt-1">
              Research Papers in UGC Care Journals
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
