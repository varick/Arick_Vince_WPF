/*
 Vince Arick
 WPF 1410 Section 01
 Last Chance for Gas!
 10-14-2014
 */

//Gas efficiency of the car(mpg)
//Gauge reading of the gas tank (in%)
//Car's gas tank capacity (in gallons)
var gasEfficiency = 20
var gaugeReading = 30
var gasTank = 23

//full tank can go 460 miles

if (gaugeReading >= 40 && gasEfficiency >= 20 && gasTank >= 23){
    console.log("Yes, you can make it without stopping for gas!")
}else{
    console.log("You only have X gallons of gas in your tank, better get gas now while you can!")
}


//Print "Yes, you can make it without stopping for gas!" or "You only have X gallons of gas in your tank, better get gas now