// Get the required elements
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.dot-navigation');
let currentSlide = 0;
let slideInterval;

// Initially set the first slide and dot as active
slides[currentSlide].classList.add('active');

// Generate dot navigation based on the number of slides
slides.forEach((slide, index) => {
    
    const dot = document.createElement('span');
    console.log("Mike in slides.forEach index: " + (index + 1)); // Should print the correct index
    dot.classList.add('dot-navigation-item');
    dot.addEventListener('click', () => navigateToSlide(index));
    dotsContainer.appendChild(dot);

    // Use a closure to capture the correct index
    slide.addEventListener('click', (function(i) {
        return function() {
            const link = slides[i].getAttribute('data-link');
            console.log("Mike index: " + (i + 1)); // Should print the correct index
            console.log("Mike link: " + link);
            //window.open(link, '_blank'); // Open the link in a new tab
        };
    })(index));
});

// Function to navigate to a specific slide
function navigateToSlide(index) {
    clearInterval(slideInterval);
    slides.forEach(slide => slide.classList.remove('active'));
    const dots = dotsContainer.querySelectorAll('.dot-navigation-item');
    dots.forEach(dot => dot.classList.remove('active'));

    // Set active classes
    slides[index].classList.add('active');
    dots[index].classList.add('active');

    // Log the link of the currently active slide
    const link = slides[index].getAttribute('data-link');
    console.log("Mike Current slide link: " + link);

    // Update the current slide index
    currentSlide = index;
    slideInterval = setInterval(nextSlide, 5000);
}

// Function to navigate to the next slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    navigateToSlide(currentSlide);
}

// Start the slide interval
slideInterval = setInterval(nextSlide, 5000);

