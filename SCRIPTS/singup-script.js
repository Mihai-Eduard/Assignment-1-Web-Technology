//The part dedicated to the delcarations and initialisations
const VALIDATION_TEXT="✔️Looks good!";
const REQUIRE_FIELD="❌Please fill in this field!";
const APLHABET_ONLY="❌Must contain only the alphabet!";
const CAPITAL_LETTER="❌Must start with a capital letter!";
const EMAIL_WRONG="❌That's an invalid format for the email!";
const ZIPCODE_WRONG="❌That's an invalid format for the zipcode!";
const LENGTH_REQUIRED="❌The username must contain between 5 and 12 characters!";
const SINGLE_WORD="❌Cannot contain spaces!";
const ENDING_WRONG="❌Must end in a digit or a special character!";
const CONFIRM_WRONG="❌Not the same with the password!";
const LENGTH_PASSWORD="❌Must be at least 12 characters!";
const PASSWORD_UPPER="❌Must contain at least an uppercase letter!";
const PASSWORD_LOWER="❌Must contain at least a lowercase letter!";
const PASSWORD_DIGIT="❌Must contain at least a digit!";
const PASSWORD_SPECIAL="❌Must contain at least a special character!";
const CHECKBOX_WRONG="❌You must agree with the terms and service!";

let firstNameInput=document.getElementById('firstname-input');
let firstNameText=document.getElementById('firstname-text');

let lastNameInput=document.getElementById('lastname-input');
let lastNameText=document.getElementById('lastname-text');

let emailInput=document.getElementById('email-input');
let emailText=document.getElementById('email-text');

let countryInput=document.getElementById('country-input');
let countryText=document.getElementById('country-text');

let cityInput=document.getElementById('city-input');
let cityText=document.getElementById('city-text');

let zipcodeInput=document.getElementById('zipcode-input');
let zipcodeText=document.getElementById('zipcode-text');

let birthdateBorder=document.getElementById('birthdate');
let birthdateInput=document.getElementById('birthdate-input');
let birthdateText=document.getElementById('birthdate-text');

let languageInput=document.getElementById('language-input');
let languageText=document.getElementById('language-text');

let genderInput=document.getElementById('gender-input');
let genderText=document.getElementById('gender-text');

let descriptionInput=document.getElementById('description-input');
let descriptionText=document.getElementById('description-text');

let usernameInput=document.getElementById('username-input');
let usernameText=document.getElementById('username-text');

let passwordInput=document.getElementById('password-input');
let passwordText=document.getElementById('password-text');

let confirmPasswordInput=document.getElementById('confirmpassword-input');
let confirmPasswordText=document.getElementById('confirmpassword-text');

let checkboxBorder=document.getElementsByClassName('checkbox-section')[0];
let checkboxInput=document.getElementById('checkbox-input');
let checkboxText=document.getElementById('checkbox-text');

let buttonMentee=document.getElementById('button-mentee');
let buttonMentor=document.getElementById('button-mentor');



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



//Auxiliary functions to check for different formats
const checkAlphabetOnly = function(value){
    for(let i=0;i<value.length;i++){
        if(!(value.charAt(i)==' ' || (value.charAt(i)>='a' && value.charAt(i)<='z')
            || (value.charAt(i)>='A' && value.charAt(i)<='Z'))){
            return false;
        }
    }
    return true;
}
const checkCapitalLetter = function(value){
    if(value.charAt(0)>='A' && value.charAt(0)<='Z')
        return true;
    return false;
}
const checkEmpty = function(value){
    if(value.length==0)
        return true;
    return false;
}



//Validate the first name format
const checkFirstName = function(){
    let value=firstNameInput.value;
    if(checkEmpty(value)){
        disprove_field(firstNameInput,firstNameText,REQUIRE_FIELD);
        return false;
    }
    if(!checkCapitalLetter(value)){
        disprove_field(firstNameInput,firstNameText,CAPITAL_LETTER);
        return false;
    }
    if(!checkAlphabetOnly(value)){
        disprove_field(firstNameInput,firstNameText,APLHABET_ONLY);
        return false;
    }
    validate_field(firstNameInput,firstNameText);
    return true;
}

//Validate the last name format
const checkLastName = function(){
    let value=lastNameInput.value;
    if(checkEmpty(value)){
        disprove_field(lastNameInput,lastNameText,REQUIRE_FIELD);
        return false;
    }
    if(!checkCapitalLetter(value)){
        disprove_field(lastNameInput,lastNameText,CAPITAL_LETTER);
        return false;
    }
    if(!checkAlphabetOnly(value)){
        disprove_field(lastNameInput,lastNameText,APLHABET_ONLY);
        return false;
    }
    validate_field(lastNameInput,lastNameText);
    return true;
}

