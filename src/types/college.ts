export interface Department {
  id: string;
  code: string;
  name: string;
  shortName: string;
  headOfDepartment: string;
  facultyCount: number;
  studentCount: number;
  degreesOffered: string[];
  description: string;
  labs: string[];
}

export interface Course {
  id: string;
  code: string;
  title: string;
  departmentId: string;
  credits: number;
  semester: number;
  syllabusOverview: string;
  instructorName: string;
}

export interface Faculty {
  id: string;
  employeeId: string;
  name: string;
  designation: string;
  departmentId: string;
  qualification: string;
  specialization: string;
  email: string;
  experienceYears: number;
}

export interface Student {
  id: string;
  rollNumber: string;
  name: string;
  email: string;
  departmentId: string;
  semester: number;
  batch: string;
  cgpa: number;
  attendancePercentage: number;
  bloodGroup: string;
  phone: string;
  feeStatus: 'Paid' | 'Partial' | 'Pending';
  hostelStatus: 'Day Scholar' | 'Hosteller (Block A)' | 'Hosteller (Block B)';
}

export interface AdmissionApplication {
  id: string;
  applicationNumber: string;
  applicantName: string;
  email: string;
  phone: string;
  departmentId: string;
  degreeProgram: string;
  highSchoolPercentage: number;
  entranceExamScore?: number;
  submissionDate: string;
  status: 'Under Review' | 'Provisionally Approved' | 'Documents Required' | 'Rejected';
  category: 'General' | 'Merit' | 'Sports' | 'International';
}

export interface SubjectMark {
  courseCode: string;
  courseTitle: string;
  credits: number;
  internalMarks: number; // out of 40
  externalMarks: number; // out of 60
  totalMarks: number;    // out of 100
  gradePoint: number;
  letterGrade: 'O' | 'A+' | 'A' | 'B+' | 'B' | 'C' | 'P' | 'F';
  status: 'Pass' | 'Fail';
}

export interface SemesterResult {
  rollNumber: string;
  studentName: string;
  departmentName: string;
  degree: string;
  semester: number;
  academicYear: string;
  subjects: SubjectMark[];
  sgpa: number;
  cgpa: number;
  resultStatus: string;
  issueDate: string;
}

export interface AttendanceRecord {
  id: string;
  courseCode: string;
  courseTitle: string;
  totalClasses: number;
  attendedClasses: number;
  percentage: number;
  facultyName: string;
}

export interface Notice {
  id: string;
  referenceNumber: string;
  title: string;
  category: 'Academic' | 'Examinations' | 'Admissions' | 'Placement' | 'Events' | 'Administrative';
  publishDate: string;
  summary: string;
  content: string;
  isUrgent?: boolean;
  issuedBy: string;
  attachmentName?: string;
}

export interface LibraryBook {
  id: string;
  isbn: string;
  title: string;
  author: string;
  department: string;
  edition: string;
  availableCopies: number;
  totalCopies: number;
  shelfLocation: string;
}

export interface PhpFileDefinition {
  path: string;
  name: string;
  category: 'Configuration' | 'Database' | 'Frontend' | 'Backend Processing' | 'Portal' | 'API' | 'Docs';
  language: 'php' | 'sql' | 'markdown' | 'html';
  description: string;
  code: string;
}

export interface HelpDeskTicket {
  id: string;
  ticketNumber: string;
  name: string;
  email: string;
  phone: string;
  category: 'Admissions' | 'Academic' | 'Examinations' | 'Fees & Scholarship' | 'Certificates / TC' | 'Transport & Hostel' | 'General Inquiry';
  subject: string;
  message: string;
  status: 'Open' | 'In Progress' | 'Resolved';
  createdAt: string;
  response?: string;
}

