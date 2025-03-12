

function setTime(){
	document.getElementById('demo-function').innerHTML = new Date();
}

function setText(e){
	console.log(222);
}

function showText(){
	const text = document.getElementById("demo-input-text").textContent;
	alert(text);
}

function getText(){
	const input_text = document.getElementById("input-text-practice").value;
	document.getElementById("demo-input-text-practice").innerHTML = input_text;
}