/*
 Vince Arick
 WPF 1410 Section 01
 Functions Industry
 10-23-2014
 */

//What size is the canvas in pixels?
var size = prompt("What is the size of your canvas in pixels?");
//How many images to put in your image?
var images = prompt("How many images do you want to use?");
//How much padding would you like between image?
var padding = prompt("How much padding in pixels?")
//Size of your canvas divided by how many images?
var totalImages = (size / images);
//How many spaces will there be between images
var spaces = (images - 1);
//Multiply how many spaces to padding
var totalPadding = (spaces * padding);
//Alert total pixel width of images should be
alert ("Images should be " + (totalImages - totalPadding) + " pixels wide." );