/*
 Vince Arick
 WPF 1410 Section 01
 Conditional Personal
 10-15-2014
 */

//Will I have a happy wife on her birthday

var flowers = 20

//Ask if you have enough money for wife's birthday
alert ("Will I be able to get a present for my wife on her birthday?")
//How much money do you have
 var money = prompt ("How much money do you have, in dollars");
//if you have more than 150 you will have a happy wife
if (money >= 150){
    alert("I will have a happy wife");
//validate
}else if (money === ""){
    money = prompt("Please enter amount don't leave it blank");
//If you have more than 20 you can get flowers
}else if ( money >= flowers){
    alert ("I can get flowers at least.");
//If you have less than 20 you better get what she wants for Christmas
}else{
    alert("I better get what she wants for Christmas.");
}   console.log (money);