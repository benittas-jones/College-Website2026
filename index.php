<?php
/**
 * C.S.I. Ewart Women's Christian College, Melrosapuram
 * Affiliated to the University of Madras
 * Main Homepage - Modeled on Penn State University (psu.edu)
 * Pure Vanilla PHP & Semantic HTML5
 */
require_once __DIR__ . '/includes/db.php';
$pageTitle = "C.S.I. Ewart Women's Christian College | Official Website (Penn State Style)";
require_once __DIR__ . '/includes/header.php';
?>

<!-- 1. Hero Picture Slider (3 Real Campus Photos, Pure Unmasked) -->
<section class="psu-hero-slider" id="homeSlider">
  <div class="psu-slider-track">
    <!-- Slide 1: Main College Building with Signage -->
    <div class="psu-slide active">
      <img src="/assets/aistudio/SSP_1949_eb838f4f.jpg" alt="C.S.I. Ewart Women's Christian College Main Building">
      <div class="psu-slide-caption">
        <span class="psu-slide-kicker">Melrosapuram, Chengalpattu &bull; Diocese of Madras &bull; Est. 1997</span>
        <h1 class="psu-slide-title">WE ARE <span style="color: var(--psu-gold);">EWART.</span></h1>
        <p class="psu-slide-sub">Where Faith, Knowledge &amp; Purpose Transform Rural Young Women Into Principled Leaders.</p>
      </div>
    </div>

    <!-- Slide 2: 11-Acre Lush Campus Block -->
    <div class="psu-slide">
      <img src="/assets/aistudio/SSP_1959_23f72d24.jpg" alt="11-Acre Lush Eco-Friendly Green Campus in Melrosapuram">
      <div class="psu-slide-caption">
        <span class="psu-slide-kicker">11-Acre Scenic Green Campus</span>
        <h2 class="psu-slide-title">Spacious Learning Sanctuary Surrounded by Nature</h2>
        <p class="psu-slide-sub">Designed by Architect Jayakar with Modern Classrooms, Laboratories &amp; Hostel Facilities.</p>
      </div>
    </div>

    <!-- Slide 3: Founder & Principals Memorial Hall -->
    <div class="psu-slide">
      <img src="/assets/aistudio/SSP_1952_4ad4baa0.jpg" alt="Founder and Principals Memorial Hall">
      <div class="psu-slide-caption">
        <span class="psu-slide-kicker">Christian Heritage &bull; Motto: Love and Serve</span>
        <h2 class="psu-slide-title">Nurtured by Daring Faith &amp; Hard Industry</h2>
        <p class="psu-slide-sub">Commemorating Our Bishops, Principals &amp; Dedicated Faculty Empowering Women Since 1997.</p>
      </div>
    </div>
  </div>

  <!-- Slider Navigation Buttons -->
  <button class="psu-slider-btn prev" onclick="prevSlide()" aria-label="Previous Slide">&#10094;</button>
  <button class="psu-slider-btn next" onclick="nextSlide()" aria-label="Next Slide">&#10095;</button>

  <!-- Slider Pagination Dots -->
  <div class="psu-slider-dots">
    <span class="psu-slider-dot active" onclick="goToSlide(0)" aria-label="Slide 1"></span>
    <span class="psu-slider-dot" onclick="goToSlide(1)" aria-label="Slide 2"></span>
    <span class="psu-slider-dot" onclick="goToSlide(2)" aria-label="Slide 3"></span>
  </div>
</section>

