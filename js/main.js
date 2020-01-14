// import Swup from 'swup';



// const swup = new Swup();

let createBtn  = document.getElementById("btn");

 function clicked(){
 	// console.log("done");
 	let input = ((document.getElementById("inputVal")||{}).value)||"";
	let listIt = document.createElement("li");
	let tdText = document.createTextNode(input);
	listIt.appendChild(tdText);
	if(input === ""){
		alert("Please type something")
	}
	else{
		document.createElement("p").value="\u9742";
		console.log(document.getElementById("uList").appendChild(listIt));
		listIt.style.border = "0.2px solid #0A0503";
	}
	// input.value = "";
}