import React, { useState } from 'react';
import { useCollege } from '../../context/CollegeContext';
import { BookOpen, Users, Award, Download, CheckCircle2, ChevronRight, Layers } from 'lucide-react';

export const AcademicsView: React.FC = () => {
  const { departments, courses, faculty, setActiveView } = useCollege();
  const [selectedDeptId, setSelectedDeptId] = useState<string>(departments[0]?.id || 'dept-cse');

  const selectedDept = departments.find((d) => d.id === selectedDeptId) || departments[0];
  const deptCourses = courses.filter((c) => c.departmentId === selectedDept.id);
  const deptFaculty = faculty.filter((f) => f.departmentId === selectedDept.id);

  return (
    <div className="py-12 bg-stone-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Page Header */}
        <div className="pb-6 sm:pb-8 border-b border-stone-200">
          <div className="text-xs uppercase tracking-widest font-semibold text-amber-700">
            Curriculum & Academic Excellence
          </div>
          <h1 className="mt-1 font-serif-title text-2xl xs:text-3xl md:text-4xl font-medium text-stone-900 tracking-tight">
            Academic Departments & Programs
          </h1>
          <p className="mt-2 text-stone-600 text-xs sm:text-sm max-w-2xl leading-relaxed">
            CSI Ewart Women's Christian College offers University of Madras affiliated degree programs blending foundational humanities, commerce, science, modern computing, and management studies.
          </p>
        </div>

        {/* Department Switcher Tabs (Segmented controls with horizontal scroll on mobile) */}
        <div className="mt-6 sm:mt-8 flex overflow-x-auto no-scrollbar gap-2 border-b border-stone-200 pb-3 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
          {departments.map((dept) => {
            const isSelected = dept.id === selectedDeptId;
            return (
              <button
                key={dept.id}
                onClick={() => setSelectedDeptId(dept.id)}
                className={`px-3.5 sm:px-4 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 ${
                  isSelected
                    ? 'bg-stone-900 text-amber-300 shadow-sm'
                    : 'bg-white text-stone-600 hover:text-stone-900 border border-stone-200'
                }`}
              >
                {dept.shortName}
              </button>
            );
          })}
        </div>

        {/* Selected Department Overview */}
        <div className="mt-6 sm:mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {/* Main Department Info */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-8">
            <div className="bg-white border border-stone-200 rounded-lg p-4 sm:p-8 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4 pb-4 border-b border-stone-100">
                <div>
                  <div className="text-xs font-mono font-medium text-amber-700">
                    Department Code: {selectedDept.code}
                  </div>
                  <h2 className="font-serif-title text-2xl font-bold text-stone-900 mt-0.5">
                    {selectedDept.name}
                  </h2>
                </div>
                <div className="flex items-center gap-4 text-xs text-stone-500 font-mono">
                  <span>{selectedDept.studentCount} Enrolled Students</span>
                  <span>·</span>
                  <span>{selectedDept.facultyCount} Faculty Members</span>
                </div>
              </div>

              <p className="mt-4 text-stone-600 text-sm leading-relaxed">
                {selectedDept.description}
              </p>

              {/* Degrees offered */}
              <div className="mt-6">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-900">
                  Degree Programs Awarded
                </h3>
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedDept.degreesOffered.map((deg, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2.5 p-3 bg-stone-50 border border-stone-200 rounded text-xs text-stone-800"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="font-medium">{deg}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Research Laboratories */}
              <div className="mt-6">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-900">
                  Dedicated Research Laboratories & Cleanrooms
                </h3>
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedDept.labs.map((lab, i) => (
                    <div
                      key={i}
                      className="p-3 bg-stone-50 border border-stone-200 rounded text-xs text-stone-700"
                    >
                      <div className="font-semibold text-stone-900">{lab}</div>
                      <div className="text-[11px] text-stone-500 mt-0.5">Funded Equipment & Research Stations</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Courses & Curriculum */}
            <div className="bg-white border border-stone-200 rounded-lg p-6 sm:p-8 shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-stone-100">
                <div>
                  <h3 className="font-serif-title text-xl font-bold text-stone-900">
                    Featured Curriculum & Syllabus
                  </h3>
                  <p className="text-xs text-stone-500">Core courses and laboratory units for Semester 4</p>
                </div>
                <button
                  onClick={() => alert(`Downloading official syllabus brochure for ${selectedDept.name} (PDF)...`)}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-700 hover:text-stone-900 bg-stone-100 rounded border border-stone-200 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Brochure (PDF)</span>
                </button>
              </div>

              <div className="mt-6 divide-y divide-stone-100">
                {deptCourses.length > 0 ? (
                  deptCourses.map((c) => (
                    <div key={c.id} className="py-4 first:pt-0 last:pb-0 space-y-1.5">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 bg-amber-50 text-amber-800 font-mono text-xs font-semibold border border-amber-200 rounded">
                            {c.code}
                          </span>
                          <span className="font-semibold text-stone-900 text-sm">{c.title}</span>
                        </div>
                        <div className="text-xs font-mono text-stone-500">
                          {c.credits} Credits · Semester {c.semester}
                        </div>
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        {c.syllabusOverview}
                      </p>
                      <div className="text-xs text-stone-500">
                        Instructor: <span className="text-stone-800 font-medium">{c.instructorName}</span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="py-4 text-xs text-stone-500 italic">
                    Showing core engineering syllabus. Department courses rotate across autumn and spring semesters.
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar: Department HOD & Faculty Roster */}
          <div className="lg:col-span-4 space-y-6">
            {/* HOD Card */}
            <div className="bg-stone-900 text-white rounded-lg p-6 shadow-sm border border-stone-800">
              <div className="text-xs font-mono uppercase tracking-wider text-amber-400">
                Head of Department
              </div>
              <h3 className="font-serif-title text-lg font-bold mt-1 text-white">
                {selectedDept.headOfDepartment}
              </h3>
              <p className="mt-3 text-xs text-stone-300 leading-relaxed">
                Overseeing faculty recruitment, ABET curriculum accreditation, industry sponsored research, and student mentorship initiatives.
              </p>
              <div className="mt-4 pt-4 border-t border-stone-800 flex items-center justify-between text-xs">
                <span className="text-stone-400">Office: Tech Block 3, #402</span>
                <button
                  onClick={() => setActiveView('admissions')}
                  className="text-amber-400 hover:text-amber-300 font-semibold"
                >
                  Inquire
                </button>
              </div>
            </div>

            {/* Department Faculty List */}
            <div className="bg-white border border-stone-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-900 pb-3 border-b border-stone-100 flex items-center justify-between">
                <span>Faculty Directory</span>
                <span className="font-mono text-stone-400">{selectedDept.shortName}</span>
              </h3>

              <div className="mt-4 divide-y divide-stone-100">
                {deptFaculty.map((fac) => (
                  <div key={fac.id} className="py-3 first:pt-0 last:pb-0 space-y-1">
                    <div className="font-semibold text-stone-900 text-xs">{fac.name}</div>
                    <div className="text-[11px] text-stone-500">{fac.designation}</div>
                    <div className="text-[11px] text-amber-800 font-medium">{fac.qualification}</div>
                    <div className="text-[11px] font-mono text-stone-400">{fac.email}</div>
                  </div>
                ))}

                {deptFaculty.length === 0 && (
                  <div className="py-4 text-xs text-stone-500 italic">
                    Faculty profiles available via collegiate registrar directory.
                  </div>
                )}
              </div>
            </div>

            {/* Quick Admission CTA */}
            <div className="bg-amber-50/60 border border-amber-200 rounded-lg p-6">
              <h4 className="font-serif-title text-base font-bold text-amber-950">
                Ready to Join {selectedDept.shortName}?
              </h4>
              <p className="text-xs text-amber-900/80 mt-1.5 leading-relaxed">
                Applications for Academic Session 2026-27 are currently being accepted online.
              </p>
              <button
                onClick={() => setActiveView('admissions')}
                className="mt-4 w-full py-2 px-3 text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded transition-colors shadow-sm flex items-center justify-center gap-1.5"
              >
                <span>Apply for Admission</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