//Validate the email format
const checkEmail = function(){
    let value=emailInput.value;
    if(checkEmpty(value)){
        disprove_field(emailInput,emailText,REQUIRE_FIELD);
        return false;
    }
    let posAt=-1, posDot=-1;
    for(let i=0;i<value.length;i++){
        if(value.charAt(i)=='@'){
            if(posAt!=-1){
                disprove_field(emailInput,emailText,EMAIL_WRONG);
                return false;
            }
            posAt=i;
        }
        else if(value.charAt(i)=='.'){
            if(posDot!=-1){
                disprove_field(emailInput,emailText,EMAIL_WRONG);
                return false;
            }
            posDot=i;
        }
    }
    if(posAt==-1 || posDot==-1){
        disprove_field(emailInput,emailText,EMAIL_WRONG);
        return false;
    }
    if(posDot<posAt || posAt==posDot+1 || posAt==posDot-1
        ||posAt==0 || posAt==value.length-1
        ||posDot==0 || posDot==value.length-1){
        disprove_field(emailInput,emailText,EMAIL_WRONG);
        return false;
    }
    validate_field(emailInput,emailText);
    return true;
}

//Validate the country format
const checkCoutry = function(){
    value=countryInput.value;
    if(checkEmpty(value)){
        disprove_field(countryInput,countryText,REQUIRE_FIELD);
        return false;
    }
    if(!checkCapitalLetter(value)){
        disprove_field(countryInput,countryText,CAPITAL_LETTER);
        return false;
    }
    if(!checkAlphabetOnly(value)){
        disprove_field(countryInput,countryText,APLHABET_ONLY);
        return false;
    }
    validate_field(countryInput,countryText);
    return true;
}

//Validate the city format
const checkCity = function(){
    value=cityInput.value;
    if(checkEmpty(value)){
        validate_field(cityInput,cityText);
        return true;
    }
    if(!checkCapitalLetter(value)){
        disprove_field(cityInput,cityText,CAPITAL_LETTER);
        return false;
    }
    if(!checkAlphabetOnly(value)){
        disprove_field(cityInput,cityText,APLHABET_ONLY);
        return false;
    }
    validate_field(cityInput,cityText);
    return true;
}

//Validate the zipcode format
const checkZipcode = function(){
    value=zipcodeInput.value;
    if(checkEmpty(value)){
        validate_field(zipcodeInput,zipcodeText);
        return true;
    }
    if(value.length!=6){
        disprove_field(zipcodeInput,zipcodeText,ZIPCODE_WRONG);
        return false;
    }
    for(let i=0;i<4;i++){
        if(!(value.charAt(i)>='0' && value.charAt(i)<='9')){
            disprove_field(zipcodeInput,zipcodeText,ZIPCODE_WRONG);
            return false;
        }
    }
    for(let i=4;i<6;i++){
        if(!(value.charAt(i)>='A' && value.charAt(i)<='Z')){
            disprove_field(zipcodeInput,zipcodeText,ZIPCODE_WRONG);
            return false;
        }
    }
    validate_field(zipcodeInput,zipcodeText);
    return true;
}

//Validate the birthdate format
const checkBirthdate = function(){
    value=birthdateInput.value;
    if(checkEmpty(value)){
        disprove_field(birthdateBorder,birthdateText,REQUIRE_FIELD);
        return false;
    }
    validate_field(birthdateBorder,birthdateText);
    return true;
}

//Validate the language format
const checkLanguage = function(){
    value=languageInput.value;
    if(checkEmpty(value)){
        disprove_field(languageInput,languageText,REQUIRE_FIELD);
        return false;
    }
    if(!checkCapitalLetter(value)){
        disprove_field(languageInput,languageText,CAPITAL_LETTER);
        return false;
    }
    if(!checkAlphabetOnly(value)){
        disprove_field(languageInput,languageText,APLHABET_ONLY);
        return false;
    }
    validate_field(languageInput,languageText);
    return true;
}

//Validate the gender format
const checkGender = function(){
    value=genderInput.value;
    if(checkEmpty(value)){
        disprove_field(genderInput,genderText,REQUIRE_FIELD);
        return false;
    }
    validate_field(genderInput,genderText);
    return true;
}

//Validate the description format
const checkDescription = function(){
    descriptionInput.style.border="2px solid #008000";
    descriptionText.innerText=VALIDATION_TEXT;
    descriptionText.style.color="#008000";
    return true;
}

