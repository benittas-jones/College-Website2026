<?php
/**
 * C.S.I. Ewart Women's Christian College, Melrosapuram
 * About Us Page in Pure Vanilla PHP
 */
require_once __DIR__ . '/includes/db.php';
$section = isset($_GET['section']) ? trim($_GET['section']) : 'all';
$pageTitle = "About Us | C.S.I. Ewart Women's Christian College";
require_once __DIR__ . '/includes/header.php';
?>

  <!-- Page Header -->
  <div class="page-header">
    <div class="container">
      <h1>About C.S.I. Ewart Women's Christian College</h1>
      <p>Affiliated to the University of Madras &bull; Melrosapuram Campus</p>
      <div class="sub-nav-tabs">
        <a href="about.php?section=all" class="<?php echo ($section === 'all') ? 'active' : ''; ?>">All Sections</a>
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

    <?php if ($section === 'all' || $section === 'founder'): ?>
    <!-- 1. FOUNDER & HIS VISION -->
    <article id="founder" class="p-4 bg-white rounded shadow-sm border mb-4">
      <div class="grid-2 align-center mb-4">
        <div class="text-center">
          <img src="/assets/aistudio/The_Rt._Rev._Dr._Masilamani_Azariah_1918cc33.png" alt="The Rt. Rev. Dr. Masilamani Azariah" class="portrait-large shadow-md">
          <div class="caption-card mt-2">
            <strong>The Rt. Rev. Dr. Masilamani Azariah</strong><br>
            <span class="text-muted">Bishop of Madras &amp; Founder</span>
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
        <p class="mt-2">
          The liberation of women, the challenge against gender discrimination and the grooming of young women to be good future citizens of this great land, to become serving, caring and sharing world class citizens are some of the aims of Ewart Women&rsquo;s Christian College.
        </p>
      </div>

      <div class="poem-banner text-center p-3">
        <h4 class="sub-heading">A few lines as expressed by our founder</h4>
        <div class="poem-lines mt-2">
          <p>&ldquo;If you think you are beaten &ndash; you are</p>
          <p>It&rsquo;s all in the state of mind</p>
          <p>Sooner or later, the man that wins</p>
          <p>Is the one who thinks he can&rdquo;</p>
        </div>
      </div>
    </article>
    <?php endif; ?>

    <?php if ($section === 'all' || $section === 'leadership'): ?>
    <!-- 2. OUR LEADERSHIP -->
    <article id="leadership" class="p-4 bg-white rounded shadow-sm border mb-4">
      <div class="text-center mb-4">
        <span class="sub-heading">Executive Management</span>
        <h2 class="serif-title">Our Leadership</h2>
        <p class="text-muted">Click on any image to enlarge in portrait format</p>
      </div>

      <div class="grid-4">
        <!-- Bishop -->
        <div class="leader-card">
          <div class="leader-img-container" onclick="openPortraitModal('/assets/aistudio/Bishop_7834f61c.jpg', 'Rt. Rev. Dr. Paul Francis Ravichandran', 'Bishop, CSI Diocese of Madras & College Chairman')">
            <img src="/assets/aistudio/Bishop_7834f61c.jpg" alt="Rt. Rev. Dr. Paul Francis Ravichandran" class="leader-img">
            <span class="click-enlarge-badge">Click to enlarge</span>
          </div>
          <h3 class="leader-name">Rt. Rev. Dr. Paul Francis Ravichandran</h3>
          <p class="leader-designation">Bishop, CSI Diocese of Madras &amp; College Chairman</p>
        </div>

        <!-- Director -->
        <div class="leader-card">
          <div class="leader-img-container" onclick="openPortraitModal('/assets/aistudio/Director_fd882dce.jpg', 'Dr. S.D. Christopher Chandran', 'Director, Dept. of College Education')">
            <img src="/assets/aistudio/Director_fd882dce.jpg" alt="Dr. S.D. Christopher Chandran" class="leader-img">
            <span class="click-enlarge-badge">Click to enlarge</span>
          </div>
          <h3 class="leader-name">Dr. S.D. Christopher Chandran</h3>
          <p class="leader-designation">Director, Dept. of College Education</p>
        </div>

        <!-- Secretary -->
        <div class="leader-card">
          <div class="leader-img-container" onclick="openPortraitModal('/assets/aistudio/College_Secretary_7e57128a.jpg', 'Dr. P. David Prabhakar', 'College Secretary')">
            <img src="/assets/aistudio/College_Secretary_7e57128a.jpg" alt="Dr. P. David Prabhakar" class="leader-img">
            <span class="click-enlarge-badge">Click to enlarge</span>
          </div>
          <h3 class="leader-name">Dr. P. David Prabhakar</h3>
          <p class="leader-designation">College Secretary</p>
        </div>

        <!-- Principal -->
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
    <?php endif; ?>

    <?php if ($section === 'all' || $section === 'history'): ?>
    <!-- 3. HISTORY OF EWART -->
    <article id="history" class="p-4 bg-white rounded shadow-sm border mb-4">
      <div class="text-center mb-4">
        <span class="sub-heading">Legacy Since 1997</span>
        <h2 class="serif-title">A Brief History of C.S.I. Ewart Women&rsquo;s Christian College</h2>
      </div>

      <div class="grid-2 align-center mb-4">
        <div>
          <p>
            The Madras Diocese of the Church of South India founded the C.S.I. Ewart Women&rsquo;s Christian College in 1997. Rev. Sandy MacDonald, Moderator of the Church of Scotland declared the College open on 29th September 1997. The Rt. Rev. Dr. Masilamani Azariah, Bishop of Madras inaugurated the College in its first location at C.S.I. Ewart Girl&rsquo;s Higher Secondary School, Purasawalkam on 31st October 1997.
          </p>
          <p class="mt-2">
            Dr. R. Premila Chandrasekaran was the first Principal. Mrs. Ahalya Williams served as Vice-Principal. 11 faculty, 10 non-teaching staff members and 29 students were the pioneering group to form the College. Dr. S. Augustine Chellappa and Prof. S. David served as Correspondent of the College in the early years.
          </p>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80" alt="Inaugural Foundation" class="rounded shadow-sm">
        </div>
      </div>

      <div class="grid-2 align-center mb-4">
        <div>
          <img src="/assets/aistudio/s-2_cd6ad4c7.jpeg" alt="C.S.I. Ewart Women's Christian College Melrosapuram Entrance Wall" class="rounded shadow-sm" style="width: 100%; height: auto; object-fit: cover; border: 1px solid var(--stone-200);">
        </div>
        <div>
          <h3 class="serif-title text-navy">Move to Melrosapuram (June 2001)</h3>
          <p class="mt-2">
            Bishop M. Azariah was inspired to establish the College to provide higher education for rural young women, especially from the villages in Madras Diocese. His vision was to embody inclusive, accessible education to those who need to access the opportunities.
          </p>
          <p class="mt-2">
            Ewart College moved to Melrosapuram in June 2001 with 11 acres of open space to enjoy. The beautiful spacious College buildings were designed by Architect Jayakar and funded mainly by Madras Diocesan Schools, C.S.I. Melrosapuram High School and the C.S.I. Rural Community College. The College offers Higher Education that transforms the lives of the people.
          </p>
        </div>
      </div>

      <div class="p-3 bg-light rounded mb-3 border-left-navy">
        <h4 class="serif-title text-navy">Rev. Adam Andrew &amp; Historical Association (1893)</h4>
        <p class="mt-2">
          Melrosapuram has a long history of association with education. This village was established as a Christian settlement in 1893 by the Church of Scotland missionary Rev. Adam Andrew. Andrew established a school to teach young students from several villages and also offered skills development training in the vast and productive agricultural field. Education was dear to Andrew and his wife Elizabeth so they established many village schools for boys and girls. They knew that education was the most important avenue of progress for the rural and poor students, especially for girl students.
        </p>
        <p class="mt-2">
          When the Ewart College was started academic courses that have potential for a productive career were selected with a view to serving the needs of the youth and the country. At a time when women's education is being encouraged in India and the world as the most sound investment to help people and countries develop, C.S.I. Ewart Women’s Christian College is fulfilling its role to liberate women and improve lives.
        </p>
      </div>

      <div class="grid-2 align-center mb-3">
        <div>
          <h4 class="serif-title text-navy">PG Expansion &amp; Specialized Centres</h4>
          <p class="mt-2">
            The Internal Quality Assurance Cell (IQAC), since its inception in 2015 acts as a nodal unit of the Institution, augmenting quality in academic and administrative activities. The Placement cell is the effective liaison between the industrial sector and academia. The College Alumnae Association Day is a functional function happening over time. Our past alumnae have done the College proud by their contributions in various walks of life and study.
          </p>
          <p class="mt-2">
            The College has moved to become a Post Graduate institution since 2019 with the addition of BA and MA in English Literature and M.Com. College Students Union and Departmental Associations and Sports were all started in the very first academic year and have grown in creativity and strength ever since. Associations such as NSS, Youth Red Cross, RRC, Environment Club and SCMI add vitality and opportunities to student life. Mrs. D. Arulselvi, Typist continues to serve in the College from its inception.
          </p>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" alt="Students & Research" class="rounded shadow-sm">
        </div>
      </div>

      <div class="p-3 bg-white border rounded mb-3">
        <h4 class="sub-heading">Instituted Student Research &amp; Empowerment Centres</h4>
        <div class="grid-3 mt-2">
          <div class="p-2 bg-light rounded">&bull; <strong>Centre for Women's Studies</strong></div>
          <div class="p-2 bg-light rounded">&bull; <strong>Centre for Human Resource Dev.</strong></div>
          <div class="p-2 bg-light rounded">&bull; <strong>Center for Career Advancement</strong></div>
          <div class="p-2 bg-light rounded">&bull; <strong>Centre for Innovation</strong></div>
          <div class="p-2 bg-light rounded">&bull; <strong>Center for Dev. and Research</strong></div>
          <div class="p-2 bg-light rounded">&bull; <strong>Entrepreneurship Development</strong></div>
        </div>
        <p class="text-xs text-muted mt-2">To encourage our students to be sensitized on various issues and develop their interest to take up research work.</p>
      </div>

      <div class="p-3 bg-light rounded mb-3">
        <h4 class="serif-title text-navy">Elizabeth Andrew Hostel</h4>
        <p class="mt-2">
          As the need for accommodation in the College grew, the Elizabeth Andrew Hostel was started in 2005 with assistance from overseas friends to support students from distant locations in Madras Diocese. Ground floor of the hostel building was completed in 2008 and the first floor was completed in 2018. Miss Bella Ross was the first Warden of the Hostel. The hostel has grown over the years to provide a home away from home for 60 students, who actively participate in all programmes. Student secretaries provide self-governance to sustain a harmonious community.
        </p>
        <p class="mt-2">
          We at C.S.I. Ewart Women’s Christian College gain our strength, wisdom and understanding from the Lord God Almighty. We believe in the holistic development of our students and want them to shine in this world like the tiny little stars that light up the sky at night - being guiding lights even in the darkness. All the endeavors of the College are inspired by its motto - <em>Love and Serve</em>.
        </p>
      </div>

      <div class="p-3 bg-navy text-white rounded text-center">
        <p class="font-bold text-gold">Government Recognition &amp; University Affiliation</p>
        <p class="text-sm mt-1">Recognized by the Government of Tamil Nadu G.O. Ms. 457 dt.27.08.1997 and affiliated to the University of Madras – NOIA/GJ I 97-98 dt.13.11.1997.</p>
      </div>
    </article>
    <?php endif; ?>

    <?php if ($section === 'all' || $section === 'mission'): ?>
    <!-- 4. MISSION STATEMENT -->
    <article id="mission" class="p-4 bg-white rounded shadow-sm border mb-4">
      <div class="text-center mb-4">
        <span class="sub-heading">Foundational Purpose</span>
        <h2 class="serif-title">College Mission Statement</h2>
      </div>

      <div class="p-4 bg-light rounded border-left-navy mb-4">
        <p class="font-serif italic" style="font-size: 16px; line-height: 1.8; color: var(--stone-800);">
          C.S.I. Ewart Women’s Christian College is founded on faith in the Triune God and draws its inspiration from the Bible and the life and example of Jesus Christ for its ministry of education. Nurtured by eternal Christian values, the College aims to train young women to be serving, caring and sharing citizens of our great land and the world at large.
        </p>
      </div>

      <div class="grid-2 align-center mb-4" style="gap: 28px;">
        <div>
          <h3 class="serif-title text-navy">Priority &amp; Liberation of Women</h3>
          <p class="mt-2" style="line-height: 1.7; color: var(--stone-700);">
            The priority of the College is the education of poor, oppressed and less privileged women, especially village women, to provide them opportunities for a fuller life. The College is committed to the liberation of women and training them to meet all challenges of gender and other forms of discrimination.
          </p>
          <p class="mt-2" style="line-height: 1.7; color: var(--stone-700);">
            The College community as a whole will be a new ‘humanized’ society where learning will transform, sensitize and inspire everyone to challenge the structures that divide people, and where truth will set free people from inhuman and superstitious beliefs.
          </p>
        </div>
        <div>
          <div style="position: relative; border-radius: 10px; overflow: hidden; box-shadow: 0 6px 20px rgba(0,30,68,0.12); border: 1px solid var(--stone-200);">
            <img src="/assets/aistudio/images_5d323a11.jpg" alt="Values, Mission and Vision Guidepost - Priority &amp; Liberation of Women" style="width: 100%; height: 280px; object-fit: cover; display: block;">
            <div style="padding: 10px 14px; background: #ffffff; border-top: 1px solid var(--stone-200);">
              <span style="font-size: 12.5px; color: var(--navy); font-weight: 600;">Foundational Values, Mission &amp; Vision</span>
            </div>
          </div>
        </div>
      </div>
    </article>
    <?php endif; ?>

    <?php if ($section === 'all' || $section === 'quality'): ?>
    <!-- 5. QUALITY POLICY -->
    <article id="quality" class="p-4 bg-white rounded shadow-sm border mb-4">
      <div class="text-center mb-4">
        <span class="sub-heading">Continuous Improvement &amp; Academic Rigour</span>
        <h2 class="serif-title">Institutional Quality Policy</h2>
      </div>

      <!-- Vision Quote Card with Founder Badge -->
      <div class="p-4 bg-light rounded border-left-navy mb-4">
        <div style="display: flex; gap: 20px; align-items: flex-start; flex-wrap: wrap;">
          <div style="flex-shrink: 0; text-align: center;">
            <img src="/assets/aistudio/The_Rt._Rev._Dr._Masilamani_Azariah_1918cc33.png" alt="The Rt. Rev. Dr. Masilamani Azariah" style="width: 76px; height: 76px; object-fit: cover; border-radius: 50%; border: 3px solid var(--psu-gold); box-shadow: 0 4px 10px rgba(0,0,0,0.15);">
            <span style="display: block; font-size: 11px; font-weight: 700; color: var(--navy); margin-top: 4px;">Founder's Vision</span>
          </div>
          <div style="flex: 1; min-width: 260px;">
            <p style="font-size: 16px; line-height: 1.8; color: var(--stone-800);">
              Inspired by <strong>The Rt. Rev. Dr. Masilamani Azariah’s</strong> vision of women empowerment, our institution is committed to providing quality and need-based education to poor, oppressed, and less privileged women, particularly those from rural backgrounds. We strive to create opportunities for women to lead a fuller and meaningful life through transformative education.
            </p>
          </div>
        </div>
      </div>

      <!-- Quality Policy Core Pillars & AI General Quality Policy Image -->
      <div class="grid-2 align-center mb-4" style="gap: 28px;">
        <div>
          <h3 class="serif-title text-navy" style="font-size: 20px; margin-bottom: 12px;">Quality Policy &amp; Core Principles</h3>
          <p style="color: var(--stone-700); font-size: 15px; margin-bottom: 14px; line-height: 1.6;">
            Our Quality Policy emphasizes holistic growth and academic excellence by fostering:
          </p>

          <ul style="list-style: none; padding: 0; margin: 0 0 16px 0; display: flex; flex-direction: column; gap: 10px;">
            <li style="display: flex; align-items: flex-start; gap: 10px; font-size: 14.5px; color: var(--stone-800);">
              <span style="color: #16a34a; font-weight: bold; font-size: 16px;">&#10003;</span>
              <span><strong>Self-confidence and self-reliance</strong></span>
            </li>
            <li style="display: flex; align-items: flex-start; gap: 10px; font-size: 14.5px; color: var(--stone-800);">
              <span style="color: #16a34a; font-weight: bold; font-size: 16px;">&#10003;</span>
              <span><strong>Inculcation of human and moral values</strong></span>
            </li>
            <li style="display: flex; align-items: flex-start; gap: 10px; font-size: 14.5px; color: var(--stone-800);">
              <span style="color: #16a34a; font-weight: bold; font-size: 16px;">&#10003;</span>
              <span><strong>Independent thinking and pursuit of excellence</strong></span>
            </li>
            <li style="display: flex; align-items: flex-start; gap: 10px; font-size: 14.5px; color: var(--stone-800);">
              <span style="color: #16a34a; font-weight: bold; font-size: 16px;">&#10003;</span>
              <span><strong>Awareness of social and environmental responsibilities</strong></span>
            </li>
            <li style="display: flex; align-items: flex-start; gap: 10px; font-size: 14.5px; color: var(--stone-800);">
              <span style="color: #16a34a; font-weight: bold; font-size: 16px;">&#10003;</span>
              <span><strong>A holistic outlook towards life and society</strong></span>
            </li>
          </ul>

          <p style="color: var(--stone-700); font-size: 14px; line-height: 1.7; background: #f8fafc; padding: 12px 14px; border-radius: 6px; border-left: 3px solid var(--psu-gold); margin: 0;">
            Through continuous improvement in all academic and administrative processes, we ensure that our educational services uphold excellence, inclusivity, and empowerment &mdash; in alignment with our founding vision and mission.
          </p>
        </div>

        <div>
          <div style="position: relative; border-radius: 10px; overflow: hidden; box-shadow: 0 8px 24px rgba(0,30,68,0.08); border: 1px solid var(--stone-200); background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%); text-align: center;">
            <div style="padding: 24px 20px 16px 20px; display: flex; justify-content: center; align-items: center; min-height: 280px;">
              <img src="/assets/aistudio/quality_ce675e52.png" alt="Official Quality Policy Seal" style="max-width: 280px; width: 100%; height: auto; object-fit: contain; display: block; filter: drop-shadow(0 6px 16px rgba(0, 30, 68, 0.12));">
            </div>
            <div style="padding: 12px 16px; background: #ffffff; border-top: 1px solid var(--stone-200);">
              <p style="font-size: 13.5px; color: var(--navy); font-weight: 700; margin: 0;">
                Academic Quality Assurance &amp; Standards
              </p>
              <span style="font-size: 12px; color: var(--stone-600);">Internal Quality Assurance Cell (IQAC) &bull; Continuous Improvement</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Core Inspirational Quote Banner -->
      <div class="p-4 bg-navy text-white rounded text-center" style="border-top: 3px solid var(--psu-gold);">
        <p class="serif-title text-gold" style="font-size: clamp(1.1rem, 2.5vw, 1.35rem); font-style: italic; margin: 0; line-height: 1.5;">
          &ldquo;Education is the most powerful tool for empowerment and transformation.&rdquo;
        </p>
      </div>
    </article>
    <?php endif; ?>

    <?php if ($section === 'all' || $section === 'faith'): ?>
    <!-- 6. FAITH AND HERITAGE -->
    <article id="faith" class="p-4 bg-white rounded shadow-sm border mb-4">
      <div class="text-center mb-4">
        <span class="sub-heading">Christian Ethos &amp; Spiritual Foundation</span>
        <h2 class="serif-title">Faith &amp; Heritage</h2>
      </div>

      <!-- Guiding Legacy Banner -->
      <div class="p-3 bg-light rounded border-left-navy mb-4 text-center">
        <p class="font-serif italic" style="font-size: 1.15rem; color: var(--navy); line-height: 1.7; margin: 0; font-weight: 600;">
          &ldquo;Faith and Service are the foundation of our institution’s legacy, nurturing hearts, minds, and spirits.&rdquo;
        </p>
      </div>

      <!-- 1. College Prayer -->
      <div class="mb-4 p-4 rounded border" style="background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);">
        <div class="grid-2 align-center" style="gap: 28px;">
          <div>
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">
              <span style="font-size: 22px;">&#10014;&#65039;</span>
              <h3 class="serif-title text-navy" style="font-size: 22px; margin: 0;">College Prayer</h3>
            </div>
            <p style="font-size: 15px; line-height: 1.85; color: var(--stone-800); text-align: justify;">
              O God, whose blessed Son Jesus Christ has shown us how great is your love for children, we thank you for this day, and for bringing us all together to start our activities with a prayer. We pray in a very special way that you will bless our studies and help us to be good children to our parents and obedient students to our teachers. Be with us as we travel to College and as we return home. Enlighten our minds, strengthen our memories, direct our wills towards what is right, grant us to speak the truth always and make us truly wise. Bless our College, Elders, Teachers and all who contribute to our growth and welfare. We ask this through our Savior Jesus Christ, who is the Way, the Truth and the Life.
            </p>
            <p style="font-size: 16px; font-weight: 700; color: var(--navy); margin-top: 10px;">
              Amen.
            </p>
          </div>
          <div>
            <div style="border-radius: 10px; overflow: hidden; box-shadow: 0 6px 20px rgba(0,30,68,0.12); border: 1px solid var(--stone-200);">
              <img src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=800&q=80" alt="Sacred College Chapel Sanctuary - College Prayer" style="width: 100%; height: 280px; object-fit: cover; display: block;">
              <div style="padding: 10px 14px; background: #ffffff; border-top: 1px solid var(--stone-200);">
                <span style="font-size: 12.5px; color: var(--navy); font-weight: 600;">Spiritual Fellowship &bull; Daily Morning Devotion</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 2. College Song & 3. College Hymn -->
      <div class="grid-2 mb-4" style="gap: 24px; align-items: stretch;">
        <!-- College Song Card -->
        <div class="p-4 rounded border flex flex-col justify-between" style="background: #ffffff; border-left: 4px solid var(--psu-gold); box-shadow: 0 4px 14px rgba(0,0,0,0.04);">
          <div>
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 14px;">
              <span style="font-size: 20px;">&#127926;</span>
              <h3 class="serif-title text-navy" style="font-size: 20px; margin: 0;">College Song</h3>
            </div>
            <div style="font-size: 14.5px; line-height: 1.8; color: var(--stone-800); font-style: italic;">
              <p style="margin-bottom: 14px;">
                Praise to the Holiest in the height,<br>
                And in the depth be praise:<br>
                In all his words most wonderful,<br>
                Most sure in all his ways.
              </p>
              <p style="margin-bottom: 14px;">
                Create in us oh Lord our God,<br>
                A heart full of love we pray;<br>
                Enable us to love and serve<br>
                In every little way.
              </p>
              <p style="margin-bottom: 0;">
                Praise to the Holiest<br>
                Bless Ewart Christian College, Lord,<br>
                Give us the strength and grace.<br>
                We thank you Lord for this pasture green,<br>
                Beneath a brilliant sky.<br><br>
                Praise to the Holiest.
              </p>
            </div>
          </div>
          <div style="margin-top: 20px; border-radius: 8px; overflow: hidden; border: 1px solid var(--stone-200);">
            <img src="https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=800&q=80" alt="Sacred College Hymnal and Music Score" style="width: 100%; height: 180px; object-fit: cover; display: block;">
            <div style="padding: 8px 12px; background: #f8fafc; font-size: 12px; color: var(--stone-600); font-weight: 500;">
              Choral Praise &bull; College Anthem &bull; Love and Serve
            </div>
          </div>
        </div>

        <!-- College Hymn Card -->
        <div class="p-4 rounded border flex flex-col justify-between" style="background: #ffffff; border-left: 4px solid var(--crimson); box-shadow: 0 4px 14px rgba(0,0,0,0.04);">
          <div>
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 14px;">
              <span style="font-size: 20px;">&#128214;</span>
              <h3 class="serif-title text-navy" style="font-size: 20px; margin: 0;">College Hymn</h3>
            </div>
            <div style="font-size: 14.5px; line-height: 1.8; color: var(--stone-800); font-style: italic;">
              <p style="margin-bottom: 12px;">
                O Jesus, strong, and pure and true,<br>
                Before thy feet we bow;<br>
                The grace of earlier years renew,<br>
                And lead us onward now.
              </p>
              <p style="margin-bottom: 12px;">
                The joyous life that year by year<br>
                Within these walls is stored,<br>
                The golden hope, the gladsome cheer,<br>
                We bring to thee, O Lord.
              </p>
              <p style="margin-bottom: 12px;">
                Our faith endow with keener powers,<br>
                With warmer glow our love;<br>
                And draw these halting hearts of ours<br>
                From earth to things above.
              </p>
              <p style="margin-bottom: 12px;">
                In paths our bravest ones have trod<br>
                O make us brave to go,<br>
                That we may give our lives to God<br>
                In serving man below.
              </p>
              <p style="margin-bottom: 12px;">
                Scorn we the selfish aim or choice,<br>
                And love's high precept keep,<br>
                Rejoice with those that do rejoice,<br>
                And weep with those that weep.
              </p>
              <p style="margin-bottom: 0;">
                So hence shall flow fresh strength and grace,<br>
                As from a full-fed spring,<br>
                To make the world a better place,<br>
                And life a worthier thing.
              </p>
            </div>
          </div>
          <div style="margin-top: 20px; border-radius: 8px; overflow: hidden; border: 1px solid var(--stone-200);">
            <img src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=800&q=80" alt="Holy Scriptures on Altar Lectern" style="width: 100%; height: 180px; object-fit: cover; display: block;">
            <div style="padding: 8px 12px; background: #f8fafc; font-size: 12px; color: var(--stone-600); font-weight: 500;">
              Biblical Foundation &bull; Christian Faith &amp; Character
            </div>
          </div>
        </div>
      </div>
    </article>
    <?php endif; ?>

    <?php if ($section === 'all' || $section === 'governing'): ?>
    <!-- 7. GOVERNING BODY -->
    <article id="governing" class="p-4 bg-white rounded shadow-sm border mb-4">
      <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: flex-end; margin-bottom: 16px; gap: 8px;">
        <div>
          <span class="sub-heading">Leadership Council</span>
          <h2 class="serif-title" style="margin-bottom: 4px;">Governing Body</h2>
          <p class="text-muted" style="margin: 0;">Constitution of the College Management Committee under CSI Diocese of Madras:</p>
        </div>
        <span style="font-size: 12px; background: #e0f2fe; color: #0369a1; padding: 4px 10px; border-radius: 4px; font-weight: 600;">13 Members</span>
      </div>

      <div class="table-responsive">
        <table class="table" style="width: 100%; border-collapse: collapse; margin-top: 10px; font-size: 14px;">
          <thead>
            <tr style="background: var(--navy); color: #ffffff; text-align: left; border-bottom: 3px solid var(--psu-gold);">
              <th style="padding: 12px 14px; width: 60px; text-align: center;">S.No.</th>
              <th style="padding: 12px 16px;">Name</th>
              <th style="padding: 12px 16px;">Designation</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid var(--stone-200); background: #f8fafc;">
              <td style="padding: 12px 14px; text-align: center; font-weight: 600; color: var(--navy);">1</td>
              <td style="padding: 12px 16px;">
                <strong style="color: var(--navy);">The Rt. Rev. A. Paul Francis Ravichandran</strong><br>
                <span style="font-size: 12.5px; color: var(--stone-600);">Bishop, CSI Diocese of Madras</span>
              </td>
              <td style="padding: 12px 16px; font-weight: 600; color: var(--navy);">College Chairman</td>
            </tr>
            <tr style="border-bottom: 1px solid var(--stone-200); background: #ffffff;">
              <td style="padding: 12px 14px; text-align: center; font-weight: 600; color: var(--navy);">2</td>
              <td style="padding: 12px 16px;"><strong>Rev. C. Jayaseelan Gnanadikam</strong></td>
              <td style="padding: 12px 16px;">Hon. Vice-President, MDC</td>
            </tr>
            <tr style="border-bottom: 1px solid var(--stone-200); background: #f8fafc;">
              <td style="padding: 12px 14px; text-align: center; font-weight: 600; color: var(--navy);">3</td>
              <td style="padding: 12px 16px;"><strong>Rev. S. Augustin Premraj</strong></td>
              <td style="padding: 12px 16px;">Hon. Secretary, MDC</td>
            </tr>
            <tr style="border-bottom: 1px solid var(--stone-200); background: #ffffff;">
              <td style="padding: 12px 14px; text-align: center; font-weight: 600; color: var(--navy);">4</td>
              <td style="padding: 12px 16px;"><strong>Prof. Dr. J. Samuel Cornelius</strong></td>
              <td style="padding: 12px 16px;">Hon. Treasurer, MDC</td>
            </tr>
            <tr style="border-bottom: 1px solid var(--stone-200); background: #f8fafc;">
              <td style="padding: 12px 14px; text-align: center; font-weight: 600; color: var(--navy);">5</td>
              <td style="padding: 12px 16px;"><strong>Dr. G. K. Francis</strong></td>
              <td style="padding: 12px 16px;">Governing Council Member</td>
            </tr>
            <tr style="border-bottom: 1px solid var(--stone-200); background: #ffffff;">
              <td style="padding: 12px 14px; text-align: center; font-weight: 600; color: var(--navy);">6</td>
              <td style="padding: 12px 16px;"><strong>Rev. Sunil Livingstone</strong></td>
              <td style="padding: 12px 16px;">Chairman, CSI St. Andrew’s Church, Melrosapuram Pastorate &amp; College Chaplain</td>
            </tr>
            <tr style="border-bottom: 1px solid var(--stone-200); background: #f8fafc;">
              <td style="padding: 12px 14px; text-align: center; font-weight: 600; color: var(--navy);">7</td>
              <td style="padding: 12px 16px;"><strong>Dr. V. Regina</strong></td>
              <td style="padding: 12px 16px;">Principal, C.S.I Bishop Newbigin College of Education</td>
            </tr>
            <tr style="border-bottom: 1px solid var(--stone-200); background: #ffffff;">
              <td style="padding: 12px 14px; text-align: center; font-weight: 600; color: var(--navy);">8</td>
              <td style="padding: 12px 16px;"><strong>Mrs. A. Grace Patricia Malini</strong></td>
              <td style="padding: 12px 16px;">Headmistress, CSI Hr. Sec. School, Melrosapuram</td>
            </tr>
            <tr style="border-bottom: 1px solid var(--stone-200); background: #f8fafc;">
              <td style="padding: 12px 14px; text-align: center; font-weight: 600; color: var(--navy);">9</td>
              <td style="padding: 12px 16px;"><strong>Dr. S. D. Christopher Chandran</strong></td>
              <td style="padding: 12px 16px; font-weight: 600; color: var(--navy);">Director of the College</td>
            </tr>
            <tr style="border-bottom: 1px solid var(--stone-200); background: #ffffff;">
              <td style="padding: 12px 14px; text-align: center; font-weight: 600; color: var(--navy);">10</td>
              <td style="padding: 12px 16px;"><strong>Dr. P. David Prabhakar</strong></td>
              <td style="padding: 12px 16px; font-weight: 600; color: var(--navy);">Secretary of the College</td>
            </tr>
            <tr style="border-bottom: 1px solid var(--stone-200); background: #f8fafc;">
              <td style="padding: 12px 14px; text-align: center; font-weight: 600; color: var(--navy);">11</td>
              <td style="padding: 12px 16px;"><strong>Dr. S. Florence Vijila</strong></td>
              <td style="padding: 12px 16px; font-weight: 600; color: var(--navy);">Principal</td>
            </tr>
            <tr style="border-bottom: 1px solid var(--stone-200); background: #ffffff;">
              <td style="padding: 12px 14px; text-align: center; font-weight: 600; color: var(--navy);">12</td>
              <td style="padding: 12px 16px;"><strong>Mrs. J. Linta Josephine</strong></td>
              <td style="padding: 12px 16px;">Bursar</td>
            </tr>
            <tr style="border-bottom: 1px solid var(--stone-200); background: #f8fafc;">
              <td style="padding: 12px 14px; text-align: center; font-weight: 600; color: var(--navy);">13</td>
              <td style="padding: 12px 16px;">
                <strong style="color: var(--navy);">Dr. S. Sasikala</strong><br>
                <span style="font-size: 12.5px; color: var(--stone-600);">IDE, University of Madras</span>
              </td>
              <td style="padding: 12px 16px; font-weight: 600; color: #0284c7;">University Nominee</td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>
    <?php endif; ?>

  </div>

<?php require_once __DIR__ . '/includes/footer.php'; ?>
