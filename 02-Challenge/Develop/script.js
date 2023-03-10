// Assignment Code
// targets the button id generate
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const symbols = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "{", "}", "~"]
  const lettersUp = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  const lettersLow = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
 

  var userChoice = window.prompt("How many characters would you like your password to contain?");

  if (!userChoice) {
    return;
  }

  var x = Number;


 if (x < 8) {
  window.alert("Password MUST contain more than 8 characters!");
} 
 

 
 



  

  // Prompt user for PW criteria for length btw 8 to 128
  // PW 8-128 characters
  // uppercase, lowercase, numbers, symbols
  // input validation
  // display PW on the textarea




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
