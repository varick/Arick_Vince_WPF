/*
Vince Arick
WPF 1410 Section 01
Expressions_Industry
10-09-2014
 */
//Question
alert ("How many feet is the computer in the back corner of the room to center stage in a straight line?");

//How long is the room in feet
var length = prompt ("How many feet is length of the room?");
console.log (length)

//Find the square root of length
var sqLength = (length * length)
console.log (sqLength)

//What's the width of the corner to center stage
var width = prompt ("How many feet from the corner to center stage?");
console.log (width);

//Find the square root of width
var sqWidth = (width * width);
console.log (sqWidth);

var total = (sqLength+sqWidth);
console.log (total);

var totalSqrt = Math.sqrt(total);

alert ("A straight line from computer to center stage is " +totalSqrt+ " feet");