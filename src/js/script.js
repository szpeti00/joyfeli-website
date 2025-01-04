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
document.getElementById('scrollToTopBtn').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
window.onscroll = () => {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.getElementById('scrollToTopBtn').style.display = 'block';
    } else {
        document.getElementById('scrollToTopBtn').style.display = 'none';
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


// Sliding underline for nav tabs and swipe functionality
document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.nav-tabs button.nav-link');
  const dropdownItems = document.querySelectorAll('.dropdown-menu .dropdown-item');
  const slider = document.querySelector('.tab-line');
  const container = document.querySelector('.nav-tabs');
  const tabContentEl = document.getElementById('lifestyleTabsContent');
  
  // Tab IDs array for swipe functionality
  const tabIds = Array.from(document.querySelectorAll('.tab-pane')).map((tab) => tab.id);
  
  // Initialize Hammer.js for swipe functionality
  const hammer = tabContentEl ? new Hammer(tabContentEl) : null;

  // Function to update the slider position
  const updateSliderPosition = (activeTab) => {
    if (!activeTab) return;
    const tabRect = activeTab.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    slider.style.left = `${tabRect.left - containerRect.left}px`;
    slider.style.width = `${tabRect.width}px`;
  };

  // Function to activate the specified tab
  const activateTab = (tabId) => {
    const tabTrigger = document.querySelector(`[data-bs-target='#${tabId}']`);
    if (tabTrigger) {
      const tab = new bootstrap.Tab(tabTrigger);
      tab.show();
      updateSliderPosition(tabTrigger);

      // Synchronize dropdown menu with active tab
      dropdownItems.forEach((item) => item.classList.remove('active'));
      const dropdownItem = document.querySelector(`.dropdown-menu .dropdown-item[data-bs-target='#${tabId}']`);
      if (dropdownItem) dropdownItem.classList.add('active');
    }
  };

  // Add click event listeners to tabs and dropdown items
  const handleTabClick = (e) => {
    const tabId = e.target.getAttribute('data-bs-target').substring(1); // Remove the leading '#' with substring
    activateTab(tabId);
  };

  tabs.forEach((tab) => tab.addEventListener('click', handleTabClick));
  dropdownItems.forEach((item) => item.addEventListener('click', handleTabClick));

  // Swipe event handling
  if (hammer) {
    hammer.on('swipeleft swiperight', (e) => {
      const currentIndex = tabIds.indexOf(document.querySelector('.tab-pane.active').id);
      const nextIndex = e.type === 'swipeleft' ? currentIndex + 1 : currentIndex - 1;
      if (nextIndex >= 0 && nextIndex < tabIds.length) {
        activateTab(tabIds[nextIndex]);
      }
    });
  }

  // Update slider position on window resize
  window.addEventListener('resize', () => {
    const activeTab = document.querySelector('.nav-tabs button.nav-link.active');
    updateSliderPosition(activeTab);
  });

  // Set initial slider position
  updateSliderPosition(tabs[0]);

// Swipe hint animation with Intersection Observer
  const swipeHintEl = document.getElementById('swipeHint');
  const swipeFingerEl = document.getElementById('swipeFinger');
  const shownHints = new Set(); // keep track of visited tabs
  let counter = 0;

  const swipeHintCallback = (entries, observer) => {
    entry = entries[0];
    if (entry.isIntersecting) {
      const shownTabId = document.querySelector('.tab-pane.active').id;
      if (shownHints.has(shownTabId)) {
        return;
      }
      shownHints.add(shownTabId);
      counter++;

      swipeHintEl.classList.add('show');
      swipeFingerEl.classList.add('show');
      

      setTimeout(() => {
        // fade out the entire container
        swipeFingerEl.classList.remove('show');
        swipeHintEl.classList.remove('show');
      }, 2500);

      // stop observing when the last tab is shown or when we showed 2 times
      if (counter === 2 || shownTabId === tabIds[tabIds.length - 1]) {
      observer.unobserve(entry.target);
      }
    }
  };
  if (swipeHintEl && tabContentEl) {
    const observer = new IntersectionObserver(swipeHintCallback, {threshold: 0.4});
  
    observer.observe(tabContentEl);
  }
// End Swipe hint

// Toggle (+/-) button animation
  const toggleBtns = document.querySelectorAll('.toggle-btn');
  toggleBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('active');
    });
  });
// End
});