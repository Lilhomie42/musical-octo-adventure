// Assignment Code
// targets the button id generate
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var symbols = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "{", "}", "~"]
  var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  console.log(number);




  return "Generate Password";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
