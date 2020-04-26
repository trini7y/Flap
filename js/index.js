let createBtn  = document.getElementById("btn");
let navigate = document.getElementById("nav");
let message  = document.getElementById("welcome");
let date = new Date();
		
	
createBtn.onclick = (e) => {
 	let input = ( (document.getElementById("inputVal") || {} ).value) || "";
	let todos = document.createElement("li");
	let todoDate = document.createElement("p").value = date;
	let parag = document.createElement("p").value="";
	todos.setAttribute("class", "lists");
	//todoDate.setAttribute();
	todos.appendChild(document.createTextNode(parag + input +"<br>"+ todoDate ) );
	if(input != ""){
		document.getElementById("uList").appendChild(todos);
		input = "";
	}
	else{
		alert("You have not inputed any value");
	}
	console.log(input);
}
