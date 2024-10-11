// Selecting elements from the HTML
const startButton = document.getElementById("startButton");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("timer");
const holes = document.querySelectorAll(".hole");

// Select audio elements for sounds
const bompSound = document.getElementById("bomp-sound");
const endSound = document.getElementById("end-sound");
const highSound = document.getElementById("high-sound");
const backgroundSound = document.getElementById("background-sound");

let score = 0;
let time = 30;
let isPlaying = false;
let countdown;

// List of image paths
const images = ["photo.jpeg", "photo1.png", "photo2.png"];

// Function to generate a random time interval
function randomTime(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to assign random images to holes
function randomizeImages() {
    holes.forEach(hole => {
        // Randomly pick an image
        const randomImage = images[Math.floor(Math.random() * images.length)];
        const imgElement = hole.querySelector("img");
        imgElement.src = randomImage;
    });
}

// Function to display images in holes
function displayImage() {
    // Randomize the images in the holes
    randomizeImages();

    // Clear any active images
    holes.forEach(hole => hole.classList.remove("active"));

    // Select a random hole
    const randomHole = holes[Math.floor(Math.random() * holes.length)];
    
    // Display the image in the selected hole
    randomHole.classList.add("active");

    // Set a random time for the image to be displayed
    const time = randomTime(800, 1500);
    
    // After the set time, hide the image
    setTimeout(() => {
        randomHole.classList.remove("active");
        
        // Continue the game loop if still playing
        if (isPlaying) {
            displayImage();
        }
    }, time);
}

// Function to start the game
function startGame() {
    score = 0;
    time = 30;
    isPlaying = true;
    startButton.disabled = true;
    startButton.textContent = "Playing...";
    backgroundSound.volume = 0.5;
    backgroundSound.play();

    // Display the initial score and time
    scoreDisplay.textContent = `Score: ${score}`;
    timeDisplay.textContent = `Time left: ${time}`;

    // Start the countdown timer
    countdown = setInterval(() => {
        time--;
        timeDisplay.textContent = `Time left: ${time}`;
        
        /* 
            Challenge:
            * Play "highSound" if the player score is higher than 9
            * Otherwise, play "endSound"
        */

        // End the game when time is up
        if (time === 0) {
            clearInterval(countdown);
            isPlaying = false;
            startButton.disabled = false;
            startButton.textContent = "Start Game";
            timeDisplay.textContent = getMessage();
            backgroundSound.pause();
            backgroundSound.currentTime = 0;
            score > 20 ? highSound.play() : endSound.play();
        }
    }, 1000);

    // Start displaying images
    displayImage();
}

// Event listener for the start button
startButton.addEventListener("click", startGame);

// Event listener for clicking on images
holes.forEach(hole => {
    hole.addEventListener("click", () => {
        if (hole.classList.contains("active")) {
            hole.classList.remove("active");
            score++;
            scoreDisplay.textContent = `Score: ${score}`;
            
            // Play bomp sound
            bompSound.currentTime = 0;
            bompSound.play();
            
            // Add a red border to the clicked image
            const image = hole.querySelector("img");
            image.classList.add("clicked");
            
            // Remove the red border after a short delay
            setTimeout(() => {
                image.classList.remove("clicked");
            }, 300);
        }
    });

    // Change cursor to hammer when hovering over the holes
    hole.addEventListener("mouseenter", () => {
        document.body.style.cursor = "url('hammer1.png') 32 32, auto";
    });

    hole.addEventListener("mouseleave", () => {
        document.body.style.cursor = "auto";  // Revert back to default cursor when leaving the hole
    });
});

// Function to get a fun message based on the score
function getMessage() {
    if (score === 0) {
        return "You blinked, didn't you?";
    } else if (score < 10) {
        return "Nice effort! Keep practicing!";
    } else if (score < 20) {
        return "You're getting good at this!";
    } else {
        return "Wow, you're a FaceBomp champion!";
    }
}

