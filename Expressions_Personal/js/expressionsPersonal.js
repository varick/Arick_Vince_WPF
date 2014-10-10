/*
Vince Arick
WPF 1410 Section 01
Expressions_Personal
10-09-2014
 */
//Welcome Box
alert ("Welcome, Let's find out how many cups of coffee you will drink in a year?");

//Ask how much coffee the person drinks daily
var coffeeDaily = prompt ("How many cups do you drink daily?");

//Multiply 365 times their daily intake
var total = coffeeDaily * 365;
console.log (total);

//Alert cups of coffee drink in a year
var cupsYear = alert ("You will drink " +total+ " cups of coffee in a year!");

//Ask how many years they have been drinking coffee
var years = prompt ("How many years have you been drinking coffee?");
console.log (years);

//Multiply the years they've been drinking coffee times their yearly total
var totalLife = (years * total);

//Final answer how many cups they have drank in their life
alert ("You have drank " +totalLife+ " cups of coffee in your life so far!");
console.log (totalLife);