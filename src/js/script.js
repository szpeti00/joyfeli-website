// Close the offcanvas when a nav link is clicked
document.addEventListener('DOMContentLoaded', () => {
    const offcanvasElement = document.getElementById('offcanvasNavbar');
    const offcanvas = new bootstrap.Offcanvas(offcanvasElement);
    
    // Attach to all nav links within the offcanvas
    document.querySelectorAll('#offcanvasNavbar .nav-link').forEach(link => {
      link.addEventListener('click', () => {
        // Close the offcanvas
        offcanvas.hide();
      });
    });
  });
// End
  

// Scroll to top functionality
document.getElementById("scrollToTopBtn").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
window.onscroll = () => {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.getElementById("scrollToTopBtn").style.display = "block";
    } else {
        document.getElementById("scrollToTopBtn").style.display = "none";
    }
};
// End


// Intersection Observer fot the animation in the about me section
const textOverlay = document.querySelector('.text-overlay');
const bgImage = document.querySelector('.bg-image');

const callback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
};

if (textOverlay && bgImage) {
  const observer = new IntersectionObserver(callback, {threshold: 0.4});

  observer.observe(textOverlay);
  observer.observe(bgImage);
}
// End Intersection Observer


// Sliding underline for nav tabs
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".nav-tabs button.nav-link");
  const slider = document.querySelector(".tab-line");
  const container = document.querySelector(".nav-tabs");

    
  // Update the position of the slider (underline) based on the active tab element. Using getBoundingClientRect() for positioning
  const updateSliderPosition = (activeTab) => {
    if (!activeTab) return;
    const tabRect = activeTab.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    slider.style.left = `${tabRect.left - containerRect.left}px`;
    slider.style.width = `${tabRect.width}px`;
  };

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      updateSliderPosition(tab);
    });
  });

  updateSliderPosition(tabs[0]); // Initial position

  window.addEventListener("resize", () => {
    const activeTab = document.querySelector(".nav-tabs button.nav-link.active");
    updateSliderPosition(activeTab);
  });
// End

// Swipeable tabs on small screens using hammer.js libary
  const tabIds = Array.from(document.querySelectorAll('.tab-pane')).map((tab) => tab.id);
  const tabContentEl = document.getElementById('lifestyleTabsContent');
  const hammer = tabContentEl ? new Hammer(tabContentEl) : null;

  if (hammer){
    hammer.on('swipeleft swiperight', (e) => {
      const currentIndex = getActiveTabIndex();
      const nextIndex = e.type === 'swipeleft' ? currentIndex + 1 : currentIndex - 1;
      if (nextIndex >= 0 && nextIndex < tabIds.length) {
        showTab(tabIds[nextIndex]);
      }
    });
  }

  const getActiveTabIndex = () => tabIds.indexOf(document.querySelector('.tab-pane.active').id);

  const showTab = (tabId) => {
    const tabTrigger = document.querySelector(`[data-bs-target="#${tabId}"]`) || document.querySelector(`[href="#${tabId}"]`);
    if (tabTrigger) {
      const tab = new bootstrap.Tab(tabTrigger);
      tab.show();
      updateSliderPosition(tabTrigger); // in case the user swipe on bigger screen and the slider is still visible we update the position
    }
  };
// End

// Swipe hint
  const swipeHintEl = document.getElementById('swipeHint');
  let hintShown = swipeHintEl ? false : true;  // Make sure we only show it once. And only on pages where we have tabs

  const scrollThreshold = 500; 

  // Listen to scroll events
  window.addEventListener('scroll', function() {
    if (!hintShown && window.scrollY > scrollThreshold) {
      swipeHintEl.classList.add('show');
      hintShown = true; // so we don't show it multiple times
      setTimeout(() => {
        // fade out the entire container
        swipeHintEl.classList.remove('show');
      }, 2500);
    }
  });
// End

// Toggle (+/-) button animation
  const toggleBtns = document.querySelectorAll('.toggle-btn');
  toggleBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('active');
    });
  });
// End
});




