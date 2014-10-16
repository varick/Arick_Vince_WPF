/*
 Vince Arick
 WPF 1410 Section 01
 Conditional Industry
 10-16-2014
 */

//Ask responsive design question
alert ("Let's check to see if it would be better to create a responsive design website.");
//prompt how many mobile devices they have
var mobile = prompt ("How many mobile devices do you have?")
//validate
if (mobile === ""){
    prompt ("You must enter a number")
}
if (mobile == 1){
    alert ("You may want to think about making a responsive website.")
}else if (mobile >= 2){
    alert("You should have a responsive design website.")
}else{
    alert("You probably have a mobile device, and not know it.")
}