<!-- 2. Penn State 4-Tile Gateway Bar (Overlapping Hero) -->
<section class="psu-gateway-bar">
  <div class="container">
    <div class="psu-gateway-grid">
      <div class="psu-gateway-card">
        <div>
          <div class="psu-gateway-icon">&#127891;</div>
          <h3 class="psu-gateway-title">Undergraduate Majors</h3>
          <p class="psu-gateway-desc">Career-ready degrees in B.Sc Computer Science, BCA, B.Com General, Corporate Secretaryship, BBA, and B.A. English Literature.</p>
        </div>
        <a href="academics.php" class="psu-gateway-link">Explore UG Programs &rarr;</a>
      </div>

      <div class="psu-gateway-card featured-gold">
        <div>
          <div class="psu-gateway-icon">&#128218;</div>
          <h3 class="psu-gateway-title">Postgraduate Studies</h3>
          <p class="psu-gateway-desc">Advanced postgraduate programs in M.Com and M.A. English Literature fostering deep research capabilities and career leadership.</p>
        </div>
        <a href="academics.php" class="psu-gateway-link">Discover PG Programs &rarr;</a>
      </div>

      <div class="psu-gateway-card">
        <div>
          <div class="psu-gateway-icon">&#127969;</div>
          <h3 class="psu-gateway-title">Elizabeth Andrew Hostel</h3>
          <p class="psu-gateway-desc">A safe, nurturing on-campus home for 60+ outstation young women, featuring wholesome dining, solar hot water, and student governance.</p>
        </div>
        <a href="facilities.php" class="psu-gateway-link">Hostel &amp; Residence &rarr;</a>
      </div>

      <div class="psu-gateway-card">
        <div>
          <div class="psu-gateway-icon">&#128176;</div>
          <h3 class="psu-gateway-title">Scholarships &amp; Aid</h3>
          <p class="psu-gateway-desc">Committed to rural upliftment through Diocesan scholarships, SC/ST state welfare support, and merit tuition concessions.</p>
        </div>
        <a href="admissions.php" class="psu-gateway-link">Financial Aid Options &rarr;</a>
      </div>
    </div>
  </div>
</section>

<!-- Circulars & Real-Time Announcements Bar -->
<div class="news-ticker-bar">
  <div class="container ticker-flex">
    <span class="ticker-label">Official Circulars:</span>
    <div class="ticker-text">
      <span>&bull; Admissions Open for 2026-2027: Undergraduate &amp; Postgraduate Programmes affiliated to University of Madras.</span>
      <span>&bull; Semester Theory &amp; Practical Examination schedules are published in the Examinations Portal.</span>
      <span>&bull; Elizabeth Andrew Hostel applications open for first-year scholars from distant diocesan locations.</span>
      <span>&bull; Government Order: Recognized under Tamil Nadu G.O. Ms. 457 dt. 27.08.1997.</span>
    </div>
  </div>
</div>

<!-- 4. Penn State Blue Ribbon: By The Numbers -->
<section class="psu-by-the-numbers">
  <div class="container">
    <div class="psu-numbers-intro">
      <span class="psu-kicker" style="color: var(--psu-gold);">Collegiate Impact</span>
      <h2>EWART BY THE NUMBERS</h2>
      <p>A living testament to 27 years of daring faith, academic standards, and holistic women's empowerment in rural Tamil Nadu.</p>
    </div>
    <div class="psu-numbers-grid">
      <div class="psu-num-item">
        <span class="psu-num-stat">27+</span>
        <span class="psu-num-label">Years of Legacy</span>
        <p class="psu-num-sub">Founded in 1997 by CSI Diocese of Madras</p>
      </div>
      <div class="psu-num-item">
        <span class="psu-num-stat">11</span>
        <span class="psu-num-label">Acres Campus</span>
        <p class="psu-num-sub">Serene greenery in Melrosapuram</p>
      </div>
      <div class="psu-num-item">
        <span class="psu-num-stat">100%</span>
        <span class="psu-num-label">Women Dedicated</span>
        <p class="psu-num-sub">Exclusive holistic collegiate environment</p>
      </div>
      <div class="psu-num-item">
        <span class="psu-num-stat">6</span>
        <span class="psu-num-label">Research Centres</span>
        <p class="psu-num-sub">Women's Studies, HRD, CDR &amp; Innovation</p>
      </div>
      <div class="psu-num-item">
        <span class="psu-num-stat">94%</span>
        <span class="psu-num-label">Career Progression</span>
        <p class="psu-num-sub">High placement &amp; postgraduate transition</p>
      </div>
      <div class="psu-num-item">
        <span class="psu-num-stat">60+</span>
        <span class="psu-num-label">Hostel Scholars</span>
        <p class="psu-num-sub">Elizabeth Andrew Residential Community</p>
      </div>
    </div>
  </div>
