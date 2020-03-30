let createBtn  = document.getElementById("btn");
let date = new Date();

createBtn.onclick = function(e){
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