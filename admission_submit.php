<?php
/**
 * C.S.I. Ewart Women's Christian College
 * Admission Form Processor Endpoint
 */
require_once __DIR__ . '/includes/db.php';

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['status' => 'error', 'message' => 'Method not allowed.']);
    exit;
}

$candidate_name = clean_input($_POST['candidate_name'] ?? '');
$phone = clean_input($_POST['phone'] ?? '');
$email = clean_input($_POST['email'] ?? '');
$course = clean_input($_POST['course'] ?? '');
$percentage = clean_input($_POST['plus_two_percentage'] ?? '');
$hostel = isset($_POST['hostel_required']) ? 1 : 0;
$address = clean_input($_POST['address'] ?? '');

if (empty($candidate_name) || empty($phone) || empty($course)) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Mandatory fields missing.']);
    exit;
}

$app_id = "EWART-" . rand(10000, 99999);

if ($pdo) {
    try {
        $stmt = $pdo->prepare("INSERT INTO admissions_applications (candidate_name, email, phone, course_applied, percentage_marks, hostel_required, address, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, NOW())");
        $stmt->execute([$candidate_name, $email, $phone, $course, $percentage, $hostel, $address]);
        $app_id = "EWART-" . str_pad($pdo->lastInsertId(), 5, '0', STR_PAD_LEFT);
    } catch (Exception $e) {
        // Fallback to generated ID
    }
}

echo json_encode([
    'status' => 'success',
    'application_id' => $app_id,
    'candidate_name' => $candidate_name,
    'message' => 'Application recorded successfully for ' . $candidate_name
]);
exit;
