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