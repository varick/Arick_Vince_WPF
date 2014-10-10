/*
 Vince Arick
 WPF 1410 Section 01
 Expressions_Wacky
 10-09-2014
 */
//Welcome
alert ("Happy Halloween how much candy should you get for your Trick or Treaters?")

var lastYearChildren = prompt ("How many Trick or Treaters came last year?");
console.log (lastYearChildren);

var grownup = prompt ("How many were to old Trick or Treating, and won't come this year?");
console.log (grownup);

var candy = prompt ("What was the average amount of candy a Trick or Treater took?");
console.log (candy)

var totalCandy = (lastYearChildren - grownup * candy);

alert ("You should get " +totalCandy+ "pieces of candy this year.");

