import React, { useState } from 'react';
import { useCollege } from '../../context/CollegeContext';
import { Search, Printer, Award, CheckCircle2, ShieldCheck, Download, AlertCircle } from 'lucide-react';

export const ExaminationsView: React.FC = () => {
  const { semesterResults } = useCollege();
  const [rollInput, setRollInput] = useState('2024CS101');
  const [selectedSemester, setSelectedSemester] = useState<number>(4);
  const [activeRoll, setActiveRoll] = useState('2024CS101');

  const result = semesterResults[activeRoll];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (rollInput.trim()) {
      setActiveRoll(rollInput.trim().toUpperCase());
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="py-12 bg-stone-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Page Header */}
        <div className="pb-6 sm:pb-8 border-b border-stone-200">
          <div className="text-xs uppercase tracking-widest font-semibold text-amber-700">
            Office of the Controller of Examinations
          </div>
          <h1 className="mt-1 font-serif-title text-2xl xs:text-3xl md:text-4xl font-medium text-stone-900 tracking-tight">
            Semester Examination Results & Grade Cards
          </h1>
          <p className="mt-2 text-stone-600 text-xs sm:text-sm max-w-2xl leading-relaxed">
            Query authenticated collegiate transcripts and semester grade cards directly from the relational marks database.
          </p>
        </div>

        {/* Search Panel */}
        <div className="mt-6 sm:mt-8 bg-white border border-stone-200 rounded-lg p-4 sm:p-6 shadow-sm">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <div className="w-full sm:flex-1">
              <label className="block text-xs font-medium text-stone-700 mb-1">
                Student Roll Number / Registration ID:
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={rollInput}
                  onChange={(e) => setRollInput(e.target.value)}
                  placeholder="e.g. 2024CS101"
                  className="w-full px-3 py-2.5 text-xs font-mono uppercase bg-stone-50 border border-stone-300 rounded focus:bg-white focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
              </div>
            </div>

            <div className="w-full sm:w-48">
              <label className="block text-xs font-medium text-stone-700 mb-1">
                Semester:
              </label>
              <select
                value={selectedSemester}
                onChange={(e) => setSelectedSemester(Number(e.target.value))}
                className="w-full px-3 py-2.5 text-xs bg-stone-50 border border-stone-300 rounded focus:bg-white focus:outline-none focus:ring-1 focus:ring-amber-500"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((s) => (
                  <option key={s} value={s}>
                    Semester {s}
                  </option>
                ))}
              </select>
            </div>

            <div className="w-full sm:w-auto sm:pt-5">
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-2.5 text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 transition-colors rounded shadow-sm flex items-center justify-center gap-2"
              >
                <Search className="w-4 h-4" />
                <span>Fetch Grade Sheet</span>
              </button>
            </div>
          </form>

          {/* Quick Click Sample Roll Numbers */}
          <div className="mt-4 pt-3 border-t border-stone-100 flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs text-stone-500">
            <span className="font-medium text-stone-700 text-xs">Sample Rolls:</span>
            {['2024CS101', '2024CS102', '2024EC201', '2024ME301', '2024BA401'].map((roll) => (
              <button
                key={roll}
                type="button"
                onClick={() => {
                  setRollInput(roll);
                  setActiveRoll(roll);
                }}
                className={`font-mono px-2 py-0.5 rounded text-[11px] border transition-colors ${
                  activeRoll === roll
                    ? 'bg-amber-100 text-amber-900 border-amber-300 font-semibold'
                    : 'bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100'
                }`}
              >
                {roll}
              </button>
            ))}
          </div>
        </div>

        {/* Official Grade Card Container */}
        {result ? (
          <div className="mt-8 sm:mt-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3">
              <div className="text-[11px] sm:text-xs text-stone-500 font-mono truncate">
                Doc Code: #EWART-EXAM-{result.rollNumber}-{result.semester}
              </div>
              <button
                onClick={handlePrint}
                className="self-start sm:self-auto flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs font-medium text-stone-800 bg-white border border-stone-300 hover:bg-stone-50 rounded shadow-sm transition-colors"
              >
                <Printer className="w-4 h-4 text-stone-600" />
                <span>Print Official Marksheet</span>
              </button>
            </div>

            {/* Authentic Printable Grade Card */}
            <div className="bg-white border-2 border-stone-300 rounded-lg p-4 sm:p-10 shadow-md printable-marksheet relative overflow-hidden">
              {/* Background watermark badge */}
              <div className="absolute right-4 bottom-4 pointer-events-none opacity-[0.03] select-none text-7xl sm:text-9xl font-crest font-bold text-stone-900">
                EWART
              </div>

              {/* College Header */}
              <div className="text-center pb-5 sm:pb-6 border-b-2 border-stone-800">
                <div className="flex items-center justify-center gap-3">
                  <div className="w-10 h-10 rounded bg-[#011F5B] text-amber-400 flex items-center justify-center font-serif font-bold text-xl shrink-0">
                    E
                  </div>
                  <div className="text-left sm:text-center">
                    <h2 className="font-crest text-base sm:text-2xl font-bold tracking-wider text-stone-900 uppercase">
                      CSI Ewart Women's Christian College
                    </h2>
                    <p className="text-[11px] sm:text-xs text-stone-600 font-serif italic">
                      Affiliated to the University of Madras · CSI Diocese of Madras · Est. 1997
                    </p>
                  </div>
                </div>
                <div className="mt-3 inline-block bg-stone-100 text-stone-800 font-serif uppercase tracking-widest text-[11px] sm:text-xs px-3 sm:px-4 py-1 border border-stone-300 rounded">
                  Statement of Grades · End-Semester Examination
                </div>
              </div>

              {/* Student Metadata Definition Grid */}
              <div className="mt-5 sm:mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-xs pb-5 sm:pb-6 border-b border-stone-200">
                <div>
                  <span className="text-stone-500 block text-[11px]">Student Name:</span>
                  <span className="font-bold text-stone-900 text-xs sm:text-sm">{result.studentName}</span>
                </div>
                <div>
                  <span className="text-stone-500 block text-[11px]">Roll Number:</span>
                  <span className="font-mono font-bold text-stone-900 text-xs sm:text-sm">{result.rollNumber}</span>
                </div>
                <div>
                  <span className="text-stone-500 block text-[11px]">Department & Degree:</span>
                  <span className="font-semibold text-stone-900">{result.departmentName}</span>
                  <span className="block text-stone-500 text-[10px] sm:text-[11px]">{result.degree}</span>
                </div>
                <div>
                  <span className="text-stone-500 block text-[11px]">Semester & Year:</span>
                  <span className="font-semibold text-stone-900">Sem {result.semester} · {result.academicYear}</span>
                </div>
              </div>

              {/* Subject Marks Table with Horizontal Scroll */}
              <div className="mt-6 overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
                <table className="w-full min-w-[650px] text-xs text-left border-collapse border border-stone-300">
                  <thead className="bg-stone-100 text-stone-800 font-serif uppercase text-[11px] tracking-wider border-b border-stone-300">
                    <tr>
                      <th className="p-3 border border-stone-300">Course Code</th>
                      <th className="p-3 border border-stone-300">Course Title</th>
                      <th className="p-3 text-center border border-stone-300">Credits</th>
                      <th className="p-3 text-center border border-stone-300">Internal (40)</th>
                      <th className="p-3 text-center border border-stone-300">External (60)</th>
                      <th className="p-3 text-center border border-stone-300">Total (100)</th>
                      <th className="p-3 text-center border border-stone-300">Grade Point</th>
                      <th className="p-3 text-center border border-stone-300">Letter Grade</th>
                      <th className="p-3 text-center border border-stone-300">Result</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200">
                    {result.subjects.map((sub, idx) => (
                      <tr key={idx} className="hover:bg-stone-50">
                        <td className="p-3 font-mono font-semibold text-stone-900 border border-stone-200">
                          {sub.courseCode}
                        </td>
                        <td className="p-3 font-medium text-stone-800 border border-stone-200">
                          {sub.courseTitle}
                        </td>
                        <td className="p-3 text-center font-mono border border-stone-200 tabular-nums">
                          {sub.credits}
                        </td>
                        <td className="p-3 text-center font-mono border border-stone-200 tabular-nums">
                          {sub.internalMarks}
                        </td>
                        <td className="p-3 text-center font-mono border border-stone-200 tabular-nums">
                          {sub.externalMarks}
                        </td>
                        <td className="p-3 text-center font-mono font-bold text-stone-900 border border-stone-200 tabular-nums">
                          {sub.totalMarks}
                        </td>
                        <td className="p-3 text-center font-mono font-bold text-stone-900 border border-stone-200 tabular-nums">
                          {sub.gradePoint}
                        </td>
                        <td className="p-3 text-center font-bold text-amber-800 border border-stone-200">
                          {sub.letterGrade}
                        </td>
                        <td className="p-3 text-center border border-stone-200">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                            sub.status === 'Pass' ? 'text-emerald-800 bg-emerald-50' : 'text-rose-800 bg-rose-50'
                          }`}>
                            {sub.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Summary & GPA Strip */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-stone-50 border border-stone-200 rounded">
                <div>
                  <span className="text-xs text-stone-500 block">Semester GPA (SGPA):</span>
                  <span className="font-serif-title font-bold text-2xl text-stone-900 tabular-nums">
                    {result.sgpa.toFixed(2)}
                  </span>
                </div>
                <div>
                  <span className="text-xs text-stone-500 block">Cumulative GPA (CGPA):</span>
                  <span className="font-serif-title font-bold text-2xl text-stone-900 tabular-nums">
                    {result.cgpa.toFixed(2)}
                  </span>
                </div>
                <div>
                  <span className="text-xs text-stone-500 block">Academic Standing:</span>
                  <span className="font-bold text-xs text-emerald-800 block mt-1">
                    {result.resultStatus}
                  </span>
                </div>
              </div>

              {/* Signatures & Seal */}
              <div className="mt-10 pt-6 border-t border-stone-200 grid grid-cols-1 sm:grid-cols-3 gap-6 items-end text-xs text-stone-600">
                <div className="text-left space-y-1">
                  <div className="text-stone-400 font-mono text-[11px]">Issued on: {result.issueDate}</div>
                  <div className="flex items-center gap-1.5 text-emerald-700">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Cryptographically Signed</span>
                  </div>
                </div>

                <div className="text-center space-y-1">
                  <div className="w-16 h-16 mx-auto border-2 border-stone-300 rounded-full flex items-center justify-center text-[10px] font-serif uppercase tracking-widest text-stone-400">
                    SEAL
                  </div>
                  <div className="text-[11px] text-stone-400">Collegiate Registrar Seal</div>
                </div>

                <div className="text-right space-y-1">
                  <div className="font-serif italic font-medium text-stone-900 text-sm">
                    Dr. H. Vance
                  </div>
                  <div className="border-t border-stone-400 pt-1 font-semibold text-stone-700">
                    Controller of Examinations
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-10 p-8 bg-white border border-stone-200 rounded-lg text-center space-y-3">
            <AlertCircle className="w-8 h-8 text-amber-600 mx-auto" />
            <h3 className="font-serif-title text-lg font-bold text-stone-900">
              No Record Found for Roll Number: {activeRoll}
            </h3>
            <p className="text-xs text-stone-600 max-w-md mx-auto">
              Please verify the roll number. Try clicking one of the sample roll numbers above (e.g. <code className="font-mono">2024CS101</code>).
            </p>
          </div>
        )}

        {/* Grading Scale Legend */}
        <div className="mt-12 bg-white border border-stone-200 rounded-lg p-6 shadow-sm">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-900 pb-3 border-b border-stone-100">
            Autonomous Grading System & Point Distribution Legend
          </h3>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 text-center text-xs">
            <div className="p-2 bg-stone-50 border border-stone-200 rounded">
              <div className="font-bold text-stone-900">Grade O</div>
              <div className="text-amber-800 font-mono text-[11px]">10 Points</div>
              <div className="text-[10px] text-stone-500">Outstanding (≥90%)</div>
            </div>
            <div className="p-2 bg-stone-50 border border-stone-200 rounded">
              <div className="font-bold text-stone-900">Grade A+</div>
              <div className="text-amber-800 font-mono text-[11px]">9 Points</div>
              <div className="text-[10px] text-stone-500">Excellent (80-89%)</div>
            </div>
            <div className="p-2 bg-stone-50 border border-stone-200 rounded">
              <div className="font-bold text-stone-900">Grade A</div>
              <div className="text-amber-800 font-mono text-[11px]">8 Points</div>
              <div className="text-[10px] text-stone-500">Very Good (70-79%)</div>
            </div>
            <div className="p-2 bg-stone-50 border border-stone-200 rounded">
              <div className="font-bold text-stone-900">Grade B+</div>
              <div className="text-amber-800 font-mono text-[11px]">7 Points</div>
              <div className="text-[10px] text-stone-500">Good (60-69%)</div>
            </div>
            <div className="p-2 bg-stone-50 border border-stone-200 rounded">
              <div className="font-bold text-stone-900">Grade B</div>
              <div className="text-amber-800 font-mono text-[11px]">6 Points</div>
              <div className="text-[10px] text-stone-500">Above Average (50-59%)</div>
            </div>
            <div className="p-2 bg-stone-50 border border-stone-200 rounded">
              <div className="font-bold text-stone-900">Grade C</div>
              <div className="text-amber-800 font-mono text-[11px]">5 Points</div>
              <div className="text-[10px] text-stone-500">Pass (40-49%)</div>
            </div>
            <div className="p-2 bg-stone-50 border border-stone-200 rounded">
              <div className="font-bold text-stone-900">Grade P</div>
              <div className="text-amber-800 font-mono text-[11px]">4 Points</div>
              <div className="text-[10px] text-stone-500">Marginal Pass</div>
            </div>
            <div className="p-2 bg-rose-50 border border-rose-200 rounded">
              <div className="font-bold text-rose-900">Grade F</div>
              <div className="text-rose-800 font-mono text-[11px]">0 Points</div>
              <div className="text-[10px] text-rose-600">Re-appear / Fail</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
