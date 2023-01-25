//The part dedicated to the declarations and initialisations
let mouseClicksInput=document.getElementById('mouse-clicks');
let totalTimeInput=document.getElementById('total-time');
let keysPressedInput=document.getElementById('keys-pressed');
let charactersTypedInput=document.getElementById('characters-typed');
let trackingSection=document.getElementsByClassName('tracking');
let inputSections=document.getElementsByTagName('input');
let textareaSections=document.getElementsByTagName('textarea');
let selectSections=document.getElementsByTagName('select');
let buttonSections=document.getElementsByTagName('button');

let mouseClicks=0;
let initialTime=Date.now();
let keysPressed=0;
let charactersTyped=0;



//Set the total time to fill in the form
const setTotalTime = function(){
    let finalTime=Date.now();
    let totalTime=finalTime-initialTime;
    let seconds=Math.floor(totalTime/1000);
    let minutes=Math.floor(seconds/60);
    seconds=seconds%60;
    totalTimeInput.innerText=minutes+" minutes and "+seconds+" seconds";
}
//Set the total mouse click on the page to fill in the form
const setMouseClicks = function(event){
    if(event.pointerType==="mouse") //here we'll update the number of clicks if we access the 
        mouseClicks++;              //button via a click (it can be via an enter too)
    mouseClicksInput.innerText=mouseClicks+" mouse clicks"
}
//Set the total keys pressed to fill in the form
const setKeysPressed = function(){
    keysPressedInput.innerText=keysPressed+ " keys"
}
//Set the number of characters typed to fill in the form
const setCharactersTyped = function(){
    charactersTyped=0;
    for(let i=0;i<inputSections.length;i++){
        if(inputSections[i].type!="checkbox" && inputSections[i].type!="file")
            charactersTyped+=inputSections[i].value.length;
    }
    for(let i=0;i<textareaSections.length;i++){
        charactersTyped+=textareaSections[i].value.length;
    }
    charactersTypedInput.innerText=charactersTyped+" characters"
}



//Add event listeners to find the number of mouse clicks
//and the number of keys pressed for the inputs
document.addEventListener("click",function(event){
    let target=event.target;
    if(target.tagName!="BUTTON") //for the buttons we'll update the number of clicks
        mouseClicks++;           //before we display the results in order for it to
})                               //be synchronized
for(let i=0;i<inputSections.length;i++){
    inputSections[i].addEventListener("keydown",function(){ //for the input sections
        keysPressed++;
    })
}
for(let i=0;i<textareaSections.length;i++){
    textareaSections[i].addEventListener("keydown",function(){ //for the textarea sections
        keysPressed++;
    })
}
for(let i=0;i<selectSections.length;i++){
    selectSections[i].addEventListener("keydown",function(){ //for the select sections
        keysPressed++;
    })
}



//Adding functionality to the submit buttons
for(let i=0;i<buttonSections.length;i++){
    buttonSections[i].addEventListener("click",function(event){
        event.preventDefault();
        if(checkAllInput()){
            trackingSection[0].setAttribute("style","display:block;");
            setTotalTime();
            setMouseClicks(event);
            setKeysPressed();
            setCharactersTyped();
            window.location="#results-section";
        }
    })
}