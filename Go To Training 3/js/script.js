/*
 Vince Arick
 WPF 1410 Section 01
 Go to Training 3
 10-14-2014
 */

//array
var fruitBowl  = ["peach", "pear", "apple", "banana"];

console.log(fruitBowl)

fruitBowl[0] = "pear"

console.log(fruitBowl)

console.log(fruitBowl.length);

//conditionals
//check item 1 in array
var numPears = 0;

if(fruitBowl[0] === "pear"){
    numPears ++;
}else{
    console.log("This is not a fruit")
}
console.log(numPears)

//check item 2 in array
if(fruitBowl[1] === "pear"){
    numPears ++;
}else{
    console.log("This is not a fruit")
}
console.log(numPears)

//check item 3 in array
if(fruitBowl[2] === "pear") {
    numPears++;
}else{
    console.log("This is not a fruit")
}

//check item 4 in array
if(fruitBowl[3] === "pear"){
    numPears ++;
}else if (fruitBowl[3] === "pear"){
    console.log("This is not a fruit")
}else{
    console.log("This is not a fruit")
}

var name = prompt ("What is your name?");
console.log(name);

//validate the prompt to see if it is empty

if (name === ""){
    name = prompt("Please enter your name don't leave it blank")
}
console.log("Hello " + name + " you have " + numPears + " pears in your fruit bowl.");

alert ("Hello " + name + " you have " + numPears + " pears in your fruit bowl.");