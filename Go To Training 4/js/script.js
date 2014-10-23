/*
 Vince Arick
 WPF 1410 Section 01
 Go to Training 4
 10-23-2014
 Functions and Loops!
 */


var min = prompt ("please tyoe in a min number");

while(min===""){

    min = prompt("please enter a number!");

}
//Not a NUmber NaN. checks to see if the value is a number
while(isNaN(min)){

    min = prompt("please enter a number!!");
}