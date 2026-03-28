document.addEventListener("DOMContentLoaded", function() {
    // Select all elements with the 'fade-in' class
    const elements = document.querySelectorAll('.fade-in');
    
    // Set up the Intersection Observer to trigger animations on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // When element comes into view, play the animation
                entry.target.style.animationPlayState = 'running';
                entry.target.style.opacity = 1;
                
                // Optional: Stop observing once animated to run only once
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Triggers when 10% of the element is visible
    });
    
    // Attach observer to each element
    elements.forEach(el => {
        observer.observe(el);
    });
});
