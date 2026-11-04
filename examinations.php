<?php
/**
 * C.S.I. Ewart Women's Christian College, Melrosapuram
 * Examinations Portal - Semester Marksheets, Timetable & Regulations
 */
require_once __DIR__ . '/includes/db.php';
$pageTitle = "Examinations Portal | C.S.I. Ewart Women's Christian College";

$search_reg = clean_input($_GET['reg_no'] ?? '');
$result_data = null;
$searched = false;

// Mock student result verification database
$mock_results = [
    '23EWCS001' => ['name' => 'K. Priyadharshini', 'dept' => 'B.Sc Computer Science', 'sem' => 'Sem IV', 'gpa' => '8.92', 'status' => 'FIRST CLASS WITH DISTINCTION'],
    '23EWCS002' => ['name' => 'M. Subhashree', 'dept' => 'B.Sc Computer Science', 'sem' => 'Sem IV', 'gpa' => '8.65', 'status' => 'FIRST CLASS WITH DISTINCTION'],
    '23EWCA014' => ['name' => 'S. Mary Jennifer', 'dept' => 'BCA', 'sem' => 'Sem IV', 'gpa' => '8.40', 'status' => 'FIRST CLASS'],
    '23EWCM032' => ['name' => 'R. Kavitha', 'dept' => 'B.Com (General)', 'sem' => 'Sem IV', 'gpa' => '8.15', 'status' => 'FIRST CLASS'],
    '23EWEN008' => ['name' => 'J. Angelin Sarah', 'dept' => 'B.A. English Literature', 'sem' => 'Sem IV', 'gpa' => '8.78', 'status' => 'FIRST CLASS WITH DISTINCTION'],
];

if (!empty($search_reg)) {
    $searched = true;
    $reg_upper = strtoupper($search_reg);
    if (isset($mock_results[$reg_upper])) {
        $result_data = $mock_results[$reg_upper];
        $result_data['reg_no'] = $reg_upper;
    }
}

require_once __DIR__ . '/includes/header.php';
?>

<div class="page-header">
  <div class="container">
    <h1>Office of the Controller of Examinations</h1>
    <p>University of Madras Examinations &bull; Evaluation &bull; Marksheets</p>
  </div>
</div>

<div class="container section">

  <!-- Result Lookup Box -->
  <div class="p-4 bg-white border rounded shadow-sm mb-4">
    <span class="sub-heading">Online Results Portal</span>
    <h2 class="serif-title text-navy">Check Semester Examination Results</h2>
    <p class="text-muted text-sm mb-3">Enter the 9-character University Register Number to fetch published semester marks.</p>

    <form action="examinations.php" method="GET" class="grid-2 align-center" style="max-width: 600px; gap: 12px;">
      <div>
        <input type="text" name="reg_no" class="form-control" placeholder="e.g. 23EWCS001" value="<?php echo htmlspecialchars($search_reg); ?>" required>
      </div>
      <div>
        <button type="submit" class="btn btn-primary">Search Marksheet &rarr;</button>
      </div>
    </form>

    <?php if ($searched): ?>
      <div class="mt-4 pt-3 border-top">
        <?php if ($result_data): ?>
          <div class="p-3 bg-light border rounded">
            <h3 class="text-navy font-serif"><?php echo htmlspecialchars($result_data['name']); ?></h3>
            <p class="text-sm text-muted">Register No: <strong><?php echo htmlspecialchars($result_data['reg_no']); ?></strong> &bull; <?php echo htmlspecialchars($result_data['dept']); ?></p>
            <div class="grid-3 mt-3">
              <div class="p-2 bg-white rounded border">
                <span class="text-xs text-muted">Semester</span><br>
                <strong><?php echo htmlspecialchars($result_data['sem']); ?></strong>
              </div>
              <div class="p-2 bg-white rounded border">
                <span class="text-xs text-muted">Semester SGPA</span><br>
                <strong class="text-navy" style="font-size: 16px;"><?php echo htmlspecialchars($result_data['gpa']); ?> / 10.0</strong>
              </div>
              <div class="p-2 bg-white rounded border">
                <span class="text-xs text-muted">Classification</span><br>
                <strong style="color: #059669; font-size: 12px;"><?php echo htmlspecialchars($result_data['status']); ?></strong>
              </div>
            </div>
          </div>
        <?php else: ?>
          <div class="p-3 bg-light border rounded text-crimson">
            No published results found for Register Number &ldquo;<?php echo htmlspecialchars($search_reg); ?>&rdquo;. Try sample register number: <strong>23EWCS001</strong>, <strong>23EWCA014</strong>, or <strong>23EWEN008</strong>.
          </div>
        <?php endif; ?>
      </div>
    <?php endif; ?>
  </div>

  <!-- Examination Circulars & Timetable -->
  <div class="grid-2">
    <div class="p-4 bg-white border rounded shadow-sm">
      <span class="sub-heading">Academic Schedule</span>
      <h3 class="serif-title text-navy">Upcoming Examination Schedule</h3>
      <table class="table">
        <thead>
          <tr>
            <th>Event / Description</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Commencement of Theory Examinations</td>
            <td>15th April 2026</td>
          </tr>
          <tr>
            <td>Submission of Internal Assessment Marks</td>
            <td>30th March 2026</td>
          </tr>
          <tr>
            <td>Distribution of Hall Tickets</td>
            <td>08th April 2026</td>
          </tr>
          <tr>
            <td>Commencement of Practical Examinations</td>
            <td>01st April 2026</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="p-4 bg-light border rounded">
      <span class="sub-heading">Examination Rules</span>
      <h3 class="serif-title text-navy">Instructions to Candidates</h3>
      <ul style="padding-left: 20px; font-size: 13px; margin-top: 12px; line-height: 1.8;">
        <li>Candidates must produce their valid Hall Ticket and College Identity Card on each session of the examination.</li>
        <li>Students are strictly advised to occupy their allotted seats 15 minutes prior to the commencement of the exam.</li>
        <li>No candidate will be allowed into the exam hall after 30 minutes from the commencement of the exam.</li>
        <li>Possession of mobile phones, smartwatches, or unauthorized study material in the hall constitutes examination malpractice.</li>
      </ul>
    </div>
  </div>

</div>

<?php require_once __DIR__ . '/includes/footer.php'; ?>
