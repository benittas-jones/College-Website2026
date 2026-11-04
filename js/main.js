/**
 * C.S.I. Ewart Women's Christian College
 * Pure Vanilla JavaScript (Zero Dependencies, Standards-Compliant)
 */

// 1. Portrait Lightbox Modal (Exact Portrait Format, No Image Cropping)
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

// 2. Mobile Menu & Interactive Dropdown Handlers
document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.getElementById('mobileMenuBtn');
  const mainNav = document.getElementById('mainNav');

  if (toggleBtn && mainNav) {
    toggleBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      const isActive = mainNav.classList.toggle('mobile-active');
      toggleBtn.classList.toggle('active', isActive);
      toggleBtn.setAttribute('aria-expanded', isActive ? 'true' : 'false');
    });

    // Close mobile nav when clicking outside
    document.addEventListener('click', function(e) {
      if (mainNav.classList.contains('mobile-active') && !mainNav.contains(e.target) && !toggleBtn.contains(e.target)) {
        mainNav.classList.remove('mobile-active');
        toggleBtn.classList.remove('active');
        toggleBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Handle dropdown click on mobile screens
  const dropdownParents = document.querySelectorAll('.has-dropdown');
  dropdownParents.forEach(function(item) {
    const link = item.querySelector(':scope > a');
    if (link) {
      link.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          e.stopPropagation();
          item.classList.toggle('mobile-open');
        }
      });
    }
  });

  // Handle active sub-tab switching on about page
  const tabLinks = document.querySelectorAll('.sub-nav-tabs a');
  tabLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      tabLinks.forEach(function(t) { t.classList.remove('active'); });
      this.classList.add('active');
    });
  });

  // Initialize Hero Picture Slider
  initHeroSlider();
});

// 3. Penn State Style Search Drawer
function toggleSearchDrawer() {
  const drawer = document.getElementById('psuSearchDrawer');
  const input = document.getElementById('psuSearchInput');
  if (drawer) {
    drawer.classList.toggle('active');
    if (drawer.classList.contains('active') && input) {
      setTimeout(function() { input.focus(); }, 100);
    }
  }
}

function closeSearchDrawer() {
  const drawer = document.getElementById('psuSearchDrawer');
  if (drawer) {
    drawer.classList.remove('active');
  }
}

// 4. Penn State Degree & Academic Majors Filtering
function filterPrograms(category, btn) {
  // Update active tab button
  const buttons = document.querySelectorAll('.psu-filter-tab');
  buttons.forEach(function(b) { b.classList.remove('active'); });
  if (btn) btn.classList.add('active');

  // Filter program cards
  const cards = document.querySelectorAll('.psu-prog-card');
  cards.forEach(function(card) {
    const cardCat = card.getAttribute('data-category');
    if (category === 'all' || cardCat === category || (category === 'pg' && cardCat === 'pg')) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

// 5. Hero Picture Slider (3 Real Campus Photos, Pure Unmasked)
let currentHeroSlide = 0;
let heroSliderTimer = null;

function initHeroSlider() {
  const slides = document.querySelectorAll('.psu-slide');
  const dots = document.querySelectorAll('.psu-slider-dot');
  if (!slides || slides.length === 0) return;

  function showSlide(index) {
    if (index >= slides.length) currentHeroSlide = 0;
    else if (index < 0) currentHeroSlide = slides.length - 1;
    else currentHeroSlide = index;

    slides.forEach(function(slide, i) {
      if (i === currentHeroSlide) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });

    dots.forEach(function(dot, i) {
      if (i === currentHeroSlide) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  window.goToSlide = function(index) {
    showSlide(index);
    resetTimer();
  };

  window.nextSlide = function() {
    showSlide(currentHeroSlide + 1);
    resetTimer();
  };

  window.prevSlide = function() {
    showSlide(currentHeroSlide - 1);
    resetTimer();
  };

  function startTimer() {
    heroSliderTimer = setInterval(function() {
      showSlide(currentHeroSlide + 1);
    }, 4500);
  }

  function resetTimer() {
    if (heroSliderTimer) clearInterval(heroSliderTimer);
    startTimer();
  }

  // Start auto-play
  startTimer();

  // Pause on hover
  const sliderEl = document.getElementById('homeSlider');
  if (sliderEl) {
    sliderEl.addEventListener('mouseenter', function() {
      if (heroSliderTimer) clearInterval(heroSliderTimer);
    });
    sliderEl.addEventListener('mouseleave', function() {
      resetTimer();
    });

    // Touch swipe gestures for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    sliderEl.addEventListener('touchstart', function(e) {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    sliderEl.addEventListener('touchend', function(e) {
      touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 45) {
        window.nextSlide();
      } else if (touchEndX - touchStartX > 45) {
        window.prevSlide();
      }
    }, { passive: true });
  }
}


