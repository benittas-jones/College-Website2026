import React, { useState } from 'react';
import { useCollege, SqlQueryResult } from '../../context/CollegeContext';
import { PHP_CODE_FILES } from '../../data/phpCodeFiles';
import { PhpFileDefinition } from '../../types/college';
import JSZip from 'jszip';
import {
  FileCode2,
  Database,
  Terminal,
  Download,
  Copy,
  Check,
  Play,
  RotateCcw,
  Layers,
  HelpCircle,
  Server,
  FolderArchive,
} from 'lucide-react';

export const PhpStudioView: React.FC = () => {
  const { executeSqlQuery, resetDatabaseToDefault } = useCollege();

  // Tab State: 'code' | 'workbench' | 'setup'
  const [activeTab, setActiveTab] = useState<'code' | 'workbench' | 'setup'>('code');

  // Code Viewer State
  const [selectedFile, setSelectedFile] = useState<PhpFileDefinition>(PHP_CODE_FILES[0]);
  const [copied, setCopied] = useState(false);
  const [isZipping, setIsZipping] = useState(false);

  // SQL Workbench State
  const [sqlQuery, setSqlQuery] = useState<string>('SELECT * FROM students WHERE cgpa > 8.5 ORDER BY cgpa DESC;');
  const [queryResult, setQueryResult] = useState<SqlQueryResult | null>(() =>
    executeSqlQuery('SELECT * FROM students WHERE cgpa > 8.5 ORDER BY cgpa DESC;')
  );

  const handleCopyCode = () => {
    navigator.clipboard.writeText(selectedFile.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadZip = async () => {
    try {
      setIsZipping(true);
      const zip = new JSZip();

      // Add all PHP, SQL, MD files into the ZIP archive
      PHP_CODE_FILES.forEach((file) => {
        zip.file(file.path, file.code);
      });

      // Add a simple index.html for Apache root
      zip.file(
        'index.html',
        `<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="refresh" content="0;url=results.php">
  <title>Apex Institute Portal</title>
</head>
<body>
  <p>Redirecting to <a href="results.php">Collegiate Portal</a>...</p>
</body>
</html>`
      );

      const content = await zip.generateAsync({ type: 'blob' });
      const downloadUrl = URL.createObjectURL(content);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = 'college_portal_php_mysql_bundle.zip';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(downloadUrl);
    } catch (err) {
      console.error('Error generating zip:', err);
    } finally {
      setIsZipping(false);
    }
  };

  const handleRunSql = (e: React.FormEvent) => {
    e.preventDefault();
    if (!sqlQuery.trim()) return;
    const res = executeSqlQuery(sqlQuery);
    setQueryResult(res);
  };

  const quickSqlQueries = [
    { label: 'All Students', query: 'SELECT * FROM students;' },
    { label: 'High CGPA (>8.5)', query: 'SELECT * FROM students WHERE cgpa > 8.5;' },
    { label: 'Low Attendance (<75%)', query: 'SELECT * FROM students WHERE attendancePercentage < 75;' },
    { label: 'Pending Admissions', query: "SELECT * FROM admissions WHERE status = 'Under Review';" },
    { label: 'All Departments', query: 'SELECT * FROM departments;' },
    { label: 'Collegiate Circulars', query: 'SELECT * FROM notices;' },
    { label: 'Faculty Directory', query: 'SELECT * FROM faculty;' },
  ];

  return (
    <div className="py-12 bg-stone-900 text-stone-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 space-y-8">
        {/* Studio Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-stone-800">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-amber-400">
              <Database className="w-4 h-4" />
              <span>Full-Stack Architecture Hub</span>
            </div>
            <h1 className="mt-1 font-serif-title text-2xl md:text-3xl font-medium text-white tracking-tight">
              PHP Backend & Relational MySQL Studio
            </h1>
            <p className="mt-1 text-xs text-stone-400 max-w-2xl">
              Inspect production-ready PHP 8 scripts, relational schemas, run interactive SQL queries in real-time, or download the full deployable ZIP for XAMPP / Apache.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleDownloadZip}
              disabled={isZipping}
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 disabled:opacity-60 transition-colors rounded shadow-sm"
            >
              <FolderArchive className="w-4 h-4" />
              <span>{isZipping ? 'Packaging ZIP...' : 'Download Full PHP Project (.zip)'}</span>
            </button>
          </div>
        </div>

        {/* Tab Switcher: Code View, SQL Workbench, Setup Guide */}
        <div className="flex items-center gap-2 border-b border-stone-800 pb-3">
          <button
            onClick={() => setActiveTab('code')}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-md transition-colors ${
              activeTab === 'code'
                ? 'bg-amber-400 text-stone-950 shadow-sm'
                : 'bg-stone-800 text-stone-300 hover:text-white'
            }`}
          >
            <FileCode2 className="w-4 h-4" />
            <span>PHP & SQL Source Files ({PHP_CODE_FILES.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('workbench')}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-md transition-colors ${
              activeTab === 'workbench'
                ? 'bg-amber-400 text-stone-950 shadow-sm'
                : 'bg-stone-800 text-stone-300 hover:text-white'
            }`}
          >
            <Terminal className="w-4 h-4" />
            <span>Interactive MySQL Workbench</span>
          </button>

          <button
            onClick={() => setActiveTab('setup')}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-md transition-colors ${
              activeTab === 'setup'
                ? 'bg-amber-400 text-stone-950 shadow-sm'
                : 'bg-stone-800 text-stone-300 hover:text-white'
            }`}
          >
            <Server className="w-4 h-4" />
            <span>XAMPP / Apache Local Setup</span>
          </button>
        </div>

        {/* ----------------- TAB 1: CODE EXPLORER ----------------- */}
        {activeTab === 'code' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* File Tree Sidebar */}
            <div className="lg:col-span-4 bg-stone-950 border border-stone-800 rounded-lg p-4 space-y-3">
              <div className="text-xs uppercase tracking-wider text-stone-400 font-medium px-2 pb-2 border-b border-stone-800 flex items-center justify-between">
                <span>Project File Tree</span>
                <span className="font-mono text-[10px] text-amber-400">LAMP / PHP 8.x</span>
              </div>

              <div className="space-y-1">
                {PHP_CODE_FILES.map((file) => {
                  const isSelected = selectedFile.path === file.path;
                  return (
                    <button
                      key={file.path}
                      onClick={() => setSelectedFile(file)}
                      className={`w-full text-left px-3 py-2 rounded text-xs transition-colors flex items-center justify-between ${
                        isSelected
                          ? 'bg-stone-800 text-amber-400 font-semibold border-l-2 border-amber-400'
                          : 'text-stone-300 hover:bg-stone-900 hover:text-white'
                      }`}
                    >
                      <div className="truncate flex items-center gap-2">
                        <FileCode2 className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                        <span className="font-mono text-[11px] truncate">{file.path}</span>
                      </div>
                      <span className="text-[10px] text-stone-500 shrink-0 ml-2">
                        {file.category}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="pt-3 border-t border-stone-800 text-[11px] text-stone-400 px-2 leading-relaxed">
                Clean, organized code compatible with standard Apache / PHP 8 / MySQL stacks.
              </div>
            </div>

            {/* Code Viewer Panel */}
            <div className="lg:col-span-8 bg-stone-950 border border-stone-800 rounded-lg overflow-hidden shadow-lg">
              {/* Code Bar Header */}
              <div className="bg-stone-900 px-4 py-3 border-b border-stone-800 flex items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-amber-400">
                      {selectedFile.path}
                    </span>
                    <span className="text-[10px] bg-stone-800 text-stone-300 px-2 py-0.5 rounded font-mono">
                      {selectedFile.language.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-[11px] text-stone-400 mt-0.5">
                    {selectedFile.description}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyCode}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-200 bg-stone-800 hover:bg-stone-700 rounded transition-colors"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied!' : 'Copy Code'}</span>
                  </button>
                </div>
              </div>

              {/* Code display with line numbers */}
              <div className="p-4 max-h-[620px] overflow-auto custom-scrollbar font-code text-xs text-stone-200 leading-relaxed bg-[#0c0a09]">
                <pre className="whitespace-pre">
                  <code>{selectedFile.code}</code>
                </pre>
              </div>
            </div>
          </div>
        )}

        {/* ----------------- TAB 2: SQL WORKBENCH ----------------- */}
        {activeTab === 'workbench' && (
          <div className="space-y-6">
            {/* SQL Input Area */}
            <div className="bg-stone-950 border border-stone-800 rounded-lg p-5 shadow-sm space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-stone-800">
                <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
                  <Terminal className="w-4 h-4" />
                  <span>MySQL Query Console (Connected to college_db)</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={resetDatabaseToDefault}
                    className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium text-stone-400 hover:text-white bg-stone-900 border border-stone-800 rounded transition-colors"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset Data</span>
                  </button>
                </div>
              </div>

              {/* Quick Query Pills */}
              <div className="flex flex-wrap items-center gap-1.5 text-xs">
                <span className="text-stone-400 text-[11px] mr-1">Pre-built Queries:</span>
                {quickSqlQueries.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setSqlQuery(item.query);
                      const res = executeSqlQuery(item.query);
                      setQueryResult(res);
                    }}
                    className="px-2.5 py-1 text-[11px] font-mono bg-stone-900 text-stone-300 hover:text-amber-300 border border-stone-800 rounded hover:border-stone-700 transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Query Editor Form */}
              <form onSubmit={handleRunSql} className="space-y-3">
                <div className="relative">
                  <textarea
                    rows={3}
                    value={sqlQuery}
                    onChange={(e) => setSqlQuery(e.target.value)}
                    className="w-full p-3 font-code text-xs bg-stone-900 border border-stone-700 rounded text-amber-200 focus:outline-none focus:ring-1 focus:ring-amber-500"
                    placeholder="Enter SQL statement (e.g. SELECT * FROM students;)"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-[11px] text-stone-500 font-mono">
                    Tables: students, departments, courses, faculty, admissions, notices, attendance
                  </div>
                  <button
                    type="submit"
                    className="flex items-center gap-2 px-5 py-2 text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded transition-colors"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Execute SQL Query</span>
                  </button>
                </div>
              </form>
            </div>

            {/* Query Results Table */}
            {queryResult && (
              <div className="bg-stone-950 border border-stone-800 rounded-lg overflow-hidden shadow-sm">
                <div className="bg-stone-900 px-4 py-2.5 border-b border-stone-800 flex items-center justify-between text-xs">
                  <div className="font-mono text-stone-300">
                    {queryResult.isError ? (
                      <span className="text-rose-400">Execution Error</span>
                    ) : (
                      <span className="text-emerald-400">Query Success</span>
                    )}
                    <span className="text-stone-500 ml-2">
                      ({queryResult.rowCount} rows · {queryResult.executionTimeMs} ms)
                    </span>
                  </div>
                  {queryResult.message && (
                    <span className="text-stone-400 text-[11px]">{queryResult.message}</span>
                  )}
                </div>

                <div className="overflow-x-auto max-h-96 custom-scrollbar">
                  <table className="w-full text-xs text-left border-collapse">
                    <thead className="bg-stone-900 text-stone-400 font-mono text-[11px] border-b border-stone-800">
                      <tr>
                        {queryResult.columns.map((col, idx) => (
                          <th key={idx} className="p-2.5 border-r border-stone-800 whitespace-nowrap">
                            {col}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-800 font-mono text-[11px]">
                      {queryResult.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-stone-900/60">
                          {queryResult.columns.map((col, cIdx) => (
                            <td key={cIdx} className="p-2.5 text-stone-300 border-r border-stone-800 whitespace-nowrap">
                              {typeof row[col] === 'object'
                                ? JSON.stringify(row[col])
                                : String(row[col] ?? 'NULL')}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ----------------- TAB 3: XAMPP / APACHE SETUP ----------------- */}
        {activeTab === 'setup' && (
          <div className="bg-stone-950 border border-stone-800 rounded-lg p-6 sm:p-8 space-y-8">
            <div>
              <div className="text-xs uppercase tracking-widest font-semibold text-amber-400">
                Deployment Manual
              </div>
              <h2 className="mt-1 font-serif-title text-xl md:text-2xl font-bold text-white">
                How to Run this College Portal on Localhost (XAMPP / LAMP)
              </h2>
              <p className="mt-1 text-xs text-stone-400">
                Follow this quick 4-step guide to run the PHP scripts and MySQL database on your local computer or laboratory workstations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 bg-stone-900/80 border border-stone-800 rounded-lg space-y-2.5">
                <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs uppercase tracking-wider">
                  <span className="w-6 h-6 rounded bg-stone-800 flex items-center justify-center text-amber-400 font-mono">
                    1
                  </span>
                  <span>Install Apache & MySQL (XAMPP)</span>
                </div>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Download and install XAMPP from <code className="text-amber-300 font-mono">apachefriends.org</code>. Open the XAMPP Control Panel and start both the <strong>Apache</strong> and <strong>MySQL</strong> services.
                </p>
              </div>

              <div className="p-5 bg-stone-900/80 border border-stone-800 rounded-lg space-y-2.5">
                <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs uppercase tracking-wider">
                  <span className="w-6 h-6 rounded bg-stone-800 flex items-center justify-center text-amber-400 font-mono">
                    2
                  </span>
                  <span>Download & Extract Project Files</span>
                </div>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Click the <strong>"Download Full PHP Project (.zip)"</strong> button at top right. Extract the contents directly into your web root directory:
                  <br />
                  <code className="text-amber-300 font-mono text-[11px] block mt-1">C:\xampp\htdocs\college-portal</code>
                </p>
              </div>

              <div className="p-5 bg-stone-900/80 border border-stone-800 rounded-lg space-y-2.5">
                <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs uppercase tracking-wider">
                  <span className="w-6 h-6 rounded bg-stone-800 flex items-center justify-center text-amber-400 font-mono">
                    3
                  </span>
                  <span>Import Database Schema</span>
                </div>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Visit <code className="text-amber-300 font-mono">http://localhost/phpmyadmin</code> in your browser. Create a new database named <code className="text-amber-300 font-mono">college_db</code>. Click <strong>Import</strong> and select the file <code className="text-amber-300 font-mono">database/schema.sql</code>.
                </p>
              </div>

              <div className="p-5 bg-stone-900/80 border border-stone-800 rounded-lg space-y-2.5">
                <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs uppercase tracking-wider">
                  <span className="w-6 h-6 rounded bg-stone-800 flex items-center justify-center text-amber-400 font-mono">
                    4
                  </span>
                  <span>Launch in Web Browser</span>
                </div>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Navigate to <code className="text-amber-300 font-mono">http://localhost/college-portal/</code> in Google Chrome or Firefox. You can log in using:
                  <br />
                  <span className="text-stone-400 text-[11px] block mt-1">
                    Student: <code className="font-mono text-amber-200">2024CS101</code> / <code className="font-mono text-amber-200">student123</code>
                    <br />
                    Admin: <code className="font-mono text-amber-200">admin@apex.edu</code> / <code className="font-mono text-amber-200">admin123</code>
                  </span>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
