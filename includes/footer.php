<?php
/**
 * C.S.I. Ewart Women's Christian College
 * Footer Template - Pure Vanilla PHP & Semantic HTML5
 */
?>
  <!-- Penn State Style Collegiate Mega Footer -->
  <footer class="psu-mega-footer">
    <div class="container psu-footer-grid">
      <div class="psu-footer-brand-col">
        <img src="/assets/aistudio/College_LOGO_66bb4b67.jpg" alt="C.S.I. Ewart Shield" class="psu-footer-crest">
        <h3 class="psu-footer-brand-title">C.S.I. EWART WOMEN'S CHRISTIAN COLLEGE</h3>
        <p class="footer-tagline">Founded in 1997 on faith in the Triune God. Dedicated to liberating rural women through accessible higher education and Christian moral leadership.</p>
        <p class="mt-2 text-sm text-gold"><strong>Collegiate Motto:</strong> <em>Love and Serve</em></p>
        <div class="psu-accred-notice">
          <strong>Official Recognition &amp; Affiliation:</strong><br>
          Recognized by the Government of Tamil Nadu G.O. Ms. 457 dt. 27.08.1997<br>
          Permanently Affiliated to the University of Madras &ndash; NOIA/GJ I 97-98 dt. 13.11.1997
        </div>
      </div>
      <div class="psu-footer-col">
        <h4>About &amp; Governance</h4>
        <ul class="psu-footer-links">
          <li><a href="about.php?section=founder">&rsaquo; Founder &amp; His Vision</a></li>
          <li><a href="about.php?section=leadership">&rsaquo; Our Leadership</a></li>
          <li><a href="about.php?section=history">&rsaquo; History of Ewart</a></li>
          <li><a href="about.php?section=mission">&rsaquo; Mission Statement</a></li>
          <li><a href="about.php?section=quality">&rsaquo; Quality Policy (IQAC)</a></li>
          <li><a href="about.php?section=governing">&rsaquo; Governing Body</a></li>
        </ul>
      </div>
      <div class="psu-footer-col">
        <h4>Collegiate Academics</h4>
        <ul class="psu-footer-links">
          <li><a href="academics.php">&rsaquo; B.Sc Computer Science</a></li>
          <li><a href="academics.php">&rsaquo; BCA (Computer Applications)</a></li>
          <li><a href="academics.php">&rsaquo; B.Com (General &amp; Corporate)</a></li>
          <li><a href="academics.php">&rsaquo; BBA (Business Administration)</a></li>
          <li><a href="academics.php">&rsaquo; B.A. English Literature</a></li>
          <li><a href="academics.php">&rsaquo; M.A. English &amp; M.Com</a></li>
        </ul>
      </div>
      <div class="psu-footer-col">
        <h4>Melrosapuram Campus</h4>
        <address class="footer-address">
          <strong>C.S.I. Ewart Women's Christian College</strong><br>
          Melrosapuram, Via-Singaperumal Koil,<br>
          Chengalpattu District, Tamil Nadu &ndash; 603 204.<br>
          <strong>Landmark:</strong> Near Singaperumal Koil Railway Station<br>
          <strong>Enquiries:</strong> 044-2746 9288 / 044-2746 9289<br>
          <strong>Email:</strong> admissions@csiewartcollege.edu.in
        </address>
        <div class="mt-3">
          <a href="facilities.php" class="psu-util-action-btn" style="display: inline-block;">Elizabeth Andrew Hostel &rarr;</a>
        </div>
      </div>
    </div>
    <div class="psu-footer-bottom">
      <div class="container footer-bottom-flex">
        <p>&copy; <?php echo date('Y'); ?> C.S.I. Ewart Women's Christian College. All Rights Reserved. &bull; <a href="under-construction.php" style="color: #cbd5e1; text-decoration: underline;">Portal Maintenance / Under Construction</a></p>
        <p>Affiliated to the University of Madras &bull; Diocese of Madras, Church of South India</p>
      </div>
    </div>
  </footer>

  <!-- Lightbox Modal in Portrait Format (No Image Cropping) -->
  <div id="portraitModal" class="portrait-modal" onclick="closePortraitModal()">
    <div class="portrait-modal-card" onclick="event.stopPropagation()">
      <button class="portrait-modal-close" onclick="closePortraitModal()" aria-label="Close Modal">&times;</button>
      <div class="portrait-frame">
        <img id="portraitModalImg" src="" alt="Enlarged Portrait">
      </div>
      <div class="portrait-modal-info">
        <h3 id="portraitModalTitle">Name</h3>
        <p id="portraitModalRole" class="text-crimson font-bold">Role</p>
        <span class="text-muted">C.S.I. Ewart Women's Christian College</span>
      </div>
    </div>
  </div>

  <script src="js/main.js"></script>
</body>
</html>
