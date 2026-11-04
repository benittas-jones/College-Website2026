<?php
/**
 * C.S.I. Ewart Women's Christian College, Melrosapuram
 * Academics - Courses, Departments & Syllabi
 */
require_once __DIR__ . '/includes/db.php';
$pageTitle = "Academics & Degree Programmes | C.S.I. Ewart Women's Christian College";
require_once __DIR__ . '/includes/header.php';
?>

<style>
  .programme-card {
    background: #ffffff;
    border: 1px solid var(--stone-200);
    border-radius: 10px;
    padding: 24px;
    box-shadow: 0 4px 14px rgba(0,0,0,0.04);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
    position: relative;
  }
  .programme-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 24px rgba(0,30,68,0.1);
    border-color: var(--navy);
  }
  .tag-badge {
    display: inline-block;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    padding: 3px 10px;
    border-radius: 4px;
    margin-bottom: 12px;
  }
  .tag-ug {
    background: #e0f2fe;
    color: #0369a1;
    border: 1px solid #bae6fd;
  }
  .tag-pg {
    background: #fef3c7;
    color: #92400e;
    border: 1px solid #fde68a;
  }
  .filter-tabs {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 24px;
  }
  .filter-tab-btn {
    padding: 9px 20px;
    border: 1px solid var(--stone-300);
    background: #ffffff;
    color: var(--stone-700);
    border-radius: 6px;
    font-size: 13.5px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.15s ease;
  }
  .filter-tab-btn:hover, .filter-tab-btn.active {
    background: var(--navy);
    color: #ffffff;
    border-color: var(--navy);
  }
  .course-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    font-size: 12.5px;
    color: var(--stone-500);
    margin: 10px 0 14px 0;
    padding-bottom: 10px;
    border-bottom: 1px dashed var(--stone-200);
  }
  .course-meta span {
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .course-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;
    padding: 10px 16px;
    background: #f8fafc;
    color: var(--navy);
    border: 1px solid var(--stone-300);
    border-radius: 6px;
    font-size: 13px;
    font-weight: 700;
    text-decoration: none;
    transition: all 0.2s ease;
    margin-top: 14px;
  }
  .course-btn:hover {
    background: var(--navy);
    color: #ffffff;
    border-color: var(--navy);
  }
</style>

<div class="page-header">
  <div class="container">
    <h1>Academic Programmes &amp; Courses</h1>
    <p>Affiliated to the University of Madras &bull; Choice-Based Credit System (CBCS)</p>
  </div>
</div>

