<?php
/**
 * C.S.I. Ewart Women's Christian College
 * About Us Page in Vanilla PHP
 */
require_once __DIR__ . '/includes/db.php';
$section = isset($_GET['section']) ? trim($_GET['section']) : 'founder';
$pageTitle = "About Us | C.S.I. Ewart Women's Christian College";
require_once __DIR__ . '/includes/header.php';
?>

  <!-- Page Header -->
  <div class="page-header">
    <div class="container">
      <h1>About C.S.I. Ewart Women's Christian College</h1>
      <p>Affiliated to the University of Madras &bull; Melrosapuram Campus</p>
      <div class="sub-nav-tabs">
        <a href="about.php?section=founder" class="<?php echo ($section === 'founder') ? 'active' : ''; ?>">Founder &amp; his Vision</a>
        <a href="about.php?section=leadership" class="<?php echo ($section === 'leadership') ? 'active' : ''; ?>">Our Leadership</a>
        <a href="about.php?section=history" class="<?php echo ($section === 'history') ? 'active' : ''; ?>">History of Ewart</a>
        <a href="about.php?section=mission" class="<?php echo ($section === 'mission') ? 'active' : ''; ?>">Mission Statement</a>
        <a href="about.php?section=quality" class="<?php echo ($section === 'quality') ? 'active' : ''; ?>">Quality Policy</a>
        <a href="about.php?section=faith" class="<?php echo ($section === 'faith') ? 'active' : ''; ?>">Faith &amp; Heritage</a>
        <a href="about.php?section=governing" class="<?php echo ($section === 'governing') ? 'active' : ''; ?>">Governing Body</a>
      </div>
    </div>
  </div>

  <div class="container section">

    <?php if ($section === 'founder'): ?>
    <!-- 1. FOUNDER & HIS VISION -->
    <article class="p-4 bg-white rounded shadow-sm border mb-4">
      <div class="grid-2 align-center mb-4">
        <div class="text-center">
          <img src="/assets/aistudio/The_Rt._Rev._Dr._Masilamani_Azariah_1918cc33.png" alt="The Rt. Rev. Dr. Masilamani Azariah" class="portrait-large shadow-md">
          <div class="caption-card">
            <strong>The Rt. Rev. Dr. Masilamani Azariah</strong>
            <span>Bishop of Madras &amp; Founder</span>
          </div>
        </div>
        <div>
          <span class="sub-heading">Founder Thoughts</span>
          <h2 class="serif-title">&ldquo;Faith is the assurance of things hoped for...&rdquo;</h2>
          <blockquote class="founder-quote">
            &ldquo;Faith is the assurance of things hoped for, the conviction of things not seen.&rdquo; &mdash; (Hebrews 11:1)
          </blockquote>
          <p>
            The power of positive thinking is reflected in the verse above, taken from the Good Word. Ideas and dreams begin small as a mustard seed but they grow to great heights and proportions, when nurtured by daring faith and hard industry.
          </p>
          <p class="mt-2">
            The Ewart Women&rsquo;s Christian College is one such dream that was born into existence through faith, nurtured by the Church of South India and the good will of many. The College is now 27 years with many achievements, and happy memories in spite of trials and tribulations.
          </p>
        </div>
      </div>

      <div class="p-3 bg-light rounded border-left-navy mb-3">
        <h3 class="serif-title text-navy">&ldquo;The journey of a thousand miles begins with the first step.&rdquo;</h3>
        <p>
          The liberation of women, the challenge against gender discrimination and the grooming of young women to be good future citizens of this great land, to become serving, caring and sharing world class citizens are some of the aims of Ewart Women&rsquo;s Christian College.
        </p>
      </div>

      <div class="poem-banner text-center p-3">
        <h4 class="sub-heading">A few lines as expressed by our founder</h4>
        <div class="poem-lines">
          <p>&ldquo;If you think you are beaten &ndash; you are</p>
          <p>It&rsquo;s all in the state of mind</p>
          <p>Sooner or later, the man that wins</p>
          <p>Is the one who thinks he can&rdquo;</p>
        </div>
      </div>
    </article>

    <?php elseif ($section === 'leadership'): ?>
    <!-- 2. OUR LEADERSHIP -->
    <article class="p-4 bg-white rounded shadow-sm border mb-4">
      <div class="text-center mb-4">
        <span class="sub-heading">Executive Management</span>
        <h2 class="serif-title">Our Leadership</h2>
        <p class="text-muted">Click on any image to enlarge in portrait format</p>
      </div>

      <div class="grid-4">
        <div class="leader-card">
          <div class="leader-img-container" onclick="openPortraitModal('/assets/aistudio/Bishop_7834f61c.jpg', 'Rt. Rev. Dr. Paul Francis Ravichandran', 'Bishop, CSI Diocese of Madras & College Chairman')">
            <img src="/assets/aistudio/Bishop_7834f61c.jpg" alt="Rt. Rev. Dr. Paul Francis Ravichandran" class="leader-img">
            <span class="click-enlarge-badge">Click to enlarge</span>
          </div>
          <h3 class="leader-name">Rt. Rev. Dr. Paul Francis Ravichandran</h3>
          <p class="leader-designation">Bishop, CSI Diocese of Madras &amp; College Chairman</p>
        </div>

        <div class="leader-card">
          <div class="leader-img-container" onclick="openPortraitModal('/assets/aistudio/Director_fd882dce.jpg', 'Dr. S.D. Christopher Chandran', 'Director, Dept. of College Education')">
            <img src="/assets/aistudio/Director_fd882dce.jpg" alt="Dr. S.D. Christopher Chandran" class="leader-img">
            <span class="click-enlarge-badge">Click to enlarge</span>
          </div>
          <h3 class="leader-name">Dr. S.D. Christopher Chandran</h3>
          <p class="leader-designation">Director, Dept. of College Education</p>
        </div>

        <div class="leader-card">
          <div class="leader-img-container" onclick="openPortraitModal('/assets/aistudio/College_Secretary_7e57128a.jpg', 'Dr. P. David Prabhakar', 'College Secretary')">
            <img src="/assets/aistudio/College_Secretary_7e57128a.jpg" alt="Dr. P. David Prabhakar" class="leader-img">
            <span class="click-enlarge-badge">Click to enlarge</span>
          </div>
          <h3 class="leader-name">Dr. P. David Prabhakar</h3>
          <p class="leader-designation">College Secretary</p>
        </div>

        <div class="leader-card">
          <div class="leader-img-container" onclick="openPortraitModal('/assets/aistudio/Principal_922aeb90.JPG', 'Dr. S. Florence Vijila', 'Principal')">
            <img src="/assets/aistudio/Principal_922aeb90.JPG" alt="Dr. S. Florence Vijila" class="leader-img">
            <span class="click-enlarge-badge">Click to enlarge</span>
          </div>
          <h3 class="leader-name">Dr. S. Florence Vijila</h3>
          <p class="leader-designation">Principal</p>
        </div>
      </div>
    </article>

    <?php elseif ($section === 'history'): ?>
    <!-- 3. HISTORY OF EWART -->
    <article class="p-4 bg-white rounded shadow-sm border mb-4">
      <div class="text-center mb-4">
        <span class="sub-heading">Legacy Since 1997</span>
        <h2 class="serif-title">A Brief History of C.S.I. Ewart Women&rsquo;s Christian College</h2>
      </div>

      <div class="grid-2 align-center mb-4">
        <div>
          <p>
            The Madras Diocese of the Church of South India founded the C.S.I. Ewart Women&rsquo;s Christian College in 1997. Rev. Sandy MacDonald, Moderator of the Church of Scotland declared the College open on 29th September 1997.
          </p>
          <p class="mt-2">
            The Rt. Rev. Dr. Masilamani Azariah, Bishop of Madras inaugurated the College in its first location at C.S.I. Ewart Girl&rsquo;s Higher Secondary School, Purasawalkam on 31st October 1997. Dr. R. Premila Chandrasekaran was the first Principal. Mrs. Ahalya Williams served as Vice-Principal. 11 faculty, 10 non-teaching staff members and 29 students were the pioneering group to form the College.
          </p>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80" alt="History" class="rounded shadow-sm">
        </div>
      </div>

      <div class="grid-2 align-center mb-4">
        <div>
          <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80" alt="Melrosapuram Campus" class="rounded shadow-sm">
        </div>
        <div>
          <h3 class="serif-title text-navy">Move to Melrosapuram (June 2001)</h3>
          <p>
            Bishop M. Azariah was inspired to establish the College to provide higher education for rural young women, especially from the villages in Madras Diocese. His vision was to embody inclusive, accessible education to those who need to access the opportunities.
          </p>
          <p class="mt-2">
            Ewart College moved to Melrosapuram in June 2001 with 11 acres of open space to enjoy. The beautiful spacious College buildings were designed by Architect Jayakar and funded mainly by Madras Diocesan Schools, C.S.I. Melrosapuram High School and the C.S.I. Rural Community College.
          </p>
        </div>
      </div>

      <div class="p-3 bg-light rounded mb-3">
        <h4 class="serif-title text-navy">Rev. Adam Andrew &amp; 1893 Historical Association</h4>
        <p>
          Melrosapuram has a long history of association with education. This village was established as a Christian settlement in 1893 by the Church of Scotland missionary Rev. Adam Andrew. Andrew established a school to teach young students from several villages and also offered skills development training in the vast and productive agricultural field.
        </p>
      </div>
    </article>

    <?php elseif ($section === 'mission'): ?>
    <!-- 4. MISSION STATEMENT -->
    <article class="p-4 bg-white rounded shadow-sm border mb-4">
      <div class="text-center mb-4">
        <span class="sub-heading">Foundational Purpose</span>
        <h2 class="serif-title">College Mission Statement</h2>
      </div>

      <div class="p-3 bg-light rounded border-left-navy mb-4">
        <p class="lead-text font-serif italic">
          C.S.I. Ewart Women’s Christian College is founded on faith in the Triune God and draws its inspiration from the Bible and the life and example of Jesus Christ for its ministry of education. Nurtured by eternal Christian values, the College aims to train young women to be serving, caring and sharing citizens of our great land and the world at large.
        </p>
      </div>

      <div class="grid-2 align-center mb-4">
        <div>
          <h3 class="serif-title text-navy">Priority &amp; Liberation of Women</h3>
          <p>
            The priority of the College is the education of poor, oppressed and less privileged women, especially village women, to provide them opportunities for a fuller life. The College is committed to the liberation of women and training them to meet all challenges of gender and other forms of discrimination.
          </p>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80" alt="Inclusive Education" class="rounded shadow-sm">
        </div>
      </div>
    </article>

    <?php elseif ($section === 'quality'): ?>
    <article class="p-4 bg-white rounded shadow-sm border mb-4">
      <h2 class="serif-title text-navy">Quality Policy</h2>
      <p class="mt-2">
        C.S.I. Ewart Women's Christian College commits to imparting value-based quality education to women, augmenting experiential learning through state-of-the-art facilities, continuous faculty development, and regular IQAC academic audits.
      </p>
    </article>

    <?php elseif ($section === 'faith'): ?>
    <article class="p-4 bg-white rounded shadow-sm border mb-4">
      <h2 class="serif-title text-navy">Faith and Heritage</h2>
      <p class="mt-2">
        Administered by the CSI Diocese of Madras, spiritual life is central to our ethos. Daily morning devotion, chapel services, and the college motto &ldquo;Love and Serve&rdquo; mold young women into principled leaders for church and society.
      </p>
    </article>

    <?php elseif ($section === 'governing'): ?>
    <article class="p-4 bg-white rounded shadow-sm border mb-4">
      <h2 class="serif-title text-navy">Governing Body</h2>
      <table class="table mt-3">
        <thead>
          <tr><th>Role</th><th>Representative</th><th>Designation</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>College Chairman</strong></td><td>Rt. Rev. Dr. Paul Francis Ravichandran</td><td>Bishop, CSI Diocese of Madras</td></tr>
          <tr><td><strong>Director</strong></td><td>Dr. S.D. Christopher Chandran</td><td>Director, Dept. of College Education</td></tr>
          <tr><td><strong>College Secretary</strong></td><td>Dr. P. David Prabhakar</td><td>College Secretary</td></tr>
          <tr><td><strong>Principal</strong></td><td>Dr. S. Florence Vijila</td><td>Principal</td></tr>
        </tbody>
      </table>
    </article>
    <?php endif; ?>

  </div>

<?php require_once __DIR__ . '/includes/footer.php'; ?>
