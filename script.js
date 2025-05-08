window.onload = function () {
  alert("Welcome to the Pizza Diameter Calculator and Password Creator!, We Have Music Playing In The Background,Please Allow Permissions If you want to hear it!, If You Want To Mute It, Just Mute Your Device! Or Click The Mute Button!"); // Alert the user when the page loads
  // Add a button to mute the music
  const muteButton = document.createElement("button");
  muteButton.innerText = "Mute Music";
  muteButton.style.position = "fixed";
  muteButton.style.top = "10px";
  muteButton.style.right = "10px";
  muteButton.style.zIndex = "1000"; // Ensure the button is on top of other elements
  document.body.appendChild(muteButton);
  muteButton.style.left = "50%";
  muteButton.style.transform = "translateX(-50%)";
  // Mute the background music when the button is clicked
  muteButton.addEventListener("click", function () {
    const audio = document.querySelector("audio");
    if (audio) {
      audio.muted = !audio.muted; // Toggle mute
      muteButton.innerText = audio.muted ? "Unmute Music" : "Mute Music"; // Change button text based on mute state
    }
  });
  // Prompt user to allow audio and reload the page if denied
  if (!backgroundAudio.autoplay) {
    const allowAudio = confirm(
      "Audio playback is disabled. Would you like to enable it? The page will reload if you choose 'OK'."
    );
    if (allowAudio) {
      location.reload();
    }
  }

  // Add a button to copy the password to the clipboard
  const copyButton = document.createElement("button");
  copyButton.innerText = "Copy Password";
};

// Function to generate a unique UUID password
function generateUUIDPassword() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    /[xy]/g,
    function (char) {
      const random = (Math.random() * 16) | 0;
      const value = char === "x" ? random : (random & 0x3) | 0x8;
      return value.toString(16);
    }
  );
} // Hey little coders note i just decided to get my friend to help me with this first part cause im terrible at math

// Example usage
const uniquePassword = generateUUIDPassword();
// Generate and display 3 unique UUID passwords
function displayUUIDPasswords() {
  const passwords = [
    generateUUIDPassword(),
    generateUUIDPassword(),
    generateUUIDPassword(),
  ];
  console.log("Generated UUID Passwords:", passwords);
}

// Example usage: Call the function to display passwords
displayUUIDPasswords();

// This is a little coders note, i wanna see how to make it copy whatever password is generated to the users clipboard

// Password Creator
function generatePassword(event) {
  event.preventDefault();
  const length = parseInt(document.getElementById("length").value);
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  document.getElementById(
    "password-result"
  ).innerText = `Generated Password: ${password}`;
}
document.getElementById("length").addEventListener("input", function () {
  if (parseInt(this.value) > 10) {
    alert("Please enter a number less than or equal to 10.");
    this.value = "";
  }
});
// Prompt user to enter a number if the field is left blank
document.getElementById("length").addEventListener("blur", function () {
  if (!this.value) {
    alert("Please enter a number for the password length.");
  }
});

// Log the generated password in a created space on the page
const passwordLogSection = document.createElement("div");
passwordLogSection.id = "password-log";
passwordLogSection.style.marginTop = "20px";
const instructionText = document.createElement("p");
instructionText.innerText =
  "Or you can copy 1 of our premade passwords already!";
passwordLogSection.appendChild(instructionText);
passwordLogSection.innerHTML =
  "<h3>Password Log</h3><ul id='password-log-list'></ul>";
document.body.appendChild(passwordLogSection);

function logGeneratedPassword(password) {
  const passwordLogList = document.getElementById("password-log-list");
  const passwordLogItem = document.createElement("li");
  passwordLogItem.innerText = `Generated Password: ${password}`;
  passwordLogList.appendChild(passwordLogItem);
}