</section>

<!-- 5. Penn State Academic Degree & Majors Finder -->
<section class="psu-degree-explorer" id="degreeExplorer">
  <div class="container">
    <div class="psu-section-head">
      <div class="psu-section-title-wrap">
        <span class="psu-kicker">University of Madras Affiliated Programs</span>
        <h2 class="psu-section-heading">Explore Academic Degrees &amp; Majors</h2>
      </div>
      <a href="academics.php" class="psu-section-link">View Full Curricula &rarr;</a>
    </div>

    <!-- Filter Tabs -->
    <div class="psu-filter-tabs">
      <button class="psu-filter-tab active" onclick="filterPrograms('all', this)">All Degrees (8)</button>
      <button class="psu-filter-tab" onclick="filterPrograms('stem', this)">Computer Science &amp; IT</button>
      <button class="psu-filter-tab" onclick="filterPrograms('commerce', this)">Commerce &amp; Business</button>
      <button class="psu-filter-tab" onclick="filterPrograms('humanities', this)">Humanities &amp; Languages</button>
      <button class="psu-filter-tab" onclick="filterPrograms('pg', this)">Postgraduate Programs</button>
    </div>

    <!-- Programs Grid -->
    <div class="psu-programs-grid">
      <!-- B.Sc Computer Science -->
      <div class="psu-prog-card" data-category="stem">
        <div>
          <span class="psu-prog-tag">UG &bull; 3 Years</span>
          <h3 class="psu-prog-title">B.Sc Computer Science</h3>
          <p class="psu-prog-dept">Department of Computer Science</p>
          <p class="psu-prog-features">Software engineering, Python, Java, Data Structures, Web Development, and Cloud Computing in air-conditioned computer labs.</p>
        </div>
        <a href="academics.php" class="psu-prog-cta">Curriculum &amp; Careers &rarr;</a>
      </div>

      <!-- BCA -->
      <div class="psu-prog-card" data-category="stem">
        <div>
          <span class="psu-prog-tag">UG &bull; 3 Years</span>
          <h3 class="psu-prog-title">B.C.A. Computer Applications</h3>
          <p class="psu-prog-dept">Department of Computer Applications</p>
          <p class="psu-prog-features">Applied programming, mobile application development, database management (DBMS), and modern IT systems architecture.</p>
        </div>
        <a href="academics.php" class="psu-prog-cta">Curriculum &amp; Careers &rarr;</a>
      </div>

      <!-- B.Com General -->
      <div class="psu-prog-card" data-category="commerce">
        <div>
          <span class="psu-prog-tag">UG &bull; 3 Years</span>
          <h3 class="psu-prog-title">B.Com (General)</h3>
          <p class="psu-prog-dept">Department of Commerce</p>
          <p class="psu-prog-features">Financial accounting, banking regulations, direct taxation, company law, and Tally Prime practical certification.</p>
        </div>
        <a href="academics.php" class="psu-prog-cta">Curriculum &amp; Careers &rarr;</a>
      </div>

      <!-- B.Com Corporate Secretaryship -->
      <div class="psu-prog-card" data-category="commerce">
        <div>
          <span class="psu-prog-tag">UG &bull; 3 Years</span>
          <h3 class="psu-prog-title">B.Com (Corporate Secretaryship)</h3>
          <p class="psu-prog-dept">Department of Corporate Secretaryship</p>
          <p class="psu-prog-features">Corporate compliance, secretarial practice, securities law, institutional auditing, and managerial communication.</p>
        </div>
        <a href="academics.php" class="psu-prog-cta">Curriculum &amp; Careers &rarr;</a>
      </div>

      <!-- BBA -->
      <div class="psu-prog-card" data-category="commerce">
        <div>
          <span class="psu-prog-tag">UG &bull; 3 Years</span>
          <h3 class="psu-prog-title">B.B.A. Business Administration</h3>
          <p class="psu-prog-dept">Department of Business Administration</p>
          <p class="psu-prog-features">Strategic management, marketing analytics, human resource management, and rural entrepreneurship incubation.</p>
        </div>
        <a href="academics.php" class="psu-prog-cta">Curriculum &amp; Careers &rarr;</a>
      </div>

      <!-- B.A. English -->
      <div class="psu-prog-card" data-category="humanities">
        <div>
          <span class="psu-prog-tag">UG &bull; 3 Years</span>
          <h3 class="psu-prog-title">B.A. English Literature</h3>
          <p class="psu-prog-dept">Department of English</p>
          <p class="psu-prog-features">World literature, British &amp; American classics, literary criticism, phonetics, creative writing, and mass media communication.</p>
        </div>
        <a href="academics.php" class="psu-prog-cta">Curriculum &amp; Careers &rarr;</a>
      </div>

      <!-- M.Com (Postgraduate) -->
      <div class="psu-prog-card" data-category="pg">
        <div>
          <span class="psu-prog-tag tag-pg">PG &bull; 2 Years &bull; Est. 2019</span>
          <h3 class="psu-prog-title">M.Com (Master of Commerce)</h3>
          <p class="psu-prog-dept">PG Department of Commerce</p>
          <p class="psu-prog-features">Advanced financial management, corporate accounting research, quantitative finance, and UGC-NET preparation.</p>
        </div>
        <a href="academics.php" class="psu-prog-cta">Curriculum &amp; Careers &rarr;</a>
      </div>

      <!-- M.A. English Literature (Postgraduate) -->
      <div class="psu-prog-card" data-category="pg">
        <div>
          <span class="psu-prog-tag tag-pg">PG &bull; 2 Years &bull; Est. 2019</span>
          <h3 class="psu-prog-title">M.A. English Literature</h3>
          <p class="psu-prog-dept">PG Department of English</p>
          <p class="psu-prog-features">Postcolonial theory, gender studies, research methodology, advanced linguistics, and collegiate pedagogy training.</p>
        </div>
        <a href="academics.php" class="psu-prog-cta">Curriculum &amp; Careers &rarr;</a>
      </div>
    </div>
  </div>