//Validate the username format
const checkUsername = function(){
    let value=usernameInput.value;
    if(checkEmpty(value)){
        disprove_field(usernameInput,usernameText,REQUIRE_FIELD);
        return false;
    }
    if(!(value.length>=5 && value.length<=12)){
        disprove_field(usernameInput,usernameText,LENGTH_REQUIRED);
        return false;
    }
    if(!checkCapitalLetter(value)){
        disprove_field(usernameInput,usernameText,CAPITAL_LETTER);
        return false;
    }
    for(let i=0;i<value.length;i++){
        if(value.charAt(i)==' '){
            disprove_field(usernameInput,usernameText,SINGLE_WORD);
            return false;
        }
    }
    let c=value.charAt(value.length-1);
    if((c>='a' && c<='z') || (c>='A' && c<='Z')){
        disprove_field(usernameInput,usernameText,ENDING_WRONG);
        return false;
    }
    validate_field(usernameInput,usernameText);
    return true;
}

//Validate the password format
const checkPassword = function(){
    let value=passwordInput.value;
    if(checkEmpty(value)){
        disprove_field(passwordInput,passwordText,REQUIRE_FIELD);
        return false;
    }
    if(value.length<12){
        disprove_field(passwordInput,passwordText,LENGTH_PASSWORD);
        return false;
    }
    let posUpper=-1, posLower=-1, posDigit=-1, posSpecial=-1;
    for(let i=0;i<value.length;i++){
        let c=value.charAt(i);
        if(c>='A' && c<='Z')
            posUpper++;
        else if(c>='a' && c<='z')
            posLower++;
        else if(c>='0' && c<='9')
            posDigit++;
        else
            posSpecial++;
    }
    if(posUpper==-1){
        disprove_field(passwordInput,passwordText,PASSWORD_UPPER);
        return false;
    }
    if(posLower==-1){
        disprove_field(passwordInput,passwordText,PASSWORD_LOWER);
        return false;
    }
    if(posDigit==-1){
        disprove_field(passwordInput,passwordText,PASSWORD_DIGIT);
        return false;
    }
    if(posSpecial==-1){
        disprove_field(passwordInput,passwordText,PASSWORD_SPECIAL);
        return false;
    }
    validate_field(passwordInput,passwordText);
    return true;
}

//Validate the confirmation of the password format
const checkConfirmPassword = function(){
    let value1=passwordInput.value;
    let value2=confirmPasswordInput.value;
    if(value1!==value2){
        disprove_field(confirmPasswordInput,confirmPasswordText,CONFIRM_WRONG);
        return false;
    }
    validate_field(confirmPasswordInput,confirmPasswordText);
    return true;
}

//Validate the checkbox format
const checkCheckbox = function(){
    if(checkboxInput.checked==false){
        disprove_field(checkboxBorder,checkboxText,CHECKBOX_WRONG);
        return false;
    }
    validate_field(checkboxBorder,checkboxText);
    return true;
}

//Validate all the input
const checkAllInput = function(){
    if(!checkFirstName()){
        window.location="#firstname-input";
        return false;
    }
    if(!checkLastName()){
        window.location="#lastname-input";
        return false;
    }
    if(!checkEmail()){
        window.location="#email-input";
        return false;
    }
    if(!checkCoutry()){
        window.location="#country-input";
        return false;
    }
    if(!checkCity()){
        window.location="#city-input";
        return false;
    }
    if(!checkZipcode()){
        window.location="#zipcode-input";
        return false;
    }
    if(!checkBirthdate()){
        window.location="#birthdate-input";
        return false;
    }
    if(!checkLanguage()){
        window.location="#language-input";
        return false;
    }
    if(!checkGender()){
        window.location="#gender-input";
        return false;
    }
    if(!checkDescription()){
        window.location="#description-input";
        return false;
    }
    if(!checkUsername()){
        window.location="#username-input";
        return false;
    }
    if(!checkPassword()){
        window.location="#password-input";
        return false;
    }
    if(!checkConfirmPassword()){
        window.location="#confirmpassword-input";
        return false;
    }
    if(!checkCheckbox()){
        window.location="#checkbox-input";
        return false;
    }
    return true;
}



// The parte dedicated to the event listeners
firstNameInput.addEventListener("focusout",checkFirstName);
lastNameInput.addEventListener("focusout",checkLastName);
emailInput.addEventListener("focusout",checkEmail);
countryInput.addEventListener("focusout",checkCoutry);
cityInput.addEventListener("focusout",checkCity);
zipcodeInput.addEventListener("focusout",checkZipcode);
birthdateInput.addEventListener("focusout",checkBirthdate);
languageInput.addEventListener("focusout",checkLanguage);
genderInput.addEventListener("focusout",checkGender);
descriptionInput.addEventListener("focusout",checkDescription);
usernameInput.addEventListener("focusout",checkUsername);
passwordInput.addEventListener("focusout",checkPassword);
confirmPasswordInput.addEventListener("focusout",checkConfirmPassword);