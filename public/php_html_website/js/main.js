/**
 * C.S.I. Ewart Women's Christian College
 * Pure Vanilla JavaScript (Zero Dependencies)
 */

// 1. Portrait Lightbox Modal (Format Portrait, No Cropping)
function openPortraitModal(imgSrc, title, role) {
  const modal = document.getElementById('portraitModal');
  const modalImg = document.getElementById('portraitModalImg');
  const modalTitle = document.getElementById('portraitModalTitle');
  const modalRole = document.getElementById('portraitModalRole');

  if (modal && modalImg) {
    modalImg.src = imgSrc;
    if (modalTitle) modalTitle.textContent = title || 'Leadership';
    if (modalRole) modalRole.textContent = role || 'Administration';
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closePortraitModal() {
  const modal = document.getElementById('portraitModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Close on escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closePortraitModal();
  }
});

// 2. Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.getElementById('mobileMenuBtn');
  const mainNav = document.getElementById('mainNav');

  if (toggleBtn && mainNav) {
    toggleBtn.addEventListener('click', function() {
      mainNav.classList.toggle('mobile-active');
    });
  }

  // Dropdown on mobile
  const dropdownParents = document.querySelectorAll('.has-dropdown');
  dropdownParents.forEach(function(item) {
    const link = item.querySelector('a');
    if (link) {
      link.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          item.classList.toggle('mobile-open');
        }
      });
    }
  });
});
