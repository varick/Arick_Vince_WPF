/*
 Vince Arick
 WPF 1410 Section 01
 Variable Scope
 10-20-2014
 */

var width = 5;

function calcArea() {
    var width = 20;
    var height = 30;
    var area = width * height;
    //console.log(area);
}

calcArea();
console.log(width);