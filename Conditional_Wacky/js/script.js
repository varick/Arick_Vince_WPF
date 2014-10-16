/*
 Vince Arick
 WPF 1410 Section 01
 Conditional Wacky
 10-16-2014
 */



//Waiting in line at grocery store


//Which would be quicker to leave the store self check out or cashier
alert ("You are at the grocery store, and you aren't sure to go to self checkout or cashier on how many customers are there?")
//How many items do I have?
var customers = prompt ("How many people waiting before you in self checkout?")
    console.log (customers);
//How many cashiers are there?
var cashier = prompt ("How many cashiers are there?")
    console.log (cashier);
//If you have less than 10 items and there greater or equal to 1 cashier quicker to go self check out
//If you have more than 10 items and less or equal to 1
if (customers <= 5 && cashier >=2){
    alert ("Wait in line for a cashier should be faster.")
}else{
    alert ("Go self checkout.")
}