</section>

<!-- 6. Penn State Purpose & Heritage Section -->
<section class="psu-purpose-section">
  <div class="container">
    <div class="psu-purpose-grid">
      <div>
        <span class="psu-kicker">Heritage &amp; Higher Purpose</span>
        <h2 class="serif-title" style="font-size: 30px; margin-bottom: 16px;">Driven by Faith, Nurtured by Service</h2>
        <p style="color: var(--stone-700); font-size: 15px; line-height: 1.6; margin-bottom: 14px;">
          The village of Melrosapuram carries a rich educational tradition dating back to 1893, founded by Church of Scotland missionary <strong>Rev. Adam Andrew</strong> and his wife Elizabeth to bring schooling and agricultural skill-building to rural children.
        </p>
        <p style="color: var(--stone-700); font-size: 15px; line-height: 1.6; margin-bottom: 20px;">
          Carrying forward this sacred trust, <strong>Bishop Dr. Masilamani Azariah</strong> envisioned C.S.I. Ewart Women's Christian College as an instrument of liberation. The College has instituted 6 specialized student centres to inspire research and empower young women:
        </p>
        
        <div class="psu-centres-list">
          <div class="psu-centre-item">
            <h4>Centre for Women's Studies</h4>
            <p>Sensitizing on gender equality and rural leadership.</p>
          </div>
          <div class="psu-centre-item">
            <h4>Centre for Human Resource Dev.</h4>
            <p>Cultivating managerial &amp; soft-skill competencies.</p>
          </div>
          <div class="psu-centre-item">
            <h4>Centre for Career Advancement</h4>
            <p>Placement training and competitive exam coaching.</p>
          </div>
          <div class="psu-centre-item">
            <h4>Centre for Innovation</h4>
            <p>Student project incubation and technology exhibits.</p>
          </div>
          <div class="psu-centre-item">
            <h4>Center for Dev. &amp; Research (CDR)</h4>
            <p>Fostering academic publications and social surveys.</p>
          </div>
          <div class="psu-centre-item">
            <h4>Entrepreneurship Development</h4>
            <p>Mentoring women to launch self-sustaining enterprises.</p>
          </div>
        </div>

        <div class="mt-4">
          <a href="about.php?section=mission" class="psu-btn-primary" style="display: inline-block;">Read College Mission Statement &rarr;</a>
        </div>
      </div>
      <div>
        <img src="/assets/aistudio/Alm_3_c5f84a39.JPG" alt="Ewart College Assembly Hall and Student Gathering" class="psu-purpose-img">
        <div style="background: #f1f5f9; padding: 14px 18px; border-radius: 0 0 6px 6px; font-size: 12px; color: #475569; border-left: 3px solid var(--psu-gold);">
          <strong>Melrosapuram Campus:</strong> 11-acre eco-friendly sanctuary equipped with modern laboratories, spacious lecture halls designed by Architect Jayakar, and the Elizabeth Andrew Hostel.
        </div>
      </div>
    </div>
  </div>
