import React, { useState } from 'react';
import { useCollege, UserRole } from '../../context/CollegeContext';
import {
  UserCheck,
  BookOpen,
  ShieldCheck,
  Calendar,
  Clock,
  CheckCircle2,
  AlertTriangle,
  FileCheck2,
  Send,
  PlusCircle,
  FileText,
  DollarSign,
  TrendingUp,
} from 'lucide-react';

export const PortalView: React.FC = () => {
  const {
    userRole,
    setUserRole,
    currentStudent,
    currentFaculty,
    attendance,
    students,
    courses,
    admissions,
    updateAdmissionStatus,
    addNotice,
    markStudentAttendance,
    updateStudentMarks,
  } = useCollege();

  // Faculty Attendance Marking State
  const [selectedCourse, setSelectedCourse] = useState(courses[0]?.code || 'CS401');
  const [selectedStudentRoll, setSelectedStudentRoll] = useState(students[0]?.rollNumber || '2024CS101');
  const [attendanceStatus, setAttendanceStatus] = useState<boolean>(true);
  const [attendanceSuccessMsg, setAttendanceSuccessMsg] = useState('');

  // Faculty Marks Entry State
  const [marksStudentRoll, setMarksStudentRoll] = useState('2024CS101');
  const [marksCourseCode, setMarksCourseCode] = useState('CS401');
  const [internalMarksInput, setInternalMarksInput] = useState<number>(38);
  const [externalMarksInput, setExternalMarksInput] = useState<number>(56);
  const [marksSuccessMsg, setMarksSuccessMsg] = useState('');

  // Admin New Notice State
  const [noticeTitle, setNoticeTitle] = useState('');
  const [noticeCategory, setNoticeCategory] = useState<any>('Academic');
  const [noticeSummary, setNoticeSummary] = useState('');
  const [noticeContent, setNoticeContent] = useState('');
  const [noticeSuccessMsg, setNoticeSuccessMsg] = useState('');

  const handleMarkAttendance = (e: React.FormEvent) => {
    e.preventDefault();
    markStudentAttendance(selectedCourse, selectedStudentRoll, attendanceStatus);
    setAttendanceSuccessMsg(`Recorded attendance for ${selectedStudentRoll} in ${selectedCourse}.`);
    setTimeout(() => setAttendanceSuccessMsg(''), 4000);
  };

  const handleUpdateMarks = (e: React.FormEvent) => {
    e.preventDefault();
    updateStudentMarks(marksStudentRoll, marksCourseCode, Number(internalMarksInput), Number(externalMarksInput));
    setMarksSuccessMsg(`Updated grades for ${marksStudentRoll} in ${marksCourseCode}. Transcript updated live!`);
    setTimeout(() => setMarksSuccessMsg(''), 4000);
  };

  const handleCreateNotice = (e: React.FormEvent) => {
    e.preventDefault();
    if (!noticeTitle.trim()) return;
    addNotice({
      referenceNumber: `CIR/REG/2026/${Math.floor(100 + Math.random() * 900)}`,
      title: noticeTitle,
      category: noticeCategory,
      summary: noticeSummary || noticeTitle,
      content: noticeContent || noticeSummary,
      issuedBy: 'Registrar Directorate',
    });
    setNoticeTitle('');
    setNoticeSummary('');
    setNoticeContent('');
    setNoticeSuccessMsg('Collegiate circular published live onto public website & notices database!');
    setTimeout(() => setNoticeSuccessMsg(''), 4000);
  };

  return (
    <div className="py-12 bg-stone-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Portal Gateway Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-200">
          <div>
            <div className="text-xs uppercase tracking-widest font-semibold text-amber-700">
              Collegiate Intranet & Management Portal
            </div>
            <h1 className="mt-1 font-serif-title text-2xl sm:text-3xl font-medium text-stone-900 tracking-tight">
              Academic Operations Console
            </h1>
          </div>

          {/* Role switcher buttons */}
          <div className="flex items-center gap-1.5 p-1 bg-stone-200 rounded-lg">
            <button
              onClick={() => setUserRole('student')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                userRole === 'student' || userRole === 'visitor'
                  ? 'bg-white text-stone-900 shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <UserCheck className="w-3.5 h-3.5 text-amber-600" />
              <span>Student View</span>
            </button>

            <button
              onClick={() => setUserRole('faculty')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                userRole === 'faculty'
                  ? 'bg-white text-stone-900 shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 text-amber-600" />
              <span>Faculty Desk</span>
            </button>

            <button
              onClick={() => setUserRole('admin')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                userRole === 'admin'
                  ? 'bg-white text-stone-900 shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
              <span>Registrar / Admin</span>
            </button>
          </div>
        </div>

        {/* ----------------- 1. STUDENT VIEW ----------------- */}
        {(userRole === 'student' || userRole === 'visitor') && (
          <div className="mt-8 space-y-8">
            {/* Student Profile Card */}
            <div className="bg-stone-900 text-white rounded-lg p-6 sm:p-8 shadow-sm border border-stone-800">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-stone-800">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-amber-500/20 text-amber-400 border border-amber-400/40 flex items-center justify-center font-serif text-2xl font-bold">
                    {currentStudent.name.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-xl font-bold font-serif-title">{currentStudent.name}</h2>
                      <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-mono px-2 py-0.5 rounded border border-emerald-500/30">
                        Active Enrolled
                      </span>
                    </div>
                    <div className="text-xs text-stone-400 mt-0.5 flex flex-wrap gap-2">
                      <span className="font-mono text-amber-300">Roll: {currentStudent.rollNumber}</span>
                      <span>·</span>
                      <span>B.Tech Computer Science</span>
                      <span>·</span>
                      <span>Semester {currentStudent.semester} (Batch {currentStudent.batch})</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6 text-xs text-stone-300">
                  <div>
                    <div className="text-stone-400 text-[11px]">Cumulative GPA</div>
                    <div className="text-2xl font-serif-title font-bold text-amber-400 tabular-nums">
                      {currentStudent.cgpa}
                    </div>
                  </div>
                  <div className="border-l border-stone-800 pl-6">
                    <div className="text-stone-400 text-[11px]">Aggregate Attendance</div>
                    <div className="text-2xl font-serif-title font-bold text-emerald-400 tabular-nums">
                      {currentStudent.attendancePercentage}%
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Profile Meta */}
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-stone-400">
                <div>
                  <span className="text-stone-500 block">Institutional Email:</span>
                  <span className="text-stone-200 font-mono text-[11px]">{currentStudent.email}</span>
                </div>
                <div>
                  <span className="text-stone-500 block">Residential Status:</span>
                  <span className="text-stone-200">{currentStudent.hostelStatus}</span>
                </div>
                <div>
                  <span className="text-stone-500 block">Semester Fee Status:</span>
                  <span className="text-emerald-400 font-medium">{currentStudent.feeStatus}</span>
                </div>
                <div>
                  <span className="text-stone-500 block">Emergency Blood Group:</span>
                  <span className="text-stone-200 font-mono">{currentStudent.bloodGroup}</span>
                </div>
              </div>
            </div>

            {/* Attendance & Timetable Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Attendance Tracker */}
              <div className="lg:col-span-7 bg-white border border-stone-200 rounded-lg p-6 shadow-sm space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                  <div>
                    <h3 className="font-serif-title text-base font-bold text-stone-900">
                      Subject-wise Course Attendance
                    </h3>
                    <p className="text-xs text-stone-500">Autonomous mandate: Minimum 75% required for exam hall ticket</p>
                  </div>
                  <div className="text-xs font-mono font-bold text-stone-700">
                    Sem IV Roster
                  </div>
                </div>

                <div className="space-y-4">
                  {attendance.map((rec) => {
                    const isWarning = rec.percentage < 75;
                    return (
                      <div key={rec.id} className="p-3 bg-stone-50 border border-stone-200 rounded space-y-2">
                        <div className="flex justify-between items-center text-xs">
                          <div>
                            <span className="font-mono font-bold text-stone-900 mr-2">{rec.courseCode}</span>
                            <span className="font-medium text-stone-800">{rec.courseTitle}</span>
                          </div>
                          <div className="font-mono tabular-nums font-bold text-stone-900">
                            {rec.percentage}%
                          </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full bg-stone-200 rounded-full h-2 overflow-hidden">
                          <div
                            className={`h-2 rounded-full transition-all ${
                              isWarning ? 'bg-rose-500' : 'bg-emerald-600'
                            }`}
                            style={{ width: `${Math.min(100, rec.percentage)}%` }}
                          />
                        </div>

                        <div className="flex justify-between text-[11px] text-stone-500">
                          <span>Attended: {rec.attendedClasses} / {rec.totalClasses} lectures</span>
                          <span>Faculty: {rec.facultyName}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Weekly Timetable */}
              <div className="lg:col-span-5 bg-white border border-stone-200 rounded-lg p-6 shadow-sm space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                  <h3 className="font-serif-title text-base font-bold text-stone-900 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-amber-700" />
                    <span>Weekly Class Timetable</span>
                  </h3>
                  <span className="text-xs font-mono text-stone-500">Room 402</span>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="p-2.5 bg-stone-50 border border-stone-200 rounded flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-stone-900">09:00 - 10:30 AM</div>
                      <div className="text-stone-600">CS401: Operating Systems</div>
                    </div>
                    <span className="text-[11px] font-mono text-stone-500">Mon / Wed</span>
                  </div>

                  <div className="p-2.5 bg-stone-50 border border-stone-200 rounded flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-stone-900">10:45 - 12:15 PM</div>
                      <div className="text-stone-600">CS402: Database Management & SQL</div>
                    </div>
                    <span className="text-[11px] font-mono text-stone-500">Mon / Thu</span>
                  </div>

                  <div className="p-2.5 bg-stone-50 border border-stone-200 rounded flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-stone-900">01:30 - 03:00 PM</div>
                      <div className="text-stone-600">CS403: Web Engineering & PHP</div>
                    </div>
                    <span className="text-[11px] font-mono text-stone-500">Tue / Fri</span>
                  </div>

                  <div className="p-2.5 bg-stone-50 border border-stone-200 rounded flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-stone-900">03:15 - 05:15 PM</div>
                      <div className="text-stone-600">CS405L: PHP & Database Laboratory</div>
                    </div>
                    <span className="text-[11px] font-mono text-amber-800 font-medium">Friday</span>
                  </div>
                </div>

                {/* Quick actions */}
                <div className="pt-2 border-t border-stone-100 flex flex-col gap-2">
                  <button
                    onClick={() => alert(`Generated Semester Exam Hall Ticket for Roll: ${currentStudent.rollNumber}`)}
                    className="w-full py-2 px-3 text-xs font-semibold text-stone-900 bg-amber-400 hover:bg-amber-300 rounded transition-colors"
                  >
                    Download Examination Hall Ticket
                  </button>
                  <button
                    onClick={() => alert(`Generated Fee Receipt Invoice for Roll: ${currentStudent.rollNumber}`)}
                    className="w-full py-2 px-3 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded transition-colors"
                  >
                    Download Semester Fee Receipt
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ----------------- 2. FACULTY DESK ----------------- */}
        {userRole === 'faculty' && (
          <div className="mt-8 space-y-8">
            <div className="bg-stone-900 text-white rounded-lg p-6 sm:p-8 shadow-sm border border-stone-800">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-500 text-stone-950 flex items-center justify-center font-serif text-xl font-bold">
                    V
                  </div>
                  <div>
                    <h2 className="text-xl font-bold font-serif-title">{currentFaculty.name}</h2>
                    <div className="text-xs text-stone-400">
                      {currentFaculty.designation} · {currentFaculty.qualification}
                    </div>
                  </div>
                </div>
                <div className="text-xs font-mono text-amber-400">
                  Faculty Employee ID: {currentFaculty.employeeId}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Daily Attendance Marker Tool */}
              <div className="bg-white border border-stone-200 rounded-lg p-6 shadow-sm space-y-4">
                <div className="pb-3 border-b border-stone-100">
                  <h3 className="font-serif-title text-base font-bold text-stone-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-amber-700" />
                    <span>Daily Student Attendance Entry Tool</span>
                  </h3>
                  <p className="text-xs text-stone-500">
                    Records lecture attendance directly into the MySQL <code className="font-mono">attendance</code> table.
                  </p>
                </div>

                {attendanceSuccessMsg && (
                  <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded">
                    {attendanceSuccessMsg}
                  </div>
                )}

                <form onSubmit={handleMarkAttendance} className="space-y-4 text-xs">
                  <div>
                    <label className="block font-medium text-stone-700 mb-1">Select Course Unit:</label>
                    <select
                      value={selectedCourse}
                      onChange={(e) => setSelectedCourse(e.target.value)}
                      className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded"
                    >
                      {courses.map((c) => (
                        <option key={c.id} value={c.code}>
                          {c.code} - {c.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block font-medium text-stone-700 mb-1">Select Student:</label>
                    <select
                      value={selectedStudentRoll}
                      onChange={(e) => setSelectedStudentRoll(e.target.value)}
                      className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded font-mono"
                    >
                      {students.map((s) => (
                        <option key={s.id} value={s.rollNumber}>
                          {s.rollNumber} - {s.name} ({s.attendancePercentage}% current)
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block font-medium text-stone-700 mb-1">Status for Today:</label>
                    <div className="flex gap-4 pt-1">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="att_status"
                          checked={attendanceStatus}
                          onChange={() => setAttendanceStatus(true)}
                          className="accent-amber-600"
                        />
                        <span className="text-emerald-700 font-semibold">Present (Attended)</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="att_status"
                          checked={!attendanceStatus}
                          onChange={() => setAttendanceStatus(false)}
                          className="accent-amber-600"
                        />
                        <span className="text-rose-700 font-semibold">Absent (Unexcused)</span>
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded transition-colors"
                  >
                    Commit Attendance to Database
                  </button>
                </form>
              </div>

              {/* Marks & Assessment Entry Form */}
              <div className="bg-white border border-stone-200 rounded-lg p-6 shadow-sm space-y-4">
                <div className="pb-3 border-b border-stone-100">
                  <h3 className="font-serif-title text-base font-bold text-stone-900 flex items-center gap-2">
                    <FileCheck2 className="w-4 h-4 text-amber-700" />
                    <span>Examination Marks & Grade Entry</span>
                  </h3>
                  <p className="text-xs text-stone-500">
                    Updates internal/external marks and automatically recomputes SGPA in MySQL <code className="font-mono">marks</code> table.
                  </p>
                </div>

                {marksSuccessMsg && (
                  <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded">
                    {marksSuccessMsg}
                  </div>
                )}

                <form onSubmit={handleUpdateMarks} className="space-y-4 text-xs">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-medium text-stone-700 mb-1">Student Roll:</label>
                      <select
                        value={marksStudentRoll}
                        onChange={(e) => setMarksStudentRoll(e.target.value)}
                        className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded font-mono"
                      >
                        {students.map((s) => (
                          <option key={s.id} value={s.rollNumber}>
                            {s.rollNumber} - {s.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block font-medium text-stone-700 mb-1">Course Code:</label>
                      <select
                        value={marksCourseCode}
                        onChange={(e) => setMarksCourseCode(e.target.value)}
                        className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded font-mono"
                      >
                        <option value="CS401">CS401</option>
                        <option value="CS402">CS402</option>
                        <option value="CS403">CS403</option>
                        <option value="CS404">CS404</option>
                        <option value="CS405L">CS405L</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-medium text-stone-700 mb-1">
                        Internal Assessment (Max 40):
                      </label>
                      <input
                        type="number"
                        min="0"
                        max="40"
                        value={internalMarksInput}
                        onChange={(e) => setInternalMarksInput(parseInt(e.target.value, 10) || 0)}
                        className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded font-mono"
                      />
                    </div>

                    <div>
                      <label className="block font-medium text-stone-700 mb-1">
                        End-Semester Exam (Max 60):
                      </label>
                      <input
                        type="number"
                        min="0"
                        max="60"
                        value={externalMarksInput}
                        onChange={(e) => setExternalMarksInput(parseInt(e.target.value, 10) || 0)}
                        className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded font-mono"
                      />
                    </div>
                  </div>

                  <div className="p-2.5 bg-stone-50 rounded border border-stone-200 flex justify-between items-center text-xs">
                    <span className="text-stone-600">Computed Total Marks:</span>
                    <span className="font-bold text-stone-900 font-mono text-sm">
                      {internalMarksInput + externalMarksInput} / 100
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded transition-colors"
                  >
                    Save Grades to Student Record
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* ----------------- 3. ADMIN / REGISTRAR CONSOLE ----------------- */}
        {userRole === 'admin' && (
          <div className="mt-8 space-y-8">
            <div className="bg-stone-900 text-white rounded-lg p-6 sm:p-8 shadow-sm border border-stone-800">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs uppercase tracking-wider text-amber-400 font-mono">
                    Registrar & Admissions Directorate
                  </div>
                  <h2 className="text-2xl font-bold font-serif-title mt-0.5">
                    Central Administrative Management Console
                  </h2>
                </div>
                <div className="text-xs text-stone-400 font-mono">
                  Full Database Privileges Enabled
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-stone-800 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                <div>
                  <span className="text-stone-400 block">Total Enrolled Students:</span>
                  <span className="font-serif-title text-xl font-bold text-white tabular-nums">2,600+</span>
                </div>
                <div>
                  <span className="text-stone-400 block">Faculty Members:</span>
                  <span className="font-serif-title text-xl font-bold text-white tabular-nums">126</span>
                </div>
                <div>
                  <span className="text-stone-400 block">Pending Applications:</span>
                  <span className="font-serif-title text-xl font-bold text-amber-400 tabular-nums">
                    {admissions.filter((a) => a.status === 'Under Review').length}
                  </span>
                </div>
                <div>
                  <span className="text-stone-400 block">Active Circulars:</span>
                  <span className="font-serif-title text-xl font-bold text-white tabular-nums">
                    {admissions.length + 8}
                  </span>
                </div>
              </div>
            </div>

            {/* Admission Approvals Table */}
            <div className="bg-white border border-stone-200 rounded-lg p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                <div>
                  <h3 className="font-serif-title text-base font-bold text-stone-900">
                    Online Admission Applications Roster
                  </h3>
                  <p className="text-xs text-stone-500">
                    Review incoming student applications submitted via the online admission portal.
                  </p>
                </div>
                <div className="text-xs font-mono text-stone-500">
                  {admissions.length} Registered Applicants
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border-collapse border border-stone-200">
                  <thead className="bg-stone-100 text-stone-800 font-medium">
                    <tr>
                      <th className="p-3 border border-stone-200">App ID</th>
                      <th className="p-3 border border-stone-200">Applicant Name</th>
                      <th className="p-3 border border-stone-200">Program</th>
                      <th className="p-3 border border-stone-200 text-center">12th %</th>
                      <th className="p-3 border border-stone-200">Current Status</th>
                      <th className="p-3 border border-stone-200 text-center">Action Decision</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200">
                    {admissions.map((app) => (
                      <tr key={app.id} className="hover:bg-stone-50">
                        <td className="p-3 font-mono font-semibold text-stone-900 border border-stone-200">
                          {app.applicationNumber}
                        </td>
                        <td className="p-3 font-medium text-stone-900 border border-stone-200">
                          <div>{app.applicantName}</div>
                          <div className="text-[11px] text-stone-400 font-mono">{app.email}</div>
                        </td>
                        <td className="p-3 text-stone-700 border border-stone-200">
                          {app.degreeProgram}
                        </td>
                        <td className="p-3 text-center font-mono font-bold text-stone-900 border border-stone-200">
                          {app.highSchoolPercentage}%
                        </td>
                        <td className="p-3 border border-stone-200">
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                              app.status === 'Provisionally Approved'
                                ? 'bg-emerald-100 text-emerald-800'
                                : app.status === 'Under Review'
                                ? 'bg-amber-100 text-amber-800'
                                : 'bg-rose-100 text-rose-800'
                            }`}
                          >
                            {app.status}
                          </span>
                        </td>
                        <td className="p-3 border border-stone-200 text-center">
                          <div className="flex items-center justify-center gap-1.5">
                            <button
                              onClick={() => updateAdmissionStatus(app.id, 'Provisionally Approved')}
                              className="px-2 py-1 bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-medium rounded transition-colors"
                            >
                              Approve
                            </button>
                            <button
                              onClick={() => updateAdmissionStatus(app.id, 'Documents Required')}
                              className="px-2 py-1 bg-stone-200 hover:bg-stone-300 text-stone-800 text-[11px] font-medium rounded transition-colors"
                            >
                              Docs Req.
                            </button>
                            <button
                              onClick={() => updateAdmissionStatus(app.id, 'Rejected')}
                              className="px-2 py-1 bg-rose-100 hover:bg-rose-200 text-rose-800 text-[11px] font-medium rounded transition-colors"
                            >
                              Reject
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Publish Notice Form */}
            <div className="bg-white border border-stone-200 rounded-lg p-6 shadow-sm space-y-4">
              <div className="pb-3 border-b border-stone-100">
                <h3 className="font-serif-title text-base font-bold text-stone-900 flex items-center gap-2">
                  <Send className="w-4 h-4 text-amber-700" />
                  <span>Publish Collegiate Circular / Official Notice</span>
                </h3>
                <p className="text-xs text-stone-500">
                  Broadcasts new announcements onto the public notice board and inserts record into MySQL <code className="font-mono">notices</code> table.
                </p>
              </div>

              {noticeSuccessMsg && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded">
                  {noticeSuccessMsg}
                </div>
              )}

              <form onSubmit={handleCreateNotice} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block font-medium text-stone-700 mb-1">
                      Notice Title / Subject <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={noticeTitle}
                      onChange={(e) => setNoticeTitle(e.target.value)}
                      placeholder="e.g. Schedule for Mid-Term Laboratory Examinations"
                      className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded focus:bg-white focus:outline-none focus:ring-1 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-stone-700 mb-1">Notice Category</label>
                    <select
                      value={noticeCategory}
                      onChange={(e) => setNoticeCategory(e.target.value)}
                      className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded focus:bg-white focus:outline-none focus:ring-1 focus:ring-amber-500"
                    >
                      <option value="Academic">Academic</option>
                      <option value="Examinations">Examinations</option>
                      <option value="Admissions">Admissions</option>
                      <option value="Placement">Placement</option>
                      <option value="Events">Events</option>
                      <option value="Administrative">Administrative</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-stone-700 mb-1">Brief Summary</label>
                  <input
                    type="text"
                    value={noticeSummary}
                    onChange={(e) => setNoticeSummary(e.target.value)}
                    placeholder="Short 1-line teaser for notice board..."
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded focus:bg-white focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block font-medium text-stone-700 mb-1">Full Circular Text</label>
                  <textarea
                    rows={3}
                    value={noticeContent}
                    onChange={(e) => setNoticeContent(e.target.value)}
                    placeholder="Provide full text of the circular, guidelines, dates, and instructions..."
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded focus:bg-white focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                </div>

                <button
                  type="submit"
                  className="px-6 py-2.5 text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded transition-colors"
                >
                  Publish Notice Live
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
