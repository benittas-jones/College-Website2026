<?php
/**
 * C.S.I. Ewart Women's Christian College
 * Header Template - Pure Vanilla PHP & Semantic HTML5
 */
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?php echo isset($pageTitle) ? $pageTitle : "C.S.I. Ewart Women's Christian College"; ?></title>
  <link rel="stylesheet" href="css/style.css">
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>

  <!-- Top Bar -->
  <div class="top-util-bar">
    <div class="container top-flex">
      <span>Diocese of Madras &bull; Church of South India</span>
      <div class="top-links">
        <a href="examinations.php">Examinations</a>
        <span class="sep">|</span>
        <a href="admissions.php">Admissions 2026</a>
        <span class="sep">|</span>
        <a href="contact.php">Help Desk</a>
      </div>
    </div>
  </div>

  <!-- Header -->
  <header class="site-header">
    <div class="container header-flex">
      <a href="index.php" class="brand-lockup">
        <img src="/assets/aistudio/College_LOGO_66bb4b67.jpg" alt="CSI Ewart Crest" class="brand-logo">
        <div class="brand-text">
          <span class="brand-title">C.S.I. Ewart Women's Christian College</span>
          <span class="brand-affil">(Affiliated to the University of Madras)</span>
          <span class="brand-loc">Melrosapuram, Via-Singaperumal Koil, Chengalpattu District &ndash; 603 204</span>
        </div>
      </a>
      <div class="header-cta">
        <a href="admissions.php" class="btn btn-apply">Apply Online 2026</a>
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
        <li><a href="index.php">Home</a></li>
        <li class="has-dropdown">
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
        <li><a href="academics.php">Academics</a></li>
        <li><a href="examinations.php">Examinations</a></li>
        <li><a href="contact.php">Help Desk</a></li>
      </ul>
    </div>
  </nav>
