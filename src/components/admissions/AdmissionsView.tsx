import React, { useState } from 'react';
import { useCollege } from '../../context/CollegeContext';
import { AdmissionApplication } from '../../types/college';
import { CheckCircle2, Search, FileText, ArrowRight, Clock, Award, ShieldAlert } from 'lucide-react';

export const AdmissionsView: React.FC = () => {
  const { departments, submitAdmission, admissions } = useCollege();

  // Multi-step form state
  const [applicantName, setApplicantName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [departmentId, setDepartmentId] = useState(departments[0]?.id || 'dept-cse');
  const [degreeProgram, setDegreeProgram] = useState('B.Tech Computer Science & AI');
  const [highSchoolPercentage, setHighSchoolPercentage] = useState<number>(88.5);
  const [entranceScore, setEntranceScore] = useState<number>(175);
  const [category, setCategory] = useState<AdmissionApplication['category']>('General');

  const [submittedApp, setSubmittedApp] = useState<AdmissionApplication | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchedApp, setSearchedApp] = useState<AdmissionApplication | null | undefined>(undefined);

  const selectedDept = departments.find((d) => d.id === departmentId) || departments[0];

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantName || !email || !phone) {
      return;
    }

    const newApp = submitAdmission({
      applicantName,
      email,
      phone,
      departmentId,
      degreeProgram,
      highSchoolPercentage: Number(highSchoolPercentage),
      entranceExamScore: Number(entranceScore),
      category,
    });

    setSubmittedApp(newApp);
  };

  const handleStatusSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    const match = admissions.find(
      (a) => a.applicationNumber.toLowerCase() === searchQuery.trim().toLowerCase()
    );
    setSearchedApp(match || null);
  };

  return (
    <div className="py-12 bg-stone-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="pb-6 sm:pb-8 border-b border-stone-200">
          <div className="text-xs uppercase tracking-widest font-semibold text-amber-700">
            Admissions Directorate · Academic Session 2026-27
          </div>
          <h1 className="mt-1 font-serif-title text-2xl xs:text-3xl md:text-4xl font-medium text-stone-900 tracking-tight">
            Online Undergraduate & Postgraduate Admissions
          </h1>
          <p className="mt-2 text-stone-600 text-xs sm:text-sm max-w-2xl leading-relaxed">
            Join a vibrant community of empowered women scholars at CSI Ewart. Applications are evaluated on a rolling merit basis with full scholarship consideration.
          </p>
        </div>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10">
          {/* Left Column: Interactive Application Form */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="bg-white border border-stone-200 rounded-lg p-4 sm:p-8 shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-stone-100">
                <div>
                  <h2 className="font-serif-title text-xl font-bold text-stone-900">
                    Application Form (2026-27)
                  </h2>
                  <p className="text-xs text-stone-500">Takes approximately 3 minutes · Powered by PHP/MySQL Backend</p>
                </div>
                <div className="text-xs font-mono bg-stone-100 text-stone-700 px-2.5 py-1 rounded">
                  Status: Open
                </div>
              </div>

              {submittedApp ? (
                <div className="mt-6 p-6 bg-emerald-50/70 border border-emerald-200 rounded-lg space-y-4">
                  <div className="flex items-center gap-2 text-emerald-800 font-semibold text-base">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>Application Successfully Registered!</span>
                  </div>

                  <p className="text-xs text-emerald-950 leading-relaxed">
                    Thank you, <strong className="font-semibold">{submittedApp.applicantName}</strong>. Your application has been logged into the collegiate database via PHP prepared statements.
                  </p>

                  <div className="p-4 bg-white border border-emerald-200 rounded text-xs space-y-2">
                    <div className="flex justify-between">
                      <span className="text-stone-500">Application Reference ID:</span>
                      <span className="font-mono font-bold text-stone-900 text-sm">{submittedApp.applicationNumber}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-500">Program Applied:</span>
                      <span className="font-medium text-stone-900">{submittedApp.degreeProgram}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-500">Current Status:</span>
                      <span className="font-semibold text-amber-700">{submittedApp.status}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <button
                      onClick={() => {
                        setSubmittedApp(null);
                        setApplicantName('');
                        setEmail('');
                        setPhone('');
                      }}
                      className="px-4 py-2 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded transition-colors"
                    >
                      Submit Another Application
                    </button>
                    <button
                      onClick={() => {
                        setSearchQuery(submittedApp.applicationNumber);
                        setSearchedApp(submittedApp);
                      }}
                      className="px-4 py-2 text-xs font-semibold text-stone-800 bg-white border border-stone-200 hover:bg-stone-50 rounded transition-colors"
                    >
                      Track This Application
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleApplicationSubmit} className="mt-6 space-y-6">
                  {/* Personal info */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-800 border-b border-stone-100 pb-1.5">
                      1. Applicant Identification
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-stone-700 mb-1">
                          Full Legal Name <span className="text-rose-600">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={applicantName}
                          onChange={(e) => setApplicantName(e.target.value)}
                          placeholder="e.g. Jordan Elizabeth Hayes"
                          className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded focus:bg-white focus:outline-none focus:ring-1 focus:ring-amber-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-stone-700 mb-1">
                          Applicant Category
                        </label>
                        <select
                          value={category}
                          onChange={(e) => setCategory(e.target.value as any)}
                          className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded focus:bg-white focus:outline-none focus:ring-1 focus:ring-amber-500"
                        >
                          <option value="General">General Merit</option>
                          <option value="Merit">Institute Merit Scholar</option>
                          <option value="Sports">Sports Quota</option>
                          <option value="International">International Student</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-stone-700 mb-1">
                          Email Address <span className="text-rose-600">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="e.g. jordan.hayes@example.com"
                          className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded focus:bg-white focus:outline-none focus:ring-1 focus:ring-amber-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-stone-700 mb-1">
                          Contact Phone Number <span className="text-rose-600">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="e.g. +1 (555) 789-1234"
                          className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded focus:bg-white focus:outline-none focus:ring-1 focus:ring-amber-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Academic Background */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-800 border-b border-stone-100 pb-1.5">
                      2. Academic Credentials & Scores
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-stone-700 mb-1">
                          12th / High School Aggregate (%) <span className="text-rose-600">*</span>
                        </label>
                        <input
                          type="number"
                          step="0.1"
                          min="50"
                          max="100"
                          required
                          value={highSchoolPercentage}
                          onChange={(e) => setHighSchoolPercentage(parseFloat(e.target.value) || 0)}
                          className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded focus:bg-white focus:outline-none focus:ring-1 focus:ring-amber-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-stone-700 mb-1">
                          Entrance Exam Score (SAT / JEE / CET / GRE)
                        </label>
                        <input
                          type="number"
                          value={entranceScore}
                          onChange={(e) => setEntranceScore(parseInt(e.target.value, 10) || 0)}
                          className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded focus:bg-white focus:outline-none focus:ring-1 focus:ring-amber-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Program Choice */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-800 border-b border-stone-100 pb-1.5">
                      3. Desired Academic Program
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-stone-700 mb-1">
                          Department
                        </label>
                        <select
                          value={departmentId}
                          onChange={(e) => {
                            setDepartmentId(e.target.value);
                            const dept = departments.find((d) => d.id === e.target.value);
                            if (dept && dept.degreesOffered.length > 0) {
                              setDegreeProgram(dept.degreesOffered[0]);
                            }
                          }}
                          className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded focus:bg-white focus:outline-none focus:ring-1 focus:ring-amber-500"
                        >
                          {departments.map((d) => (
                            <option key={d.id} value={d.id}>
                              {d.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-stone-700 mb-1">
                          Degree Course
                        </label>
                        <select
                          value={degreeProgram}
                          onChange={(e) => setDegreeProgram(e.target.value)}
                          className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded focus:bg-white focus:outline-none focus:ring-1 focus:ring-amber-500"
                        >
                          {selectedDept.degreesOffered.map((deg, i) => (
                            <option key={i} value={deg}>
                              {deg}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 px-4 text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 transition-colors rounded shadow-sm flex items-center justify-center gap-2"
                    >
                      <FileText className="w-4 h-4" />
                      <span>Submit Official Admission Application</span>
                    </button>
                    <p className="mt-2 text-center text-[11px] text-stone-500">
                      Upon submission, your application record is inserted into the MySQL <code className="font-mono">admissions</code> table.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Application Status Tracker & Eligibility */}
          <div className="lg:col-span-5 space-y-6">
            {/* Live Status Tracker */}
            <div className="bg-white border border-stone-200 rounded-lg p-6 shadow-sm">
              <h3 className="font-serif-title text-base font-bold text-stone-900 pb-2 border-b border-stone-100 flex items-center gap-2">
                <Search className="w-4 h-4 text-amber-700" />
                <span>Track Application Status</span>
              </h3>

              <form onSubmit={handleStatusSearch} className="mt-4">
                <label className="block text-xs text-stone-600 mb-1.5">
                  Enter Application Reference ID:
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="e.g. AIST-2026-1049"
                    className="flex-1 px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded font-mono focus:bg-white focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded transition-colors"
                  >
                    Track
                  </button>
                </div>
              </form>

              {/* Quick sample IDs */}
              <div className="mt-3 flex items-center gap-2 text-[11px] text-stone-500">
                <span>Sample IDs:</span>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('AIST-2026-1049');
                    const match = admissions.find((a) => a.applicationNumber === 'AIST-2026-1049');
                    setSearchedApp(match || null);
                  }}
                  className="font-mono text-amber-800 underline hover:text-amber-950"
                >
                  AIST-2026-1049
                </button>
                <span>·</span>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('AIST-2026-1050');
                    const match = admissions.find((a) => a.applicationNumber === 'AIST-2026-1050');
                    setSearchedApp(match || null);
                  }}
                  className="font-mono text-amber-800 underline hover:text-amber-950"
                >
                  AIST-2026-1050
                </button>
              </div>

              {/* Status Result Display */}
              {searchedApp !== undefined && (
                <div className="mt-4 pt-4 border-t border-stone-100">
                  {searchedApp ? (
                    <div className="p-4 bg-stone-50 border border-stone-200 rounded space-y-2 text-xs">
                      <div className="flex justify-between items-center">
                        <span className="font-mono text-[11px] text-stone-500">Ref: {searchedApp.applicationNumber}</span>
                        <span className={`px-2 py-0.5 rounded text-[11px] font-semibold ${
                          searchedApp.status === 'Provisionally Approved'
                            ? 'bg-emerald-100 text-emerald-800'
                            : searchedApp.status === 'Under Review'
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-rose-100 text-rose-800'
                        }`}>
                          {searchedApp.status}
                        </span>
                      </div>
                      <div className="font-semibold text-stone-900">{searchedApp.applicantName}</div>
                      <div className="text-stone-600">{searchedApp.degreeProgram}</div>
                      <div className="text-[11px] text-stone-400">Submitted: {searchedApp.submissionDate}</div>
                    </div>
                  ) : (
                    <div className="p-3 bg-rose-50 border border-rose-200 text-rose-800 text-xs rounded">
                      No application found matching reference ID.
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Fee Schedule Summary */}
            <div className="bg-white border border-stone-200 rounded-lg p-6 shadow-sm space-y-3">
              <h3 className="font-serif-title text-base font-bold text-stone-900 pb-2 border-b border-stone-100">
                Tuition & Financial Aid Schedule
              </h3>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-stone-100">
                  <span className="text-stone-600">B.Tech Engineering (Annual):</span>
                  <span className="font-mono font-medium text-stone-900">$3,850 / ₹1,45,000</span>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-100">
                  <span className="text-stone-600">MBA Management (Annual):</span>
                  <span className="font-mono font-medium text-stone-900">$4,200 / ₹1,80,000</span>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-100">
                  <span className="text-stone-600">Hostel & Dining (Annual):</span>
                  <span className="font-mono font-medium text-stone-900">$1,600 / ₹65,000</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-stone-600">Dean's Merit Scholarship:</span>
                  <span className="font-mono font-medium text-emerald-700">Up to 100% Tuition Waiver</span>
                </div>
              </div>
            </div>

            {/* Mandatory Documentation Checklist */}
            <div className="bg-white border border-stone-200 rounded-lg p-6 shadow-sm space-y-3">
              <h3 className="font-serif-title text-base font-bold text-stone-900 pb-2 border-b border-stone-100">
                Required Verification Documents
              </h3>
              <ul className="space-y-2 text-xs text-stone-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                  <span>Certified High School / 12th Standard Transcripts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                  <span>Entrance Examination Rank Card (JEE / SAT / State CET)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                  <span>Government-issued Identification (Passport / National ID)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                  <span>Two Passport-sized Photographs & Character Certificate</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
