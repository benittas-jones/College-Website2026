<?php
/**
 * C.S.I. Ewart Women's Christian College, Melrosapuram
 * Affiliated to the University of Madras
 * Main Homepage - Vanilla PHP & Semantic HTML5
 */
require_once __DIR__ . '/includes/db.php';
$pageTitle = "Home | C.S.I. Ewart Women's Christian College";
require_once __DIR__ . '/includes/header.php';
?>

<!-- Hero Banner Section -->
<section class="hero-banner">
    <div class="hero-overlay"></div>
    <div class="container hero-content">
        <span class="hero-badge">Est. 1997 &bull; 27+ Years of Academic Excellence</span>
        <h1>Empowering Rural Women Through Faith, Knowledge &amp; Service</h1>
        <p class="hero-lead">
            &ldquo;Faith is the assurance of things hoped for, the conviction of things not seen.&rdquo; &mdash; Hebrews 11:1
        </p>
        <div class="hero-actions">
            <a href="admissions.php" class="btn btn-primary">Apply for Admissions 2026</a>
            <a href="about.php?section=founder" class="btn btn-outline">Founder &amp; His Vision</a>
            <a href="about.php?section=history" class="btn btn-outline">History of Ewart</a>
        </div>
    </div>
</section>

<!-- Latest Circulars & News Bar -->
<div class="news-ticker-bar">
    <div class="container ticker-flex">
        <span class="ticker-label"><i class="icon-bell"></i> Circulars:</span>
        <div class="ticker-text">
            <span>&bull; Admissions Open for 2026-2027: B.Sc Computer Science, BCA, B.Com, BBA, B.A. &amp; M.A. English Literature, M.Com.</span>
            <span>&bull; Semester Examination Marksheets are now published online in the Examinations Portal.</span>
        </div>
    </div>
</div>

<!-- Institutional Key Metrics -->
<section class="section metrics-section">
    <div class="container grid-4">
        <div class="metric-card">
            <span class="metric-number">27+</span>
            <span class="metric-title">Years of Legacy</span>
            <p>Founded in 1997 by the CSI Diocese of Madras to liberate women.</p>
        </div>
        <div class="metric-card">
            <span class="metric-number">11</span>
            <span class="metric-title">Acres Campus</span>
            <p>Lush green campus in Melrosapuram designed by Architect Jayakar.</p>
        </div>
        <div class="metric-card">
            <span class="metric-number">100%</span>
            <span class="metric-title">Women Dedicated</span>
            <p>Education, hostel, sports, and research centres for young women.</p>
        </div>
        <div class="metric-card">
            <span class="metric-number">6</span>
            <span class="metric-title">Specialized Centres</span>
            <p>Women's Studies, HRD, Career, Innovation, CDR &amp; Entrepreneurship.</p>
        </div>
    </div>
</section>

<!-- Founder & Vision Highlight Section -->
<section class="section founder-teaser-section">
    <div class="container">
        <div class="grid-2 align-center">
            <div class="founder-image-box">
                <img src="/assets/aistudio/The_Rt._Rev._Dr._Masilamani_Azariah_1918cc33.png" alt="The Rt. Rev. Dr. Masilamani Azariah" class="portrait-img shadow-lg">
                <div class="caption-card">
                    <strong>The Rt. Rev. Dr. Masilamani Azariah</strong>
                    <span>Bishop of Madras &amp; Founder</span>
                </div>
            </div>
            <div class="founder-text-box">
                <span class="sub-heading">Founder &amp; His Vision</span>
                <h2 class="serif-title">Nurtured by Daring Faith &amp; Hard Industry</h2>
                <blockquote class="founder-quote">
                    &ldquo;Faith is the assurance of things hoped for, the conviction of things not seen.&rdquo; <cite>&mdash; Hebrews 11:1</cite>
                </blockquote>
                <p>
                    Ideas and dreams begin small as a mustard seed but they grow to great heights and proportions, when nurtured by daring faith and hard industry.
                </p>
                <p>
                    The Ewart Women&rsquo;s Christian College is one such dream that was born into existence through faith, nurtured by the Church of South India and the good will of many.
                </p>
                <div class="poem-banner">
                    <p class="poem-line">&ldquo;If you think you are beaten &ndash; you are</p>
                    <p class="poem-line">It&rsquo;s all in the state of mind</p>
                    <p class="poem-line">Sooner or later, the man that wins</p>
                    <p class="poem-line">Is the one who thinks he can&rdquo;</p>
                </div>
                <div class="pt-3">
                    <a href="about.php?section=founder" class="btn btn-secondary">Read Founder Thoughts &rarr;</a>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- College Leadership Gallery Preview -->
