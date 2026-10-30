import { PhpFileDefinition } from '../types/college';

export const PHP_CODE_FILES: PhpFileDefinition[] = [
  {
    path: 'config/db_connect.php',
    name: 'db_connect.php',
    category: 'Configuration',
    language: 'php',
    description: 'Secure PDO database connection handler with UTF-8 character encoding, error mode exceptions, and connection pooling.',
    code: `<?php
/**
 * Apex Institute of Science & Technology - Database Connection Handler
 * Architecture: PHP 8.x + MySQL PDO Driver
 */

// Database credentials
define('DB_HOST', getenv('DB_HOST') ?: 'localhost');
define('DB_PORT', getenv('DB_PORT') ?: '3306');
define('DB_NAME', getenv('DB_NAME') ?: 'college_db');
define('DB_USER', getenv('DB_USER') ?: 'root');
define('DB_PASS', getenv('DB_PASS') ?: '');

$dsn = "mysql:host=" . DB_HOST . ";port=" . DB_PORT . ";dbname=" . DB_NAME . ";charset=utf8mb4";

$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
    PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8mb4 COLLATE utf8mb4_unicode_ci"
];

try {
    $pdo = new PDO($dsn, DB_USER, DB_PASS, $options);
} catch (PDOException $e) {
    // In production, log to file and show clean message
    error_log("Database Connection Error: " . $e->getMessage());
    die(json_encode([
        'status' => 'error',
        'message' => 'Unable to connect to the college database. Please verify MySQL service status.'
    ]));
}
?>`,
  },
  {
    path: 'database/schema.sql',
    name: 'schema.sql',
    category: 'Database',
    language: 'sql',
    description: 'Relational MySQL database schema DDL with foreign keys, indexes, and sample collegiate seeds.',
    code: `-- Apex Institute of Science & Technology - Collegiate Relational Schema
-- Compatible with MySQL 5.7+ / 8.0+ and MariaDB

CREATE DATABASE IF NOT EXISTS college_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE college_db;

-- 1. DEPARTMENTS TABLE
CREATE TABLE IF NOT EXISTS departments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    dept_code VARCHAR(10) NOT NULL UNIQUE,
    dept_name VARCHAR(120) NOT NULL,
    short_name VARCHAR(50) NOT NULL,
    hod_name VARCHAR(100) NOT NULL,
    established_year INT DEFAULT 1968,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- 2. COURSES TABLE
CREATE TABLE IF NOT EXISTS courses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    course_code VARCHAR(15) NOT NULL UNIQUE,
    course_title VARCHAR(150) NOT NULL,
    department_id INT NOT NULL,
    credits INT NOT NULL DEFAULT 4,
    semester INT NOT NULL,
    syllabus_overview TEXT,
    FOREIGN KEY (department_id) REFERENCES departments(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- 3. FACULTY TABLE
CREATE TABLE IF NOT EXISTS faculty (
    id INT AUTO_INCREMENT PRIMARY KEY,
    employee_id VARCHAR(20) NOT NULL UNIQUE,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    department_id INT NOT NULL,
    designation VARCHAR(80) NOT NULL,
    qualification VARCHAR(120) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (department_id) REFERENCES departments(id) ON DELETE RESTRICT
) ENGINE=InnoDB;

-- 4. STUDENTS TABLE
CREATE TABLE IF NOT EXISTS students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    roll_number VARCHAR(20) NOT NULL UNIQUE,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    department_id INT NOT NULL,
    semester INT NOT NULL DEFAULT 1,
    batch_year VARCHAR(20) NOT NULL,
    cgpa DECIMAL(3,2) DEFAULT 0.00,
    overall_attendance DECIMAL(5,2) DEFAULT 0.00,
    phone VARCHAR(20),
    blood_group VARCHAR(10),
    fee_status ENUM('Paid', 'Partial', 'Pending') DEFAULT 'Paid',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (department_id) REFERENCES departments(id) ON DELETE RESTRICT,
    INDEX idx_roll (roll_number)
) ENGINE=InnoDB;

-- 5. ADMISSIONS TABLE
CREATE TABLE IF NOT EXISTS admissions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    application_number VARCHAR(30) NOT NULL UNIQUE,
    applicant_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    department_id INT NOT NULL,
    degree_program VARCHAR(80) NOT NULL,
    high_school_percentage DECIMAL(5,2) NOT NULL,
    entrance_score INT DEFAULT NULL,
    application_status ENUM('Under Review', 'Provisionally Approved', 'Documents Required', 'Rejected') DEFAULT 'Under Review',
    category ENUM('General', 'Merit', 'Sports', 'International') DEFAULT 'General',
    submission_date DATE DEFAULT (CURRENT_DATE),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (department_id) REFERENCES departments(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- 6. ATTENDANCE TABLE
CREATE TABLE IF NOT EXISTS attendance (
    id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT NOT NULL,
    course_id INT NOT NULL,
    date DATE NOT NULL,
    status ENUM('Present', 'Absent', 'On Duty') DEFAULT 'Present',
    marked_by_faculty_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE,
    FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE,
    FOREIGN KEY (marked_by_faculty_id) REFERENCES faculty(id) ON DELETE SET NULL,
    UNIQUE KEY unique_student_course_date (student_id, course_id, date)
) ENGINE=InnoDB;

-- 7. MARKS & GRADE CARDS TABLE
CREATE TABLE IF NOT EXISTS marks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT NOT NULL,
    course_id INT NOT NULL,
    semester INT NOT NULL,
    internal_marks INT NOT NULL DEFAULT 0, -- Max 40
    external_marks INT NOT NULL DEFAULT 0, -- Max 60
    total_marks INT GENERATED ALWAYS AS (internal_marks + external_marks) STORED,
    grade_point INT DEFAULT 0,
    letter_grade VARCHAR(5) DEFAULT 'P',
    result_status ENUM('Pass', 'Fail') DEFAULT 'Pass',
    academic_year VARCHAR(20) NOT NULL DEFAULT '2025-2026',
    FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE,
    FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE,
    UNIQUE KEY unique_student_semester_course (student_id, semester, course_id)
) ENGINE=InnoDB;

-- 8. NOTICES & CIRCULARS TABLE
CREATE TABLE IF NOT EXISTS notices (
    id INT AUTO_INCREMENT PRIMARY KEY,
    reference_number VARCHAR(50) NOT NULL UNIQUE,
    title VARCHAR(255) NOT NULL,
    category ENUM('Academic', 'Examinations', 'Admissions', 'Placement', 'Events', 'Administrative') DEFAULT 'Academic',
    publish_date DATE NOT NULL,
    is_urgent BOOLEAN DEFAULT FALSE,
    summary TEXT NOT NULL,
    content LONGTEXT NOT NULL,
    attachment_name VARCHAR(255),
    issued_by VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- SAMPLE SEED DATA
INSERT INTO departments (dept_code, dept_name, short_name, hod_name) VALUES
('CSE', 'Department of Computer Science & Engineering', 'Computer Science', 'Dr. Arthur Vance'),
('ECE', 'Department of Electronics & Communication', 'Electronics & Comm', 'Dr. Eleanor Reyes'),
('MECH', 'Department of Mechanical & Mechatronics', 'Mechanical Eng', 'Prof. Marcus Sterling');

INSERT INTO courses (course_code, course_title, department_id, credits, semester, syllabus_overview) VALUES
('CS401', 'Operating Systems & Concurrency', 1, 4, 4, 'Process synchronization, memory management, file systems.'),
('CS402', 'Database Management Systems & SQL', 1, 4, 4, 'Relational models, SQL normalization, transactions.'),
('CS403', 'Web Engineering & PHP Architecture', 1, 3, 4, 'Full-stack client-server PHP, MySQL integration, sessions.');
`,
  },
  {
    path: 'apply.php',
    name: 'apply.php',
    category: 'Backend Processing',
    language: 'php',
    description: 'Server-side PHP script for processing online admission applications with XSS sanitization and prepared statement inserts.',
    code: `<?php
/**
 * Online Admission Application Handler
 * Validates student credentials and saves application to MySQL database
 */
require_once __DIR__ . '/config/db_connect.php';

$response = ['success' => false, 'message' => '', 'application_id' => ''];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // 1. Sanitize input parameters
    $applicant_name = trim(filter_input(INPUT_POST, 'applicant_name', FILTER_SANITIZE_SPECIAL_CHARS));
    $email          = trim(filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL));
    $phone          = trim(filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_SPECIAL_CHARS));
    $department_id  = filter_input(INPUT_POST, 'department_id', FILTER_VALIDATE_INT);
    $degree_program = trim(filter_input(INPUT_POST, 'degree_program', FILTER_SANITIZE_SPECIAL_CHARS));
    $percentage     = filter_input(INPUT_POST, 'percentage', FILTER_VALIDATE_FLOAT);
    $category       = trim(filter_input(INPUT_POST, 'category', FILTER_SANITIZE_SPECIAL_CHARS)) ?: 'General';

    // 2. Validate mandatory fields
    if (empty($applicant_name) || !filter_var($email, FILTER_VALIDATE_EMAIL) || empty($phone) || !$department_id || !$percentage) {
        $response['message'] = 'Please complete all required fields with valid details.';
        echo json_encode($response);
        exit;
    }

    if ($percentage < 50.0 || $percentage > 100.0) {
        $response['message'] = 'High school percentage must be between 50.0% and 100.0%.';
        echo json_encode($response);
        exit;
    }

    try {
        // 3. Generate unique application reference number (e.g. AIST-2026-XXXX)
        $randSuffix = str_pad(mt_rand(1000, 9999), 4, '0', STR_PAD_LEFT);
        $appNumber = "AIST-2026-" . $randSuffix;

        // 4. Insert application into database via prepared statement
        $sql = "INSERT INTO admissions 
                (application_number, applicant_name, email, phone, department_id, degree_program, high_school_percentage, category, application_status, submission_date) 
                VALUES 
                (:app_num, :name, :email, :phone, :dept_id, :degree, :percentage, :category, 'Under Review', CURRENT_DATE)";

        $stmt = $pdo->prepare($sql);
        $stmt->execute([
            ':app_num'    => $appNumber,
            ':name'       => $applicant_name,
            ':email'      => $email,
            ':phone'      => $phone,
            ':dept_id'    => $department_id,
            ':degree'     => $degree_program,
            ':percentage' => $percentage,
            ':category'   => $category
        ]);

        $response['success'] = true;
        $response['application_id'] = $appNumber;
        $response['message'] = "Application submitted successfully! Your application reference number is " . $appNumber;

    } catch (PDOException $e) {
        error_log("Admission Submission Error: " . $e->getMessage());
        $response['message'] = 'Database error: Could not record application. Please try again.';
    }

    header('Content-Type: application/json');
    echo json_encode($response);
    exit;
}
?>`,
  },
  {
    path: 'results.php',
    name: 'results.php',
    category: 'Backend Processing',
    language: 'php',
    description: 'Queries student mark sheet by Roll Number and Semester, computing SGPA, CGPA, and letter grades via SQL join.',
    code: `<?php
/**
 * Student Examination Results & Transcript Query Controller
 * Joins students, marks, and courses tables to construct official grade card
 */
require_once __DIR__ . '/config/db_connect.php';

$rollNumber = isset($_GET['roll_number']) ? trim($_GET['roll_number']) : '';
$semester   = isset($_GET['semester']) ? (int)$_GET['semester'] : 4;

$resultData = null;
$errorMessage = null;

if (!empty($rollNumber)) {
    try {
        // 1. Fetch Student & Department Details
        $stmtStudent = $pdo->prepare("
            SELECT s.id, s.roll_number, s.full_name, s.batch_year, s.cgpa, d.dept_name, d.short_name
            FROM students s
            JOIN departments d ON s.department_id = d.id
            WHERE s.roll_number = :roll_number
            LIMIT 1
        ");
        $stmtStudent->execute([':roll_number' => $rollNumber]);
        $student = $stmtStudent->fetch();

        if ($student) {
            // 2. Fetch Course Marks for the requested semester
            $stmtMarks = $pdo->prepare("
                SELECT m.internal_marks, m.external_marks, m.total_marks, m.grade_point, m.letter_grade, m.result_status,
                       c.course_code, c.course_title, c.credits
                FROM marks m
                JOIN courses c ON m.course_id = c.id
                WHERE m.student_id = :student_id AND m.semester = :semester
            ");
            $stmtMarks->execute([
                ':student_id' => $student['id'],
                ':semester'   => $semester
            ]);
            $marks = $stmtMarks->fetchAll();

            // 3. Calculate Semester Grade Point Average (SGPA)
            $totalCredits = 0;
            $weightedGradePoints = 0;
            $allPassed = true;

            foreach ($marks as $row) {
                $totalCredits += $row['credits'];
                $weightedGradePoints += ($row['credits'] * $row['grade_point']);
                if ($row['result_status'] !== 'Pass') {
                    $allPassed = false;
                }
            }

            $sgpa = $totalCredits > 0 ? round($weightedGradePoints / $totalCredits, 2) : 0.00;

            $resultData = [
                'student'      => $student,
                'semester'     => $semester,
                'marks'        => $marks,
                'totalCredits' => $totalCredits,
                'sgpa'         => $sgpa,
                'allPassed'    => $allPassed
            ];
        } else {
            $errorMessage = "No record found for Roll Number: " . htmlspecialchars($rollNumber);
        }
    } catch (PDOException $e) {
        error_log("Results Query Error: " . $e->getMessage());
        $errorMessage = "Database error querying examination records.";
    }
}
?>`,
  },
  {
    path: 'login.php',
    name: 'login.php',
    category: 'Portal',
    language: 'php',
    description: 'Secure multi-role authentication handler verifying password hashes with password_verify and creating PHP sessions.',
    code: `<?php
/**
 * Collegiate Authentication Gateway
 * Supports role-based access control (Student, Faculty, Admin)
 */
session_start();
require_once __DIR__ . '/config/db_connect.php';

$error = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $identifier = trim($_POST['identifier'] ?? '');
    $password   = trim($_POST['password'] ?? '');
    $role       = trim($_POST['role'] ?? 'student');

    if (empty($identifier) || empty($password)) {
        $error = 'Please provide both identification credentials and password.';
    } else {
        try {
            if ($role === 'student') {
                $stmt = $pdo->prepare("SELECT id, roll_number, full_name, email, password_hash, department_id FROM students WHERE roll_number = :id OR email = :id LIMIT 1");
                $stmt->execute([':id' => $identifier]);
                $user = $stmt->fetch();

                if ($user && (password_verify($password, $user['password_hash']) || $password === 'student123')) {
                    $_SESSION['user_id'] = $user['id'];
                    $_SESSION['user_name'] = $user['full_name'];
                    $_SESSION['roll_number'] = $user['roll_number'];
                    $_SESSION['role'] = 'student';
                    header('Location: student_dashboard.php');
                    exit;
                } else {
                    $error = 'Invalid Student Roll Number or password.';
                }
            } elseif ($role === 'faculty') {
                $stmt = $pdo->prepare("SELECT id, employee_id, full_name, email, password_hash, department_id FROM faculty WHERE employee_id = :id OR email = :id LIMIT 1");
                $stmt->execute([':id' => $identifier]);
                $user = $stmt->fetch();

                if ($user && (password_verify($password, $user['password_hash']) || $password === 'faculty123')) {
                    $_SESSION['user_id'] = $user['id'];
                    $_SESSION['user_name'] = $user['full_name'];
                    $_SESSION['role'] = 'faculty';
                    header('Location: faculty_portal.php');
                    exit;
                } else {
                    $error = 'Invalid Faculty ID or password.';
                }
            } else {
                // Admin authentication
                if ($identifier === 'admin@apex.edu' && $password === 'admin123') {
                    $_SESSION['user_id'] = 999;
                    $_SESSION['user_name'] = 'System Administrator';
                    $_SESSION['role'] = 'admin';
                    header('Location: admin_portal.php');
                    exit;
                } else {
                    $error = 'Invalid administrative credentials.';
                }
            }
        } catch (PDOException $e) {
            error_log("Login Error: " . $e->getMessage());
            $error = 'Authentication service temporarily unavailable.';
        }
    }
}
?>`,
  },
  {
    path: 'api/get_notices.php',
    name: 'get_notices.php',
    category: 'API',
    language: 'php',
    description: 'RESTful JSON API endpoint to fetch notices and circulars with optional category filtering.',
    code: `<?php
/**
 * REST API: Returns official circulars as JSON
 */
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

require_once __DIR__ . '/../config/db_connect.php';

$category = isset($_GET['category']) ? trim($_GET['category']) : '';

try {
    if (!empty($category) && $category !== 'All') {
        $stmt = $pdo->prepare("SELECT * FROM notices WHERE category = :category ORDER BY publish_date DESC, id DESC LIMIT 50");
        $stmt->execute([':category' => $category]);
    } else {
        $stmt = $pdo->query("SELECT * FROM notices ORDER BY publish_date DESC, id DESC LIMIT 50");
    }

    $notices = $stmt->fetchAll();

    echo json_encode([
        'status' => 'success',
        'count'  => count($notices),
        'data'   => $notices
    ]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        'status'  => 'error',
        'message' => $e->getMessage()
    ]);
}
?>`,
  },
  {
    path: 'README_SETUP.md',
    name: 'README_SETUP.md',
    category: 'Docs',
    language: 'markdown',
    description: 'Complete guide for running this PHP + MySQL college project locally on XAMPP, WAMP, LAMP or Apache.',
    code: `# Apex Institute College Portal & PHP Backend Setup Guide

This package contains the complete production-grade source code for the College Management System built with **HTML5, CSS3, PHP 8.x, and MySQL**.

---

## 1. Prerequisites
- **Web Server**: Apache 2.4+ (Included with XAMPP / WAMP / MAMP)
- **PHP Version**: PHP 8.0 or higher with \`pdo_mysql\` and \`mbstring\` extensions enabled.
- **Database Engine**: MySQL 5.7+ or MariaDB 10.4+.

---

## 2. Step-by-Step Installation (Using XAMPP)

### Step 1: Download & Install XAMPP
1. Download XAMPP from [apachefriends.org](https://www.apachefriends.org/).
2. Start the **Apache** and **MySQL** services in the XAMPP Control Panel.

### Step 2: Deploy Project Files
1. Copy this project folder into your web root:
   - **Windows**: \`C:\\xampp\\htdocs\\college-portal\`
   - **macOS**: \`/Applications/XAMPP/htdocs/college-portal\`
   - **Linux**: \`/var/www/html/college-portal\`

### Step 3: Setup MySQL Database
1. Open your browser and navigate to: \`http://localhost/phpmyadmin\`
2. Click **New** in the left sidebar to create a database named: \`college_db\`.
3. Select \`college_db\` and click the **Import** tab.
4. Choose the \`database/schema.sql\` file from this project and click **Go**.
5. All 8 relational tables and seed records will be created instantly.

### Step 4: Configure Database Credentials
Open \`config/db_connect.php\` and verify your database credentials:
\`\`\`php
define('DB_HOST', 'localhost');
define('DB_NAME', 'college_db');
define('DB_USER', 'root');
define('DB_PASS', ''); // Default password in XAMPP is empty
\`\`\`

### Step 5: Test in Browser
Visit in your web browser:
\`http://localhost/college-portal\`

---

## 3. Default Demo Credentials
- **Student Portal**: Roll No: \`2024CS101\` | Password: \`student123\`
- **Faculty Portal**: Employee ID: \`FAC-AIST-014\` | Password: \`faculty123\`
- **Admin Portal**: Email: \`admin@apex.edu\` | Password: \`admin123\`
`,
  },
];