</section>

<!-- 7. College Leadership Section (User Requested Portrait Lightbox) -->
<section class="section bg-light border">
  <div class="container">
    <div class="text-center mb-4">
      <span class="psu-kicker">Governance &amp; Administration</span>
      <h2 class="serif-title">Executive College Leadership</h2>
      <p class="text-muted">Click any photograph to view portrait without cropping</p>
    </div>
    <div class="grid-4">
      <div class="leader-card">
        <div class="leader-img-container" onclick="openPortraitModal('/assets/aistudio/Bishop_7834f61c.jpg', 'Rt. Rev. Dr. Paul Francis Ravichandran', 'Bishop, CSI Diocese of Madras &amp; College Chairman')">
          <img src="/assets/aistudio/Bishop_7834f61c.jpg" alt="Rt. Rev. Dr. Paul Francis Ravichandran" class="leader-img">
          <span class="click-enlarge-badge">Click to enlarge</span>
        </div>
        <h3 class="leader-name">Rt. Rev. Dr. Paul Francis Ravichandran</h3>
        <p class="leader-designation">Bishop, CSI Diocese of Madras &amp; College Chairman</p>
      </div>

      <div class="leader-card">
        <div class="leader-img-container" onclick="openPortraitModal('/assets/aistudio/Director_fd882dce.jpg', 'Rev. A. Samson', 'Director, CSI Higher Education Institutions')">
          <img src="/assets/aistudio/Director_fd882dce.jpg" alt="Rev. A. Samson" class="leader-img">
          <span class="click-enlarge-badge">Click to enlarge</span>
        </div>
        <h3 class="leader-name">Rev. A. Samson</h3>
        <p class="leader-designation">Director, CSI Higher Education Institutions</p>
      </div>

      <div class="leader-card">
        <div class="leader-img-container" onclick="openPortraitModal('/assets/aistudio/College_Secretary_7e57128a.jpg', 'Dr. D. Frank Pullican', 'Secretary, C.S.I. Ewart Women\'s Christian College')">
          <img src="/assets/aistudio/College_Secretary_7e57128a.jpg" alt="Dr. D. Frank Pullican" class="leader-img">
          <span class="click-enlarge-badge">Click to enlarge</span>
        </div>
        <h3 class="leader-name">Dr. D. Frank Pullican</h3>
        <p class="leader-designation">College Secretary &amp; Correspondent</p>
      </div>

      <div class="leader-card">
        <div class="leader-img-container" onclick="openPortraitModal('/assets/aistudio/Principal_922aeb90.JPG', 'Dr. M. Hannah Santhakumari', 'Principal, C.S.I. Ewart Women\'s Christian College')">
          <img src="/assets/aistudio/Principal_922aeb90.JPG" alt="Dr. M. Hannah Santhakumari" class="leader-img">
          <span class="click-enlarge-badge">Click to enlarge</span>
        </div>
        <h3 class="leader-name">Dr. M. Hannah Santhakumari</h3>
        <p class="leader-designation">Principal &amp; Associate Professor</p>
      </div>
    </div>
    <div class="text-center mt-3">
      <a href="about.php?section=leadership" class="btn btn-secondary">View Full Leadership &amp; Profiles &rarr;</a>
    </div>
  </div>
