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
  // End

  // Hamburger menu animation
  const toggler = document.querySelector('.navbar-toggler');

  // When offcanvas is about to be shown, add the "active" class to the toggler.
  offcanvasElement.addEventListener('show.bs.offcanvas', () => {
    toggler.classList.add('active');
  });

  // When offcanvas is hidden, remove the "active" class.
  offcanvasElement.addEventListener('hide.bs.offcanvas', () => {
    toggler.classList.remove('active');
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


  // Intersection Observer fot the animation in the welcom section
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
  const tabs = document.querySelectorAll('.nav-tabs button.nav-link');
  const dropdownItems = document.querySelectorAll('.dropdown-menu .dropdown-item');
  const slider = document.querySelector('.tab-line');
  const wrapper = document.querySelector('.nav-tabs');

  // Arrow buttons
  const prevTabBtn = document.getElementById('prevTabBtn');
  const nextTabBtn = document.getElementById('nextTabBtn');
  
  // Tab IDs array
  const tabIds = Array.from(document.querySelectorAll('.tab-pane')).map((tab) => tab.id);

  // Function to update the slider position
  const updateSliderPosition = (activeTab) => {
    if (!activeTab) return;
    const tabRect = activeTab.getBoundingClientRect();
    const containerRect = wrapper.getBoundingClientRect();

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
  const handleArrowButtonClick = (direction) => {
    const currentIndex = tabIds.indexOf(document.querySelector('.tab-pane.active').id);
    const newIndex = currentIndex + direction;
    if (newIndex >= 0 && newIndex < tabIds.length) {
      activateTab(tabIds[newIndex]);
      // Scroll to the top of the tab section
      document.querySelector('.tab-section').scrollIntoView({ behavior: 'smooth' });
    }
  };

  prevTabBtn?.addEventListener('click', () => handleArrowButtonClick(-1));
  nextTabBtn?.addEventListener('click', () => handleArrowButtonClick(1));

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

  // Dynamically changing date in copyright section
  document.getElementById("year").textContent = new Date().getFullYear();

  (function () {
    'use strict';
  
    // Get the form element (ensure you select the correct one)
    const form = document.querySelector('.needs-validation');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default submission
  
      // Check Bootstrap validation
      if (!form.checkValidity()) {
        event.stopPropagation();
        form.classList.add('was-validated');
        return;
      }
  
      // If valid, add the validated class and submit via AJAX
      form.classList.add('was-validated');
      const formData = new FormData(form);
  
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString()
      })
        .then(response => {
          if (response.ok) {
            showMessage("Thank you for your message! I will get back to you soon!", "success");
            form.reset();
            form.classList.remove('was-validated'); // Reset validation styling
          } else {
            showMessage("There was an error submitting the form. Please try again.", "error");
          }
        })
        .catch(error => {
          showMessage("There was an error submitting the form. Please try again.", "error");
        });
    });
  
    // Function to show a message in a div and hide it after 10 seconds
    function showMessage(message, type) {
      const messageDiv = document.getElementById('form-message');
      messageDiv.textContent = message;
      if (type === "success") {
        messageDiv.style.backgroundColor = "#28a745";
        messageDiv.style.color = "#fff";
      } else {
        messageDiv.style.backgroundColor = "#dc3545";
        messageDiv.style.color = "#fff";
      }
      messageDiv.style.display = "block";
  
      // Hide the message after 10 seconds
      setTimeout(() => {
        messageDiv.style.display = "none";
      }, 10000);
    }
  })();
});