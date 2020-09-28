"use strict";

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// MY OWN CODE //

function generatePassword () {
var lowerCase = "abcdegfhijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberOptions = "0123456789";
var specialChar = "!@#$%^&*_+";

var lowerCaseCriteria = confirm("Would you like lowercase letters in your password");
var upperCaseCriteria = confirm("Would you like uppercase letters in your password");
var numberOptionsCriteria = confirm("Would you like numbers in your password");
var specialCharCriteria = confirm("Would you like special characters in your password");
var passwordSize = prompt("Please enter a number between 8 to 128 to indicate the amount of characters you would want your password to be");

var integerPasswordSize = parseInt(passwordSize)

if (isNaN(integerPasswordSize) || (integerPasswordSize<8 || integerPasswordSize>128)) {
  return "Incorrect size, please try again."
} 

var passwordResult = "";
var passwordCriteria = ""; 

if (lowerCaseCriteria) {
  passwordCriteria = passwordCriteria + lowerCase;
} 

if (upperCaseCriteria) {
  passwordCriteria = passwordCriteria + upperCase;
}

if (numberOptionsCriteria) {
  passwordCriteria = passwordCriteria + numberOptions;
}

if (specialCharCriteria) {
  passwordCriteria = passwordCriteria + specialChar;
}

if (!lowerCaseCriteria && !upperCaseCriteria && !numberOptionsCriteria && !specialCharCriteria){
  return "No criteria chosen, please try again."
}

for (var i = 0; i < integerPasswordSize; i++) {
var passwordSingleCharacter = passwordCriteria.charAt(Math.floor(Math.random() * passwordCriteria.length));
passwordResult = passwordResult + passwordSingleCharacter;
}

return passwordResult;

}