// Example usage: Log the generated UUID passwords
const passwords = [
  generateUUIDPassword(),
  generateUUIDPassword(),
  generateUUIDPassword(),
];
passwords.forEach(logGeneratedPassword);
/* Add settings.json for cSpell configuration 
Changed var to const for better practice and changed var to parseInt for better practice
*/
// Pizza Calculation
document
  .getElementById("pizza-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const diameter = parseFloat(document.getElementById("diameter").value);
    if (diameter <= 0) {
      alert("Please enter a positive number for the diameter.");
      return;
    }
    const radius = diameter / 2;
    const area = Math.PI * Math.pow(radius, 2);
    const cost = area * 0.05; // Assuming $0.05 per square inch (I'm Not a math wiz, i am not afraid to admit i needed help with this)
    document.getElementById("pizza-result").innerText = `Area: ${area.toFixed(
      2
    )} square inches, Cost: $${cost.toFixed(2)}`;
  });

// Add A Secondary Input Later On To Show The Cost Of The Inch Of Pizza
/* Create a log section for square inches and cost
const logSection = document.createElement("div");
logSection.id = "pizza-log";
logSection.style.marginTop = "20px";
logSection.innerHTML = "<h3>Pizza Calculation Log (Unusable)</h3><ul id='log-list'></ul>";
document.body.appendChild(logSection);

// Update the pizza calculation to log results
document.getElementById("pizza-form").addEventListener("submit", function (event) {
  event.preventDefault();
  const diameter = parseFloat(document.getElementById("diameter").value);
  if (diameter <= 0) {
    alert("Please enter a positive number for the diameter.");
    return;
  }
  const radius = diameter / 2;
  const area = Math.PI * Math.pow(radius, 2);
  const cost = area * 0.05; // Assuming $0.05 per square inch

  // Display the result
  document.getElementById("pizza-result").innerText = `Area: ${area.toFixed(
    2
  )} square inches, Cost: $${cost.toFixed(2)}`;

  // Log the result
  const logList = document.getElementById("log-list");
  const logItem = document.createElement("li");
  logItem.innerText = `Diameter: ${diameter} inches, Area: ${area.toFixed(
    2
  )} square inches, Cost: $${cost.toFixed(2)}`;
  logList.appendChild(logItem);
}); */
// Prevent user from entering negative numbers in the diameter input
document.getElementById("diameter").addEventListener("input", function () {
  if (parseFloat(this.value) < 0) {
    alert("Please enter a positive number for the diameter.");
    this.value = "";
  }
});
// Remove duplicate event listener for pizza-form submission
document
  .getElementById("pizza-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const diameter = parseFloat(document.getElementById("diameter").value);
    if (diameter <= 0) {
      alert("Please enter a positive number for the diameter.");
      return;
    }
    const radius = diameter / 2;
    const area = Math.PI * Math.pow(radius, 2);
    const cost = area * 0.05; // Assuming $0.05 per square inch

    // Display the result
    document.getElementById("pizza-result").innerText = `Area: ${area.toFixed(
      2
    )} square inches, Cost: $${cost.toFixed(2)}`;

    // Log the result
    const logList = document.getElementById("log-list");
    const logItem = document.createElement("li");
    logItem.innerText = `Diameter: ${diameter} inches, Area: ${area.toFixed(
      2
    )} square inches, Cost: $${cost.toFixed(2)}`;
    logList.appendChild(logItem);
  });
// Hey 👋, Little Note under this, i am terrible at math so with this part i had to get my friend to help me with this (i know im old enough to be able to do this quickly, i hate math)


// Add Wii Shop Channel Main Theme as background music
const backgroundAudio = document.createElement("audio");
backgroundAudio.src = "Wii Shop Channel Main Theme (HQ).mp3"; // Ensure the file is in the correct directory
backgroundAudio.type = "audio/mpeg";
backgroundAudio.loop = true; // Loop the audio
backgroundAudio.autoplay = true; // Automatically play the audio
backgroundAudio.style.display = "none"; // Hide the audio element
document.body.appendChild(backgroundAudio);

// The Audio Part was looked up on with youtube because i wanted to add a little bit of fun to the page, i know its not the best but i thought it was a good idea to add some music to the page