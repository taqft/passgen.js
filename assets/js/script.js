// Assignment Code - Do Not Change
const generateBtn = document.querySelector("#generate");
const copyBtn = document.querySelector("#copy");

// Define UTF codes for allowed characters.
const lowerChars = [97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122];
const upperChars = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90];
const numChars = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57];
const specialChars = [32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 58, 59, 60, 61, 62, 63, 64, 91, 92, 93, 94, 95, 96, 123, 124, 125, 126];

// Include lowercase checkbox 
// UTF Characters 97 - 122
const lowerInput = document.getElementById("Lowercase");

// Include uppercase checkbox 
// UTF Characters 65 - 90
const upperInput = document.getElementById("Uppercase");

// Include numeric checkbox 
// UTF Characters 48 - 57
const numInput = document.getElementById("Numbers");

// Include special characters checkbox 
// UTF Characters 32 - 47 and 58 - 64 and 91 - 96 and 123 - 126
const specialInput = document.getElementById("Special");

// Initialize checkboxes so they are checked when the page loads.
document.getElementById("Lowercase").checked = true;
document.getElementById("Uppercase").checked = true;
document.getElementById("Numbers").checked = true;
document.getElementById("Special").checked = true;

// Choose password length 8-128 characters
// Grab the slider value and insert into the input field
let slider = document.getElementById("chooseLength");
let output = document.getElementById("numLength");
output.value = slider.value;

// Set the input value to the slider value
slider.oninput = function () {
  output.value = this.value;
}

// Set the slider value to the input value
output.oninput = function () {
  slider.value = this.value;
}

// Generate password with selected criteria
// Pseudo-random password generation
function generatePassword() {

  // Define variables
  let pwLength = slider.value;
  let newChar = '';
  let nextChar = '';
  let possibleChars = [];
  let pwText = document.getElementById("password");

  // Clear any stored data in memory
  newChar = '';
  nextChar = '';
  pwText.innerHTML = '';
  possibleChars = [];

  // Check if lowercase is allowed, if so: include those characters
  if (lowerInput.checked) {
    possibleChars = possibleChars.concat(lowerChars)
  };

  // Check if uppercase is allowed, if so: include those characters
  if (upperInput.checked) {
    possibleChars = possibleChars.concat(upperChars)
  };

  // Check if numbers are allowed, if so: include those characters
  if (numInput.checked) {
    possibleChars = possibleChars.concat(numChars)
  };

  // Check if special chars are allowed, if so: include those characters
  if (specialInput.checked) {
    possibleChars = possibleChars.concat(specialChars)
  };

  // Randomly determine each character of the password
  // depending on the selected options. First, select
  // a random number between 0 and the size of the array
  // of possible characters. Then, use that value as the
  // selected index for the array containing all possible
  // allowed characters, and add that char to the textarea.
  for (let i = 0; i < pwLength; i++) {
    nextChar = Math.floor(Math.random() * (possibleChars.length - 1));
    newChar = String.fromCharCode(possibleChars[nextChar]);
    pwText.innerHTML += newChar;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Add event listener to copy password button
copyBtn.addEventListener("click", copyPassword);

// Write password to the page
// Write password to the #password textarea
function writePassword() {
  // Validate inputs - at least one character type must be selected
  if (lowerInput.checked || upperInput.checked || numInput.checked || specialInput.checked) {
    generatePassword();
  } else
    alert("Please select an option.")
  return false;

}

function copyPassword() {
  var copyText = document.querySelector("#password");

  copyText.select();
  copyText.setSelectionRange(0, 128);

  navigator.clipboard.writeText(copyText.innerHTML);
}