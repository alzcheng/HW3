// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  var psCriteria = [];
  var psCharString = "";
  var passwordResult = "";
  var psStringSplit = [];
  var psCharStringArr = ["abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "1234567890", " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"];

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
        let randomNum = Math.floor(Math.random() * psCharString.length);
        //Generates the password
        passwordResult = passwordResult.concat(psCharString[randomNum]);
      }
    }
    console.log(passwordResult);
    psStringSplit = passwordResult.split('');
    //To make sure that there is at least 1 character satisfying the criteria 
    for (let i = 0; i < psCriteria.length; i++) {
      //Generate a random index within the length of the password to ensure criteria
      let psIndex = Math.floor(Math.random() * psLength);
      //Generate a random index within the lengh of the possible characters for the criteria to be placed in password
      let psCharStringIndex = Math.floor(Math.random() * psCharStringArr[i].length);
      console.log(psStringSplit)
      if (psCriteria[i]) {
        psStringSplit[psIndex] = psCharStringArr[i][psCharStringIndex];
        console.log(psStringSplit);
      }
    }
    passwordResult = psStringSplit.join("");
    console.log(passwordResult);
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