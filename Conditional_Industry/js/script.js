/*
 Vince Arick
 WPF 1410 Section 01
 Conditional Industry
 10-16-2014
 */

//Should you make a responsive website, or fixed

//Ask responsive design question
alert ("Let's check to see if you should make a responsive, or fixed design website.");
//prompt how many devices
var mobile = prompt ("How many mobile devices do you have?");
//Print answer
console.log (mobile)
//if they have 1 prompt
if (mobile == 1) {
    alert("You may want to think about making Responsive design website");
//validate
}else if (mobile === "") {
    mobile = prompt("Please enter amount don't leave it blank");
//if you have more than 1
}else if (mobile >= 2){
    alert("You should make a responsive design website.");
//if you have 0
}else{
    alert("You probably have one you just don't know it.");
}


