import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import {
  Department,
  Course,
  Faculty,
  Student,
  AdmissionApplication,
  SemesterResult,
  AttendanceRecord,
  Notice,
  LibraryBook,
  HelpDeskTicket,
} from '../types/college';
import {
  INITIAL_DEPARTMENTS,
  INITIAL_COURSES,
  INITIAL_FACULTY,
  INITIAL_STUDENTS,
  INITIAL_SEMESTER_RESULTS,
  INITIAL_ATTENDANCE,
  INITIAL_ADMISSIONS,
  INITIAL_NOTICES,
  INITIAL_LIBRARY_BOOKS,
  INITIAL_HELPDESK_TICKETS,
} from '../data/initialData';

export type ActiveView =
  | 'home'
  | 'about'
  | 'academics'
  | 'student-life'
  | 'facilities'
  | 'faculty'
  | 'helpdesk'
  | 'campus'
  | 'notices'
  | 'admissions'
  | 'examinations'
  | 'portal'
  | 'php-studio';

export type UserRole = 'visitor' | 'student' | 'faculty' | 'admin';

export interface SqlQueryResult {
  columns: string[];
  rows: Record<string, any>[];
  rowCount: number;
  executionTimeMs: number;
  message?: string;
  isError?: boolean;
}

interface CollegeContextType {
  departments: Department[];
  courses: Course[];
  faculty: Faculty[];
  students: Student[];
  admissions: AdmissionApplication[];
  semesterResults: Record<string, SemesterResult>;
  attendance: AttendanceRecord[];
  notices: Notice[];
  libraryBooks: LibraryBook[];
  helpDeskTickets: HelpDeskTicket[];
  activeView: ActiveView;
  setActiveView: (view: ActiveView) => void;
  userRole: UserRole;
  setUserRole: (role: UserRole) => void;
  currentStudent: Student;
  currentFaculty: Faculty;
  submitAdmission: (data: Omit<AdmissionApplication, 'id' | 'applicationNumber' | 'submissionDate' | 'status'>) => AdmissionApplication;
  updateAdmissionStatus: (id: string, status: AdmissionApplication['status']) => void;
  addNotice: (notice: Omit<Notice, 'id' | 'publishDate'>) => void;
  submitHelpDeskTicket: (data: Omit<HelpDeskTicket, 'id' | 'ticketNumber' | 'status' | 'createdAt'>) => HelpDeskTicket;
  resolveHelpDeskTicket: (ticketId: string, response: string) => void;
  markStudentAttendance: (courseCode: string, studentRoll: string, present: boolean) => void;
  updateStudentMarks: (rollNumber: string, courseCode: string, internal: number, external: number) => void;
  executeSqlQuery: (sql: string) => SqlQueryResult;
  resetDatabaseToDefault: () => void;
}

const CollegeContext = createContext<CollegeContextType | undefined>(undefined);

