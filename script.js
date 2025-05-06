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
