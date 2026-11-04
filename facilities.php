<?php
/**
 * C.S.I. Ewart Women's Christian College, Melrosapuram
 * Campus Facilities & Infrastructure
 */
require_once __DIR__ . '/includes/db.php';
$pageTitle = "Facilities | C.S.I. Ewart Women's Christian College";
require_once __DIR__ . '/includes/header.php';
?>

<div class="page-header">
  <div class="container">
    <h1>Campus Infrastructure &amp; Facilities</h1>
    <p>11-Acre Lush Green Campus &bull; Designed by Architect Jayakar</p>
  </div>
</div>

<div class="container section">
  <div class="grid-3 mb-4">
    <!-- Computer Labs -->
    <div class="p-4 bg-white border rounded shadow-sm">
      <span class="sub-heading">IT Infrastructure</span>
      <h3 class="serif-title text-navy">High-Tech Computer Labs</h3>
      <p class="text-sm mt-2">Modern air-conditioned computer laboratories equipped with high-speed internet, networked workstations, programming environments, and database suites.</p>
    </div>

    <!-- Library -->
    <div class="p-4 bg-white border rounded shadow-sm">
      <span class="sub-heading">Knowledge Centre</span>
      <h3 class="serif-title text-navy">Central Library &amp; e-Resources</h3>
      <p class="text-sm mt-2">Extensive collection of text books, reference journals, DELNET subscriptions, digital magazines, and peaceful study carrels for research scholars.</p>
    </div>

    <!-- Seminar Hall -->
    <div class="p-4 bg-white border rounded shadow-sm">
      <span class="sub-heading">Events &amp; Symposia</span>
      <h3 class="serif-title text-navy">Auditorium &amp; Seminar Halls</h3>
      <p class="text-sm mt-2">Spacious multimedia-enabled halls for diocesan convocations, national symposiums, guest lectures, cultural fests, and chapel services.</p>
    </div>

    <!-- Science Laboratories -->
    <div class="p-4 bg-white border rounded shadow-sm">
      <span class="sub-heading">Practical Learning</span>
      <h3 class="serif-title text-navy">Departmental Laboratories</h3>
      <p class="text-sm mt-2">Well-maintained apparatus, safety systems, and demonstration equipment supporting experimental curriculum and hands-on scientific inquiries.</p>
    </div>

    <!-- Sports Grounds -->
    <div class="p-4 bg-white border rounded shadow-sm">
      <span class="sub-heading">Physical Wellbeing</span>
      <h3 class="serif-title text-navy">Sports &amp; Athletics Arena</h3>
      <p class="text-sm mt-2">Expansive open playground on the 11-acre campus supporting Track &amp; Field, Volleyball, Kho-Kho, Throwball, and indoor Table Tennis and Chess.</p>
    </div>

    <!-- Transport & Cafeteria -->
    <div class="p-4 bg-white border rounded shadow-sm">
      <span class="sub-heading">Student Welfare</span>
      <h3 class="serif-title text-navy">Transport &amp; Nutritious Canteen</h3>
      <p class="text-sm mt-2">Dedicated fleet of college buses connecting Chengalpattu, Singaperumal Koil, Tambaram, and surrounding villages, alongside a hygienic canteen.</p>
    </div>
  </div>
</div>

<?php require_once __DIR__ . '/includes/footer.php'; ?>
