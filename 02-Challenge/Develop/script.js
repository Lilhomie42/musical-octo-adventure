// Assignment Code
// targets the button id generate
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  const nums = ["0123456789"];
  const symbols = ["!#$%&'()*+-/:;<=>?@[]{}~'"];
  const lettersUp = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  const lettersLow = ["abcdefghijklmnopqrstuvwxyz"];
  // when i click button the password has commas in password generator. removed commas to avoid more commas generated in textarea.

  var password = "";
 
  var passwordRange = parseInt(window.prompt ("How many characters would you like your password to contain?"));
  console.log(passwordRange);
  if (Number.isNaN(passwordRange) || passwordRange < 8 || passwordRange > 128) {      // moved if statement to line 16 from line 27 due to js reading top to bottom. Replaced return "" => return null
    alert("Password must contain 8 to 128 characters!");           // Prompts user to enter a number btw 8 to 128.
    return null;
  }
  var addLowCase = window.confirm("Click `OK` if you would like to include lowercase letters?" );
  var addUpCase = window.confirm("Click `OK` if you would like to include uppercase letters?" );
  var addNumbers = window.confirm("Click `OK` if you would like to include numbers?" );
  var addSpecial = window.confirm("Click `OK` if you would like to include special characters?" );

// if not a number exit OR password is less than 8 exit OR if password is more than 128 exi.  

  // if (passwordRange < 8 || passwordRange > 128) {
  //   alert("Password must contain 8 to 128 characters!");
  //   return null;
  // }
  
// if false (user cancels all window POPUPS)
  if (!(addLowCase || addUpCase || addNumbers || addSpecial)) {
    alert("You MUST include one character type!");
    return null;
  }

  let userPassword = ""

  if (addLowCase) {
  userPassword += lettersLow;           //removed the else from the if statements due to only generated one true statement.
  }
   if (addUpCase) {
    userPassword += lettersUp;
  } 
  if (addNumbers) {
    userPassword += nums;
  } 
  if (addSpecial) {
    userPassword += symbols;
  }

  for (var i = 0; i < passwordRange; i++) {
    var index = Math.floor(Math.random()* userPassword.length);

    password += userPassword.charAt(index);
    console.log(password)
  }

  // Prompt user for PW criteria for length btw 8 to 128
  // PW 8-128 characters
  // uppercase, lowercase, numbers, symbols
  // input validation
  // display PW on the textarea

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