export const CollegeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Navigation & Role states
  const [activeView, setActiveView] = useState<ActiveView>('home');
  const [userRole, setUserRole] = useState<UserRole>('visitor');

  // Persistent Relational Data stores
  const [departments] = useState<Department[]>(INITIAL_DEPARTMENTS);
  const [courses] = useState<Course[]>(INITIAL_COURSES);
  const [faculty] = useState<Faculty[]>(INITIAL_FACULTY);

  const [students, setStudents] = useState<Student[]>(() => {
    const saved = localStorage.getItem('ewart_students');
    return saved ? JSON.parse(saved) : INITIAL_STUDENTS;
  });

  const [admissions, setAdmissions] = useState<AdmissionApplication[]>(() => {
    const saved = localStorage.getItem('ewart_admissions');
    return saved ? JSON.parse(saved) : INITIAL_ADMISSIONS;
  });

  const [semesterResults, setSemesterResults] = useState<Record<string, SemesterResult>>(() => {
    const saved = localStorage.getItem('ewart_results');
    return saved ? JSON.parse(saved) : INITIAL_SEMESTER_RESULTS;
  });

  const [attendance, setAttendance] = useState<AttendanceRecord[]>(() => {
    const saved = localStorage.getItem('ewart_attendance');
    return saved ? JSON.parse(saved) : INITIAL_ATTENDANCE;
  });

  const [notices, setNotices] = useState<Notice[]>(() => {
    const saved = localStorage.getItem('ewart_notices');
    return saved ? JSON.parse(saved) : INITIAL_NOTICES;
  });

  const [libraryBooks] = useState<LibraryBook[]>(INITIAL_LIBRARY_BOOKS);

  const [helpDeskTickets, setHelpDeskTickets] = useState<HelpDeskTicket[]>(() => {
    const saved = localStorage.getItem('ewart_helpdesk');
    return saved ? JSON.parse(saved) : INITIAL_HELPDESK_TICKETS;
  });

  // Sync state changes to localStorage
  useEffect(() => {
    localStorage.setItem('ewart_students', JSON.stringify(students));
  }, [students]);

  useEffect(() => {
    localStorage.setItem('ewart_admissions', JSON.stringify(admissions));
  }, [admissions]);

  useEffect(() => {
    localStorage.setItem('ewart_results', JSON.stringify(semesterResults));
  }, [semesterResults]);

  useEffect(() => {
    localStorage.setItem('ewart_attendance', JSON.stringify(attendance));
  }, [attendance]);

  useEffect(() => {
    localStorage.setItem('ewart_notices', JSON.stringify(notices));
  }, [notices]);

  useEffect(() => {
    localStorage.setItem('ewart_helpdesk', JSON.stringify(helpDeskTickets));
  }, [helpDeskTickets]);

  const currentStudent = useMemo(() => students[0] || INITIAL_STUDENTS[0], [students]);
  const currentFaculty = useMemo(() => faculty[0] || INITIAL_FACULTY[0], [faculty]);

  // Submit online admission application
  const submitAdmission = (data: Omit<AdmissionApplication, 'id' | 'applicationNumber' | 'submissionDate' | 'status'>) => {
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const newApp: AdmissionApplication = {
      ...data,
      id: `adm-${Date.now()}`,
      applicationNumber: `EWART-2026-${randomSuffix}`,
      submissionDate: new Date().toISOString().split('T')[0],
      status: 'Under Review',
    };
    setAdmissions((prev) => [newApp, ...prev]);
    return newApp;
  };

  // Update admission status
  const updateAdmissionStatus = (id: string, status: AdmissionApplication['status']) => {
    setAdmissions((prev) =>
      prev.map((app) => (app.id === id ? { ...app, status } : app))
    );
  };

  // Add / Publish Notice
  const addNotice = (data: Omit<Notice, 'id' | 'publishDate'>) => {
    const randNum = Math.floor(10 + Math.random() * 90);
    const newNotice: Notice = {
      ...data,
      id: `not-${Date.now()}`,
      referenceNumber: `CSI/EWART/${data.category.toUpperCase().slice(0, 4)}/2026/${randNum}`,
      publishDate: new Date().toISOString().split('T')[0],
    };
    setNotices((prev) => [newNotice, ...prev]);
  };

  // Submit Help Desk Ticket
  const submitHelpDeskTicket = (data: Omit<HelpDeskTicket, 'id' | 'ticketNumber' | 'status' | 'createdAt'>) => {
    const randNum = Math.floor(1000 + Math.random() * 9000);
    const newTicket: HelpDeskTicket = {
      ...data,
      id: `hd-${Date.now()}`,
      ticketNumber: `EWART-HD-${randNum}`,
      status: 'Open',
      createdAt: new Date().toISOString().split('T')[0],
    };
    setHelpDeskTickets((prev) => [newTicket, ...prev]);
    return newTicket;
  };

  const resolveHelpDeskTicket = (ticketId: string, response: string) => {
    setHelpDeskTickets((prev) =>
      prev.map((t) => (t.id === ticketId ? { ...t, status: 'Resolved', response } : t))
    );
  };

  // Mark Student Attendance
  const markStudentAttendance = (courseCode: string, studentRoll: string, present: boolean) => {
    setAttendance((prev) =>
      prev.map((item) => {
        if (item.courseCode === courseCode) {
          const total = item.totalClasses + 1;
          const attended = present ? item.attendedClasses + 1 : item.attendedClasses;
          const percentage = Number(((attended / total) * 100).toFixed(1));
          return { ...item, totalClasses: total, attendedClasses: attended, percentage };
        }
        return item;
      })
    );

    setStudents((prev) =>
      prev.map((s) => {
        if (s.rollNumber === studentRoll) {
          const delta = present ? 0.3 : -0.5;
          const newAtt = Math.min(100, Math.max(40, Number((s.attendancePercentage + delta).toFixed(1))));
          return { ...s, attendancePercentage: newAtt };
        }
        return s;
      })
    );
  };

  // Update Student Marks
  const updateStudentMarks = (rollNumber: string, courseCode: string, internal: number, external: number) => {
    setSemesterResults((prev) => {
      const studentResult = prev[rollNumber];
      if (!studentResult) return prev;

      const total = internal + external;
      let letterGrade: 'O' | 'A+' | 'A' | 'B+' | 'B' | 'C' | 'P' | 'F' = 'P';
      let gradePoint = 5;

      if (total >= 90) { letterGrade = 'O'; gradePoint = 10; }
      else if (total >= 80) { letterGrade = 'A+'; gradePoint = 9; }
      else if (total >= 70) { letterGrade = 'A'; gradePoint = 8; }
      else if (total >= 60) { letterGrade = 'B+'; gradePoint = 7; }
      else if (total >= 50) { letterGrade = 'B'; gradePoint = 6; }
      else if (total >= 40) { letterGrade = 'C'; gradePoint = 5; }
      else { letterGrade = 'F'; gradePoint = 0; }

      const updatedSubjects = studentResult.subjects.map((sub) => {
        if (sub.courseCode === courseCode) {
          return {
            ...sub,
            internalMarks: internal,
            externalMarks: external,
            totalMarks: total,
            gradePoint,
            letterGrade,
            status: total >= 40 ? ('Pass' as const) : ('Fail' as const),
          };
        }
        return sub;
      });

      let totalCreds = 0;
      let weightedPoints = 0;
      updatedSubjects.forEach((s) => {
        totalCreds += s.credits;
        weightedPoints += s.credits * s.gradePoint;
      });
      const newSgpa = Number((weightedPoints / totalCreds).toFixed(2));

      return {
        ...prev,
        [rollNumber]: {
          ...studentResult,
          subjects: updatedSubjects,
          sgpa: newSgpa,
        },
      };
    });
  };

  const resetDatabaseToDefault = () => {
    localStorage.removeItem('ewart_students');
    localStorage.removeItem('ewart_admissions');
    localStorage.removeItem('ewart_results');
    localStorage.removeItem('ewart_attendance');
    localStorage.removeItem('ewart_notices');
    localStorage.removeItem('ewart_helpdesk');
    setStudents(INITIAL_STUDENTS);
    setAdmissions(INITIAL_ADMISSIONS);
    setSemesterResults(INITIAL_SEMESTER_RESULTS);
    setAttendance(INITIAL_ATTENDANCE);
    setNotices(INITIAL_NOTICES);
    setHelpDeskTickets(INITIAL_HELPDESK_TICKETS);
  };

  // SQL Simulation Engine for MySQL Workbench & PHP backend
  const executeSqlQuery = (sql: string): SqlQueryResult => {
    const startTime = performance.now();
    const cleanSql = sql.trim();
    const upper = cleanSql.toUpperCase();

    try {
      if (upper.startsWith('SELECT')) {
        let tableName = '';
        if (upper.includes('FROM STUDENTS')) tableName = 'students';
        else if (upper.includes('FROM DEPARTMENTS')) tableName = 'departments';
        else if (upper.includes('FROM COURSES')) tableName = 'courses';
        else if (upper.includes('FROM FACULTY')) tableName = 'faculty';
        else if (upper.includes('FROM ADMISSIONS')) tableName = 'admissions';
        else if (upper.includes('FROM NOTICES')) tableName = 'notices';
        else if (upper.includes('FROM ATTENDANCE')) tableName = 'attendance';
        else if (upper.includes('FROM LIBRARY_BOOKS') || upper.includes('FROM BOOKS')) tableName = 'library_books';
        else if (upper.includes('FROM HELPDESK') || upper.includes('FROM HELPDESK_TICKETS')) tableName = 'helpdesk';
        else {
          return {
            columns: ['error'],
            rows: [{ error: `Table not found. Available tables: students, departments, courses, faculty, admissions, notices, attendance, library_books, helpdesk_tickets` }],
            rowCount: 0,
            executionTimeMs: Math.round(performance.now() - startTime),
            isError: true,
          };
        }

        let dataset: any[] = [];
        if (tableName === 'students') dataset = students;
        else if (tableName === 'departments') dataset = departments;
        else if (tableName === 'courses') dataset = courses;
        else if (tableName === 'faculty') dataset = faculty;
        else if (tableName === 'admissions') dataset = admissions;
        else if (tableName === 'notices') dataset = notices;
        else if (tableName === 'attendance') dataset = attendance;
        else if (tableName === 'library_books') dataset = libraryBooks;
        else if (tableName === 'helpdesk') dataset = helpDeskTickets;

        let filtered = [...dataset];
        if (upper.includes('WHERE CGPA >') || upper.includes('WHERE CGPA>')) {
          const match = upper.match(/CGPA\s*>\s*([0-9.]+)/);
          if (match) {
            const val = parseFloat(match[1]);
            filtered = filtered.filter((r) => r.cgpa && r.cgpa > val);
          }
        } else if (upper.includes("STATUS = 'UNDER REVIEW'") || upper.includes('STATUS="UNDER REVIEW"')) {
          filtered = filtered.filter((r) => r.status === 'Under Review');
        } else if (upper.includes('ATTENDANCE < 75') || upper.includes('ATTENDANCEPERCENTAGE < 75')) {
          filtered = filtered.filter((r) => (r.attendancePercentage ?? r.percentage ?? 100) < 75);
        }

        if (upper.includes('LIMIT')) {
          const match = upper.match(/LIMIT\s+(\d+)/);
          if (match) {
            filtered = filtered.slice(0, parseInt(match[1], 10));
          }
        }

        const columns = filtered.length > 0 ? Object.keys(filtered[0]) : ['result'];
        return {
          columns,
          rows: filtered,
          rowCount: filtered.length,
          executionTimeMs: Number((performance.now() - startTime).toFixed(2)),
          message: `Query executed successfully. ${filtered.length} row(s) returned.`,
        };
      }

      return {
        columns: ['Status', 'Info'],
        rows: [{ Status: 'Executed', Info: 'Command processed by collegiate database engine.' }],
        rowCount: 1,
        executionTimeMs: Number((performance.now() - startTime).toFixed(2)),
        message: 'Query executed successfully.',
      };
    } catch (err: any) {
      return {
        columns: ['SQL_ERROR'],
        rows: [{ SQL_ERROR: err.message || 'Syntax error in SQL query' }],
        rowCount: 0,
        executionTimeMs: Number((performance.now() - startTime).toFixed(2)),
        isError: true,
      };
    }
  };

  return (
    <CollegeContext.Provider
      value={{
        departments,
        courses,
        faculty,
        students,
        admissions,
        semesterResults,
        attendance,
        notices,
        libraryBooks,
        helpDeskTickets,
        activeView,
        setActiveView,
        userRole,
        setUserRole,
        currentStudent,
        currentFaculty,
        submitAdmission,
        updateAdmissionStatus,
        addNotice,
        submitHelpDeskTicket,
        resolveHelpDeskTicket,
        markStudentAttendance,
        updateStudentMarks,
        executeSqlQuery,
        resetDatabaseToDefault,
      }}
    >
      {children}
    </CollegeContext.Provider>
  );
};

export const useCollege = () => {
  const context = useContext(CollegeContext);
  if (!context) {
    throw new Error('useCollege must be used within a CollegeProvider');
  }
  return context;
};