</section>

<!-- 8. Penn State Style Upcoming Campus Events & Academic Dates -->
<section class="section">
  <div class="container">
    <div class="psu-section-head">
      <div class="psu-section-title-wrap">
        <span class="psu-kicker">Important Dates</span>
        <h2 class="psu-section-heading">Upcoming Events &amp; Academic Calendar</h2>
      </div>
      <a href="examinations.php" class="psu-section-link">View Full Calendar &rarr;</a>
    </div>

    <div class="psu-events-grid">
      <div class="psu-event-card">
        <div class="psu-date-badge">
          <span class="psu-date-month">NOV</span>
          <span class="psu-date-day">14</span>
        </div>
        <div class="psu-event-body">
          <span class="psu-event-cat">Alumnae</span>
          <h4 class="psu-event-title">Annual Alumnae Reunion Day</h4>
          <p class="psu-event-loc">&#128205; Auditorium, Melrosapuram</p>
        </div>
      </div>

      <div class="psu-event-card">
        <div class="psu-date-badge">
          <span class="psu-date-month">NOV</span>
          <span class="psu-date-day">28</span>
        </div>
        <div class="psu-event-body">
          <span class="psu-event-cat">Examinations</span>
          <h4 class="psu-event-title">University of Madras Theory Exams</h4>
          <p class="psu-event-loc">&#128205; Examination Halls A &amp; B</p>
        </div>
      </div>

      <div class="psu-event-card">
        <div class="psu-date-badge">
          <span class="psu-date-month">DEC</span>
          <span class="psu-date-day">12</span>
        </div>
        <div class="psu-event-body">
          <span class="psu-event-cat">Innovation</span>
          <h4 class="psu-event-title">Women's Entrepreneurship Summit</h4>
          <p class="psu-event-loc">&#128205; Seminar Hall, Ewart Campus</p>
        </div>
      </div>

      <div class="psu-event-card">
        <div class="psu-date-badge">
          <span class="psu-date-month">JAN</span>
          <span class="psu-date-day">10</span>
        </div>
        <div class="psu-event-body">
          <span class="psu-event-cat">Outreach</span>
          <h4 class="psu-event-title">NSS Special Rural Community Camp</h4>
          <p class="psu-event-loc">&#128205; Melrosapuram Villages</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Call to Action Banner (Commented out per request - code preserved)
<section style="background: linear-gradient(135deg, var(--navy) 0%, var(--navy-dark) 100%); color: var(--white); padding: 50px 0; border-top: 3px solid var(--psu-gold); text-align: center;">
  <div class="container" style="max-width: 800px;">
    <h2 class="serif-title" style="font-size: 32px; color: var(--white); margin-bottom: 12px;">Shape Your Future at C.S.I. Ewart</h2>
    <p style="font-size: 16px; color: #cbd5e1; margin-bottom: 24px; line-height: 1.6;">
      Applications are now open for the Academic Year 2026-2027. Experience transformative learning, caring faculty mentorship, and modern hostel living.
    </p>
    <div style="display: flex; gap: 14px; justify-content: center; flex-wrap: wrap;">
      <a href="admissions.php" class="psu-btn-primary">Apply Online for 2026-27</a>
      <a href="contact.php" class="psu-btn-outline">Contact Admissions Help Desk</a>
    </div>
  </div>
</section>
-->

<?php
require_once __DIR__ . '/includes/footer.php';
?>
