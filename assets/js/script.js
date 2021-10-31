// Assignment Code - Do Not Change
const generateBtn = document.querySelector("#generate");

// Pseudo-random password generation
function generatePassword() {
  return Math.random();
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Choose password length 8-128 characters


// Include lowercase


// Include uppercase


// Include numeric


// Include special characters


// Validate inputs - at least one character type must be selected


// Generate password with selected criteria


// Write password to the page