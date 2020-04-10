let createBtn  = document.getElementById("btn");
let navigate = document.getElementById("nav");
let message  = document.getElementById("welcome");
let date = new Date();


navigate.onclick = (e) => {
	let user_name = ( ( document.getElementById("userName") || {} ).value) || "";
	if(user_name == ""){
		alert("You must enter your name");
	}
	else{
		console.log(user_name);
		message.createTextNode("Welcome {{user_name}}");
		
	}
	
createBtn.onclick = (e) => {
 	let input = ( (document.getElementById("inputVal") || {} ).value) || "";
	let todos = document.createElement("li");
	let parag = document.createElement("p").value="\u9742";
	todos.appendChild(document.createTextNode(parag + input + date) );
	if(input != ""){
		document.getElementById("uList").appendChild(todos);
		todos.style.border.bottom = "1px solid #0A0503";
	}
	else{
		alert("You have not inputed any value");
	}
	input.value = "";
	console.log(input);
}


}
