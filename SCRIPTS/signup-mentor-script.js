//The part dedicated to the delcarations and initialisations
const VALIDATION_TEXT="✔️Looks good!";
const REQUIRE_FIELD="❌Please fill in this field!";
const APLHABET_ONLY="❌Must contain only the alphabet!";
const CAPITAL_LETTER="❌Must start with a capital letter!";
const LOWERCASE_LETTER="❌Must start with a lowercase letter!";
const SINGLE_WORD="❌Cannot contain spaces!";
const CHECKBOX_WRONG="❌You must agree with the terms and service!";

let mentoringFieldInput=document.getElementById('mentoringfield-input');
let mentoringFieldText=document.getElementById('mentoringfield-text');

let companyInput=document.getElementById('company-input');
let companyText=document.getElementById('company-text');

let skill1Input=document.getElementById('skill1-input');
let skill1Text=document.getElementById('skill1-text');

let skill2Input=document.getElementById('skill2-input');
let skill2Text=document.getElementById('skill2-text');

let skill3Input=document.getElementById('skill3-input');
let skill3Text=document.getElementById('skill3-text');

let documentsInput=document.getElementById('documents-input');
let documentsText=document.getElementById('documents-text');

let pictureInput=document.getElementById('picture-input');
let pictureText=document.getElementById('picture-text');

let checkboxBorder=document.getElementsByClassName('checkbox-section')[0];
let checkboxInput=document.getElementById('checkbox-input');
let checkboxText=document.getElementById('checkbox-text');

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



//Validate the mentoring field format
const checkMentoringField = function(){
    let value=mentoringFieldInput.value;
    if(checkEmpty(value)){
        disprove_field(mentoringFieldInput,mentoringFieldText,REQUIRE_FIELD);
        return false;
    }
    if(!checkAlphabetOnly(value)){
        disprove_field(mentoringFieldInput,mentoringFieldText,APLHABET_ONLY);
        return false;
    }
    validate_field(mentoringFieldInput,mentoringFieldText);
    return true;
}

//Validate the company format
const checkCompany = function(){
    let value=companyInput.value;
    if(checkEmpty(value)){
        validate_field(companyInput,companyText);
        return true;
    }
    if(!checkCapitalLetter(value)){
        disprove_field(companyInput,companyText,CAPITAL_LETTER);
        return false;
    }
    if(!checkAlphabetOnly(value)){
        disprove_field(companyInput,companyText,APLHABET_ONLY);
        return false;
    }
    validate_field(companyInput,companyText);
    return true;
}

//Validate the first skill format
const checkSkill1 = function(){
    value=skill1Input.value;
    if(checkEmpty(value)){
        disprove_field(skill1Input,skill1Text,REQUIRE_FIELD);
        return false;
    }
    if(checkCapitalLetter(value)){
        disprove_field(skill1Input,skill1Text,LOWERCASE_LETTER);
        return false;
    }
    if(!checkAlphabetOnly(value)){
        disprove_field(skill1Input,skill1Text,APLHABET_ONLY);
        return false;
    }
    validate_field(skill1Input,skill1Text);
    return true;
}

//Validate the second skill format
const checkSkill2 = function(){
    value=skill2Input.value;
    if(checkEmpty(value)){
        validate_field(skill2Input,skill2Text);
        return true;
    }
    if(checkCapitalLetter(value)){
        disprove_field(skill2Input,skill2Text,LOWERCASE_LETTER);
        return false;
    }
    if(!checkAlphabetOnly(value)){
        disprove_field(skill2Input,skill2Text,APLHABET_ONLY);
        return false;
    }
    validate_field(skill2Input,skill2Text);
    return true;
}

//Validate the third skill format
const checkSkill3 = function(){
    value=skill3Input.value;
    if(checkEmpty(value)){
        validate_field(skill3Input,skill3Text);
        return true;
    }
    if(checkCapitalLetter(value)){
        disprove_field(skill3Input,skill3Text,LOWERCASE_LETTER);
        return false;
    }
    if(!checkAlphabetOnly(value)){
        disprove_field(skill3Input,skill3Text,APLHABET_ONLY);
        return false;
    }
    validate_field(skill3Input,skill3Text);
    return true;
}

//Validate the birthdate format
const checkDocuments = function(){
    value=documentsInput.value;
    if(checkEmpty(value)){
        disprove_field(documentsInput,documentsText,REQUIRE_FIELD);
        return false;
    }
    validate_field(documentsInput,documentsText);
    return true;
}

//Validate the picture format
const checkPicture = function(){
    value=pictureInput.value;
    if(checkEmpty(value)){
        disprove_field(pictureInput,pictureText,REQUIRE_FIELD);
        return false;
    }
    validate_field(pictureInput,pictureText);
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
    if(!checkMentoringField()){
        window.location="#mentoringfield-input";
        return false;
    }
    if(!checkCompany()){
        window.location="#company-input";
        return false;
    }
    if(!checkSkill1()){
        window.location="#skill1-input";
        return false;
    }
    if(!checkSkill2()){
        window.location="#skill2-input";
        return false;
    }
    if(!checkSkill3()){
        window.location="#skill3-input";
        return false;
    }
    if(!checkDocuments()){
        window.location="#documents-input";
        return false;
    }
    if(!checkPicture()){
        window.location="#picture-input";
        return false;
    }
    if(!checkCheckbox()){
        window.location="#checkbox-input";
        return false;
    }
    return true;
}



// The parte dedicated to the event listeners
mentoringFieldInput.addEventListener("focusout",checkMentoringField);
companyInput.addEventListener("focusout",checkCompany);
skill1Input.addEventListener("focusout",checkSkill1);
skill2Input.addEventListener("focusout",checkSkill2);
skill3Input.addEventListener("focusout",checkSkill3);
documentsInput.addEventListener("change",checkDocuments);
pictureInput.addEventListener("change",checkPicture);