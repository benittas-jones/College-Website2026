import React, { useState } from 'react';
import { useCollege } from '../../context/CollegeContext';
import { HelpDeskTicket } from '../../types/college';
import {
  LifeBuoy,
  Send,
  Search,
  CheckCircle2,
  Clock,
  Phone,
  Mail,
  MapPin,
  FileQuestion,
  AlertCircle,
  HelpCircle,
} from 'lucide-react';

export const HelpDeskView: React.FC = () => {
  const { helpDeskTickets, submitHelpDeskTicket } = useCollege();

  // Submission Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState<HelpDeskTicket['category']>('General Inquiry');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [createdTicket, setCreatedTicket] = useState<HelpDeskTicket | null>(null);

  // Search Ticket State
  const [searchTicketNo, setSearchTicketNo] = useState('');
  const [searchedTicket, setSearchedTicket] = useState<HelpDeskTicket | null | undefined>(undefined);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) return;

    const ticket = submitHelpDeskTicket({
      name,
      email,
      phone,
      category,
      subject,
      message,
    });

    setCreatedTicket(ticket);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTicketNo.trim()) return;
    const match = helpDeskTickets.find(
      (t) => t.ticketNumber.toLowerCase() === searchTicketNo.trim().toLowerCase()
    );
    setSearchedTicket(match || null);
  };

  const faqs = [
    {
      q: 'How do I download my University of Madras Examination Hall Ticket?',
      a: 'Visit the Examination portal tab or the Student Portal. Once verified by the department that your semester attendance is above 75% and all fees are cleared, your Hall Ticket is generated with one click.',
    },
    {
      q: 'What is the procedure for College Bus Pass enrollment or route modification?',
      a: 'Submit a ticket through this Help Desk selecting "Transport & Hostel" or visit Administrative Counter 3 with your fee receipt. Bus passes are issued within 24 working hours.',
    },
    {
      q: 'Are scholarships available for students at CSI Ewart?',
      a: 'Yes, CSI Diocese of Madras scholarships, Tamil Nadu Government Post-Matric Minority scholarships, and Special Merit concessions for sports and first-generation women learners are available.',
    },
    {
      q: 'How do I obtain a Bonafide or Transfer Certificate (TC)?',
      a: 'Apply through the Help Desk under "Certificates / TC". The certificate will be prepared by the Registrar Secretariat and can be collected from Counter 1 within 2 working days.',
    },
  ];

  return (
    <div className="py-12 bg-stone-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10 sm:space-y-12">
        {/* Header */}
        <div className="pb-6 sm:pb-8 border-b border-stone-200">
          <div className="text-xs uppercase tracking-widest font-semibold text-amber-700">
            Student Support & Grievance Redressal
          </div>
          <h1 className="mt-1 font-serif-title text-2xl xs:text-3xl md:text-4xl font-medium text-stone-900 tracking-tight">
            Collegiate Help Desk & Inquiries
          </h1>
          <p className="mt-2 text-stone-600 text-xs sm:text-sm max-w-2xl leading-relaxed">
            We are here to assist students, parents, and prospective scholars. Submit an official inquiry or grievance ticket to receive prompt administrative assistance.
          </p>
        </div>

        {/* Main 2-Column: Form + Tracker/Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10">
          {/* Left Column: Inquiry Submission Form */}
          <div className="lg:col-span-7 bg-white border border-stone-200 rounded-lg p-4 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-stone-100">
              <div className="flex items-center gap-2">
                <LifeBuoy className="w-5 h-5 text-amber-700" />
                <h2 className="font-serif-title text-xl font-bold text-stone-900">
                  Submit Support Ticket / Inquiry
                </h2>
              </div>
              <span className="text-xs font-mono text-stone-500">Response within 24h</span>
            </div>

            {createdTicket ? (
              <div className="mt-6 p-6 bg-emerald-50/70 border border-emerald-200 rounded-lg space-y-4">
                <div className="flex items-center gap-2 text-emerald-800 font-semibold text-base">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>Ticket Logged Successfully!</span>
                </div>

                <p className="text-xs text-emerald-950 leading-relaxed">
                  Thank you, <strong>{createdTicket.name}</strong>. Your ticket has been logged into the college database. Our administrative staff will review your request.
                </p>

                <div className="p-4 bg-white border border-emerald-200 rounded text-xs space-y-2 font-mono">
                  <div className="flex justify-between">
                    <span className="text-stone-500">Ticket Number:</span>
                    <span className="font-bold text-stone-900 text-sm">{createdTicket.ticketNumber}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Category:</span>
                    <span className="text-stone-800 font-sans">{createdTicket.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Status:</span>
                    <span className="text-amber-700 font-bold">{createdTicket.status}</span>
                  </div>
                </div>

                <div className="pt-2 flex gap-3">
                  <button
                    onClick={() => {
                      setCreatedTicket(null);
                      setSubject('');
                      setMessage('');
                    }}
                    className="px-4 py-2 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded transition-colors"
                  >
                    Submit Another Query
                  </button>
                  <button
                    onClick={() => {
                      setSearchTicketNo(createdTicket.ticketNumber);
                      setSearchedTicket(createdTicket);
                    }}
                    className="px-4 py-2 text-xs font-semibold text-stone-800 bg-white border border-stone-200 rounded hover:bg-stone-50 transition-colors"
                  >
                    Track Ticket Now
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-medium text-stone-700 mb-1">
                      Your Full Name <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Benitta Samuel"
                      className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded focus:bg-white focus:outline-none focus:ring-1 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-stone-700 mb-1">
                      Inquiry Category <span className="text-rose-600">*</span>
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value as any)}
                      className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded focus:bg-white focus:outline-none focus:ring-1 focus:ring-amber-500"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Admissions">Admissions & Eligibility</option>
                      <option value="Examinations">Examinations & Marksheets</option>
                      <option value="Fees & Scholarship">Fees & Scholarships</option>
                      <option value="Certificates / TC">Certificates & Bonafide</option>
                      <option value="Transport & Hostel">Transport & Hostel Bus Pass</option>
                      <option value="Academic">Academic & Attendance</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-medium text-stone-700 mb-1">
                      Email Address <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. benitta@example.com"
                      className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded focus:bg-white focus:outline-none focus:ring-1 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-stone-700 mb-1">Contact Phone</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +91 98401 23456"
                      className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded focus:bg-white focus:outline-none focus:ring-1 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-stone-700 mb-1">
                    Subject / Summary <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Brief headline of your inquiry or request"
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded focus:bg-white focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block font-medium text-stone-700 mb-1">
                    Detailed Message <span className="text-rose-600">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Please explain the details of your request, student roll number (if applicable), and any relevant specifics..."
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded focus:bg-white focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 transition-colors rounded shadow-xs flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Ticket to College Administration</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Ticket Tracker & Direct Contacts */}
          <div className="lg:col-span-5 space-y-6">
            {/* Live Ticket Tracker */}
            <div className="bg-white border border-stone-200 rounded-lg p-6 shadow-sm">
              <h3 className="font-serif-title text-base font-bold text-stone-900 pb-2 border-b border-stone-100 flex items-center gap-2">
                <Search className="w-4 h-4 text-amber-700" />
                <span>Track Existing Ticket</span>
              </h3>

              <form onSubmit={handleSearch} className="mt-4">
                <label className="block text-xs text-stone-600 mb-1.5">
                  Enter Ticket Reference ID:
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={searchTicketNo}
                    onChange={(e) => setSearchTicketNo(e.target.value)}
                    placeholder="e.g. EWART-HD-2041"
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

              {/* Sample Ticket IDs */}
              <div className="mt-3 flex items-center gap-2 text-[11px] text-stone-500">
                <span>Sample Tickets:</span>
                <button
                  type="button"
                  onClick={() => {
                    setSearchTicketNo('EWART-HD-2041');
                    const match = helpDeskTickets.find((t) => t.ticketNumber === 'EWART-HD-2041');
                    setSearchedTicket(match || null);
                  }}
                  className="font-mono text-amber-800 underline hover:text-amber-950"
                >
                  EWART-HD-2041
                </button>
                <span>·</span>
                <button
                  type="button"
                  onClick={() => {
                    setSearchTicketNo('EWART-HD-2042');
                    const match = helpDeskTickets.find((t) => t.ticketNumber === 'EWART-HD-2042');
                    setSearchedTicket(match || null);
                  }}
                  className="font-mono text-amber-800 underline hover:text-amber-950"
                >
                  EWART-HD-2042
                </button>
              </div>

              {/* Result display */}
              {searchedTicket !== undefined && (
                <div className="mt-4 pt-4 border-t border-stone-100">
                  {searchedTicket ? (
                    <div className="p-4 bg-stone-50 border border-stone-200 rounded space-y-2 text-xs">
                      <div className="flex justify-between items-center">
                        <span className="font-mono text-[11px] text-stone-500">{searchedTicket.ticketNumber}</span>
                        <span className={`px-2 py-0.5 rounded text-[11px] font-semibold ${
                          searchedTicket.status === 'Resolved'
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}>
                          {searchedTicket.status}
                        </span>
                      </div>
                      <div className="font-bold text-stone-900">{searchedTicket.subject}</div>
                      <div className="text-stone-600 text-[11px]">{searchedTicket.message}</div>
                      {searchedTicket.response && (
                        <div className="mt-2 p-2.5 bg-white border border-stone-200 rounded text-stone-800">
                          <strong className="text-amber-800 block text-[11px]">Official Response:</strong>
                          <span className="text-[11px] leading-relaxed">{searchedTicket.response}</span>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="p-3 bg-rose-50 border border-rose-200 text-rose-800 text-xs rounded">
                      No ticket found with ID: {searchTicketNo}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Direct Collegiate Contact Card */}
            <div className="bg-white border border-stone-200 rounded-lg p-6 shadow-sm space-y-4 text-xs">
              <h3 className="font-serif-title text-base font-bold text-stone-900 pb-2 border-b border-stone-100">
                Direct Administrative Contacts
              </h3>

              <div className="space-y-3 text-stone-700">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-stone-900">Campus Address</div>
                    <div className="text-stone-500 leading-relaxed mt-0.5">
                      CSI Ewart Women's Christian College<br />
                      Melrosapuram, Singaperumal Koil,<br />
                      Chengalpattu District, Tamil Nadu — 603204
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-stone-900">College Office Telephone</div>
                    <div className="font-mono text-stone-600 mt-0.5">+91 44 2746 4123 / 2746 4124</div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-stone-900">Official Email</div>
                    <div className="font-mono text-stone-600 mt-0.5">principal@csiewartcollege.edu.in</div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-stone-900">Office Working Hours</div>
                    <div className="text-stone-500 mt-0.5">Monday to Friday: 8:30 AM – 4:30 PM</div>
                    <div className="text-stone-500">Saturday: 8:30 AM – 1:00 PM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="bg-white border border-stone-200 rounded-lg p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex items-center gap-2 text-amber-700 text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            <span>Frequently Asked Questions</span>
          </div>
          <h3 className="font-serif-title text-xl font-bold text-stone-900">
            Quick Student & Parent FAQ
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {faqs.map((faq, i) => (
              <div key={i} className="p-4 bg-stone-50 border border-stone-200 rounded text-xs space-y-1.5">
                <div className="font-bold text-stone-900 text-sm font-serif-title">{faq.q}</div>
                <p className="text-stone-600 leading-relaxed text-[11px]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
