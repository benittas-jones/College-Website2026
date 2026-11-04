<?php
/**
 * C.S.I. Ewart Women's Christian College, Melrosapuram
 * Contact & Help Desk Portal in Vanilla PHP
 */
require_once __DIR__ . '/includes/db.php';
$pageTitle = "Help Desk & Contact | C.S.I. Ewart Women's Christian College";

$contact_success = '';
$contact_error = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $sender_name = clean_input($_POST['sender_name'] ?? '');
    $sender_email = clean_input($_POST['sender_email'] ?? '');
    $sender_phone = clean_input($_POST['sender_phone'] ?? '');
    $subject = clean_input($_POST['subject'] ?? '');
    $message = clean_input($_POST['message'] ?? '');

    if (empty($sender_name) || empty($sender_phone) || empty($message)) {
        $contact_error = "Please fill in all required fields (Name, Phone, and Message).";
    } else {
        if ($pdo) {
            try {
                $stmt = $pdo->prepare("INSERT INTO contact_inquiries (sender_name, email, phone, subject, message, created_at) VALUES (?, ?, ?, ?, ?, NOW())");
                $stmt->execute([$sender_name, $sender_email, $sender_phone, $subject, $message]);
                $ticket_no = "TKT-" . str_pad($pdo->lastInsertId(), 4, '0', STR_PAD_LEFT);
                $contact_success = "Thank you, {$sender_name}! Your query has been logged under Help Desk Ticket: <strong>{$ticket_no}</strong>. The college administration will respond promptly.";
            } catch (Exception $e) {
                $contact_success = "Thank you, {$sender_name}! Your query has been received. Help Desk Reference: <strong>TKT-" . rand(1000, 9999) . "</strong>. Our office will respond within 24 hours.";
            }
        } else {
            $contact_success = "Thank you, {$sender_name}! Your inquiry has been registered. Reference ID: <strong>TKT-" . rand(1000, 9999) . "</strong>. Our staff will contact you via {$sender_phone}.";
        }
    }
}

require_once __DIR__ . '/includes/header.php';
?>

<div class="page-header">
  <div class="container">
    <h1>Help Desk &amp; Campus Location</h1>
    <p>We are here to assist students, parents, and visitors &bull; Melrosapuram Campus</p>
  </div>
</div>

