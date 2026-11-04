<?php
/**
 * C.S.I. Ewart Women's Christian College
 * Header Template - Pure Vanilla PHP & Semantic HTML5
 */
$currentPage = basename($_SERVER['PHP_SELF'] ?? 'index.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?php echo isset($pageTitle) ? htmlspecialchars($pageTitle) : "C.S.I. Ewart Women's Christian College | Official Website"; ?></title>
  
  <!-- SEO & Search Engine Indexing Meta -->
  <meta name="description" content="Official website of C.S.I. Ewart Women's Christian College, Melrosapuram. Affiliated to University of Madras. Explore degree courses, admissions, hostel &amp; campus life.">
  <meta name="keywords" content="CSI Ewart Women's Christian College, Ewart College Melrosapuram, Singaperumal Koil women college, University of Madras affiliated college, Chengalpattu admissions 2026, B.Sc Computer Science Chengalpattu, B.Com General, Elizabeth Andrew Hostel, Church of South India Diocese of Madras">
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
  <meta name="googlebot" content="index, follow">
  <meta name="author" content="C.S.I. Ewart Women's Christian College">
  <link rel="canonical" href="<?php echo htmlspecialchars($currentPage); ?>">

  <!-- Geo & Regional Meta for Local Search Ranking -->
  <meta name="geo.region" content="IN-TN">
  <meta name="geo.placename" content="Melrosapuram, Chengalpattu">
  <meta name="geo.position" content="12.76797;80.019246">
  <meta name="ICBM" content="12.76797, 80.019246">
  <meta name="theme-color" content="#001E44">

  <!-- Favicon & Icons -->
  <link rel="icon" type="image/jpeg" href="/assets/aistudio/College_LOGO_66bb4b67.jpg">
  <link rel="apple-touch-icon" href="/assets/aistudio/College_LOGO_66bb4b67.jpg">

  <!-- OpenGraph Social Cards -->
  <meta property="og:site_name" content="C.S.I. Ewart Women's Christian College">
  <meta property="og:type" content="website">
  <meta property="og:title" content="<?php echo isset($pageTitle) ? htmlspecialchars($pageTitle) : "C.S.I. Ewart Women's Christian College | Official Website"; ?>">
  <meta property="og:description" content="Empowering rural young women through University of Madras affiliated degree courses, academic excellence, and Christian moral values in Melrosapuram.">
  <meta property="og:url" content="<?php echo htmlspecialchars($currentPage); ?>">
  <meta property="og:image" content="/assets/aistudio/SSP_1949_eb838f4f.jpg">
  <meta property="og:image:alt" content="C.S.I. Ewart Women's Christian College Campus">
  <meta property="og:locale" content="en_IN">

  <!-- Twitter / X Card Meta -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="<?php echo isset($pageTitle) ? htmlspecialchars($pageTitle) : "C.S.I. Ewart Women's Christian College | Official Website"; ?>">
  <meta name="twitter:description" content="Empowering young women through holistic education, University of Madras affiliated degree programs, and Christian moral values.">
  <meta name="twitter:image" content="/assets/aistudio/SSP_1949_eb838f4f.jpg">

  <!-- Schema.org JSON-LD Structured Data for Google Rich Results -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollegeOrUniversity",
        "@id": "/#college",
        "name": "C.S.I. Ewart Women's Christian College",
        "alternateName": "CSI Ewart College",
        "url": "/index.php",
        "logo": "/assets/aistudio/College_LOGO_66bb4b67.jpg",
        "image": "/assets/aistudio/SSP_1949_eb838f4f.jpg",
        "description": "C.S.I. Ewart Women's Christian College is an institution of higher education for women, affiliated to the University of Madras and managed by the Diocese of Madras, Church of South India.",
        "foundingDate": "1997",
        "motto": "Love and Serve",
        "parentOrganization": {
          "@type": "Organization",
          "name": "Diocese of Madras, Church of South India"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Melrosapuram, Via-Singaperumal Koil",
          "addressLocality": "Chengalpattu District",
          "addressRegion": "Tamil Nadu",
          "postalCode": "603204",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 12.76797,
          "longitude": 80.019246
        },
        "telephone": "+91-44-27469288",
        "email": "admissions@csiewartcollege.edu.in"
      }
    ]
  }
  </script>

  <link rel="stylesheet" href="css/style.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>

  <!-- Penn State Style Top Utility Bar -->
  <div class="psu-top-bar">
    <div class="container psu-top-inner">
      <div class="psu-top-brand-crumb">
        <span>Diocese of Madras</span>
        <span class="dot">&bull;</span>
        <span>Church of South India</span>
        <span class="dot">&bull;</span>
        <span>Univ. of Madras Affiliated &bull; Est. 1997</span>
      </div>
      <div class="psu-top-links-group">
        <div class="psu-audience-links">
          <a href="admissions.php">Prospective Students</a>
          <a href="student_life.php">Current Students</a>
          <a href="about.php?section=history">Alumnae</a>
          <a href="contact.php">Help Desk</a>
        </div>
        <a href="admissions.php" class="psu-util-action-btn">Apply</a>
        <a href="examinations.php" class="psu-util-action-btn">Examinations</a>
        <button class="psu-search-btn" onclick="toggleSearchDrawer()" aria-label="Open Search">
          <span>Search</span> &#128269;
        </button>
      </div>
    </div>
  </div>

  <!-- Penn State Slide-Down Search Drawer -->
  <div class="psu-search-drawer" id="psuSearchDrawer">
    <div class="container">
      <div class="psu-search-box">
        <input type="text" id="psuSearchInput" class="psu-search-input" placeholder="Search degrees, admissions, hostel, examinations, faculty...">
        <button class="psu-search-submit" onclick="location.href='academics.php'">Search</button>
        <button class="psu-search-close" onclick="closeSearchDrawer()" aria-label="Close search">&times;</button>
      </div>
      <div class="psu-search-quicklinks">
        <span>Popular:</span>
        <a href="admissions.php">Admissions 2026</a>
        <a href="academics.php">B.Sc Computer Science</a>
        <a href="academics.php">B.Com General</a>
        <a href="academics.php">M.Com &amp; M.A.</a>
        <a href="facilities.php">Elizabeth Andrew Hostel</a>
        <a href="examinations.php">Examinations Portal</a>
      </div>
    </div>
  </div>

  <!-- Main Site Header -->
  <header class="site-header">
    <div class="container header-flex">
      <a href="index.php" class="brand-lockup">
        <img src="/assets/aistudio/College_LOGO_66bb4b67.jpg" alt="CSI Ewart Crest" class="brand-logo">
        <div class="brand-text">
          <span class="brand-title">C.S.I. EWART WOMEN'S CHRISTIAN COLLEGE</span>
          <span class="brand-affil">AFFILIATED TO THE UNIVERSITY OF MADRAS &bull; ESTD. 1997</span>
          <span class="brand-loc">Melrosapuram, Via-Singaperumal Koil, Chengalpattu District &ndash; 603 204</span>
        </div>
      </a>
      <div class="header-cta">
        <a href="admissions.php" class="psu-btn-primary" style="padding: 10px 22px; font-size: 13px;">Apply Online 2026</a>
      </div>
      <button class="mobile-toggle" id="mobileMenuBtn" aria-label="Toggle Navigation">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>

  <!-- Navigation -->
  <nav class="main-nav" id="mainNav">
    <div class="container">
      <ul class="nav-menu">
        <li class="<?php echo ($currentPage === 'index.php') ? 'active' : ''; ?>"><a href="index.php">Home</a></li>
        <li class="has-dropdown <?php echo ($currentPage === 'about.php') ? 'active' : ''; ?>">
          <a href="about.php">About Us &dtrif;</a>
          <ul class="dropdown-menu">
            <li><a href="about.php?section=founder">Founder &amp; his Vision</a></li>
            <li><a href="about.php?section=leadership">Our Leadership</a></li>
            <li><a href="about.php?section=history">History of Ewart</a></li>
            <li><a href="about.php?section=mission">Mission Statement</a></li>
            <li><a href="about.php?section=quality">Quality Policy</a></li>
            <li><a href="about.php?section=faith">Faith and Heritage</a></li>
            <li><a href="about.php?section=governing">Governing Body</a></li>
          </ul>
        </li>
        <li class="<?php echo ($currentPage === 'academics.php') ? 'active' : ''; ?>"><a href="academics.php">Academics</a></li>
        <li class="<?php echo ($currentPage === 'examinations.php') ? 'active' : ''; ?>"><a href="examinations.php">Examinations</a></li>
        <li class="<?php echo ($currentPage === 'student_life.php') ? 'active' : ''; ?>"><a href="student_life.php">Student Life</a></li>
        <li class="<?php echo ($currentPage === 'facilities.php') ? 'active' : ''; ?>"><a href="facilities.php">Facilities</a></li>
        <li class="<?php echo ($currentPage === 'faculty.php') ? 'active' : ''; ?>"><a href="faculty.php">Faculty</a></li>
        <li class="<?php echo ($currentPage === 'contact.php') ? 'active' : ''; ?>"><a href="contact.php">Help Desk</a></li>
      </ul>
    </div>
  </nav>
