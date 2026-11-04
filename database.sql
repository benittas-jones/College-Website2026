-- =========================================================================
-- C.S.I. EWART WOMEN'S CHRISTIAN COLLEGE, MELROSAPURAM
-- Database Schema for MySQL 5.7+ / MySQL 8.0+ / MariaDB
-- =========================================================================

CREATE DATABASE IF NOT EXISTS `csi_ewart_college` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `csi_ewart_college`;

-- 1. Admissions Applications Table
CREATE TABLE IF NOT EXISTS `admissions_applications` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `candidate_name` VARCHAR(150) NOT NULL,
  `email` VARCHAR(150) NULL,
  `phone` VARCHAR(25) NOT NULL,
  `course_applied` VARCHAR(100) NOT NULL,
  `percentage_marks` DECIMAL(5,2) NULL,
  `hostel_required` TINYINT(1) DEFAULT 0,
  `address` TEXT NULL,
  `status` ENUM('Submitted', 'Under Review', 'Verified', 'Offered', 'Enrolled') DEFAULT 'Submitted',
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 2. Help Desk Inquiries Table
CREATE TABLE IF NOT EXISTS `contact_inquiries` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `sender_name` VARCHAR(150) NOT NULL,
  `email` VARCHAR(150) NULL,
  `phone` VARCHAR(25) NOT NULL,
  `subject` VARCHAR(150) NOT NULL,
  `message` TEXT NOT NULL,
  `status` ENUM('New', 'In Progress', 'Resolved') DEFAULT 'New',
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 3. Student Examination Records
CREATE TABLE IF NOT EXISTS `examination_results` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `register_no` VARCHAR(20) NOT NULL UNIQUE,
  `student_name` VARCHAR(150) NOT NULL,
  `degree_programme` VARCHAR(100) NOT NULL,
  `semester` VARCHAR(20) NOT NULL,
  `sgpa` DECIMAL(4,2) NOT NULL,
  `cgpa` DECIMAL(4,2) NOT NULL,
  `classification` VARCHAR(50) NOT NULL,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Seed Sample Examination Results
INSERT INTO `examination_results` (`register_no`, `student_name`, `degree_programme`, `semester`, `sgpa`, `cgpa`, `classification`) VALUES
('23EWCS001', 'K. Priyadharshini', 'B.Sc Computer Science', 'Semester IV', 8.92, 8.85, 'First Class with Distinction'),
('23EWCS002', 'M. Subhashree', 'B.Sc Computer Science', 'Semester IV', 8.65, 8.52, 'First Class with Distinction'),
('23EWCA014', 'S. Mary Jennifer', 'BCA', 'Semester IV', 8.40, 8.35, 'First Class'),
('23EWCM032', 'R. Kavitha', 'B.Com (General)', 'Semester IV', 8.15, 8.08, 'First Class'),
('23EWEN008', 'J. Angelin Sarah', 'B.A. English Literature', 'Semester IV', 8.78, 8.70, 'First Class with Distinction')
ON DUPLICATE KEY UPDATE `student_name`=VALUES(`student_name`);
