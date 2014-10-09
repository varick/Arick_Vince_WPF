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

alert("Welcome "+name+"! Let's go ahead and figure out how old you are");
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