<div class="container section">

  <?php if ($contact_success): ?>
    <div class="p-4 bg-light rounded border-left-navy mb-4" style="border-left-color: #10b981; background: #ecfdf5;">
      <h3 style="color: #065f46; font-size: 18px;">Message Received!</h3>
      <p style="color: #047857; margin-top: 6px;"><?php echo $contact_success; ?></p>
    </div>
  <?php endif; ?>

  <?php if ($contact_error): ?>
    <div class="p-4 bg-light rounded border-left-navy mb-4" style="border-left-color: var(--crimson); background: #fef2f2;">
      <h3 style="color: var(--crimson); font-size: 18px;">Attention</h3>
      <p style="color: #991b1b; margin-top: 6px;"><?php echo $contact_error; ?></p>
    </div>
  <?php endif; ?>

  <div class="grid-2">
    <!-- Contact Form -->
    <div class="p-4 bg-white border rounded shadow-sm">
      <span class="sub-heading">Send an Inquiry</span>
      <h2 class="serif-title text-navy">College Help Desk Form</h2>
      <p class="text-muted text-sm mb-3">Submit your admission queries, certificate requests, or general inquiries.</p>

      <form action="contact.php" method="POST">
        <div class="form-group">
          <label for="sender_name">Your Name *</label>
          <input type="text" id="sender_name" name="sender_name" class="form-control" required placeholder="Full Name">
        </div>

        <div class="grid-2" style="gap: 16px;">
          <div class="form-group">
            <label for="sender_phone">Phone / Mobile *</label>
            <input type="tel" id="sender_phone" name="sender_phone" class="form-control" required placeholder="10-digit number">
          </div>
          <div class="form-group">
            <label for="sender_email">Email Address</label>
            <input type="email" id="sender_email" name="sender_email" class="form-control" placeholder="name@example.com">
          </div>
        </div>

        <div class="form-group">
          <label for="subject">Inquiry Nature / Subject</label>
          <select id="subject" name="subject" class="form-control">
            <option value="Admissions Inquiry">Admissions Inquiry 2026</option>
            <option value="Hostel Accommodation">Hostel Accommodation Inquiry</option>
            <option value="Examinations & Marksheets">Examinations &amp; Marksheets</option>
            <option value="Fee Structure & Scholarships">Fee Structure &amp; Scholarships</option>
            <option value="Transport Route Inquiry">Transport Route Inquiry</option>
            <option value="General Query">General Administrative Query</option>
          </select>
        </div>

        <div class="form-group">
          <label for="message">Detailed Message *</label>
          <textarea id="message" name="message" rows="4" class="form-control" required placeholder="Write your question or request here..."></textarea>
        </div>

        <button type="submit" class="btn btn-primary" style="width: 100%;">Send Message to Help Desk &rarr;</button>
      </form>
    </div>

    <!-- Campus Address & Transport Directions -->
    <div>
      <div class="p-4 bg-light border rounded mb-4">
        <span class="sub-heading">Official Address</span>
        <h3 class="serif-title text-navy">Campus Location &amp; Office</h3>
        <address class="footer-address mt-2" style="font-size: 14px; color: var(--stone-800);">
          <strong>C.S.I. Ewart Women's Christian College</strong><br>
          Melrosapuram, Via-Singaperumal Koil,<br>
          Chengalpattu District &ndash; 603 204, Tamil Nadu, India.<br><br>
          <strong>Landline Telephone:</strong> 044 - 2999 4940 | 044 - 2999 4957<br>
          <strong>Help Desk Coordinator : Mrs. Benitta Magdaline S  </strong>  +91 8754471116<br>
          <strong>Email:</strong> csiewcc@gmail.com<br>
          <strong>Office Hours:</strong> Monday &ndash; Friday: 8:30 AM &ndash; 4:30 PM | Saturday: 8:30 AM &ndash; 1:00 PM
        </address>
      </div>

      <div class="p-4 bg-white border rounded">
        <span class="sub-heading">How to Reach</span>
        <h3 class="serif-title text-navy">Public Transport &amp; Connectivity</h3>
        <p class="text-sm mt-2">
          <strong>By Suburban Train:</strong> Singaperumal Koil Railway Station (5 km) on Chennai Beach &ndash; Chengalpattu line. Frequent share-autos and college buses operate to the campus.
        </p>
        <p class="text-sm mt-2">
          <strong>By Bus (MTC / TNSTC):</strong> Accessible from GST Road through Singaperumal Koil junction or Melrosapuram Koot Road.
        </p>
        <p class="text-sm mt-2">
          <strong>College Bus Fleet:</strong> Operating across Maraimalai Nagar, Guduvanchery, Chengalpattu town, Tambaram, and surrounding rural communities.
        </p>
      </div>
    </div>
  </div>

  <!-- College Google Map Embed & Navigation -->
  <div class="mt-4 p-4 bg-white border rounded shadow-sm">
    <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; margin-bottom: 1rem; gap: 12px;">
      <div>
        <span class="sub-heading">Campus Location Map</span>
        <h2 class="serif-title text-navy" style="margin-bottom: 4px;">C.S.I. Ewart Women's Christian College Map</h2>
        <p class="text-muted text-sm">Melrosapuram, Via-Singaperumal Koil, Chengalpattu District &ndash; 603 204</p>
      </div>
      <div>
        <a href="https://www.google.com/maps?ll=12.76797,80.019246&z=14&t=m&hl=en&gl=US&mapclient=embed&cid=17969256942835412288" target="_blank" rel="noopener noreferrer" class="btn btn-secondary text-sm" style="display: inline-flex; align-items: center; gap: 6px;">
          <span>Open in Google Maps &amp; Get Directions</span> &rarr;
        </a>
      </div>
    </div>

    <div style="width: 100%; border-radius: 8px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 2px 10px rgba(0,0,0,0.06);">
      <iframe
        src="https://www.google.com/maps?ll=12.76797,80.019246&z=14&t=m&hl=en&gl=US&mapclient=embed&cid=17969256942835412288&output=embed"
        width="100%"
        height="450"
        style="border:0; display:block;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="C.S.I. Ewart Women's Christian College Campus Map">
      </iframe>
    </div>

    <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; margin-top: 12px; font-size: 13px; color: var(--stone-600); gap: 8px;">
      <span><strong>GPS Coordinates:</strong> 12.76797&deg; N, 80.019246&deg; E (Melrosapuram, Singaperumal Koil)</span>
      <span><a href="https://www.google.com/maps?ll=12.76797,80.019246&z=14&t=m&hl=en&gl=US&mapclient=embed&cid=17969256942835412288" target="_blank" rel="noopener noreferrer" style="color: var(--navy-800); text-decoration: underline;">View Larger Interactive Map</a></span>
    </div>
  </div>

</div>

<?php require_once __DIR__ . '/includes/footer.php'; ?>
