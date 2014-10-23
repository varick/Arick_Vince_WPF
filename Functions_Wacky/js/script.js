/*
 Vince Arick
 WPF 1410 Section 01
 Functions Wacky
 10-23-2014
 */


var min = alert ("Lets play the lottery 5 balls and 1 mega 1-54!");

var result=randomizer(1,54);

alert ("The winning numbers are " + result)


function randomizer(minNumber,maxNumber){

    var randomNumber = Math.round(Math.random()*(maxNumber-minNumber)+ Number(minNumber));

    return randomNumber;
}

for (var i=0; i<5; i++) {

    console.log(randomizer(1,54));
}