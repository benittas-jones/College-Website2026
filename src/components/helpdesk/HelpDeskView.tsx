import React, { useState } from 'react';
import { useCollege } from '../../context/CollegeContext';
import { HelpDeskTicket } from '../../types/college';
import {
  LifeBuoy,
  Send,
  Clock,
  Phone,
  Mail,
  MapPin,
  UserCheck,
  Loader2,
} from 'lucide-react';

export const HelpDeskView: React.FC = () => {
  const { submitHelpDeskTicket } = useCollege();

  // Submission Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState<HelpDeskTicket['category']>('General Inquiry');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Target college email
  const targetEmail = 'csiewcc@gmail.com';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) return;

    const data = {
      name,
      email,
      phone,
      category,
      subject,
      message,
    };

    setIsSending(true);

    try {
      await fetch(`https://shipmyform.com/to/${targetEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone || 'Not provided',
          category: data.category,
          subject: data.subject,
          message: data.message,
          _replyto: data.email,
          _subject: `[CSI Ewart Help Desk] ${data.category}: ${data.subject}`,
        }),
      });
    } catch (err) {
      console.warn('Email dispatch error:', err);
    } finally {
      submitHelpDeskTicket(data);
      setIsSending(false);
      setSubmitted(true);
    }
  };

  return (
    <div className="py-10 sm:py-12 bg-stone-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8 sm:space-y-10">
        {/* Header */}
        <div className="pb-6 sm:pb-8 border-b border-stone-200">
          <h1 className="font-serif-title text-2xl xs:text-3xl md:text-4xl font-medium text-stone-900 tracking-tight">
            Collegiate Help Desk & Inquiries Form
          </h1>
          <p className="mt-2 text-stone-600 text-xs sm:text-sm max-w-2xl leading-relaxed">
            We are here to assist students, parents, and prospective scholars. Submit your online query below to receive prompt administrative guidance and support.
          </p>
        </div>

        {/* Main 2-Column: Submit Online Query Form + Direct Administrative Contacts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-start">
          {/* Left Column: Submit Online Query Form */}
          <div className="lg:col-span-7 bg-white border border-stone-200 rounded-lg p-5 sm:p-8 shadow-sm">
            <div className="flex items-center gap-2 pb-4 border-b border-stone-100">
              <LifeBuoy className="w-5 h-5 text-amber-700" />
              <h2 className="font-serif-title text-xl font-bold text-stone-900">
                Submit Online Query
              </h2>
            </div>

            {submitted ? (
              <div className="mt-6 p-8 bg-stone-50 border border-stone-200 rounded-lg text-center space-y-4">
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setSubject('');
                    setMessage('');
                  }}
                  className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded transition-colors shadow-xs cursor-pointer inline-flex items-center justify-center gap-2"
                >
                  Submit Another Query
                </button>
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
                      placeholder="e.g. +91 87544 71116"
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
                    rows={5}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Please explain the details of your request, student roll number or register number (if applicable), and any relevant specifics..."
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded focus:bg-white focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full py-3 text-xs sm:text-sm font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 disabled:opacity-75 transition-colors rounded shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSending ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-stone-900" />
                      <span>Submitting Query...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Online Query</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Administrative Contacts */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-stone-200 rounded-lg p-6 shadow-sm space-y-5 text-xs">
              <h3 className="font-serif-title text-base font-bold text-stone-900 pb-3 border-b border-stone-100">
                Direct Administrative Contacts
              </h3>

              <div className="space-y-4 text-stone-700">
                {/* Help Desk Co-ordinator */}
                <div className="p-3.5 bg-amber-50/70 border border-amber-200/90 rounded-md">
                  <div className="flex items-start gap-2.5">
                    <UserCheck className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[11px] uppercase tracking-wider font-bold text-amber-800">
                        Help Desk Co-ordinator
                      </div>
                      <div className="text-stone-900 font-bold text-sm mt-0.5">
                        Mrs. Benitta Magdaline S
                      </div>
                      <div className="mt-1">
                        <a
                          href="tel:+918754471116"
                          className="inline-flex items-center gap-1 font-mono text-xs text-amber-900 hover:text-amber-950 font-semibold"
                        >
                          +91 8754471116
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* College Office Phone */}
                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-stone-900">College Office Phone</div>
                    <div className="space-y-1 mt-1 font-mono text-stone-700 text-xs">
                      <div>
                        <a href="tel:04429994940" className="hover:text-blue-900 transition-colors">
                          044 - 2999 4940
                        </a>
                      </div>
                      <div>
                        <a href="tel:04429994957" className="hover:text-blue-900 transition-colors">
                          044 - 2999 4957
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-stone-900">Email</div>
                    <div className="mt-1">
                      <a
                        href="mailto:csiewcc@gmail.com"
                        className="font-mono text-stone-700 hover:text-blue-900 transition-colors underline font-semibold text-xs"
                      >
                        csiewcc@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Campus Address (remains same) */}
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-stone-900">Campus Address</div>
                    <div className="text-stone-600 leading-relaxed mt-1 text-xs">
                      CSI Ewart Women's Christian College<br />
                      Melrosapuram, Singaperumal Koil,<br />
                      Chengalpattu District, Tamil Nadu — 603204
                    </div>
                  </div>
                </div>

                {/* Office Working Hours */}
                <div className="flex items-start gap-2.5 pt-3 border-t border-stone-100">
                  <Clock className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-stone-900">Office Working Hours</div>
                    <div className="text-stone-500 mt-1">Monday to Friday: 8:30 AM – 4:30 PM</div>
                    <div className="text-stone-500">Saturday: 8:30 AM – 1:00 PM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