<div class="container section">

  <!-- Overview Introduction -->
  <div class="mb-4 text-center">
    <span class="sub-heading">Academic Excellence &bull; University of Madras</span>
    <h2 class="serif-title">Undergraduate (UG) &amp; Postgraduate (PG) Degrees</h2>
    <p class="text-muted max-w-2xl mx-auto">
      Empowering young women through need-based, career-oriented education blending scientific rigor, technological skill, and moral values. Select any course below to explore details, syllabus structure, and eligibility.
    </p>
  </div>

  <!-- Filter & Search Controls -->
  <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; margin-bottom: 24px; gap: 14px;">
    <div class="filter-tabs" style="margin-bottom: 0;">
      <button class="filter-tab-btn active" onclick="filterLevel('all', this)">All Programmes (10)</button>
      <button class="filter-tab-btn" onclick="filterLevel('ug', this)">Undergraduate &ndash; UG (7)</button>
      <button class="filter-tab-btn" onclick="filterLevel('pg', this)">Postgraduate &ndash; PG (3)</button>
    </div>
    <div style="flex: 1; max-width: 320px; min-width: 240px;">
      <input type="text" id="courseSearchInput" placeholder="🔍 Search courses or subjects..." onkeyup="filterCourseList()" style="width: 100%; padding: 10px 14px; border: 1px solid var(--stone-300); border-radius: 6px; font-size: 13.5px; outline: none;">
    </div>
  </div>

  <!-- ============================================== -->
  <!-- UNDERGRADUATE COURSES (UG) SECTION             -->
  <!-- ============================================== -->
  <div id="ug-section" class="mb-5">
    <div class="dept-header mb-3" style="background: linear-gradient(90deg, #001E44 0%, #002D62 100%); color: #fff; padding: 14px 20px; border-radius: 8px; border-bottom: 3px solid var(--psu-gold); display: flex; justify-content: space-between; align-items: center;">
      <h3 class="serif-title" style="margin: 0; font-size: 20px; color: #ffffff;">Undergraduate Programmes (UG)</h3>
      <span style="background: rgba(201,151,0,0.25); border: 1px solid var(--psu-gold); color: #ffd857; font-size: 12px; padding: 3px 12px; border-radius: 9999px; font-weight: 700;">7 Courses &bull; 3 Years Each</span>
    </div>

    <div class="grid-3">
      <!-- 1. B.Sc. Computer Science -->
      <div class="programme-card course-item" data-level="ug" id="bsc-cs">
        <div>
          <span class="tag-badge tag-ug">UG Programme</span>
          <span style="font-size: 12px; color: var(--stone-500); font-weight: 600; display: block; margin-bottom: 4px;">Dept. of Computer Science</span>
          <h3 class="serif-title text-navy" style="font-size: 20px; margin: 0 0 6px 0;">B.Sc. Computer Science</h3>
          <div class="course-meta">
            <span>⏱ 3 Years (6 Sem)</span>
            <span>🎓 Affiliated to UNOM</span>
            <span>💻 Lab-Integrated</span>
          </div>
          <p class="text-sm text-stone-600" style="line-height: 1.6; margin-bottom: 12px;">
            Comprehensive software fundamentals including Data Structures, Python, Java, Database Management Systems, Cloud Computing, and AI foundations.
          </p>
        </div>
        <div>
          <a href="course-bsc-cs.html" class="course-btn">
            <span>View Course Details &amp; Syllabus</span>
            <span>&rarr;</span>
          </a>
        </div>
      </div>

      <!-- 2. B.Sc. Home Science Clinical Nutrition and Dietetics -->
      <div class="programme-card course-item" data-level="ug" id="bsc-nutrition">
        <div>
          <span class="tag-badge tag-ug">UG Programme</span>
          <span style="font-size: 12px; color: var(--stone-500); font-weight: 600; display: block; margin-bottom: 4px;">Dept. of Home Science</span>
          <h3 class="serif-title text-navy" style="font-size: 20px; margin: 0 0 6px 0;">B.Sc. Home Science Clinical Nutrition and Dietetics</h3>
          <div class="course-meta">
            <span>⏱ 3 Years (6 Sem)</span>
            <span>🎓 Affiliated to UNOM</span>
            <span>🥗 Clinical Lab</span>
          </div>
          <p class="text-sm text-stone-600" style="line-height: 1.6; margin-bottom: 12px;">
            Specialized science curriculum covering human nutrition, therapeutic diet planning, clinical biochemistry, food microbiology, and hospital internships.
          </p>
        </div>
        <div>
          <a href="course-bsc-nutrition.html" class="course-btn">
            <span>View Course Details &amp; Syllabus</span>
            <span>&rarr;</span>
          </a>
        </div>
      </div>

      <!-- 3. B.Sc. Mathematics -->
      <div class="programme-card course-item" data-level="ug" id="bsc-maths">
        <div>
          <span class="tag-badge tag-ug">UG Programme</span>
          <span style="font-size: 12px; color: var(--stone-500); font-weight: 600; display: block; margin-bottom: 4px;">Dept. of Mathematics</span>
          <h3 class="serif-title text-navy" style="font-size: 20px; margin: 0 0 6px 0;">B.Sc. Mathematics</h3>
          <div class="course-meta">
            <span>⏱ 3 Years (6 Sem)</span>
            <span>🎓 Affiliated to UNOM</span>
            <span>📐 Analytical &amp; Stats</span>
          </div>
          <p class="text-sm text-stone-600" style="line-height: 1.6; margin-bottom: 12px;">
            Rigorous analytical foundation covering Classical Algebra, Real Analysis, Complex Analysis, Differential Equations, Mechanics, Operations Research, and Numerical Methods.
          </p>
        </div>
        <div>
          <a href="course-bsc-maths.html" class="course-btn">
            <span>View Course Details &amp; Syllabus</span>
            <span>&rarr;</span>
          </a>
        </div>
      </div>

      <!-- 4. B.Sc. Microbiology -->
      <div class="programme-card course-item" data-level="ug" id="bsc-microbiology">
        <div>
          <span class="tag-badge tag-ug">UG Programme</span>
          <span style="font-size: 12px; color: var(--stone-500); font-weight: 600; display: block; margin-bottom: 4px;">Dept. of Microbiology</span>
          <h3 class="serif-title text-navy" style="font-size: 20px; margin: 0 0 6px 0;">B.Sc. Microbiology</h3>
          <div class="course-meta">
            <span>⏱ 3 Years (6 Sem)</span>
            <span>🎓 Affiliated to UNOM</span>
            <span>🔬 Wet Lab &amp; Culture</span>
          </div>
          <p class="text-sm text-stone-600" style="line-height: 1.6; margin-bottom: 12px;">
            Biological investigations into Immunology, Medical Bacteriology, Virology, Mycology, Molecular Biology, Genetic Engineering, and Environmental Microbiology.
          </p>
        </div>
        <div>
          <a href="course-bsc-microbiology.html" class="course-btn">
            <span>View Course Details &amp; Syllabus</span>
            <span>&rarr;</span>
          </a>
        </div>
      </div>

      <!-- 5. B.A. English -->
      <div class="programme-card course-item" data-level="ug" id="ba-english">
        <div>
          <span class="tag-badge tag-ug">UG Programme</span>
          <span style="font-size: 12px; color: var(--stone-500); font-weight: 600; display: block; margin-bottom: 4px;">Dept. of English</span>
          <h3 class="serif-title text-navy" style="font-size: 20px; margin: 0 0 6px 0;">B.A. English</h3>
          <div class="course-meta">
            <span>⏱ 3 Years (6 Sem)</span>
            <span>🎓 Affiliated to UNOM</span>
            <span>📚 Literature &amp; Media</span>
          </div>
          <p class="text-sm text-stone-600" style="line-height: 1.6; margin-bottom: 12px;">
            Exploration of British, American, and World Literatures, Indian Writing in English, Literary Criticism, Linguistics, Journalism, and Professional Communication.
          </p>
        </div>
        <div>
          <a href="course-ba-english.html" class="course-btn">
            <span>View Course Details &amp; Syllabus</span>
            <span>&rarr;</span>
          </a>
        </div>
      </div>

      <!-- 6. B.Com -->
      <div class="programme-card course-item" data-level="ug" id="bcom">
        <div>
          <span class="tag-badge tag-ug">UG Programme</span>
          <span style="font-size: 12px; color: var(--stone-500); font-weight: 600; display: block; margin-bottom: 4px;">Dept. of Commerce</span>
          <h3 class="serif-title text-navy" style="font-size: 20px; margin: 0 0 6px 0;">B.Com</h3>
          <div class="course-meta">
            <span>⏱ 3 Years (6 Sem)</span>
            <span>🎓 Affiliated to UNOM</span>
            <span>📊 Finance &amp; Taxation</span>
          </div>
          <p class="text-sm text-stone-600" style="line-height: 1.6; margin-bottom: 12px;">
            Core commerce competencies in Corporate Accounting, Auditing, Financial Management, Direct &amp; Indirect Taxes (GST), Banking Law, and Business Economics.
          </p>
        </div>
        <div>
          <a href="course-bcom.html" class="course-btn">
            <span>View Course Details &amp; Syllabus</span>
            <span>&rarr;</span>
          </a>
        </div>
      </div>

      <!-- 7. B.Com. ISM -->
      <div class="programme-card course-item" data-level="ug" id="bcom-ism">
        <div>
          <span class="tag-badge tag-ug">UG Programme</span>
          <span style="font-size: 12px; color: var(--stone-500); font-weight: 600; display: block; margin-bottom: 4px;">Dept. of Commerce &ndash; ISM</span>
          <h3 class="serif-title text-navy" style="font-size: 20px; margin: 0 0 6px 0;">B.Com. ISM (Information Systems Management)</h3>
          <div class="course-meta">
            <span>⏱ 3 Years (6 Sem)</span>
            <span>🎓 Affiliated to UNOM</span>
            <span>💻 Business IT Integration</span>
          </div>
          <p class="text-sm text-stone-600" style="line-height: 1.6; margin-bottom: 12px;">
            High-demand hybrid blending financial accounting and commerce with Enterprise Resource Planning (ERP), E-Commerce, Database Management, and Business Analytics.
          </p>
        </div>
        <div>
          <a href="course-bcom-ism.html" class="course-btn">
            <span>View Course Details &amp; Syllabus</span>
            <span>&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- ============================================== -->
  <!-- POSTGRADUATE COURSES (PG) SECTION              -->
  <!-- ============================================== -->
  <div id="pg-section" class="mb-5">
    <div class="dept-header mb-3" style="background: linear-gradient(90deg, #5c068c 0%, #001E44 100%); color: #fff; padding: 14px 20px; border-radius: 8px; border-bottom: 3px solid var(--psu-gold); display: flex; justify-content: space-between; align-items: center;">
      <h3 class="serif-title" style="margin: 0; font-size: 20px; color: #ffffff;">Postgraduate Programmes (PG)</h3>
      <span style="background: rgba(201,151,0,0.25); border: 1px solid var(--psu-gold); color: #ffd857; font-size: 12px; padding: 3px 12px; border-radius: 9999px; font-weight: 700;">3 Master Degrees &bull; 2 Years Each</span>
    </div>

    <div class="grid-3">
      <!-- 8. M.A. English -->
      <div class="programme-card course-item" data-level="pg" id="ma-english">
        <div>
          <span class="tag-badge tag-pg">PG Programme</span>
          <span style="font-size: 12px; color: var(--stone-500); font-weight: 600; display: block; margin-bottom: 4px;">Dept. of English (PG Division)</span>
          <h3 class="serif-title text-navy" style="font-size: 20px; margin: 0 0 6px 0;">M.A. English</h3>
          <div class="course-meta">
            <span>⏱ 2 Years (4 Sem)</span>
            <span>🎓 Affiliated to UNOM</span>
            <span>🖋 Research &amp; Dissertation</span>
          </div>
          <p class="text-sm text-stone-600" style="line-height: 1.6; margin-bottom: 12px;">
            Advanced literary scholarship focusing on Critical Theory, Post-Colonial and Gender Studies, Translation Studies, Subaltern Literature, and Master's Dissertation.
          </p>
        </div>
        <div>
          <a href="course-ma-english.html" class="course-btn">
            <span>View Course Details &amp; Syllabus</span>
            <span>&rarr;</span>
          </a>
        </div>
      </div>

      <!-- 9. M.Com. -->
      <div class="programme-card course-item" data-level="pg" id="mcom">
        <div>
          <span class="tag-badge tag-pg">PG Programme</span>
          <span style="font-size: 12px; color: var(--stone-500); font-weight: 600; display: block; margin-bottom: 4px;">Dept. of Commerce (PG Division)</span>
          <h3 class="serif-title text-navy" style="font-size: 20px; margin: 0 0 6px 0;">M.Com. (Master of Commerce)</h3>
          <div class="course-meta">
            <span>⏱ 2 Years (4 Sem)</span>
            <span>🎓 Affiliated to UNOM</span>
            <span>📈 Corporate Finance</span>
          </div>
          <p class="text-sm text-stone-600" style="line-height: 1.6; margin-bottom: 12px;">
            Mastery of Strategic Financial Management, Advanced Accounting, Security Analysis &amp; Portfolio Management, International Business, Quantitative Methods, and Research.
          </p>
        </div>
        <div>
          <a href="course-mcom.html" class="course-btn">
            <span>View Course Details &amp; Syllabus</span>
            <span>&rarr;</span>
          </a>
        </div>
      </div>

      <!-- 10. M.S.W -->
      <div class="programme-card course-item" data-level="pg" id="msw">
        <div>
          <span class="tag-badge tag-pg">PG Programme</span>
          <span style="font-size: 12px; color: var(--stone-500); font-weight: 600; display: block; margin-bottom: 4px;">Dept. of Social Work</span>
          <h3 class="serif-title text-navy" style="font-size: 20px; margin: 0 0 6px 0;">M.S.W. (Master of Social Work)</h3>
          <div class="course-meta">
            <span>⏱ 2 Years (4 Sem)</span>
            <span>🎓 Affiliated to UNOM</span>
            <span>🤝 Concurrent Field Work</span>
          </div>
          <p class="text-sm text-stone-600" style="line-height: 1.6; margin-bottom: 12px;">
            Professional social work training in Community Development, Human Resource Management, Medical &amp; Psychiatric Social Work, Social Policy, and NGO Field Practicum.
          </p>
        </div>
        <div>
          <a href="course-msw.html" class="course-btn">
            <span>View Course Details &amp; Syllabus</span>
            <span>&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- Academic Features Banner -->
  <div class="p-4 bg-light border rounded mt-4" style="border-left: 4px solid var(--navy);">
    <h3 class="serif-title text-navy" style="font-size: 20px;">Affiliation &amp; CBCS Framework</h3>
    <p class="text-sm mt-2" style="line-height: 1.7; color: var(--stone-700);">
      All undergraduate and postgraduate programmes at C.S.I. Ewart Women's Christian College adhere to the curriculum and credit structure prescribed by the <strong>University of Madras</strong> under the <strong>Choice-Based Credit System (CBCS)</strong>. Students earn core course credits, non-major electives, skill-based certificates, value education, and extension service credits (NSS, YRC, RRC).
    </p>
    <div class="mt-3">
      <a href="faculty.php" class="btn btn-secondary btn-sm">Meet Our Qualified Faculty &rarr;</a>
    </div>
  </div>

