/*
 Vince Arick
 WPF 1410 Section 01
 Conditional Wacky
 10-16-2014
 */



//Waiting in line at grocery store

/*var cashier = 2
var selfCheck = 1
 */


//Which would be quicker to leave the store self check out or cashier
//How many items do I have
var items = prompt ("How many items do you have?")
console.log items
var cashier = prompt ("How many cashiers are there?")
console.log cashier
if (items >= 10 && cashier <= 4){
    alert ("It might be quicker to go self check out.")
}else{
    ("Wait in line shouldn't take to long.")
}
