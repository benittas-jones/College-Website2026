<?php
/**
 * C.S.I. Ewart Women's Christian College
 * Footer Template
 */
?>
  <!-- Footer -->
  <footer class="site-footer">
    <div class="container footer-grid">
      <div class="footer-col">
        <div class="footer-brand">
          <img src="/assets/aistudio/College_LOGO_66bb4b67.jpg" alt="Logo" class="footer-logo">
          <h3 class="footer-college-name">C.S.I. Ewart Women's Christian College</h3>
        </div>
        <p class="footer-tagline">Training young women to be serving, caring and sharing citizens.</p>
        <p class="mt-2 text-sm text-gold"><strong>Motto:</strong> Love and Serve</p>
      </div>
      <div class="footer-col">
        <h4>About Us</h4>
        <ul class="footer-links">
          <li><a href="about.php?section=founder">&bull; Founder &amp; His Vision</a></li>
          <li><a href="about.php?section=leadership">&bull; Our Leadership</a></li>
          <li><a href="about.php?section=history">&bull; History of Ewart</a></li>
          <li><a href="about.php?section=mission">&bull; Mission Statement</a></li>
          <li><a href="about.php?section=quality">&bull; Quality Policy</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Academics</h4>
        <ul class="footer-links">
          <li><a href="academics.php">&bull; B.Sc Computer Science</a></li>
          <li><a href="academics.php">&bull; BCA &amp; BBA</a></li>
          <li><a href="academics.php">&bull; B.Com General &amp; Corp Sec</a></li>
          <li><a href="academics.php">&bull; B.A. &amp; M.A. English</a></li>
          <li><a href="academics.php">&bull; M.Com</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Campus Contact</h4>
        <address class="footer-address">
          Melrosapuram, Via-Singaperumal Koil,<br>
          Chengalpattu District &ndash; 603 204.<br>
          <strong>Tel:</strong> 044-2746 9288<br>
          <strong>Email:</strong> info@csiewartcollege.edu.in
        </address>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container footer-bottom-flex">
        <p>&copy; <?php echo date('Y'); ?> C.S.I. Ewart Women's Christian College &bull; All Rights Reserved</p>
        <p>Pure Vanilla PHP 8, HTML5 &amp; CSS Edition</p>
      </div>
    </div>
  </footer>

  <!-- Lightbox Modal in Portrait Format -->
  <div id="portraitModal" class="portrait-modal" onclick="closePortraitModal()">
    <div class="portrait-modal-card" onclick="event.stopPropagation()">
      <button class="portrait-modal-close" onclick="closePortraitModal()">&times;</button>
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
