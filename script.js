// Assignment Code
var generateBtn = document.querySelector("#generate");

// Assigning Characters to Arrays
var LetterCaseArray=[];
var LowCase=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var UpperCase=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","W","X","Y","Z"]
var Characters=["!","@","#","$","%","^","&","*","(",")","{","}","|","[","]",";","'",":","<",">","?","/"]
var Numbers=["1","2","3","4","5","6","7","8","9","0"]

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
    var passwordString="";
    var LowerCase=confirm("Would you like to use a lowercase letter?");
    var UpperCase=confirm("Would you like to use a lowercase letter?");
    var SpecChar=confirm("Would you like to use a special character?");
    var Number=confirm("Would you like to use a number?");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);