//The part dedicated to the declarations and initialisations
const USERNAME_WRONG="❌The username is not registered!";
const PASSWORD_WRONG="❌The password is incorrect!";

let usernameInput=document.getElementById('username-input');
let usernameText=document.getElementById('username-text');

let passwordInput=document.getElementById('password-input');
let passwordText=document.getElementById('password-text');

let buttonLogIn=document.getElementById('button-login');



//Validating or disproving of a field
//Setting the background and the corresponding text
const validate_field = function(elementBorder, elementText){
    elementBorder.style.borderBottom="2px solid #008000"
    elementText.innerText=VALIDATION_TEXT;
    elementText.style.color="#008000"
}
const disprove_field = function(elementBorder, elementText, message){
    elementBorder.style.borderBottom="2px solid #ff0000"
    elementText.innerText=message;
    elementText.style.color="#ff0000"
}



//Validate the username format
const checkUsername = function(){
    disprove_field(usernameInput,usernameText,USERNAME_WRONG);
    return false;
}

//Validate the password format
const checkPassword = function(){
    disprove_field(passwordInput,passwordText,PASSWORD_WRONG);
    return false;
}

//Validate all the input
const checkAllInput = function(){
    checkUsername();
    checkPassword();
    return false;
}



//The parte dedicated to the event listeners
buttonLogIn.addEventListener("click",function(event){
    event.preventDefault();
    checkAllInput();
})