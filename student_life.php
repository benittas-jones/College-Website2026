<?php
/**
 * C.S.I. Ewart Women's Christian College, Melrosapuram
 * Student Life - Student Union, Associations, NSS, Sports, Hostel
 */
require_once __DIR__ . '/includes/db.php';
$pageTitle = "Student Life | C.S.I. Ewart Women's Christian College";
require_once __DIR__ . '/includes/header.php';
?>

<div class="page-header">
  <div class="container">
    <h1>Vibrant Student Life &amp; Holistic Growth</h1>
    <p>Empowering young women to shine like stars &bull; Motto: Love and Serve</p>
  </div>
</div>

<div class="container section">

  <!-- Overview -->
  <div class="p-4 bg-white border rounded shadow-sm mb-4">
    <div class="grid-2 align-center">
      <div>
        <span class="sub-heading">Campus Culture</span>
        <h2 class="serif-title text-navy">Shining Like Guiding Lights</h2>
        <p class="mt-2">
          College Students Union and Departmental Associations and Sports were all started in the very first academic year (1997) and have grown in creativity and strength ever since.
        </p>
        <p class="mt-2">
          We at C.S.I. Ewart Women’s Christian College gain our strength, wisdom and understanding from the Lord God Almighty. We believe in the holistic development of our students and want them to shine in this world like the tiny little stars that light up the sky at night - being guiding lights even in the darkness.
        </p>
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80" alt="Students Union" class="rounded shadow-sm">
      </div>
    </div>
  </div>

  <!-- Associations Grid -->
  <div class="mb-4">
    <div class="text-center mb-3">
      <span class="sub-heading">Clubs &amp; Community Outreach</span>
      <h2 class="serif-title">Active Student Associations</h2>
    </div>

    <div class="grid-3">
      <div class="p-4 bg-light border rounded">
        <h3 class="text-navy font-serif">National Service Scheme (NSS)</h3>
        <p class="text-sm mt-2">Active community engagement conducting annual special rural camping, literacy drives, cleanliness drives, and health camps in Melrosapuram village.</p>
      </div>
      <div class="p-4 bg-light border rounded">
        <h3 class="text-navy font-serif">Youth Red Cross (YRC)</h3>
        <p class="text-sm mt-2">Disaster preparedness, blood donation drives, first aid certification, and compassionate social welfare initiatives for the marginalized.</p>
      </div>
      <div class="p-4 bg-light border rounded">
        <h3 class="text-navy font-serif">Red Ribbon Club (RRC)</h3>
        <p class="text-sm mt-2">Promoting health awareness, peer education, substance abuse deterrence, and community sensitization on epidemic prevention.</p>
      </div>
      <div class="p-4 bg-light border rounded">
        <h3 class="text-navy font-serif">Environment Club</h3>
        <p class="text-sm mt-2">Nurturing ecological responsibility on our 11-acre green campus through tree planting, plastic-free campaigns, and rainwater harvesting audits.</p>
      </div>
      <div class="p-4 bg-light border rounded">
        <h3 class="text-navy font-serif">SCMI (Student Christian Movement)</h3>
        <p class="text-sm mt-2">Fostering spiritual devotion, interfaith goodwill, Christian fellowship, chapel choir, and moral servant-leadership.</p>
      </div>
      <div class="p-4 bg-light border rounded">
        <h3 class="text-navy font-serif">Sports &amp; Athletics</h3>
        <p class="text-sm mt-2">Spacious playground facilities for Volleyball, Kho-Kho, Kabaddi, Badminton, Chess, and Athletics with annual University laurels.</p>
      </div>
    </div>
  </div>

  <!-- Elizabeth Andrew Hostel -->
  <div class="p-4 bg-white border rounded shadow-sm">
    <div class="grid-2 align-center">
      <div>
        <span class="sub-heading">Residential Life</span>
        <h2 class="serif-title text-navy">Elizabeth Andrew Hostel</h2>
        <p class="mt-2 text-sm">
          As the need for accommodation in the College grew, the Elizabeth Andrew Hostel was started in 2005 with assistance from overseas friends to support students from distant locations in Madras Diocese. Ground floor was completed in 2008 and the first floor in 2018. Miss Bella Ross was the first Warden.
        </p>
        <p class="mt-2 text-sm">
          The hostel has grown over the years to provide a home away from home for 60 students, who actively participate in all programmes. Student secretaries provide self-governance to sustain a harmonious community.
        </p>
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80" alt="Hostel Room" class="rounded shadow-sm">
      </div>
    </div>
  </div>

</div>

<?php require_once __DIR__ . '/includes/footer.php'; ?>
