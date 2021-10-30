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