</div>

<script>
  function filterLevel(levelKey, btnElement) {
    const items = document.querySelectorAll('.course-item');
    const tabs = document.querySelectorAll('.filter-tab-btn');
    const ugSection = document.getElementById('ug-section');
    const pgSection = document.getElementById('pg-section');

    tabs.forEach(t => t.classList.remove('active'));
    if (btnElement) btnElement.classList.add('active');

    if (levelKey === 'all') {
      ugSection.style.display = 'block';
      pgSection.style.display = 'block';
      items.forEach(item => item.style.display = 'flex');
    } else if (levelKey === 'ug') {
      ugSection.style.display = 'block';
      pgSection.style.display = 'none';
      items.forEach(item => {
        item.style.display = (item.getAttribute('data-level') === 'ug') ? 'flex' : 'none';
      });
    } else if (levelKey === 'pg') {
      ugSection.style.display = 'none';
      pgSection.style.display = 'block';
      items.forEach(item => {
        item.style.display = (item.getAttribute('data-level') === 'pg') ? 'flex' : 'none';
      });
    }
  }

  function filterCourseList() {
    const query = document.getElementById('courseSearchInput').value.toLowerCase().trim();
    const items = document.querySelectorAll('.course-item');
    let ugVisible = false;
    let pgVisible = false;

    items.forEach(item => {
      const text = item.innerText.toLowerCase();
      if (text.includes(query)) {
        item.style.display = 'flex';
        if (item.getAttribute('data-level') === 'ug') ugVisible = true;
        if (item.getAttribute('data-level') === 'pg') pgVisible = true;
      } else {
        item.style.display = 'none';
      }
    });

    document.getElementById('ug-section').style.display = (ugVisible || query === '') ? 'block' : 'none';
    document.getElementById('pg-section').style.display = (pgVisible || query === '') ? 'block' : 'none';
  }
</script>

<?php require_once __DIR__ . '/includes/footer.php'; ?>
