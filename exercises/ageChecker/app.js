function ageChecker(){
	//to Get value from html 
	const age = document.getElementById("age").value;
	if(age > 18){
		document.getElementById("check-age").innerHTML = "adult"
	}else{
		document.getElementById("check-age").innerHTML = "child"
	}
}