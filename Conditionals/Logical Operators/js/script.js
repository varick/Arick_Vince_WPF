/*
 Vince Arick
 WPF 1410 Section 01
 Logical Operators
 10-13-2014
 */

var budget = 300;
var iPhonePrice = 199.99;
var paycheck = 200;

//if the price of the is less our budget AND if our paycheck is over 300
//if the price of the phone is less our budget
if(iPhonePrice < budget){
    console.log("We can buy the phone!");
}else{
    console.log("No phone for you!!");
}
if(paycheck > 300){
    console.log("We can buy the phone!");
}else{
    console.log("No phone for you!!")
}