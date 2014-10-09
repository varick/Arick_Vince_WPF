/*
Vince Arick
WPF 1410 Section 01
Go To Training Week 2
10-08-2014
 */

//alert("Testing 1,2,3,");

//Create a js file that will tell us how old we are

//Ask the user their name
var name = prompt("Please type in your name:");

alert("Welcome "+name+"! Let's go ahead and figure out how old you are.");
//Ask user what year they were born in
//Create a variable to catch their answer

var yearBorn = prompt ("What year were you born?");
console.log (yearBorn);

//Take current year and subtract the year their were born

// Create variable for current year

var currentYear = 2014;

//Calculate the age
var age =currentYear - yearBorn;

//Alert user with their age

alert(name+ " you are "+age+" years old.");

//Let's make this more complex
//How old will the user be in the future

//Ask the user, how many years in the future they would like to know
var yearsMore = prompt ("How many years in the future would you like to know?");
console.log(yearsMore);

//Calculate our future age
var futureAge = age + Number(yearsMore) ;
console.log (futureAge);

//Make results look pretty

console.log("You will be "+futureAge+" in "+ yearsMore + "years.");
alert("You will be "+futureAge+" in "+ yearsMore + "years.");
