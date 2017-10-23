// Prompt checking user's age
var userAge;
var response;

userAge = parseInt(prompt("How old are you?"), 10);
if (isNaN(userAge)) { 
    response = 'Just numbers, plz. BTW,'; 
    } else if (userAge < 18) {
        response = 'Dream on, youngin.';
    } else if (userAge > 100) {
        response = 'Are you a ghost?! <br/> JK,';
    } else if (userAge === 29) {
        response = 'DUDE! <br/> WE ARE THE SAME AGE! Anyways,';
    } else {
        response = 'Right on! What a great age to be.<br/>';
    }

document.write('<h1>' + response + " I'm Rob. Pleased to meet you!" + '</h1>');

// JavaScript Document