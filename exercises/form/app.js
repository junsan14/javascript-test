
function checkValue(e){
	e = e || window.event;
    e.preventDefault();
	const name = document.getElementById("name").value;
	const email = document.getElementById("email").value;
	const password = document.getElementById("password").value;
	const confirm_password = document.getElementById("confirm-password").value;
	let error_flag = false;

	if(!name){
		document.getElementById("error_name").innerHTML = "Name is required";
		error_flag = true;
	}else{
		document.getElementById("error_name").innerHTML = "";
		error_flag = false;
	}

	if(!email){
		document.getElementById("error_email").innerHTML = "Email is required";
		error_flag = true;
	}else{
		document.getElementById("error_email").innerHTML = "";
		error_flag = false;
	}

	
	if(!password){
		document.getElementById("error_password").innerHTML = "Password is required";
		error_flag = true;
	}else{
		document.getElementById("error_password").innerHTML = "";
		error_flag = false;
	}
	
	if(!confirm_password){
		document.getElementById("error_confirm_password").innerHTML = "Confirm-Password is required";
		error_flag = true;
	}else{
		document.getElementById("error_confirm_password").innerHTML = "";
		error_flag = false;
	}
	
	if(password !== confirm_password){
		document.getElementById("error_password").innerHTML = "Password does not match confirm-password";
		error_flag = true;
	}else{
		document.getElementById("error_password").innerHTML = "";
		error_flag = false;
	}

	if(!error_flag){
		document.getElementById("sccess").innerHTML ="Thank you for registration";
	}else{
		document.getElementById("sccess").innerHTML ="";
	}
}