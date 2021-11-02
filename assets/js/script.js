// Assignment Code - Do Not Change
const generateBtn = document.querySelector("#generate");

// Init checkboxes
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

// Include lowercase
const lowerInput = document.getElementById("Lowercase");


// Include uppercase
const upperInput = document.getElementById("Uppercase");


// Include numeric
const numInput = document.getElementById("Numbers");


// Include special characters
const specialInput = document.getElementById("Special");


// Generate password with selected criteria
// Validate inputs - at least one character type must be selected

// Pseudo-random password generation
function generatePassword() {
  return Math.random();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the page
// Write password to the #password input
function writePassword() {
  if (lowerInput.checked || upperInput.checked || numInput.checked || specialInput.checked) {
    let password = generatePassword();
    let passwordText = document.querySelector("#password");

    passwordText.value = password;
  } else
    alert("Please select an option.")
    return false;

}