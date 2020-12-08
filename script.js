// Assignment Code
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

// Arrays
var LetterCaseArray=[];
var LowCase=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var UpperCase=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","W","X","Y","Z"];
var Characters=["!","@","#","$","%","^","&","*","(",")","{","}","|","[","]",";","'",":","<",">","?","/"];
var Numbers=["1","2","3","4","5","6","7","8","9","0"];

function generatePassword(){
    var confirmlength = (prompt("How many characters would you like your password to be?"))

    // Outside of Paramaters - Loop
    while(confirmlength <=7 ||confirmlength >=51) {
        alert("Error: Password must be between 8 and 50 characters. Please try again!")
    }
}

// Write password to the #password input
function writePassword() {
    var passwordString="";
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

var confirmlength = (prompt("How many characters would you like your password to be?"))

    // Outside of Paramaters - Loop
    while(confirmlength <=7 ||confirmlength >=51) {
        alert("Error: Password must be between 8 and 50 characters. Please try again!")
    }
    var passwordString="";
    var LowerCase=confirm("Would you like to use a lowercase letter?");
    var UpperCase=confirm("Would you like to use a lowercase letter?");
    var SpecChar=confirm("Would you like to use a special character?");
    var Number=confirm("Would you like to use a number?");

    // If Statements for user input
    if (LowerCase==true) {
        LetterCaseArray.push(LowerCase);
        }

    if (UpperCase==true){
        LetterCaseArray.random(UpperCase);
    }
    if (SpecChar==true){
        LetterCaseArray.push(SpecChar);
    }
    if (Numbers==true){
        LetterCaseArray.push(Numbers);
    }

}
    // passwordEntry.textContent=passwordString; 
    

//   passwordText.value = password;



// Add event listener to generate button

// console.log("Your password is " + passwordString);
    // alert("Your password is " + passwordString);
    // passwordEntry.textContent=passwordString;

// let generateButton=document.getElementById("generateButton");
// let passwordEntry=document.getElementById("passwordEntry");
// generateButton.onclick = generatePassword;

// generateBtn.addEventListener("click", writePassword);