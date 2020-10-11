// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var psCriteria = [];
  var psCharString = "";
  var passwordResult = "";
  var psCharStringArr = ["abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMOPQRSTUVWXYZ", "1234567890", " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"];

  //Handles the case if the user enters in a floating number, automatically forces it to be an integer
  var psLength = parseInt(prompt("For length of password, please enter a number between 8 and 128"));

  if (isNaN(psLength)) {

    //Handles the case if user does not enter a number for password length
    passwordResult = "ERROR:  Password generation failed. \n Please generate password again and enter a NUMBER for password length.";

  } else if (psLength < 8 || psLength > 128) {

    //Handles the case if user doe not enter a number between 8 and 128
    passwordResult = "ERROR:  Password generation failed. \n Please generate password again and enter a number BETWEEN 8 and 128 for password length.";

  } else {

    //Stores user answer for including lowercase in password criteria
    psCriteria[0] = confirm("Do you want password character type to include lowercase?");
    //Stores user answer for including uppercase in password criteria
    psCriteria[1] = confirm("Do you want password character type to include uppercase?");
    //Stores user answer for including numeric in password criteria
    psCriteria[2] = confirm("Do you want password character type to include numeric?");
    //Stores user answer for including special characters in password criteria
    psCriteria[3] = confirm("Do you want password character type to include special characters?");

    //Ceate the string that we will randomly select characters from for password
    for (let i = 0; i < psCharStringArr.length; i++) {
      if (psCriteria[i]) {
        psCharString = psCharString.concat(psCharStringArr[i]);
      }
    }

    if (psCharString === "") {

      //Handles the case if the user does not select any password criteria
      passwordResult = "ERROR:  Password generation failed. \n Please generate password again and select at least one criteria:  lowercase, uppercase, numeric, and/or special characters.";

    } else {

      for (let i = 0; i < psLength; i++) {
        let randomNum = Math.round(Math.random() * psCharString.length);
        //Generates the password
        passwordResult = passwordResult.concat(psCharString[randomNum]);

      }
    }
  }
  return passwordResult;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);