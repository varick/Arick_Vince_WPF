/*
 Vince Arick
 WPF 1410 Section 01
 Check Login
 10-14-2014
 */

//correct name and password
var correctName = ("Vince")
var correctPassword = ("123456")

//ask what the user name is and if correct ask for password
var correctUser  = prompt ("What is your username?");

//Correct name, ask for password and save password
if (correctName === correctUser){
    var passWord = prompt ("What is your password?");
console.log(passWord)

//Wrong user name leave
}else{
    alert ("Username does not match our records.");
}
console.log(passWord)

//ask for correct password, if don't match leave
if (passWord === correctPassword){
    alert("Welcome " + correctName);
}else{
    alert("Password does not match our records.");
}

