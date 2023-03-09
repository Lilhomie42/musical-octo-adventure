// Assignment Code
// targets the button id generate
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("click button");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
