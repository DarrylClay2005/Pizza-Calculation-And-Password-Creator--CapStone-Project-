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
// Prompt user to enter a number if the field is left blank
document.getElementById("length").addEventListener("blur", function () {
  if (!this.value) {
    alert("Please enter a number for the password length.");
  }
});
/* Add settings.json for cSpell configuration 
Changed var to const for better practice and changed var to parseInt for better practice
*/
// Pizza Calculation
document
  .getElementById("pizza-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const diameter = parseFloat(
      document.getElementById("diameter").value
    );
    const radius = diameter / 2;
    const area = Math.PI * Math.pow(radius, 2);
    const cost = area * 0.05; // Assuming $0.05 per square inch (I'm Not a math wiz, i am not afraid to admit i needed help with this)
    document.getElementById(
      "pizza-result"
    ).innerText = `Area: ${area.toFixed(
      2
    )} square inches, Cost: $${cost.toFixed(2)}`;
  });
  
// Add A Secondary Input Later On To Show The Cost Of The Inch Of Pizza
// Hey 👋, Little Note under this, i am terrible at math so with this part i had to get my friend to help me with this (i know im old enough to be able to do this quickly, i hate math)