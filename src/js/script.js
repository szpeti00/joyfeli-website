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
  const observer = new IntersectionObserver(callback, {threshold: 0.2});

  observer.observe(textOverlay);
  observer.observe(bgImage);
}
// End Intersection Observer


// Sliding underline for nav tabs and next/prev buttons
document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.nav-tabs button.nav-link');
  const dropdownItems = document.querySelectorAll('.dropdown-menu .dropdown-item');
  const slider = document.querySelector('.tab-line');
  const container = document.querySelector('.nav-tabs');

  // Arrow buttons
  const prevTabBtn = document.getElementById('prevTabBtn');
  const nextTabBtn = document.getElementById('nextTabBtn');
  
  // Tab IDs array
  const tabIds = Array.from(document.querySelectorAll('.tab-pane')).map((tab) => tab.id);

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

      // Update arrow buttons
      prevTabBtn.disabled = tabIds.indexOf(tabId) === 0; // true if we are on the first tab 
      nextTabBtn.disabled = tabIds.indexOf(tabId) === tabIds.length - 1; // true if we are on the last tab
    }
  };

  // Add click event listeners to tabs and dropdown items
  const handleTabClick = (e) => {
    const tabId = e.target.getAttribute('data-bs-target').substring(1); // Remove the leading '#' with substring
    activateTab(tabId);
  };

  tabs.forEach((tab) => tab.addEventListener('click', handleTabClick));
  dropdownItems.forEach((item) => item.addEventListener('click', handleTabClick));

  // Arrow Buttons for Previous/Next Tab 
  if (prevTabBtn) {
    prevTabBtn.addEventListener('click', () => {
      const currentIndex = tabIds.indexOf(document.querySelector('.tab-pane.active').id);
      if (currentIndex > 0) {
        activateTab(tabIds[currentIndex - 1]);
      }
       //Scroll to the top of the tab 
       document.querySelector('.tab-section').scrollIntoView({ behavior: 'smooth' });
    });
  }

  if (nextTabBtn) {
    nextTabBtn.addEventListener('click', () => {
      const currentIndex = tabIds.indexOf(document.querySelector('.tab-pane.active').id);
      if (currentIndex < tabIds.length - 1) {
        activateTab(tabIds[currentIndex + 1]);
      }
       //Scroll to the top of the tab 
       document.querySelector('.tab-section').scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Update slider position on window resize
  window.addEventListener('resize', () => {
    const activeTab = document.querySelector('.nav-tabs button.nav-link.active');
    updateSliderPosition(activeTab);
  });

  // Set initial slider position
  updateSliderPosition(tabs[0]);

  const hash = window.location.hash;
  if (hash) {
    // Remove the '#' to get the tab id ("pricing")
    const tabId = hash.substring(1);
    
    // Activate the specified tab
    if (tabIds.includes(tabId)) {
      activateTab(tabId);
      
      document.querySelector('.tab-section').scrollIntoView({ behavior: 'smooth' });
    }
  }

// Bootstrap form validation (from bootstrap docs)
  (function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }

          form.classList.add('was-validated')
        }, false)
      })
  })()
});