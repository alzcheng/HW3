// Assignment Code
var generateBtn = document.querySelector("#generate");

//Function created for assembling an unique array
function unique(value, index, self) {
    return self.indexOf(value) === index;
}

//Function created for generating the right password
function generatePassword() {

    //Initialize variables
    let psCriteria = [];
    let numberOfCriteria = 4;
    let psCharString = "";
    let passwordResult = "";
    let psStringSplit = [];
    let psUniqueIndex = [];
    let psLength;
    let criteriaArr = ["lowercase", "uppercase", "numeric", "special characters"];
    let psCharStringArr = ["abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "1234567890", " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"];

    //Stores user answer for including lowercase in password criteria and alert user of their choice
    for (i = 0; i < numberOfCriteria; i++) {
        psCriteria[i] = confirm("Do you want password character type to include " + criteriaArr[i] + "?");
        if (psCriteria[i]) {
            alert("You have chosen to include " + criteriaArr[i] + " in your password");
        } else {
            alert("You DID NOT want to include " + criteriaArr[i] + " in your password");
        }
    }

    //Check to see if user has selected at least 1 criteria
    if (psCriteria[0] || psCriteria[1] || psCriteria[2] || psCriteria[3]) {

        //Handles the case if the user enters in a floating number, automatically forces it to be an integer
        psLength = parseInt(prompt("For length of password, please enter a number between 8 and 128"));
        alert("You want to generate a password that is " + psLength + " characters long.");

        if (isNaN(psLength)) {

            //Handles the case if user does not enter a number for password length
            passwordResult = "ERROR:  Password generation failed. \n Please generate password again and enter a NUMBER for password length.";

        } else if (psLength < 8 || psLength > 128) {

            //Handles the case if user does not enter a number between 8 and 128
            passwordResult = "ERROR:  Password generation failed. \n Please generate password again and enter a number BETWEEN 8 and 128 for password length.";

        } else {

            //Create the string that we will randomly select characters from for generating the password
            for (let i = 0; i < psCharStringArr.length; i++) {
                if (psCriteria[i]) {
                    psCharString = psCharString.concat(psCharStringArr[i]);
                }
                //Creates a random array of indexes called psUniqueIndex that will be used to ensure the password has the minimum 
                //required criteria characters
                psUniqueIndex[i] = Math.floor(Math.random() * psLength);
            }

            //Generates the random password
            for (let i = 0; i < psLength; i++) {
                let randomNum = Math.floor(Math.random() * psCharString.length);
                passwordResult = passwordResult.concat(psCharString[randomNum]);
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
            //Making sure that randomly there is at least 1 character satisfying the criteria 
            for (let i = 0; i < psCriteria.length; i++) {
                //Generate a random index within the lengh of the possible characters for the criteria to be placed in password
                let psCharStringIndex = Math.floor(Math.random() * psCharStringArr[i].length);
                if (psCriteria[i]) {
                    psStringSplit[psUniqueIndex[i]] = psCharStringArr[i][psCharStringIndex];
                }
            }
            passwordResult = psStringSplit.join("");
        }

    } else {

        //User did not select any criteria
        passwordResult = "ERROR:  Password generation failed. \n Please generate password again and select at least one criteria:  lowercase, uppercase, numeric, and/or special characters.";
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