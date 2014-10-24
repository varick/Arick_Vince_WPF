/*
 Vince Arick
 WPF 1410 Section 01
 Functions Personal
 10-23-2014
 */


//We want to fit x amount of images with y images on a 960 width
alert ("What size images do you need to evenly fit 960 width?");

var images = prompt ("How many images do you want to fit into your call to action?");

var padding = prompt ("What size padding would you like in between images?");

var width = prompt ("What's the width of the call to action banner?");

var subImages = (width / images);

console.log subImages