# C.S.I. Ewart Women's Christian College - Pure Vanilla PHP & HTML Website

Official collegiate website for **C.S.I. Ewart Women's Christian College**, Melrosapuram, Chengalpattu District, Tamil Nadu. Affiliated to the University of Madras.

---

## 📁 Project Structure (Zero React Dependencies)

```
.
├── index.php                 # PHP Homepage
├── about.php                 # Founder & his Vision, Leadership, History, Mission, Quality, Faith, Governing Body
├── academics.php             # UG & PG programmes (B.Sc CS, BCA, B.Com, BBA, B.A./M.A. English, M.Com)
├── admissions.php            # Admission portal & application form
├── examinations.php          # University exams, marksheet search & schedule
├── student_life.php          # Student Union, NSS, YRC, RRC, SCMI, Sports, Hostel
├── facilities.php            # 11-acre campus, computer labs, library, transport
├── faculty.php               # HODs, faculty directory, tutor-ward system
├── contact.php               # Help desk, campus address & transport routes
├── admission_submit.php      # Form processor API endpoint (JSON)
├── contact_submit.php        # Contact inquiries processor
│
├── includes/
│   ├── db.php                # PDO MySQL connection & sanitation helpers
│   ├── header.php            # Universal header & navigation
│   └── footer.php            # Universal footer & portrait modal lightbox
│
├── css/
│   └── style.css             # Pure vanilla CSS (Zero external frameworks)
│
├── js/
│   └── main.js               # Pure vanilla JS (Portrait modal, mobile navigation)
│
├── database.sql              # Complete MySQL / MariaDB database schema & seeds
│
├── index.html                # Static HTML5 Homepage
├── about.html                # Static HTML5 About Us
├── academics.html            # Static HTML5 Academics
├── admissions.html           # Static HTML5 Admissions
├── examinations.html         # Static HTML5 Examinations
├── student_life.html         # Static HTML5 Student Life
├── facilities.html           # Static HTML5 Facilities
├── faculty.html              # Static HTML5 Faculty
└── contact.html              # Static HTML5 Contact & Help Desk
```

---

## 🚀 How to Run with Apache / XAMPP / WAMP / LAMP

1. Copy the entire folder to your web server root:
   - **XAMPP (Windows):** `C:\xampp\htdocs\csi-ewart\`
   - **WAMP (Windows):** `C:\wamp64\www\csi-ewart\`
   - **LAMP / Ubuntu Linux:** `/var/www/html/csi-ewart/`
   - **cPanel:** Upload to `public_html/`

2. Import the Database:
   - Open phpMyAdmin (`http://localhost/phpmyadmin/`)
   - Create a database named `csi_ewart_college`
   - Import `database.sql`

3. Configure Database Credentials (Optional):
   - Edit `/includes/db.php` if your MySQL username or password differs from default.

4. Open in Browser:
   - `http://localhost/csi-ewart/index.php` or `http://localhost/csi-ewart/index.html`

---

## 🌟 Leadership & Portrait Modal
In `about.php` and `about.html`, clicking on any of the 4 executive management photos:
- **Rt. Rev. Dr. Paul Francis Ravichandran** (Bishop & College Chairman)
- **Dr. S.D. Christopher Chandran** (Director, Dept. of College Education)
- **Dr. P. David Prabhakar** (College Secretary)
- **Dr. S. Florence Vijila** (Principal)

Opens the portrait lightbox modal in **portrait aspect ratio format** without cropping.
