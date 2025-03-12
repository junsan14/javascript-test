
//if

let nationality = "Japanese";

if(nationality === "Japanese"){
	console.log("Ohayo");
}else if(nationality === "Chinese"){
	console.log("Nihao")
}else{
	console.log("Mwaramutse");
}

/*

1.Declear a variable number that has 10.
2.Use an if-else statement:
If the number is divisible by 2, display "Even."  3/2=1…5 (1) 
⇒use % to calcurate remainders(mod).(divisible means remainder = 0)
Else, display "Odd."

*/
let number = 10;
if(number % 2 === 0){
	console.log("Even");
	//0,2,4,6,8,10....
}else if(number % 2 === 1){
	console.log("Odd");
}else{
	console.log("none");
	//1,3,5,7,9
}



/*

1. Declear a variable color that has "red".
2. Use if-else conditions:
If the color is "red," print "Stop."
If the color is "yellow," print "Better to wait."
Else, Print "Go."

*/
let color = "purple";

if(color == "red"){
	console.log("Stop");
}else if(color == "yellow"){
	console.log("Better to wait");
}else if(color == "blue"){
	console.log("Go");
}else{
	console.log("Type either yellow, blue or green");
}

let is_come = true;
if(is_come == true){
	console.log("I will treat you");
}else{
	console.log("next time");
}


// score 35
let score = 35;
if(score < 30){
	console.log("study harder");
}else if(score < 50 ){
	console.log("keep studying");
}else if(score < 70){
	console.log("great");
}

//is color red? yes, no 

//if color is red, say stop











//tenatary
/*
let number = 10;
let is_odd = number % 2 === 0? true:false ;
*/


/*
1.Declear a variable number that has 4.
2. Use if, else if, and else:
If the number is greater than 0, display "Positive."
If the number is less than 0, display "Negative."
Else, display "Zero."

*/

let number2 = 4;
if(number2 > 0){
	console.log("Positive")
}else if(number2 < 0){
	console.log("Negative")
}else if(number2 === 0){
	console.log("Zero");
}



/*
1.Declear a variable number_tenatary that has 10.
2.Use a tenatary operator:
If the number is divisible by 2, print "Even." use
⇒use % to calucurate remainders.(divisible means remainder = 0)
Else, print "Odd."

*/
let number_tenatary = 10;
let is_even = number_tenatary % 2 === 0 ? true : false;
console.log(is_even);


/*
1.Declear a variable number that has 4.
2. Use a tenatary operator:
If the number is greater than 0, print "Positive."
If the number is less than 0, print "Negative."
*/

let number_tenatary02 = 4;
let is_postive = number_tenatary02 > 0 ? true: false;
console.log(is_postive);

/*
REMEMBER THESE
&& ||  > < == ===

*/