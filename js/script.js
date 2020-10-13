// Assignment Code
var generateBtn = document.querySelector("#generate");

//Function created for assembling an unique array
function unique(value, index, self) {
  return self.indexOf(value) === index;
}

//Function created for generating the right password
function generatePassword() {

  //Initialize variables
  var psCriteria = [];
  var psCharString = "";
  var passwordResult = "";
  var psStringSplit = [];
  var psUniqueIndex = [];
  var psCharStringArr = ["abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "1234567890", " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"];

  //Handles the case if the user enters in a floating number, automatically forces it to be an integer
  var psLength = parseInt(prompt("For length of password, please enter a number between 8 and 128"));
  alert("You want to generate a password that is " + psLength + " characters long.");

  if (isNaN(psLength)) {

    //Handles the case if user does not enter a number for password length
    passwordResult = "ERROR:  Password generation failed. \n Please generate password again and enter a NUMBER for password length.";

  } else if (psLength < 8 || psLength > 128) {

    //Handles the case if user does not enter a number between 8 and 128
    passwordResult = "ERROR:  Password generation failed. \n Please generate password again and enter a number BETWEEN 8 and 128 for password length.";

  } else {

    //Stores user answer for including lowercase in password criteria and alert user of their choice
    psCriteria[0] = confirm("Do you want password character type to include lowercase?");
    if (psCriteria[0]) {
      alert("You have chosen to include lowercase in your password");
    } else {
      alert("You DID NOT want to include lowercase in your password");
    }
    //Stores user answer for including uppercase in password criteria and alert user of their choice
    psCriteria[1] = confirm("Do you want password character type to include uppercase?");
    if (psCriteria[1]) {
      alert("You have chosen to include uppercase in your password");
    } else {
      alert("You DID NOT want to include uppercase in your password");
    }
    //Stores user answer for including numeric in password criteria and alert user of their choice
    psCriteria[2] = confirm("Do you want password character type to include numeric?");
    if (psCriteria[2]) {
      alert("You have chosen to include numeric in your password");
    } else {
      alert("You DID NOT want to include numeric in your password");
    }
    //Stores user answer for including special characters in password criteria and alert user of their choice
    psCriteria[3] = confirm("Do you want password character type to include special characters?");
    if (psCriteria[3]) {
      alert("You have chosen to include special characters in your password");
    } else {
      alert("You DID NOT want to include special characters in your password");
    }

    //Create the string that we will randomly select characters from for generating the password
    for (let i = 0; i < psCharStringArr.length; i++) {
      if (psCriteria[i]) {
        psCharString = psCharString.concat(psCharStringArr[i]);
      }
      //Creates a random array of indexes called psUniqueIndex that will be used to ensure the password has the minimum 
      //required criteria characters
      psUniqueIndex[i] = Math.floor(Math.random() * psLength);
    }

    if (psCharString === "") {

      //Handles the case if the user does not select any password criteria
      passwordResult = "ERROR:  Password generation failed. \n Please generate password again and select at least one criteria:  lowercase, uppercase, numeric, and/or special characters.";

    } else {

      //Generates the random password
      for (let i = 0; i < psLength; i++) {
        let randomNum = Math.floor(Math.random() * psCharString.length);
        passwordResult = passwordResult.concat(psCharString[randomNum]);
      }
    }

    //Filter psUniqueIndex to make it a unique array
    psUniqueIndex = psUniqueIndex.filter(unique);

    //Reassemble psUniqueIndex such that it will have the same length as the original psUniqueIndex
    while (psUniqueIndex.length < psCharStringArr.length) {
      for (let i = psUniqueIndex.length; i < psCharStringArr.length; i++) {
        psUniqueIndex[i] = Math.floor(Math.random() * psLength);
        psUniqueIndex = psUniqueIndex.filter(unique);
      }
    }

    psStringSplit = passwordResult.split('');
    //Making sure that there is at least 1 character satisfying the criteria 
    for (let i = 0; i < psCriteria.length; i++) {
      //Generate a random index within the lengh of the possible characters for the criteria to be placed in password
      let psCharStringIndex = Math.floor(Math.random() * psCharStringArr[i].length);
      if (psCriteria[i]) {
        psStringSplit[psUniqueIndex[i]] = psCharStringArr[i][psCharStringIndex];
      }
    }
    passwordResult = psStringSplit.join("");
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