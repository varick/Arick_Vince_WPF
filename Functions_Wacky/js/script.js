/*
 Vince Arick
 WPF 1410 Section 01
 Functions Wacky
 10-23-2014
 */

//Let's play the lottery
var min = alert ("Lets play the lottery 5 balls and 1 mega 1-54!");

//pick random number to display mega number 1 to 54
var result=randomizer(1,54);

//display mega number
alert ("The mega number is " + result)

//function random arguement
function randomizer(minNumber,maxNumber){

//Math round number multiply max number - min number + min number
    var randomNumber = Math.round(Math.random()*(maxNumber-minNumber)+ Number(minNumber));

//return random number
    return randomNumber;
}
//loop 5 times to get 5 random numbers
for (var i=0; i<5; i++) {

//alert 5 winning number
    alert ("Winning numbers are " + randomizer(1,54));
}
