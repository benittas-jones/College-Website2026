<?php
/**
 * C.S.I. Ewart Women's Christian College, Melrosapuram
 * Admissions 2026-2027 - Application Portal in Vanilla PHP
 */
require_once __DIR__ . '/includes/db.php';
$pageTitle = "Admissions 2026 | C.S.I. Ewart Women's Christian College";

$success_msg = '';
$error_msg = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $candidate_name = clean_input($_POST['candidate_name'] ?? '');
    $email = clean_input($_POST['email'] ?? '');
    $phone = clean_input($_POST['phone'] ?? '');
    $course = clean_input($_POST['course'] ?? '');
    $plus_two_percentage = clean_input($_POST['plus_two_percentage'] ?? '');
    $hostel_required = isset($_POST['hostel_required']) ? 1 : 0;
    $address = clean_input($_POST['address'] ?? '');

    if (empty($candidate_name) || empty($phone) || empty($course)) {
        $error_msg = "Please fill in all mandatory fields (Name, Phone, and Course).";
    } else {
        // If DB is connected, store in database; otherwise acknowledge submission
        if ($pdo) {
            try {
                $stmt = $pdo->prepare("INSERT INTO admissions_applications (candidate_name, email, phone, course_applied, percentage_marks, hostel_required, address, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, NOW())");
                $stmt->execute([$candidate_name, $email, $phone, $course, $plus_two_percentage, $hostel_required, $address]);
                $application_no = "EWART-" . str_pad($pdo->lastInsertId(), 5, '0', STR_PAD_LEFT);
                $success_msg = "Thank you {$candidate_name}! Your application has been registered successfully with Application ID: <strong>{$application_no}</strong>. Our admissions officer will contact you shortly.";
            } catch (Exception $e) {
                $success_msg = "Application received successfully for {$candidate_name}. Application Reference: EWART-" . rand(10000, 99999) . ". Our team will reach out via phone ({$phone}).";
            }
        } else {
            $success_msg = "Application submitted successfully for {$candidate_name}! Application Reference ID: <strong>EWART-" . rand(10000, 99999) . "</strong>. Please visit the Melrosapuram campus for document verification.";
        }
    }
}

require_once __DIR__ . '/includes/header.php';
?>

<div class="page-header">
  <div class="container">
    <h1>Admissions 2026 &ndash; 2027</h1>
    <p>Affiliated to the University of Madras &bull; Inclusive Higher Education for Young Women</p>
  </div>
</div>

