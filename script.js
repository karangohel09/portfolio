// Define the smooth scrolling function
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) { // Check if the target element exists
        element.scrollIntoView({
            behavior: 'smooth'
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#home"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            smoothScroll(target);
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#about"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            smoothScroll(target);
        });
    });
});
// Add event listeners to anchor links
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#skills"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            smoothScroll(target);
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#education"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            smoothScroll(target);
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#project"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            smoothScroll(target);
        });
    });
});



