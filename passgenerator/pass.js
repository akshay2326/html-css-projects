const passwordBox = document.getElementById("password");
const generateBtn = document.getElementById("generate");

const length = 12;
const upperCase = "ABCDEFGHIJLKMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "123456789";
const symbol = "#$%^&*()_+=><";

const allchars = upperCase + lowerCase + number + symbol;

function createPassword() {  
    let password = "";

    // Ensuring at least one character from each category
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    // Fill the rest of the password length
    while (password.length < length) {
        password += allchars[Math.floor(Math.random() * allchars.length)];
    }



    // Display the password in the input field
    passwordBox.value = password;
}

// Run function when the button is clicked
generateBtn.addEventListener("click", createPassword);
