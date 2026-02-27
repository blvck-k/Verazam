function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
    
    // Prevent body scrolling when menu is open
    if (navLinks.classList.contains("active")) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "auto";
    }
}

// Close menu when clicking on a link
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.getElementById("navLinks");
    const links = navLinks.getElementsByTagName('a');
    
    for (let link of links) {
        link.addEventListener('click', function() {
            navLinks.classList.remove("active");
            document.body.style.overflow = "auto";
        });
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const menuToggle = document.querySelector('.menu-toggle');
        if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
            navLinks.classList.remove("active");
            document.body.style.overflow = "auto";
        }
    });
});
