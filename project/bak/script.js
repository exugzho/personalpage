// Get the required elements
console.log("Mike !!!!!!!!!!!!!!!!!!!!200000010 : "); // Print the correct index
const slides = document.querySelectorAll('.slide');
console.log("Mike !!!!!!!!!!!!!!!!!!!!200000011 : "); // Print the correct index
const dotsContainer = document.querySelector('.dot-navigation');
console.log("Mike !!!!!!!!!!!!!!!!!!!!200000012 : "); // Print the correct index
let currentSlide = 0;
console.log("Mike !!!!!!!!!!!!!!!!!!!!200000013 : "); // Print the correct index
let slideInterval;
console.log("Mike !!!!!!!!!!!!!!!!!!!!200000014 : "); // Print the correct index

// Initially set the first slide and dot as active
console.log("Mike !!!!!!!!!!!!!!!!!!!!200000004 : "); // Print the correct index
slides[currentSlide].classList.add('active');
console.log("Mike !!!!!!!!!!!!!!!!!!!!200000005 : "); // Print the correct index

// Generate dot navigation based on the number of slides
slides.forEach((slide, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot-navigation-item');
    dot.addEventListener('click', () => navigateToSlide(index));
    dotsContainer.appendChild(dot);
    
    slide.addEventListener('click', () => {
        const link = slide.getAttribute('data-link');
        console.log("Mike index: " + (index + 1)); // This will now print the correct index
        console.log("Mike link: " + link);
        window.open(link, '_blank');
    });
});




console.log("Mike !!!!!!!!!!!!!!!!!!!!200000006 : "); // Print the correct index

// Function to navigate to a specific slide
function navigateToSlide(index) {
    console.log("Mike !!!!!!!!!!!!!!!!!!!!200000002 : "); // Print the correct index
    // Stop the slide interval
    clearInterval(slideInterval);

    // Remove active class from all slides and dots
    slides.forEach((slide) => slide.classList.remove('active'));
    const dots = dotsContainer.querySelectorAll('.dot-navigation-item');
    dots.forEach((dot) => dot.classList.remove('active'));

    // Add active class to the selected slide and dot
    slides[index].classList.add('active');
    
    dots[index].classList.add('active');

  // Log the link of the currently active slide
  const link = slides[index].getAttribute('data-link');
  console.log("Mike Current slide link: " + link); // Print to console
  
  
  
      // Add click event listener to the active slide
    slides[index].addEventListener('click', function() {
        console.log("Mike index for active slide: " + (index + 1)); // Print the correct index
        console.log("mike link for active slide: " + link); // Print the correct link
        window.open(link, '_blank'); // Open the link in a new tab
    });
  
      // Confirm that the event listener has been added
    console.log("Click event listener added to slide: " + (index + 1));
  

  // Update the current slide index
  currentSlide = index;
  console.log("Mike currentSlide slide number 11 : " + (currentSlide + 1));

    // Start the slide interval again
    slideInterval = setInterval(nextSlide, 5000);
}
console.log("Mike !!!!!!!!!!!!!!!!!!!!200000007 : "); // Print the correct index
// Function to navigate to the next slide
function nextSlide() {
    console.log("Mike !!!!!!!!!!!!!!!!!!!!200000003 : "); // Print the correct index
    currentSlide = (currentSlide + 1) % slides.length;
    navigateToSlide(currentSlide);
    console.log("Current slide number: " + (currentSlide + 1));
}
console.log("Mike !!!!!!!!!!!!!!!!!!!!200000008 : "); // Print the correct index
// Start the slide interval
slideInterval = setInterval(nextSlide, 5000);

console.log("Mike !!!!!!!!!!!!!!!!!!!!200000009 : "); // Print the correct index
