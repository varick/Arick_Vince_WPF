/*
 Vince Arick
 WPF 1410 Section 01
 Functions Personal
 10-23-2014
 */

//variable set aside $250 to children
var myChildren = 250
//What is the budget this year
var budget = prompt("How much would you like to spend for Christmas?");
//Alert we already put a side $250
alert ("We already set aside $250 for the kids");
//How many people are you going to give gifts
var family = prompt("How many family and friends would you like to give presents?");
//How much money you will spend per person
var equalAmount = alert ("Equal amount of money per person is " + (budget - myChildren) / (family) + " dollars.");
//if you want to give some bigger presents
var bonus = prompt ("Do you expect a bonus, if so how much?");
//if bonus is lager than $250 everyone gets a little extra, else nothing extra
if (bonus >= myChildren){
    alert ("Everyone is going to get a little extra this month.");
}else{
    alert ("Scrooge screwed us nothing special this year.");
}