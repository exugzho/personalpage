// Retrieve button elements for the drums
const kickButton = document.getElementById("kick");
const rideButton = document.getElementById("ride");
const snareButton = document.getElementById("snare");
const tomButton = document.getElementById("tom");
const hiHatButton = document.getElementById("hihat");
const boomButton = document.getElementById("boom");
const clapButton = document.getElementById("clap");
const openhatButton = document.getElementById("openhat");

// Retrieve the audio elements for the sounds
const kickSound = document.getElementById("kick-sound");
const rideSound = document.getElementById("ride-sound");
const snareSound = document.getElementById("snare-sound");
const tomSound = document.getElementById("tom-sound");
const hiHatSound = document.getElementById("hihat-sound");
const boomSound = document.getElementById("boom-sound");
const clapSound = document.getElementById("clap-sound");
const openhatSound = document.getElementById("openhat-sound");

// Element to show recording status
const recordingStatus = document.getElementById("recording-status");

// Array to store the recorded sequence of key presses
let recording = [];
let isRecording = false;
let startTime = 0;

// Function to start recording
function startRecording() {
  recording = []; // Clear the previous recording
  isRecording = true;
  startTime = Date.now(); // Get the start time
  console.log("Recording started...");
  
  // Show recording message on the screen
  recordingStatus.textContent = "Recording in progress...";
}

// Function to stop recording
function stopRecording() {
  isRecording = false;
  console.log("Recording stopped...");
  
  // Hide the recording message
  recordingStatus.textContent = "Recording stopped.";
}

// Function to replay the recorded sequence
function replayRecording() {
  if (recording.length === 0) {
    console.log("No recording to replay!");
    recordingStatus.textContent = "No recording available!";
    return;
  }

  console.log("Replaying...");

  // Hide the previous message
  recordingStatus.textContent = "Replaying the recording...";

  for (let i = 0; i < recording.length; i++) {
    const { key, time } = recording[i];

    // Use setTimeout to simulate the time delay between the original key presses
    setTimeout(function() {
      playSoundAndChangeColor(key); // Replay the sound and change the button color
    }, time);
  }
  
  // When done replaying, show this message
  setTimeout(function() {
    recordingStatus.textContent = "Replay finished.";
  }, recording[recording.length - 1].time + 1000); // Adds a small delay to update the message after replay
}

// Function to change the button color
function changeButtonColor(button) {
  button.style.backgroundColor = "#ff6347"; // Change to desired color (tomato)
  setTimeout(function() {
    button.style.backgroundColor = ""; // Reset color after 150ms
  }, 150);
}

// Function to play the sound and change the button color
function playSoundAndChangeColor(key) {
  key = key.toLowerCase();
  switch (key) {
    case "a":
      kickSound.currentTime = 0;
      kickSound.play();
      changeButtonColor(kickButton);
      break;
    case "s":
      rideSound.currentTime = 0;
      rideSound.play();
      changeButtonColor(rideButton);
      break;
    case "d":
      snareSound.currentTime = 0;
      snareSound.play();
      changeButtonColor(snareButton);
      break;
    case "f":
      tomSound.currentTime = 0;
      tomSound.play();
      changeButtonColor(tomButton);
      break;
    case "g":
      hiHatSound.currentTime = 0;
      hiHatSound.play();
      changeButtonColor(hiHatButton);
      break;
    case "h":
      boomSound.currentTime = 0;
      boomSound.play();
      changeButtonColor(boomButton);
      break;
    case "j":
      clapSound.currentTime = 0;
      clapSound.play();
      changeButtonColor(clapButton);
      break;
    case "k":
      openhatSound.currentTime = 0;
      openhatSound.play();
      changeButtonColor(openhatButton);
      break;
  }
}

// Attach a click event listener to each button
kickButton.addEventListener("click", function() {
  kickSound.currentTime = 0;
  kickSound.play();
  changeButtonColor(kickButton);
});

rideButton.addEventListener("click", function() {
  rideSound.currentTime = 0;
  rideSound.play();
  changeButtonColor(rideButton);
});

snareButton.addEventListener("click", function() {
  snareSound.currentTime = 0;
  snareSound.play();
  changeButtonColor(snareButton);
});

tomButton.addEventListener("click", function() {
  tomSound.currentTime = 0;
  tomSound.play();
  changeButtonColor(tomButton);
});

hiHatButton.addEventListener("click", function() {
  hiHatSound.currentTime = 0;
  hiHatSound.play();
  changeButtonColor(hiHatButton);
});

boomButton.addEventListener("click", function() {
  boomSound.currentTime = 0;
  boomSound.play();
  changeButtonColor(boomButton);
});

clapButton.addEventListener("click", function() {
  clapSound.currentTime = 0;
  clapSound.play();
  changeButtonColor(clapButton);
});

openhatButton.addEventListener("click", function() {
  openhatSound.currentTime = 0;
  openhatSound.play();
  changeButtonColor(openhatButton);
});

// Event listener to capture key presses and record them
document.addEventListener("keydown", function(event) {
  playSoundAndChangeColor(event.key);

  if (isRecording) {
    // Push the key and the time elapsed since the start of recording
    recording.push({ key: event.key, time: Date.now() - startTime });
  }
});

// Event listeners for starting/stopping recording and replaying
document.getElementById("start-recording").addEventListener("click", startRecording);
document.getElementById("stop-recording").addEventListener("click", stopRecording);
document.getElementById("replay").addEventListener("click", replayRecording);

