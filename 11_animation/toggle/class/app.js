console.log("app.js is imported")
function hideContent(){
	console.log("The button was clicked")
	const contents = 
		document.getElementsByClassName("content");
	
	/* 
	contents[0]
	 we access the first element of the contents
	 because contents variable contains two contents.
	classLists
	 we want to access/contorl its class
	toggle
	 we want to add "hide" class name if no "hide" class.
	 to remove "hide" class name if "hide" class
	*/
	contents[0].classList.toggle("hide");
	//console.log(contents[0]);
}