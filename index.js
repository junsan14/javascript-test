
/*20.	Write a function named greet 
that takes a name as an argument and 
returns "Hello, [name]". (10 marks)
Expected output
console.log(greet("Alice")); // "Hello, Alice!"
console.log(greet("Bob")); // "Hello, Bob!"	
*/

function greet(name){
	return `Hello, ${name}`;
	//return "Hello" + name;
}

/*21.	Write JavaScript code 
to select an element with the ID "myButton" 
and change its text to "Clicked!"? (10 marks) 
*/
const myButton = document.getElementById("myButton");
//to change its text
myButton.innerHTML = "Clicked";

/*
22.	Create makeAlert to alert "Button clicked!"  
after clicking a button with the ID "btn" .  (10 marks)
*/

function makeAlert(){
	alert("Button clicked!");
}
const btn = document.getElementById("btn");
btn.addEventListener('click', makeAlert)


/*

23.	You have an array of objects representing students. 
Each student has a name and a score. 
Your task is to use the .map() method to create 
a new array  called newArray 
that contains only the student names in uppercase. (13 marks)
*/

const students = [
 { name: "Alice", score: 85 }, 
 { name: "Bob", score: 72 }, 
 { name: "Charlie", score: 90 } 
];

const newArray = students.map((student)=>{
	return student.name.toUpperCase();
})

const fruits = ["apple", "orange", "grape"];

const newFruits = fruits.map((fruit)=>{
	return fruit.toUpperCase();
})

console.log("aaa");