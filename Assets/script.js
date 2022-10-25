// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min*(1 - rand) + rand*max)
}

function getRandomItem(list) {
  return list[randomInt(list.length)]
}

function generatePassword() {
  console.log("You clicked the button")

  var userInput = window.prompt("Input password length")

  var passwordLenght = parseInt(userInput)

  if (isNaN(passwordLenght)) {
    window.alert("Please only use numbers to pick a password length")
    return
  } 

  if(passwordLenght < 8 || passwordLenght > 128){
    window.alert("Password length must be between 8 and 128 characters")
    return 
  }
  var userWantsNumbers = window.confirm("Would you like to include numbers?")
  var userWantsUpperCase = window.confirm("Would you like to include uppercase letters?")
  var userWantsLowerCase = window.confirm("Would you like to include lowercase letters?")
  var userWantsSymbols = window.confirm("Would you like to include symbols?")

  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var symbolList = ["/", "%", "#", "@","&", "!" , "?", "$", "*", "<"]
  var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var uppercaseList = []

  var optionsPassword = []

  for (var i = 0; i < lowercaseList.length; i++) {
    uppercaseList[i] = lowercaseList[i].toUpperCase()
  }

  if (userWantsNumbers === true) {
    optionsPassword.push(numberList)
  }

  if (userWantsSymbols === true) {
    optionsPassword.push(symbolList)
  }

  if (userWantsLowerCase === true) {
    optionsPassword.push(lowercaseList)
  }

  if (userWantsUpperCase === true) {
    optionsPassword.push(uppercaseList)
  }

  if (optionsPassword.length === 0) {
    optionsPassword.push(lowercaseList)
  }

  var generatedPassword = ""

  for (var i = 0; i < passwordLenght; i++) {
    var randomList = getRandomItem(optionsPassword)
    var randomChar = getRandomItem(randomList)  
    generatedPassword += randomChar
  }

   return generatedPassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
