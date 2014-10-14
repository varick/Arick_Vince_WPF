/*
 Vince Arick
 WPF 1410 Section 01
else if
 10-13-2014
 */

var kidHeight = 47;
var minHeight = 48;
var parentHeight = 45; // the height with parent

//if the child is old enough, print to the console "you can ride!"
//if the kid is over 48 inches in height
if(kidHeight > minHeight){
    //you can ride!
    console.log("You can ride the coaster!")
}else if(kidHeight > parentHeight ){
    //you can ride with a parent present
    console.log("You can ride, but only with a parent present.")
}else{
    //sorry you have growing to do
    console.log("Sorry kid you've got some growing up to do.")
}