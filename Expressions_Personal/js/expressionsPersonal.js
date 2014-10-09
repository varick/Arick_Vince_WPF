/*
Vince Arick
WPF 1410 Section 01
Expressions_Personal
10-09-2014
 */

alert ("Welcome, Let's find out how many cups of coffee you will drink in a year?");

var coffeeDaily = prompt ("How many cups do you drink daily?");

var total = coffeeDaily * 365;

var cupsYear = alert ("You will drink " +total+ " cups of coffee in a year!");

var years = prompt ("How many years have you been drinking coffee?");

var totalLife = (years * total);

alert ("You have drank "+totalLife+" in your life so far.");

console.log (totalLife);