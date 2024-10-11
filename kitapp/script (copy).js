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
      playSoundForKey(key); // Replay the sound for the recorded key
    }, time);
  }
  
  // When done replaying, show this message
  setTimeout(function() {
    recordingStatus.textContent = "Replay finished.";
  }, recording[recording.length - 1].time + 1000); // Adds a small delay to update the message after replay
}

// Function to play the sound for each key
function playSoundForKey(key) {
  switch (key) {
    case "a":
      kickSound.currentTime = 0;
      kickSound.play();
      break;
    case "s":
      rideSound.currentTime = 0;
      rideSound.play();
      break;
    case "d":
      snareSound.currentTime = 0;
      snareSound.play();
      break;
    case "f":
      tomSound.currentTime = 0;
      tomSound.play();
      break;
    case "g":
      hiHatSound.currentTime = 0;
      hiHatSound.play();
      break;
    case "h":
      boomSound.currentTime = 0;
      boomSound.play();
      break;
    case "j":
      clapSound.currentTime = 0;
      clapSound.play();
      break;
    case "k":
      openhatSound.currentTime = 0;
      openhatSound.play();
      break;
  }
}

// Event listener to capture key presses and record them
document.addEventListener("keydown", function(event) {
  if (isRecording) {
    // Push the key and the time elapsed since the start of recording
    recording.push({ key: event.key, time: Date.now() - startTime });
  }

  // Play the sound for the key pressed
  playSoundForKey(event.key);
});

// Event listeners for starting/stopping recording and replaying
document.getElementById("start-recording").addEventListener("click", startRecording);
document.getElementById("stop-recording").addEventListener("click", stopRecording);
document.getElementById("replay").addEventListener("click", replayRecording);




// Attach a click event listener to the kick button
kickButton.addEventListener("click", function() {
  // Reset the sound time to replay it
  kickSound.currentTime = 0;
  
  // Play the kick sound
  kickSound.play();
});

rideButton.addEventListener("click", function() {
  // Reset the sound time to replay it
  rideSound.currentTime = 0;
  
  // Play the kick sound
  rideSound.play();
});

snareButton.addEventListener("click", function() {
  snareSound.currentTime = 0;
  snareSound.play();
});

tomButton.addEventListener("click", function() {
  tomSound.currentTime = 0;
  tomSound.play();
});

hiHatButton.addEventListener("click", function() {
  hiHatSound.currentTime = 0;
  hiHatSound.play();
});

boomButton.addEventListener("click", function() {
  // Reset the sound time to replay it
  boomSound.currentTime = 0;
  
  // Play the kick sound
  boomSound.play();
});
clapButton.addEventListener("click", function() {
  // Reset the sound time to replay it
  clapSound.currentTime = 0;
  
  // Play the kick sound
  clapSound.play();
});
openhatButton.addEventListener("click", function() {
  // Reset the sound time to replay it
  openhatSound.currentTime = 0;
  
  // Play the kick sound
  openhatSound.play();
});

// Attach a keydown event listener to the document
document.addEventListener("keydown", function(event) {
  // Check if the pressed key is "a"
  if (event.key === "a") {
    kickSound.currentTime = 0;
    kickSound.play();
  } else if (event.key === "s") {
    rideSound.currentTime = 0;
    rideSound.play();
  } else if (event.key === "d") {
    snareSound.currentTime = 0;
    snareSound.play();
  } else if (event.key === "f") {
    tomSound.currentTime = 0;
    tomSound.play();
  } else if (event.key === "g") {
    hiHatSound.currentTime = 0;
    hiHatSound.play();
  } else if (event.key === "h") {
    boomSound.currentTime = 0;
    boomSound.play();
  }
  else if (event.key === "j") {
    clapSound.currentTime = 0;
    clapSound.play();
  }
  else if (event.key === "k") {
    openhatSound.currentTime = 0;
    openhatSound.play();
  }
  
});



const drumPattern = [
  { sound: kickSound, time: 0 },
  { sound: snareSound, time: 400 },
  { sound: hiHatSound, time: 600 },
  { sound: tomSound, time: 1000 },
  { sound: rideSound, time: 1400 },
  { sound: boomSound, time: 1800 },
  { sound: kickSound, time: 2200 },
  { sound: hiHatSound, time: 2400 },
  { sound: snareSound, time: 2800 },
  { sound: tomSound, time: 3200 },
  { sound: boomSound, time: 3600 },
  { sound: kickSound, time: 4000 },
  { sound: hiHatSound, time: 4200 },
  { sound: snareSound, time: 4400 },
  { sound: boomSound, time: 4800 },
  { sound: tomSound, time: 5200 },
  { sound: rideSound, time: 5600 }
];

// Function to play the sounds based on the pattern array
function playDrumSequence() {
  for (let i = 0; i < drumPattern.length; i++) {
    setTimeout(function() {
      drumPattern[i].sound.currentTime = 0;
      drumPattern[i].sound.play();
    }, drumPattern[i].time);
  }
}