<section class="section leadership-preview-section bg-light">
    <div class="container text-center">
        <span class="sub-heading">Governance &amp; Administration</span>
        <h2 class="serif-title">Our Leadership</h2>
        <p class="section-lead">Guiding C.S.I. Ewart Women's Christian College with vision, academic excellence and Christian values.</p>
        
        <div class="grid-4 mt-4">
            <!-- 1. Bishop & Chairman -->
            <div class="leader-card">
                <div class="leader-img-container" onclick="openPortraitModal('/assets/aistudio/Bishop_7834f61c.jpg', 'Rt. Rev. Dr. Paul Francis Ravichandran', 'Bishop, CSI Diocese of Madras & College Chairman')">
                    <img src="/assets/aistudio/Bishop_7834f61c.jpg" alt="Rt. Rev. Dr. Paul Francis Ravichandran" class="leader-img">
                    <span class="click-enlarge-badge">Click to enlarge</span>
                </div>
                <h3 class="leader-name">Rt. Rev. Dr. Paul Francis Ravichandran</h3>
                <p class="leader-role">Bishop, CSI Diocese of Madras &amp; College Chairman</p>
            </div>

            <!-- 2. Director -->
            <div class="leader-card">
                <div class="leader-img-container" onclick="openPortraitModal('/assets/aistudio/Director_fd882dce.jpg', 'Dr. S.D. Christopher Chandran', 'Director, Dept. of College Education')">
                    <img src="/assets/aistudio/Director_fd882dce.jpg" alt="Dr. S.D. Christopher Chandran" class="leader-img">
                    <span class="click-enlarge-badge">Click to enlarge</span>
                </div>
                <h3 class="leader-name">Dr. S.D. Christopher Chandran</h3>
                <p class="leader-role">Director, Dept. of College Education</p>
            </div>

            <!-- 3. College Secretary -->
            <div class="leader-card">
                <div class="leader-img-container" onclick="openPortraitModal('/assets/aistudio/College_Secretary_7e57128a.jpg', 'Dr. P. David Prabhakar', 'College Secretary')">
                    <img src="/assets/aistudio/College_Secretary_7e57128a.jpg" alt="Dr. P. David Prabhakar" class="leader-img">
                    <span class="click-enlarge-badge">Click to enlarge</span>
                </div>
                <h3 class="leader-name">Dr. P. David Prabhakar</h3>
                <p class="leader-role">College Secretary</p>
            </div>

            <!-- 4. Principal -->
            <div class="leader-card">
                <div class="leader-img-container" onclick="openPortraitModal('/assets/aistudio/Principal_922aeb90.JPG', 'Dr. S. Florence Vijila', 'Principal')">
                    <img src="/assets/aistudio/Principal_922aeb90.JPG" alt="Dr. S. Florence Vijila" class="leader-img">
                    <span class="click-enlarge-badge">Click to enlarge</span>
                </div>
                <h3 class="leader-name">Dr. S. Florence Vijila</h3>
                <p class="leader-role">Principal</p>
            </div>
        </div>

        <div class="text-center mt-4">
            <a href="about.php?section=leadership" class="btn btn-secondary">View Full Leadership Profile &rarr;</a>
        </div>
    </div>
</section>

<!-- Academic Programs Grid -->
<section class="section academics-overview">
    <div class="container">
        <div class="text-center">
            <span class="sub-heading">University of Madras Affiliated Programs</span>
            <h2 class="serif-title">Undergraduate &amp; Postgraduate Courses</h2>
            <p class="section-lead">Career-oriented degrees designed for women's professional leadership and nation-building.</p>
        </div>
        
        <div class="grid-3 mt-4">
            <div class="program-card">
                <div class="program-badge">UG &bull; 3 Years</div>
                <h3>B.Sc Computer Science &amp; BCA</h3>
                <p>Equipping female engineers with full-stack programming, web design, PHP, databases, Python and cloud systems.</p>
                <a href="academics.php" class="link-arrow">Course Details &rarr;</a>
            </div>
            <div class="program-card">
                <div class="program-badge">UG &bull; 3 Years</div>
                <h3>B.Com (General &amp; Corporate Secretaryship)</h3>
                <p>Corporate financial accounting, commercial law, banking practices, auditing, and corporate secretarial training.</p>
                <a href="academics.php" class="link-arrow">Course Details &rarr;</a>
            </div>
            <div class="program-card">
                <div class="program-badge">UG &amp; PG &bull; Higher Studies</div>
                <h3>B.A. &amp; M.A. English Literature</h3>
                <p>Literary analysis, creative writing, linguistics, journalistic communication, and post-graduate research.</p>
                <a href="academics.php" class="link-arrow">Course Details &rarr;</a>
            </div>
        </div>
    </div>
</section>

<?php require_once __DIR__ . '/includes/footer.php'; ?>
