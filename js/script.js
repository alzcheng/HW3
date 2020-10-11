// Assignment Code
var generateBtn = document.querySelector("#generate");

//GIVEN I need a new, secure password
//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password
//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
//WHEN prompted for character types to include in the password
//THEN I choose lowercase, uppercase, numeric, and/or special characters
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page
// Write password to the #password input

function generatePassword() {
  var psLength = prompt("For length of password, please enter a number between 8 and 128");
  var psCriteria = [];
  psCriteria[0] = confirm("Do you want password character type to include lowercase?");
  psCriteria[1] = confirm("Do you want password character type to include uppercase?");
  psCriteria[2] = confirm("Do you want password character type to include numeric?");
  psCriteria[3] = confirm("Do you want password character type to include special characters?");
  var psCharStringArr = ["abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMOPQRSTUVWXYZ", "1234567890", " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"];
  var psCharString = "";

  for (let i = 0; i < psCharStringArr.length; i++) {
    if (psCriteria[i]) {
      psCharString = psCharString.concat(psCharStringArr[i]);
    }
  }

  return psCharString;

}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
