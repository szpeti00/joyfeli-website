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
})




