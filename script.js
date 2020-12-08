// Assignment Code
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

// Arrays
var LetterCaseArray=[];
var LowCase=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var UpperCase=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","W","X","Y","Z"];
var Characters=["!","@","#","$","%","^","&","*","(",")","{","}","|","[","]",";","'",":","<",">","?","/"];
var Numbers=["1","2","3","4","5","6","7","8","9","0"];

// Defining Variables
var confirmlength = "";
var confirmLowCase;
var confirmUpperCase;
var confirmCharacters;
var confirmNumbers;

// Write password to the #password input
function writePassword() {
    var passwordString="";
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

var confirmlength = (prompt("How many characters would you like your password to be?"))

    // Outside of Paramaters - Loop
    while(confirmlength <=7 ||confirmlength >=129) {
        alert("Error: Password must be between 8 and 128 characters. Please try again!")
    }
    var passwordString="";
    var confirmLowCase=confirm("Would you like to use a lowercase letter?");
    var confirmUpperCase=confirm("Would you like to use a lowercase letter?");
    var confirmCharacters=confirm("Would you like to use a special character?");
    var confirmNumbers=confirm("Would you like to use a number?");


        // If "False" Chosen for all - Loop
        while(confirmLowCase===false && confirmUpperCase===false && confirmCharacters===false && confirmNumbers===false) {
            alert("Error: You must pick at least one option. Please try again!");
            var confirmLowCase=confirm("Would you like to use a lowercase letter?");
            var confirmUpperCase=confirm("Would you like to use a lowercase letter?");
            var confirmCharacters=confirm("Would you like to use a special character?");
            var confirmNumbers=confirm("Would you like to use a number?");
        }

    // If Statements for user input
              if (LowCase==true) {
                Math.random(LowCase);
                }
              if (UpperCase==true){
                Math.random(UpperCase);
                }
             if (Characters==true){
                 Math.random(SpecChar);
                }
             if (Numbers==true){
                 Math.random(Numbers)
                }

}




//   passwordText.value = password;
// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);