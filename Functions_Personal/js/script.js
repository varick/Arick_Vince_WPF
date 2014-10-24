/*
 Vince Arick
 WPF 1410 Section 01
 Functions Personal
 10-23-2014
 */


var myChildren = 250

var budget = prompt("How much would you like to spend for Christmas?");

alert ("We already set aside $250 for the kids");

var family = prompt("How many family and friends would you like to give presents?");

var equalAmount = alert ("Equal amount of money per person is " + (budget - myChildren) / (family) + " dollars.");
//if you want to give some bigger presents

var bonus = prompt ("Do you expect a bonus, if so how much?");

if (bonus >= myChildren){
    alert ("Everyone is going to get a little extra this month.");
}else{
    alert ("Scrooge screwed us nothing special this year.");
}