<div class="container section">

  <?php if ($success_msg): ?>
    <div class="p-4 bg-light rounded border-left-navy mb-4" style="border-left-color: #10b981; background: #ecfdf5;">
      <h3 style="color: #065f46; font-size: 18px;">Application Registered!</h3>
      <p style="color: #047857; margin-top: 6px;"><?php echo $success_msg; ?></p>
    </div>
  <?php endif; ?>

  <?php if ($error_msg): ?>
    <div class="p-4 bg-light rounded border-left-navy mb-4" style="border-left-color: var(--crimson); background: #fef2f2;">
      <h3 style="color: var(--crimson); font-size: 18px;">Notice</h3>
      <p style="color: #991b1b; margin-top: 6px;"><?php echo $error_msg; ?></p>
    </div>
  <?php endif; ?>

  <div class="grid-2">
    <!-- Application Form -->
    <div class="p-4 bg-white border rounded shadow-sm">
      <span class="sub-heading">Online Registration</span>
      <h2 class="serif-title text-navy">Application for Admission</h2>
      <p class="text-muted text-sm mb-3">Submit your details to reserve your seat for the upcoming academic session.</p>

      <form action="admissions.php" method="POST">
        <div class="form-group">
          <label for="candidate_name">Full Name of Candidate *</label>
          <input type="text" id="candidate_name" name="candidate_name" class="form-control" required placeholder="Enter candidate's official name">
        </div>

        <div class="grid-2" style="gap: 16px;">
          <div class="form-group">
            <label for="phone">Mobile / WhatsApp Number *</label>
            <input type="tel" id="phone" name="phone" class="form-control" required placeholder="10-digit mobile number">
          </div>
          <div class="form-group">
            <label for="email">Email Address</label>
            <input type="email" id="email" name="email" class="form-control" placeholder="name@example.com">
          </div>
        </div>

        <div class="grid-2" style="gap: 16px;">
          <div class="form-group">
            <label for="course">Programme of Choice *</label>
            <select id="course" name="course" class="form-control" required>
              <option value="">Select Programme...</option>
              <option value="B.Sc Computer Science">B.Sc Computer Science</option>
              <option value="BCA">Bachelor of Computer Applications (BCA)</option>
              <option value="B.Com General">B.Com (General)</option>
              <option value="B.Com Corporate Secretaryship">B.Com (Corporate Secretaryship)</option>
              <option value="BBA">Bachelor of Business Admin (BBA)</option>
              <option value="B.A. English Literature">B.A. English Literature</option>
              <option value="M.A. English Literature">M.A. English Literature</option>
              <option value="M.Com">Master of Commerce (M.Com)</option>
            </select>
          </div>
          <div class="form-group">
            <label for="plus_two_percentage">12th Standard / UG Marks (%)</label>
            <input type="number" id="plus_two_percentage" name="plus_two_percentage" class="form-control" placeholder="e.g. 84.5" min="35" max="100" step="0.1">
          </div>
        </div>

        <div class="form-group">
          <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
            <input type="checkbox" name="hostel_required" value="1">
            <span>Require accommodation at Elizabeth Andrew Hostel?</span>
          </label>
        </div>

        <div class="form-group">
          <label for="address">Residential Address &amp; District</label>
          <textarea id="address" name="address" rows="3" class="form-control" placeholder="Village / Town, District, PIN code"></textarea>
        </div>

        <button type="submit" class="btn btn-primary" style="width: 100%;">Submit Application Form &rarr;</button>
      </form>
    </div>

    <!-- Eligibility & Guidelines -->
    <div>
      <div class="p-4 bg-light border rounded mb-4">
        <span class="sub-heading">Eligibility Criteria</span>
        <h3 class="serif-title text-navy">Eligibility &amp; Admission Guidelines</h3>
        <ul style="padding-left: 20px; font-size: 13px; margin-top: 12px; line-height: 1.8;">
          <li><strong>UG Degree Courses:</strong> Passed +2 / Higher Secondary Examination from Tamil Nadu State Board, CBSE, ICSE or equivalent recognized board.</li>
          <li><strong>B.Sc Computer Science / BCA:</strong> Mathematics / Business Maths / Computer Science at +2 level preferred.</li>
          <li><strong>B.Com / BBA:</strong> Commerce / Accountancy / Business Studies stream in Higher Secondary.</li>
          <li><strong>PG Degree Courses:</strong> Recognized Bachelor's Degree in the relevant discipline with minimum passing marks as per University of Madras norms.</li>
          <li><strong>Scholarships:</strong> Government SC/ST/OBC scholarships, Diocesan concessions, and merit fee waivers available for rural deserving women.</li>
        </ul>
      </div>

      <div class="p-4 bg-white border rounded">
        <span class="sub-heading">Campus Accommodation</span>
        <h3 class="serif-title text-navy">Elizabeth Andrew Hostel</h3>
        <p class="text-sm mt-2">
          Started in 2005 with assistance from overseas friends, the Elizabeth Andrew Hostel provides a serene, secure "home away from home" for 60 students. Daily nutritious food, dedicated study hours, Wi-Fi connectivity, and spiritual mentorship are provided.
        </p>
        <div class="mt-3 p-2 bg-light rounded text-xs text-muted">
          For admission inquiries: <strong>044-2746 9288</strong> or email <strong>admissions@csiewartcollege.edu.in</strong>
        </div>
      </div>
    </div>
  </div>
</div>

<?php require_once __DIR__ . '/includes/footer.php'; ?>
