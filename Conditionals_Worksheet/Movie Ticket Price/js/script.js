/*
 Vince Arick
 WPF 1410 Section 01
 Movie Ticket Price
 10-14-2014
 */

//Time of Movie
//Age Customer
//Ticket price $12.00 but if 55 and Older, or under 10 price is $7

var childDiscount = (10)
var seniorDiscount = (55)

//Figure age with price
var discount = prompt ("How old are you?");
    if (childDiscount > discount || seniorDiscount < discount){
    alert ("Ticket price $7");
    }else{
    alert ("Ticket price $12.");
    }

//Figure time with price
